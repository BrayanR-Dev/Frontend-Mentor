const drawerRoot = document.querySelector('[data-drawer="menu"]');
let lastFocused = null;

function setDrawerState(isOpen) {
  const root = drawerRoot;
  const backdrop = root?.querySelector("[data-drawer-backdrop]");

  if (!root) return;

  root.classList.toggle("drawer-open", isOpen);
  root.setAttribute("aria-hidden", String(!isOpen));

  if (backdrop) {
    backdrop.classList.toggle("bg-black/30", isOpen);
    backdrop.classList.toggle("bg-black/0", !isOpen);
  }

  if (isOpen) {
    lastFocused = document.activeElement;
    const closeBtn = root.querySelector("[data-close]");
    if (closeBtn) closeBtn.focus();
  } else if (lastFocused) {
    lastFocused.focus();
  }
}

function openDrawer(name) {
  const root = document.querySelector(`[data-drawer="${name}"]`);
  if (!root) return;
  setDrawerState(true);
}

function closeDrawer() {
  setDrawerState(false);
}

document.querySelectorAll("[data-open]").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    openDrawer(btn.dataset.open);
  });
});

document.querySelectorAll("[data-close]").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    closeDrawer();
  });
});

document.querySelectorAll("[data-drawer-backdrop]").forEach((backdrop) => {
  backdrop.addEventListener("click", () => closeDrawer());
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && drawerRoot?.classList.contains("drawer-open")) closeDrawer();
});
