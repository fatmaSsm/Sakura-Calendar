(() => {
  "use strict";

  const STORAGE_KEY = "sakuraCalendar.public.v1";
  const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const WEEKDAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const COLORS = ["#f39ac1", "#c39af5", "#71b9e8", "#e8aa69", "#8ac8ac"];
  const STICKERS = ["🌸","✨","🐶","🍒","🍉","🌿","🌱","🌼","🌷","🌻","☀️","🌙","⭐","☁️","☔","🌈","🚲","🧳","🏖️","👒","📷","☕","🧋","💻","⌨️","📚","📝","🎧","🚌","✈️","🚂","🎟️","💌","🎮","🧸","🪴","🫧","🎂","🧁","🛒","🧺","💡","🪶","🧪","🎬","🍿","🍕","🩷"];
  const QUOTES = [
    "A quiet day can still move your life forward.",
    "Study with focus, rest without guilt.",
    "Leave a little room for sunlight between the tasks.",
    "Small routines can carry very big dreams.",
    "You do not need a perfect mood to begin.",
    "Slow is still a direction when you keep moving.",
    "Make the plan clear, then treat yourself gently while following it.",
    "Your future is built in ordinary hours like this one.",
    "Take care of the person doing all this work.",
    "One useful thing, one deep breath, then the next thing.",
    "Let the calendar remember the plan so your mind can breathe.",
    "A soft life can still be an ambitious life.",
    "Finish what matters; release what does not.",
    "Today is a place to live, not only a bridge to tomorrow.",
    "Make tomorrow easier with one small action today.",
    "You can begin again in the middle of the day.",
    "Protect your attention like a garden.",
    "The best routine feels like support, not punishment.",
    "Notice one beautiful thing before the day ends.",
    "A five-minute start is still a start.",
    "Do not forget to live while you are preparing to live.",
    "A rested mind learns better than a frightened one.",
    "Your plan is a map, not a verdict.",
    "Quiet consistency is still a powerful story.",
    "You are allowed to enjoy the day while working for tomorrow.",
    "Make something, learn something, enjoy something.",
    "One focused hour can change the shape of a day.",
    "Breathe before you hurry.",
    "There is time for code, coffee, friends and sleep.",
    "The season will change. Keep tending what matters.",
    "Small progress is still progress when nobody sees it.",
    "The day does not have to be dramatic to be meaningful.",
    "Do your work, then look out the window for a minute.",
    "You can be serious about your goals without being harsh with yourself.",
    "A peaceful pace can still take you far.",
    "Start small enough that starting feels easy.",
    "Your life is happening between the deadlines too.",
    "Some days are for blooming; some are for growing roots.",
    "Let your goals guide you, not chase you.",
    "Future you will appreciate the little things you organize today.",
    "Done calmly is still done.",
    "Keep one promise to yourself today.",
    "A short walk can untangle a long thought.",
    "Be curious about what this day can become.",
    "Make room for ambition and summer air.",
    "If the day feels crowded, return to one task.",
    "Every season has its own pace.",
    "Try again with less pressure.",
    "Your energy is a resource; spend it on purpose.",
    "Keep your standards high and your self-talk gentle.",
    "The present moment is not an obstacle to your future.",
    "Celebrate boring progress. It is usually the real kind.",
    "A good calendar should serve your life, not rule it.",
    "Put the task down for a minute and unclench your jaw.",
    "Today can be ordinary and still be worth remembering.",
    "Give your brain a clear next step.",
    "Do not underestimate what steady days can create.",
    "A calm mind can still build an ambitious life.",
    "Rest is part of the plan, not a reward for finishing everything.",
    "The next small step is enough for now.",
    "Work, pause, notice the sky, continue.",
    "Keep a little softness around your ambition.",
    "The sun will set whether the day was perfect or not.",
    "Let small joys keep you company while you build big things.",
    "You are allowed to change the plan and keep the goal.",
    "It is okay to make progress in pencil.",
    "Treat your attention like sunlight: place it where you want growth.",
    "Your best does not have to look identical every day.",
    "The day is yours even when it does not go as expected.",
    "Build slowly enough to notice what you are building.",
    "When in doubt, choose the next clear thing.",
    "Not every day needs a breakthrough. Some days only need care.",
    "A calm start is not wasted time.",
    "The best plan still leaves space for weather.",
    "Take the photo. Eat the fruit. Finish the task. Call your person.",
    "Keep going, but keep yourself with you.",
    "There is something worth noticing in every season.",
    "Choose consistency over pressure.",
    "Your work matters, and so does your quiet.",
    "Learning is allowed to feel slow.",
    "You can be tired and still be proud of what you did.",
    "A clean page is possibility, not pressure.",
    "Look up from the screen sometimes.",
    "You have survived every unfinished to-do list so far.",
    "A little organization can make a lot of room to breathe.",
    "You are allowed to have a favorite pen and make planning fun.",
    "Leave perfection for museums. Make something useful.",
    "Your routine should feel like a handrail, not a cage.",
    "Start where your feet are and use what you have.",
    "The quiet habits are often the ones that change everything.",
    "Make the next hour kind to your future self.",
    "Peace is productive when it helps you return to yourself.",
    "You do not have to carry tomorrow before it arrives.",
    "Notice how many things you once wished for are ordinary now.",
    "Let today be gentle and useful.",
    "There is no rush in becoming who you are becoming.",
    "A good life is made from many small, cared-for moments.",
    "Begin before the motivation arrives.",
    "Today has enough room for one meaningful thing.",
    "A little courage is still courage.",
    "You are not late. You are living your own calendar.",
    "Drink water, stretch your shoulders and continue.",
    "Leave some room for strawberries, sunsets and silly little joys.",
    "The work becomes lighter when you stop fighting the moment.",
    "Let your pace be sustainable enough to keep loving your life.",
    "Plan clearly, then be kind when life changes the plan.",
    "A peaceful life can still be full of brave goals.",
    "Your attention deserves a quiet place to land.",
    "Do less at once, not less with your life.",
    "A small finished task can be a doorway to a better evening.",
    "Let the morning arrive before you ask everything from yourself.",
    "Your goals can be important without becoming emergencies.",
    "Some progress looks like stopping at the right time.",
    "If you can make today 1% kinder, that counts.",
    "Write it down, breathe out, keep going.",
    "You deserve a life with both plans and pauses.",
    "Make space for the version of you who simply wants to enjoy today."
  ];

  const DAILY_ADVICE = [
    "Drink some water before the next task.",
    "Relax your shoulders and unclench your jaw.",
    "Look away from the screen for twenty seconds.",
    "Open a window or step outside for a little fresh air.",
    "Eat something nourishing if you have been skipping meals.",
    "Stand up and stretch your back for a minute.",
    "Take three slow breaths before starting the next thing.",
    "Refill your water bottle so future you does not have to remember.",
    "Rest your eyes and blink slowly a few times.",
    "Leave five quiet minutes between two demanding tasks.",
    "Have a piece of fruit or a small snack if your energy is low.",
    "Check your posture and let your hands relax.",
    "Put the phone down for one small, peaceful break.",
    "A short walk around the room still counts as movement.",
    "Make your desk a little calmer before you continue.",
    "Do not forget sunscreen and water when you are going outside.",
    "Give yourself a real lunch break instead of eating over work.",
    "Stretch your wrists if you have been typing for a long time.",
    "Turn the screen brightness down if your eyes feel tired.",
    "Finish the day with one small thing that feels nice, not useful."
  ];

  const DEFAULT_STATE = {
    view: "month",
    theme: "dusk",
    sidebarCollapsed: false,
    marks: {},
    dayData: {},
    quickNotes: "",
    drawings: {},
    stickers: {},
    yearDrawings: {},
    yearStickers: {},
    settings: { petals: true, use24Hour: true, weekendTint: true }
  };

  const state = loadState();
  const now = new Date();
  let visibleYear = now.getFullYear();
  let visibleMonth = now.getMonth();
  let selectedDayKey = dateKey(now);
  let activeTool = "plan";
  let activeColor = "#f39ac1";
  let brushSize = 5;
  let selectedSticker = "🌸";
  let isDrawing = false;
  let lastPoint = null;
  let dragSuppressUntil = 0;
  let resizeTimer = null;

  const $ = id => document.getElementById(id);
  const el = {
    app: $("app"), sidebar: $("sidebar"), sidebarToggle: $("sidebarToggle"),
    liveTime: $("liveTime"), liveDate: $("liveDate"), greetingText: $("greetingText"), clockMoon: $("clockMoon"),
    sidebarQuote: $("sidebarQuote"), dailyAdvice: $("dailyAdvice"), petalLayer: $("petalLayer"),
    plannerFrame: $("plannerFrame"), dayPanel: $("dayPanel"), collapseDayPanel: $("collapseDayPanel"),
    calendarTitle: $("calendarTitle"), calendarTitleButton: $("calendarTitleButton"), datePickerPopover: $("datePickerPopover"),
    monthPickerList: $("monthPickerList"), yearPickerList: $("yearPickerList"),
    prevButton: $("prevButton"), nextButton: $("nextButton"), todayButton: $("todayButton"), focusExitButton: $("focusExitButton"),
    focusButton: $("focusButton"), focusToolDock: $("focusToolDock"), focusSwatches: $("focusSwatches"),
    focusBrushSize: $("focusBrushSize"), focusBrushValue: $("focusBrushValue"), focusClearButton: $("focusClearButton"), focusCloseButton: $("focusCloseButton"), focusStickerGrid: $("focusStickerGrid"),
    monthView: $("monthView"), yearStage: $("yearStage"), yearView: $("yearView"), calendarGrid: $("calendarGrid"), monthStage: $("monthStage"),
    drawingCanvas: $("drawingCanvas"), yearDrawingCanvas: $("yearDrawingCanvas"), floatingStickers: $("floatingStickers"), yearFloatingStickers: $("yearFloatingStickers"),
    weekLabel: $("weekLabel"), selectedDateTitle: $("selectedDateTitle"), selectedDayQuote: $("selectedDayQuote"),
    dayNote: $("dayNote"), scheduleList: $("scheduleList"), addScheduleButton: $("addScheduleButton"), saveDayButton: $("saveDayButton"), clearDayButton: $("clearDayButton"),
    planToolPanel: $("planToolPanel"), markToolPanel: $("markToolPanel"), drawToolPanel: $("drawToolPanel"), stickerToolPanel: $("stickerToolPanel"),
    panelSwatches: $("panelSwatches"), drawSwatches: $("drawSwatches"), removeMarkButton: $("removeMarkButton"),
    brushSize: $("brushSize"), brushSizeValue: $("brushSizeValue"), penButton: $("penButton"), eraserButton: $("eraserButton"), clearDrawingButton: $("clearDrawingButton"), stickerGrid: $("stickerGrid"),
    quickNotes: $("quickNotes"), quickNotesCard: $("quickNotesCard"),
    settingsBackdrop: $("settingsBackdrop"), closeSettings: $("closeSettings"), petalsToggle: $("petalsToggle"), clockToggle: $("clockToggle"), weekendToggle: $("weekendToggle"),
    exportButton: $("exportButton"), importInput: $("importInput"), resetButton: $("resetButton"), scheduleItemTemplate: $("scheduleItemTemplate")
  };

  const monthCanvas = el.drawingCanvas;
  const monthCtx = monthCanvas.getContext("2d");
  const yearCanvas = el.yearDrawingCanvas;
  const yearCtx = yearCanvas.getContext("2d");

  init();

  function cloneDefault() { return JSON.parse(JSON.stringify(DEFAULT_STATE)); }
  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return cloneDefault();
      const parsed = JSON.parse(raw);
      const base = cloneDefault();
      return Object.assign(base, parsed, { settings: Object.assign(base.settings, parsed.settings || {}) });
    } catch (error) {
      console.warn("Saved calendar data could not be loaded.", error);
      return cloneDefault();
    }
  }
  function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }

  function init() {
    state.theme = state.theme === "night" ? "night" : "dusk";
    document.body.dataset.theme = state.theme;
    el.app.classList.toggle("sidebar-collapsed", !!state.sidebarCollapsed);
    el.quickNotes.value = state.quickNotes || "";
    el.petalsToggle.checked = state.settings.petals !== false;
    el.clockToggle.checked = state.settings.use24Hour !== false;
    el.weekendToggle.checked = state.settings.weekendTint !== false;

    buildStaticPalettes();
    bindEvents();
    bindCanvas(monthCanvas, monthCtx, "month");
    bindCanvas(yearCanvas, yearCtx, "year");
    setView(state.view === "year" ? "year" : "month", false);
    setTool("plan", false);
    updateClock();
    setInterval(updateClock, 1000);
    updateThemeControls();
    updatePetals();
    renderAll();

    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => syncVisibleCanvas(false), 120);
    });
  }

  function bindEvents() {
    el.sidebarToggle.addEventListener("click", () => {
      state.sidebarCollapsed = !state.sidebarCollapsed;
      el.app.classList.toggle("sidebar-collapsed", state.sidebarCollapsed);
      saveState();
      setTimeout(() => syncVisibleCanvas(false), 260);
    });

    document.querySelectorAll(".nav-item").forEach(button => button.addEventListener("click", () => handleNav(button.dataset.action)));
    document.querySelectorAll(".theme-option").forEach(button => button.addEventListener("click", () => setTheme(button.dataset.themeOption)));
    document.querySelectorAll(".view-tab").forEach(button => button.addEventListener("click", () => setView(button.dataset.view)));
    document.querySelectorAll(".day-tab").forEach(button => button.addEventListener("click", () => setTool(button.dataset.tool)));
    document.querySelectorAll(".dock-tool").forEach(button => button.addEventListener("click", () => setTool(button.dataset.tool)));

    el.prevButton.addEventListener("click", () => navigate(-1));
    el.nextButton.addEventListener("click", () => navigate(1));
    el.todayButton.addEventListener("click", () => jumpToday(true));
    el.focusButton.addEventListener("click", toggleFocus);
    el.focusExitButton.addEventListener("click", () => setFocus(false));
    el.collapseDayPanel.addEventListener("click", () => el.plannerFrame.classList.add("day-collapsed"));
    document.querySelectorAll("[data-back-plan]").forEach(button => button.addEventListener("click", () => setTool("plan")));

    el.calendarTitleButton.addEventListener("click", event => {
      event.stopPropagation();
      toggleDatePicker();
    });
    document.addEventListener("click", event => {
      if (!event.target.closest(".title-picker-wrap")) closeDatePicker();
      if (!event.target.closest(".time-picker-wrap")) closeAllTimePickers();
    });

    el.addScheduleButton.addEventListener("click", () => addScheduleRow("09:00", ""));
    el.saveDayButton.addEventListener("click", saveSelectedDay);
    el.clearDayButton.addEventListener("click", clearSelectedDay);
    el.removeMarkButton.addEventListener("click", () => {
      delete state.marks[selectedDayKey];
      saveState();
      renderCalendar();
      renderYear();
    });

    el.penButton.addEventListener("click", () => setTool("pen"));
    el.eraserButton.addEventListener("click", () => setTool("eraser"));
    el.clearDrawingButton.addEventListener("click", clearVisibleDrawing);
    el.focusClearButton.addEventListener("click", clearVisibleDrawing);
    el.focusCloseButton.addEventListener("click", () => setFocus(false));

    const syncBrush = value => {
      brushSize = Number(value);
      el.brushSize.value = String(brushSize);
      el.focusBrushSize.value = String(brushSize);
      el.brushSizeValue.textContent = `${brushSize} px`;
      el.focusBrushValue.textContent = String(brushSize);
    };
    el.brushSize.addEventListener("input", event => syncBrush(event.target.value));
    el.focusBrushSize.addEventListener("input", event => syncBrush(event.target.value));

    el.quickNotes.addEventListener("input", () => {
      state.quickNotes = el.quickNotes.value;
      saveState();
    });

    el.closeSettings.addEventListener("click", closeSettings);
    el.settingsBackdrop.addEventListener("click", event => { if (event.target === el.settingsBackdrop) closeSettings(); });
    el.petalsToggle.addEventListener("change", () => { state.settings.petals = el.petalsToggle.checked; saveState(); updatePetals(); });
    el.clockToggle.addEventListener("change", () => { state.settings.use24Hour = el.clockToggle.checked; saveState(); updateClock(); });
    el.weekendToggle.addEventListener("change", () => { state.settings.weekendTint = el.weekendToggle.checked; saveState(); renderCalendar(); });
    el.exportButton.addEventListener("click", exportBackup);
    el.importInput.addEventListener("change", importBackup);
    el.resetButton.addEventListener("click", resetData);

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        closeDatePicker();
        closeAllTimePickers();
        if (!el.settingsBackdrop.classList.contains("hidden")) closeSettings();
        else if (document.body.classList.contains("focus-mode")) setFocus(false);
      }
      if ((event.key === "Delete" || event.key === "Backspace") && !isTextInput(document.activeElement)) {
        const selected = document.querySelector(".placed-sticker.selected");
        if (selected) {
          event.preventDefault();
          selected.querySelector(".sticker-remove")?.click();
        }
      }
      if (event.key.toLowerCase() === "f" && !isTextInput(document.activeElement)) {
        event.preventDefault();
        toggleFocus();
      }
    });
  }

  function handleNav(action) {
    document.querySelectorAll(".nav-item").forEach(b => b.classList.toggle("active", b.dataset.action === action));
    if (action === "calendar") { setView("month"); el.plannerFrame.classList.remove("day-collapsed"); }
    if (action === "today") jumpToday(true);
    if (action === "planner") { el.plannerFrame.classList.remove("day-collapsed"); setTool("plan"); }
    if (action === "stickers") { el.plannerFrame.classList.remove("day-collapsed"); setTool("sticker"); }
    if (action === "notes") { el.quickNotesCard.scrollIntoView({ behavior: "smooth", block: "center" }); setTimeout(() => el.quickNotes.focus(), 350); }
    if (action === "focus") setFocus(true);
    if (action === "settings") openSettings();
  }

  function setTheme(theme) {
    state.theme = theme === "night" ? "night" : "dusk";
    document.body.dataset.theme = state.theme;
    saveState();
    updateThemeControls();
  }
  function updateThemeControls() {
    document.querySelectorAll(".theme-option").forEach(button => button.classList.toggle("active", button.dataset.themeOption === state.theme));
    el.clockMoon.textContent = state.theme === "night" ? "☾" : "☀";
  }

  function toggleFocus() { setFocus(!document.body.classList.contains("focus-mode")); }
  function setFocus(on) {
    document.body.classList.toggle("focus-mode", on);
    el.plannerFrame.classList.remove("day-collapsed");
    setTimeout(() => syncVisibleCanvas(false), 220);
  }

  function setView(view, persist = true) {
    state.view = view === "year" ? "year" : "month";
    if (persist) saveState();
    document.querySelectorAll(".view-tab").forEach(button => button.classList.toggle("active", button.dataset.view === state.view));
    el.monthView.classList.toggle("hidden", state.view !== "month");
    el.yearStage.classList.toggle("hidden", state.view !== "year");
    renderAll();
  }

  function setTool(tool, updatePanels = true) {
    activeTool = tool;
    document.querySelectorAll(".dock-tool").forEach(button => button.classList.toggle("active", button.dataset.tool === tool));
    document.querySelectorAll(".day-tab").forEach(button => {
      const mapped = tool === "eraser" ? "pen" : tool;
      button.classList.toggle("active", button.dataset.tool === mapped);
    });
    el.penButton.classList.toggle("active", tool === "pen");
    el.eraserButton.classList.toggle("active", tool === "eraser");

    [el.monthStage, el.yearStage].forEach(stage => {
      stage.classList.toggle("draw-mode", tool === "pen" || tool === "eraser");
      stage.classList.toggle("sticker-mode", tool === "sticker");
    });

    if (updatePanels) {
      [el.planToolPanel, el.markToolPanel, el.drawToolPanel, el.stickerToolPanel].forEach(panel => panel.classList.remove("active-panel"));
      if (tool === "plan") el.planToolPanel.classList.add("active-panel");
      else if (tool === "marker") el.markToolPanel.classList.add("active-panel");
      else if (tool === "pen" || tool === "eraser") el.drawToolPanel.classList.add("active-panel");
      else if (tool === "sticker") el.stickerToolPanel.classList.add("active-panel");
    }
  }

  function buildStaticPalettes() {
    [el.panelSwatches, el.drawSwatches, el.focusSwatches].forEach(container => {
      container.innerHTML = "";
      COLORS.forEach(color => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "swatch" + (color === activeColor ? " active" : "");
        button.style.setProperty("--c", color);
        button.dataset.color = color;
        button.addEventListener("click", () => setColor(color));
        container.appendChild(button);
      });
    });
    buildStickerGrid(el.stickerGrid, false);
    buildStickerGrid(el.focusStickerGrid, true);
  }

  function buildStickerGrid(container, compact) {
    container.innerHTML = "";
    const source = compact ? STICKERS.slice(0, 10) : STICKERS;
    source.forEach(emoji => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "sticker-choice" + (emoji === selectedSticker ? " active" : "");
      button.textContent = emoji;
      button.title = `Select ${emoji}`;
      button.addEventListener("click", () => {
        selectedSticker = emoji;
        document.querySelectorAll(".sticker-choice").forEach(item => item.classList.toggle("active", item.textContent === emoji));
        setTool("sticker");
      });
      container.appendChild(button);
    });
  }

  function setColor(color) {
    activeColor = color;
    document.querySelectorAll(".swatch").forEach(button => button.classList.toggle("active", button.dataset.color === color));
  }

  function navigate(step) {
    if (state.view === "year") {
      visibleYear += step;
    } else {
      visibleMonth += step;
      if (visibleMonth < 0) { visibleMonth = 11; visibleYear--; }
      if (visibleMonth > 11) { visibleMonth = 0; visibleYear++; }
    }
    renderAll();
  }

  function jumpToday(animate = false) {
    const today = new Date();
    visibleYear = today.getFullYear();
    visibleMonth = today.getMonth();
    selectedDayKey = dateKey(today);
    setView("month");
    el.plannerFrame.classList.remove("day-collapsed");
    renderDayPanel();
    if (animate) requestAnimationFrame(() => requestAnimationFrame(pulseTodayCell));
  }

  function pulseTodayCell() {
    const todayCell = document.querySelector(".day-cell.today");
    if (!todayCell) return;
    todayCell.classList.remove("today-jump");
    void todayCell.offsetWidth;
    todayCell.classList.add("today-jump");
    setTimeout(() => todayCell.classList.remove("today-jump"), 950);
  }

  function renderAll() {
    el.calendarTitle.textContent = state.view === "year" ? String(visibleYear) : `${MONTHS[visibleMonth]} ${visibleYear}`;
    renderPickerLists();
    if (state.view === "month") renderCalendar(); else renderYear();
    renderDayPanel();
    requestAnimationFrame(() => syncVisibleCanvas(false));
  }

  function renderCalendar() {
    el.calendarGrid.innerHTML = "";
    const first = new Date(visibleYear, visibleMonth, 1);
    const offset = (first.getDay() + 6) % 7;
    const start = new Date(visibleYear, visibleMonth, 1 - offset);
    const todayKey = dateKey(new Date());

    for (let i = 0; i < 42; i++) {
      const date = new Date(start);
      date.setDate(start.getDate() + i);
      const key = dateKey(date);
      const info = state.dayData[key] || {};
      const mark = state.marks[key];
      const button = document.createElement("button");
      button.type = "button";
      button.className = "day-cell";
      if (date.getMonth() !== visibleMonth) button.classList.add("outside");
      if (key === todayKey) button.classList.add("today");
      if (key === selectedDayKey) button.classList.add("selected");
      if (state.settings.weekendTint && (date.getDay() === 0 || date.getDay() === 6)) button.classList.add("weekend");
      button.dataset.date = key;

      const wrap = document.createElement("span");
      wrap.className = "day-number-wrap";
      if (mark) {
        const markEl = document.createElement("span");
        markEl.className = "day-mark";
        markEl.style.setProperty("--mark-color", mark);
        wrap.appendChild(markEl);
      }
      const number = document.createElement("span");
      number.className = "day-number";
      number.textContent = date.getDate();
      wrap.appendChild(number);
      button.appendChild(wrap);

      if (Array.isArray(info.schedule) && info.schedule.length) {
        const badge = document.createElement("span");
        badge.className = "plan-count";
        badge.textContent = `${info.schedule.length} plan${info.schedule.length > 1 ? "s" : ""}`;
        button.appendChild(badge);
      } else if (info.note) {
        const summary = document.createElement("span");
        summary.className = "day-summary";
        summary.textContent = info.note;
        button.appendChild(summary);
      }

      button.addEventListener("click", () => handleDateClick(date));
      el.calendarGrid.appendChild(button);
    }

    requestAnimationFrame(() => {
      syncMonthCanvas(false);
      renderMonthStickers();
    });
  }

  function handleDateClick(date) {
    const key = dateKey(date);
    if (activeTool === "marker") {
      state.marks[key] = state.marks[key] === activeColor ? undefined : activeColor;
      if (!state.marks[key]) delete state.marks[key];
      selectedDayKey = key;
      saveState();
      renderCalendar();
      renderDayPanel();
      return;
    }
    if (activeTool === "pen" || activeTool === "eraser" || activeTool === "sticker") return;

    selectedDayKey = key;
    if (date.getFullYear() !== visibleYear || date.getMonth() !== visibleMonth) {
      visibleYear = date.getFullYear();
      visibleMonth = date.getMonth();
    }
    el.plannerFrame.classList.remove("day-collapsed");
    renderCalendar();
    renderDayPanel();
  }

  function renderYear() {
    el.yearView.innerHTML = "";
    const todayKey = dateKey(new Date());
    for (let month = 0; month < 12; month++) {
      const card = document.createElement("section");
      card.className = "mini-month";
      const h = document.createElement("h3");
      h.textContent = MONTHS[month];
      card.appendChild(h);
      const week = document.createElement("div");
      week.className = "mini-week";
      week.innerHTML = "<span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>";
      card.appendChild(week);
      const grid = document.createElement("div");
      grid.className = "mini-grid";
      const first = new Date(visibleYear, month, 1);
      const offset = (first.getDay() + 6) % 7;
      const count = new Date(visibleYear, month + 1, 0).getDate();
      for (let i = 0; i < offset; i++) grid.appendChild(document.createElement("span"));
      for (let day = 1; day <= count; day++) {
        const date = new Date(visibleYear, month, day);
        const key = dateKey(date);
        const button = document.createElement("button");
        button.type = "button";
        button.className = "mini-day";
        button.textContent = day;
        if (key === todayKey) button.classList.add("today");
        if (state.marks[key]) {
          button.classList.add("marked");
          button.style.setProperty("--mini-mark", state.marks[key]);
        }
        button.addEventListener("click", () => {
          if (activeTool === "marker") {
            state.marks[key] = state.marks[key] === activeColor ? undefined : activeColor;
            if (!state.marks[key]) delete state.marks[key];
            selectedDayKey = key;
            saveState();
            renderYear();
            renderDayPanel();
            return;
          }
          if (activeTool === "pen" || activeTool === "eraser" || activeTool === "sticker") return;
          selectedDayKey = key;
          visibleMonth = month;
          el.plannerFrame.classList.remove("day-collapsed");
          renderDayPanel();
        });
        grid.appendChild(button);
      }
      card.appendChild(grid);
      el.yearView.appendChild(card);
    }
    requestAnimationFrame(() => {
      syncYearCanvas(false);
      renderYearStickers();
    });
  }

  function renderDayPanel() {
    const date = parseDateKey(selectedDayKey);
    const info = state.dayData[selectedDayKey] || { note: "", schedule: [] };
    el.weekLabel.textContent = `WEEK ${getISOWeek(date)}`;
    el.selectedDateTitle.textContent = formatLongDate(date);
    el.selectedDayQuote.textContent = quoteForDate(date);
    el.dayNote.value = info.note || "";
    el.scheduleList.innerHTML = "";
    const schedule = Array.isArray(info.schedule) ? info.schedule : [];
    if (schedule.length) schedule.forEach(item => addScheduleRow(item.time || "09:00", item.text || ""));
    else addScheduleRow("09:00", "");
  }

  function saveSelectedDay() {
    const note = el.dayNote.value.trim();
    const schedule = [...el.scheduleList.querySelectorAll(".schedule-item")].map(row => ({
      time: row.querySelector(".time-button").dataset.time || row.querySelector(".time-button").textContent.trim(),
      text: row.querySelector(".schedule-text").value.trim()
    })).filter(item => item.text);
    if (!note && !schedule.length) delete state.dayData[selectedDayKey];
    else state.dayData[selectedDayKey] = { note, schedule };
    saveState();
    renderCalendar();
    renderYear();
    pulseButton(el.saveDayButton, "Saved");
  }

  function clearSelectedDay() {
    if (!confirm("Clear notes, schedule and marker for this day?")) return;
    delete state.dayData[selectedDayKey];
    delete state.marks[selectedDayKey];
    saveState();
    renderDayPanel();
    renderCalendar();
    renderYear();
  }

  function addScheduleRow(time = "09:00", text = "") {
    const fragment = el.scheduleItemTemplate.content.cloneNode(true);
    const row = fragment.querySelector(".schedule-item");
    const timeButton = row.querySelector(".time-button");
    const popover = row.querySelector(".time-popover");
    const hourColumn = row.querySelector(".hour-column");
    const minuteColumn = row.querySelector(".minute-column");
    const textInput = row.querySelector(".schedule-text");
    const remove = row.querySelector(".remove-schedule");

    const [initialHour, initialMinute] = normalizeTime(time).split(":");
    timeButton.dataset.time = `${initialHour}:${initialMinute}`;
    timeButton.textContent = timeButton.dataset.time;
    textInput.value = text;

    for (let h = 0; h < 24; h++) {
      const value = String(h).padStart(2, "0");
      const b = document.createElement("button");
      b.type = "button"; b.className = "time-option" + (value === initialHour ? " active" : ""); b.textContent = value;
      b.addEventListener("click", event => { event.stopPropagation(); setTimePart(row, "hour", value); });
      hourColumn.appendChild(b);
    }
    for (let m = 0; m < 60; m += 5) {
      const value = String(m).padStart(2, "0");
      const b = document.createElement("button");
      b.type = "button"; b.className = "time-option" + (value === initialMinute ? " active" : ""); b.textContent = value;
      b.addEventListener("click", event => { event.stopPropagation(); setTimePart(row, "minute", value); });
      minuteColumn.appendChild(b);
    }

    timeButton.addEventListener("click", event => {
      event.stopPropagation();
      const opening = popover.classList.contains("hidden");
      closeAllTimePickers();
      if (opening) {
        popover.classList.remove("hidden");
        requestAnimationFrame(() => {
          hourColumn.querySelector(".time-option.active")?.scrollIntoView({ block: "center" });
          minuteColumn.querySelector(".time-option.active")?.scrollIntoView({ block: "center" });
        });
      }
    });
    remove.addEventListener("click", () => row.remove());
    el.scheduleList.appendChild(row);
  }

  function setTimePart(row, part, value) {
    const button = row.querySelector(".time-button");
    let [hour, minute] = (button.dataset.time || "09:00").split(":");
    if (part === "hour") hour = value; else minute = value;
    button.dataset.time = `${hour}:${minute}`;
    button.textContent = button.dataset.time;
    row.querySelectorAll(part === "hour" ? ".hour-column .time-option" : ".minute-column .time-option").forEach(option => option.classList.toggle("active", option.textContent === value));
  }
  function closeAllTimePickers() { document.querySelectorAll(".time-popover").forEach(pop => pop.classList.add("hidden")); }

  function renderPickerLists() {
    el.monthPickerList.innerHTML = "";
    MONTHS.forEach((name, index) => {
      const button = document.createElement("button");
      button.type = "button"; button.className = "picker-option" + (index === visibleMonth ? " active" : ""); button.textContent = name;
      button.addEventListener("click", event => { event.stopPropagation(); visibleMonth = index; closeDatePicker(); setView("month"); });
      el.monthPickerList.appendChild(button);
    });
    el.yearPickerList.innerHTML = "";
    const current = new Date().getFullYear();
    const min = Math.min(current - 20, visibleYear - 10);
    const max = Math.max(current + 80, visibleYear + 10);
    for (let year = min; year <= max; year++) {
      const button = document.createElement("button");
      button.type = "button"; button.className = "picker-option" + (year === visibleYear ? " active" : ""); button.textContent = year;
      button.addEventListener("click", event => { event.stopPropagation(); visibleYear = year; closeDatePicker(); renderAll(); });
      el.yearPickerList.appendChild(button);
    }
  }
  function toggleDatePicker() {
    const opening = el.datePickerPopover.classList.contains("hidden");
    el.datePickerPopover.classList.toggle("hidden", !opening);
    if (opening) requestAnimationFrame(() => el.yearPickerList.querySelector(".active")?.scrollIntoView({ block: "center" }));
  }
  function closeDatePicker() { el.datePickerPopover.classList.add("hidden"); }

  function bindCanvas(canvas, ctx, scope) {
    const point = event => {
      const rect = canvas.getBoundingClientRect();
      return { x: (event.clientX - rect.left) * (canvas.width / rect.width), y: (event.clientY - rect.top) * (canvas.height / rect.height) };
    };
    canvas.addEventListener("pointerdown", event => {
      if (activeTool !== "pen" && activeTool !== "eraser") return;
      event.preventDefault();
      isDrawing = true;
      lastPoint = point(event);
      drawLine(ctx, lastPoint, lastPoint, activeTool);
      canvas.setPointerCapture?.(event.pointerId);
    });
    canvas.addEventListener("pointermove", event => {
      if (!isDrawing) return;
      event.preventDefault();
      const next = point(event);
      drawLine(ctx, lastPoint, next, activeTool);
      lastPoint = next;
    });
    const end = () => {
      if (!isDrawing) return;
      isDrawing = false; lastPoint = null;
      saveDrawing(scope);
    };
    canvas.addEventListener("pointerup", end);
    canvas.addEventListener("pointercancel", end);
    canvas.addEventListener("pointerleave", end);
  }

  function drawLine(ctx, from, to, tool) {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    ctx.save();
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    if (tool === "eraser") {
      ctx.globalCompositeOperation = "destination-out";
      ctx.strokeStyle = "rgba(0,0,0,1)";
      ctx.lineWidth = Math.max(12, brushSize * 2.8) * ratio;
    } else {
      ctx.globalCompositeOperation = "source-over";
      ctx.strokeStyle = activeColor;
      ctx.lineWidth = brushSize * ratio;
    }
    ctx.beginPath(); ctx.moveTo(from.x, from.y); ctx.lineTo(to.x, to.y); ctx.stroke(); ctx.restore();
  }

  function syncVisibleCanvas(preserve) { if (state.view === "month") syncMonthCanvas(preserve); else syncYearCanvas(preserve); }
  function syncMonthCanvas(preserve) {
    syncCanvas(monthCanvas, monthCtx, el.monthStage, state.drawings[monthKey()], preserve, source => { if (source) state.drawings[monthKey()] = source; });
  }
  function syncYearCanvas(preserve) {
    const width = el.yearStage.clientWidth;
    const height = Math.max(el.yearStage.clientHeight, el.yearView.scrollHeight);
    if (!width || !height) return;
    syncCanvasDimensions(yearCanvas, yearCtx, width, height, state.yearDrawings[String(visibleYear)], preserve);
    el.yearFloatingStickers.style.width = `${width}px`;
    el.yearFloatingStickers.style.height = `${height}px`;
  }
  function syncCanvas(canvas, ctx, stage, stored, preserve) {
    const rect = stage.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    syncCanvasDimensions(canvas, ctx, rect.width, rect.height, stored, preserve);
  }
  function syncCanvasDimensions(canvas, ctx, cssWidth, cssHeight, stored, preserve) {
    let source = stored || null;
    if (preserve && canvas.width && canvas.height) { try { source = canvas.toDataURL("image/png"); } catch (_) {} }
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(cssWidth * ratio); canvas.height = Math.round(cssHeight * ratio);
    canvas.style.width = `${cssWidth}px`; canvas.style.height = `${cssHeight}px`;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    if (source) {
      const image = new Image();
      image.onload = () => { ctx.clearRect(0,0,canvas.width,canvas.height); ctx.drawImage(image,0,0,canvas.width,canvas.height); };
      image.src = source;
    }
  }
  function saveDrawing(scope) {
    try {
      if (scope === "month") state.drawings[monthKey()] = monthCanvas.toDataURL("image/png");
      else state.yearDrawings[String(visibleYear)] = yearCanvas.toDataURL("image/png");
      saveState();
    } catch (error) { console.warn("Drawing could not be saved.", error); }
  }
  function clearVisibleDrawing() {
    if (state.view === "month") {
      if (!confirm(`Clear drawing for ${MONTHS[visibleMonth]} ${visibleYear}?`)) return;
      delete state.drawings[monthKey()]; monthCtx.clearRect(0,0,monthCanvas.width,monthCanvas.height);
    } else {
      if (!confirm(`Clear drawing for ${visibleYear}?`)) return;
      delete state.yearDrawings[String(visibleYear)]; yearCtx.clearRect(0,0,yearCanvas.width,yearCanvas.height);
    }
    saveState();
  }

  function renderMonthStickers() {
    renderStickerLayer(el.floatingStickers, state.stickers[monthKey()] || [], updated => { state.stickers[monthKey()] = updated; }, 29);
  }
  function renderYearStickers() {
    const key = String(visibleYear);
    renderStickerLayer(el.yearFloatingStickers, state.yearStickers[key] || [], updated => { state.yearStickers[key] = updated; }, 27);
  }

  function renderStickerLayer(layer, collection, persist, defaultSize) {
    layer.innerHTML = "";
    collection.forEach((item, index) => layer.appendChild(createStickerNode(layer, item, index, collection, persist, () => renderStickerLayer(layer, collection, persist, defaultSize))));

    layer.onclick = event => {
      if (Date.now() < dragSuppressUntil) return;
      if (event.target.closest(".placed-sticker")) return;
      document.querySelectorAll(".placed-sticker.selected").forEach(node => node.classList.remove("selected"));
      if (activeTool !== "sticker") return;
      const rect = layer.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const x = clamp((event.clientX - rect.left) / rect.width, 0, 1);
      const y = clamp((event.clientY - rect.top) / rect.height, 0, 1);
      collection.push({ emoji: selectedSticker, x, y, size: defaultSize });
      persist(collection); saveState();
      renderStickerLayer(layer, collection, persist, defaultSize);
    };
  }

  function createStickerNode(layer, item, index, collection, persist, rerender) {
    const node = document.createElement("span");
    node.className = "placed-sticker";
    node.style.left = `${item.x * 100}%`;
    node.style.top = `${item.y * 100}%`;
    node.style.fontSize = `${item.size || 29}px`;
    node.dataset.index = String(index);

    const emoji = document.createElement("span");
    emoji.textContent = item.emoji;
    const remove = document.createElement("button");
    remove.type = "button"; remove.className = "sticker-remove"; remove.textContent = "×"; remove.setAttribute("aria-label", "Remove sticker");
    remove.addEventListener("click", event => { event.preventDefault(); event.stopPropagation(); collection.splice(index,1); persist(collection); saveState(); rerender(); });
    node.addEventListener("dblclick", event => { event.preventDefault(); collection.splice(index,1); persist(collection); saveState(); rerender(); });

    let dragging = false;
    let moved = false;
    let startX = 0, startY = 0;
    node.addEventListener("pointerdown", event => {
      if (event.target === remove) return;
      event.preventDefault(); event.stopPropagation();
      dragging = true; moved = false; startX = event.clientX; startY = event.clientY;
      node.classList.add("dragging", "selected");
      node.setPointerCapture?.(event.pointerId);
    });
    node.addEventListener("pointermove", event => {
      if (!dragging) return;
      event.preventDefault(); event.stopPropagation();
      if (Math.hypot(event.clientX - startX, event.clientY - startY) > 3) moved = true;
      const rect = layer.getBoundingClientRect();
      item.x = clamp((event.clientX - rect.left) / rect.width, 0.015, .985);
      item.y = clamp((event.clientY - rect.top) / rect.height, 0.015, .985);
      node.style.left = `${item.x * 100}%`; node.style.top = `${item.y * 100}%`;
    });
    const finish = event => {
      if (!dragging) return;
      dragging = false; node.classList.remove("dragging");
      if (moved) { dragSuppressUntil = Date.now() + 220; persist(collection); saveState(); }
      else {
        document.querySelectorAll(".placed-sticker.selected").forEach(other => { if (other !== node) other.classList.remove("selected"); });
        node.classList.toggle("selected");
      }
      event?.stopPropagation();
    };
    node.addEventListener("pointerup", finish);
    node.addEventListener("pointercancel", finish);
    node.append(emoji, remove);
    return node;
  }

  function updateClock() {
    const date = new Date();
    let hours = date.getHours();
    const suffix = state.settings.use24Hour ? "" : (hours >= 12 ? " PM" : " AM");
    if (!state.settings.use24Hour) hours = hours % 12 || 12;
    el.liveTime.textContent = `${String(hours).padStart(2,"0")}:${String(date.getMinutes()).padStart(2,"0")}${suffix}`;
    el.liveDate.textContent = formatLongDate(date);
    const h = date.getHours();
    el.greetingText.textContent = h < 12 ? "Good morning" : h < 18 ? "Good afternoon" : "Good evening";
    const quote = quoteForDate(date);
    el.sidebarQuote.textContent = quote;
    el.dailyAdvice.textContent = adviceForDate(date);
  }

  function updatePetals() {
    el.petalLayer.innerHTML = "";
    if (!state.settings.petals) return;
    const count = window.innerWidth < 700 ? 7 : 13;
    for (let i = 0; i < count; i++) {
      const petal = document.createElement("span");
      petal.className = "petal";
      petal.style.left = `${Math.random()*100}%`;
      petal.style.animationDuration = `${12 + Math.random()*12}s`;
      petal.style.animationDelay = `${-Math.random()*22}s`;
      petal.style.opacity = `${.18 + Math.random()*.28}`;
      el.petalLayer.appendChild(petal);
    }
  }

  function openSettings() { el.settingsBackdrop.classList.remove("hidden"); }
  function closeSettings() { el.settingsBackdrop.classList.add("hidden"); }
  function exportBackup() {
    const payload = { app: "Sakura Calendar", version: 5, exportedAt: new Date().toISOString(), data: state };
    const blob = new Blob([JSON.stringify(payload,null,2)], {type:"application/json"});
    const url = URL.createObjectURL(blob); const a = document.createElement("a"); a.href = url; a.download = `sakura-calendar-backup-${dateKey(new Date())}.json`; a.click(); URL.revokeObjectURL(url);
  }
  function importBackup(event) {
    const file = event.target.files?.[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result); const imported = parsed.data || parsed;
        const base = cloneDefault();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(Object.assign(base, imported, {settings:Object.assign(base.settings, imported.settings||{})})));
        alert("Backup imported. The page will reload."); location.reload();
      } catch (_) { alert("This does not look like a valid Sakura Calendar backup."); }
    };
    reader.readAsText(file); event.target.value = "";
  }
  function resetData() { if (confirm("Delete all Sakura Calendar data stored in this browser?")) { localStorage.removeItem(STORAGE_KEY); location.reload(); } }

  function pulseButton(button, text) {
    const old = button.textContent; button.textContent = text; button.disabled = true;
    setTimeout(() => { button.textContent = old; button.disabled = false; }, 900);
  }
  function quoteForDate(date) { const seed = date.getFullYear()*372 + (date.getMonth()+1)*31 + date.getDate(); return QUOTES[Math.abs(seed)%QUOTES.length]; }
  function adviceForDate(date) { const seed = date.getFullYear()*197 + (date.getMonth()+1)*23 + date.getDate()*7; return DAILY_ADVICE[Math.abs(seed)%DAILY_ADVICE.length]; }
  function dateKey(date) { return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")}`; }
  function parseDateKey(key) { const [y,m,d] = key.split("-").map(Number); return new Date(y,m-1,d); }
  function monthKey() { return `${visibleYear}-${String(visibleMonth+1).padStart(2,"0")}`; }
  function formatLongDate(date) { return `${WEEKDAYS[date.getDay()]}, ${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`; }
  function getISOWeek(date) { const t = new Date(Date.UTC(date.getFullYear(),date.getMonth(),date.getDate())); const day = t.getUTCDay()||7; t.setUTCDate(t.getUTCDate()+4-day); const y0 = new Date(Date.UTC(t.getUTCFullYear(),0,1)); return Math.ceil((((t-y0)/86400000)+1)/7); }
  function normalizeTime(value) { const match = String(value||"").match(/^(\d{1,2}):(\d{2})$/); if (!match) return "09:00"; const h = clamp(Number(match[1]),0,23); const m = Math.round(clamp(Number(match[2]),0,59)/5)*5%60; return `${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}`; }
  function clamp(value,min,max) { return Math.min(max,Math.max(min,value)); }
  function isTextInput(node) { return node && (node.tagName === "INPUT" || node.tagName === "TEXTAREA" || node.isContentEditable); }
})();
