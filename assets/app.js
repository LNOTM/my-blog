(() => {
  const storageKey = "pixel_blog_theme";
  const validThemes = new Set(["dusk", "sunny"]);
  const themeButtons = [...document.querySelectorAll("[data-theme-toggle]")];

  const getStoredTheme = () => {
    try {
      const saved = window.localStorage.getItem(storageKey);
      return validThemes.has(saved) ? saved : null;
    } catch {
      return null;
    }
  };

  const syncThemeButton = (theme) => {
    themeButtons.forEach((button) => {
      const label = button.querySelector("[data-theme-toggle-label]");
      const isSunny = theme === "sunny";
      button.setAttribute("aria-pressed", isSunny ? "true" : "false");
      button.setAttribute("title", isSunny ? "切换回暮色风格" : "切换到晴天风格");
      if (label) {
        label.textContent = isSunny ? "切换暮色" : "切换晴天";
      }
    });
  };

  const applyTheme = (theme, shouldPersist = true) => {
    const nextTheme = validThemes.has(theme) ? theme : "dusk";
    document.body.dataset.theme = nextTheme;
    syncThemeButton(nextTheme);
    if (shouldPersist) {
      try {
        window.localStorage.setItem(storageKey, nextTheme);
      } catch {
        // Ignore storage errors in local previews.
      }
    }
    return nextTheme;
  };

  let activeTheme = applyTheme(getStoredTheme() || document.body.dataset.theme || "dusk", false);

  themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeTheme = applyTheme(activeTheme === "sunny" ? "dusk" : "sunny");
    });
  });

  const yearNodes = document.querySelectorAll("[data-current-year]");
  const now = new Date();

  yearNodes.forEach((node) => {
    node.textContent = String(now.getFullYear());
  });

  const getSeasonName = (date) => {
    const month = date.getMonth() + 1;
    if (month >= 3 && month <= 5) return "Spring";
    if (month >= 6 && month <= 8) return "Summer";
    if (month >= 9 && month <= 11) return "Autumn";
    return "Winter";
  };

  const getSceneName = (date) => {
    const hour = date.getHours();
    if (hour >= 5 && hour < 8) return "Dawn";
    if (hour >= 8 && hour < 12) return "Morning";
    if (hour >= 12 && hour < 17) return "Day";
    if (hour >= 17 && hour < 19) return "Dusk";
    if (hour >= 19 && hour < 22) return "Evening";
    return "Night";
  };

  const syncSceneMeta = () => {
    const current = new Date();
    const timeText = new Intl.DateTimeFormat("zh-CN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(current);

    document.querySelectorAll("[data-now-time]").forEach((node) => {
      node.textContent = timeText;
    });

    document.querySelectorAll("[data-season-name]").forEach((node) => {
      node.textContent = getSeasonName(current);
    });

    document.querySelectorAll("[data-scene-name]").forEach((node) => {
      node.textContent = getSceneName(current);
    });
  };

  syncSceneMeta();
  window.setInterval(syncSceneMeta, 60000);

  const article = document.querySelector("[data-article-page]");
  const progressBar = document.querySelector("[data-reading-progress]");
  const tocLinks = [...document.querySelectorAll("[data-toc-link]")];

  if (!article || !progressBar || tocLinks.length === 0) {
    return;
  }

  const headings = tocLinks
    .map((link) => {
      const href = link.getAttribute("href");
      if (!href) return null;
      const heading = document.querySelector(href);
      return heading ? { heading, link } : null;
    })
    .filter(Boolean);

  const updateProgress = () => {
    const articleRect = article.getBoundingClientRect();
    const scrollTop = window.scrollY || window.pageYOffset;
    const articleTop = scrollTop + articleRect.top;
    const usable = Math.max(article.offsetHeight - window.innerHeight * 0.6, 1);
    const progress = Math.min(Math.max((scrollTop - articleTop) / usable, 0), 1);
    progressBar.style.width = `${Math.round(progress * 100)}%`;

    let currentIndex = 0;
    headings.forEach((item, index) => {
      if (item.heading.getBoundingClientRect().top <= window.innerHeight * 0.3) {
        currentIndex = index;
      }
    });

    headings.forEach((item, index) => {
      item.link.classList.toggle("active", index === currentIndex);
    });
  };

  updateProgress();
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
})();