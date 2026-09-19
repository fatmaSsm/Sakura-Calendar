# Manual Test Checklist

## Startup and layout

- The current month and current year are selected when the app opens.
- The live clock and full date are visible immediately.
- The compact top header leaves more vertical room for the calendar.
- Dusk and Night both show their own room background image.
- Daily Care and Quick Notes have equal height and alignment.

## Calendar

- Previous, Today and Next work.
- Clicking **Today** jumps to the current month/date and the current-day cell briefly pulses.
- Clicking the month/year title opens the custom picker.
- The current year is visible and centered in the year picker.
- Month and Year views both render correctly.
- Clicking a date in Plan mode selects that date and loads its planner.

## Planner and navigation

- Notes can be saved.
- Time blocks can be added and removed.
- The custom time picker uses the dark rounded theme.
- Clear day removes notes, schedule and the selected date marker.
- The planner × button is visually centered and hides the right planner.
- Mark, Draw and Stickers views each provide **← Back to plan**.

## Mark / Draw / Erase

- Marker colors are centered on the date number.
- Draw mode accepts pointer / mouse drawing.
- Eraser removes only freehand drawing.
- Brush size changes the stroke size.
- Clear visible drawing works in both Month and Year views.

## Stickers

- A selected sticker is placed by clicking an empty area of the current calendar.
- A placed sticker can be dragged to another position.
- Dragging does not accidentally create a second sticker.
- Hovering or selecting a sticker shows the centered circular × removal button.
- Double-click removes a sticker.
- Delete / Backspace removes a selected sticker when focus is not inside a text field.
- Year view supports placing and dragging year-level stickers.

## Focus

- Focus mode expands the planner above a blurred background.
- The old duplicate floating tool dock is not visible.
- The normal right-side Plan / Mark / Draw / Stickers controls remain usable.
- **← Back** and `Esc` both exit Focus mode.

## Daily messages

- The sidebar shows one motivational quote for the current day.
- The lower Daily Care card shows a practical reminder rather than repeating the quote.

## Persistence

- Quick Notes remain after refresh.
- Day notes and schedules remain after refresh.
- Markers remain after refresh.
- Month drawings remain after refresh.
- Month stickers and their dragged positions remain after refresh.
- Year drawings and year stickers remain after refresh.
- Export backup downloads JSON.
- Import backup restores saved data.
