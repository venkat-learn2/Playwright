// Retries and Test Flakiness

// 1) passed - no retry
// 2) Failed - Retry - Failed
// 3) Failed - Retry - Passed / Fleky tests
// command - npx playwright test --retries=3