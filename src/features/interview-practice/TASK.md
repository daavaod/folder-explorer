# Frontend Architecture Interview — Practice Task

## Expense Tracker

You are given the following design for a simple Expense Tracker app.
Implement it from scratch using React + TypeScript.

---

## Design Spec

### Layout

```
┌─────────────────────────────────────────────────┐
│  Expense Tracker                                │
├─────────────────────────────────────────────────┤
│                                                 │
│  ┌─── Add Expense ──────────────────────────┐   │
│  │  Description: [____________]             │   │
│  │  Amount:      [______]                   │   │
│  │  Category:    [ Food ▼ ]                 │   │
│  │                          [Add Expense]   │   │
│  └──────────────────────────────────────────┘   │
│                                                 │
│  ┌─── Summary ──────────────────────────────┐   │
│  │  Total: $345.00                          │   │
│  │  Food: $120.00 | Transport: $85.00       │   │
│  │  Entertainment: $140.00                  │   │
│  └──────────────────────────────────────────┘   │
│                                                 │
│  Filter: [All ▼]              Sort: [Date ▼]   │
│                                                 │
│  ┌─── Expenses ─────────────────────────────┐   │
│  │  🍕 Lunch          Food       $12.00     │   │
│  │                    May 25      [Delete]   │   │
│  │─────────────────────────────────────────  │   │
│  │  🚗 Uber           Transport   $25.00    │   │
│  │                    May 24      [Delete]   │   │
│  │─────────────────────────────────────────  │   │
│  │  🎬 Movie          Entertain.  $18.00    │   │
│  │                    May 23      [Delete]   │   │
│  └──────────────────────────────────────────┘   │
│                                                 │
│  (No expenses yet. Add one above!)  ← empty    │
│                                                 │
└─────────────────────────────────────────────────┘
```

### Requirements

1. **Add Expense Form**
   - Fields: description (text), amount (number), category (select)
   - Categories: "Food", "Transport", "Entertainment", "Other"
   - Validation: description required, amount must be > 0
   - Clear form after successful add

2. **Expense List**
   - Show all expenses with description, category, amount, date
   - Each item has a Delete button
   - Sort by: Date (newest first) or Amount (highest first)
   - Filter by category (All, Food, Transport, Entertainment, Other)

3. **Summary Section**
   - Show total of all expenses (not filtered — always the true total)
   - Show breakdown by category (only categories that have expenses)

4. **Edge Cases to Handle**
   - Empty state when no expenses exist
   - Empty state when filter matches nothing
   - Prevent adding expense with empty description or zero/negative amount
   - Format amounts to 2 decimal places

---

## What the interviewer is evaluating

- How you decompose components (form, list, summary, item)
- Where you place state and why
- How you derive data (totals, filtered list) without redundant state
- Type definitions
- Production-readiness (validation, edge cases, clean code)
- Your ability to talk through decisions as you build

---

## Suggested approach (don't read until you've tried first!)

<details>
<summary>Hints (click to reveal)</summary>

1. Start by defining your types (`Expense`, `Category`, `SortOption`)
2. Decide where state lives — one parent component with all state? Or split?
3. Identify what's state vs. what's derived:
   - State: expenses[], filter, sortOption, form fields
   - Derived: filteredExpenses, sortedExpenses, totals, categoryBreakdown
4. Build the form first, then the list, then the summary
5. Extract components only when it improves clarity

</details>

---

## Time target

45 minutes implementation + 15 minutes Q&A from interviewer.

Good luck!
