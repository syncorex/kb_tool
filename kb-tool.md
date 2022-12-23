# EEP KB Board Recommendations

- *Clients in tags, not card types*
	- Using the "arbitrary" tag both gives it a strong purpose, as well as encourages people to tag their KBs
- *Use default theme*
- *Reduce KB clutter*
	- "Recurring" should be a tag, not in the title, eg. Recurring Monthly
	- "NOTIFY CLIENT" should be a checkbox. Reduce clutter, increase the likelyhood of remembering to do it.  
	- IDs are no longer needed in the titles

##### Code for font swap / size:
```
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Martion&display=swap');

kt-task .kt-task-body {
  font-size:12px !important;
  font-size: calc(12px * var(--kt-board--zoom,1)) !important;
  font-family: 'Inter', sans-serif !important;
}
```

```

.kt-lane-description {
  font-family: 'Martian Mono', monospace !important;
}
```