// ============================================
// AAED Roadmap — Aggregated Lesson Content
// This file is auto-assembled from module content files.
// ============================================

const LESSON_CONTENT = {};

// Content will be loaded from individual module files
// and registered here via registerContent()
function registerContent(items) {
  items.forEach(item => {
    LESSON_CONTENT[item.id] = item.content;
  });
}
