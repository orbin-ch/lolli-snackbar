# lolli-snackbar

[Snackbars & toasts](https://www.google.com/design/spec/components/snackbars-toasts.html)

Example:

```javascript
const snackbar = new Snackbar();
snackbar.show("Your draft has been discarded.", {
  action: () => {
    console.log("action");
  },
  actionText: "Action"
});
```

Default:
```
{
  timeout: 3000,
  action: function() {}
}
```

Styling:

| Custom property  | Default |
| ------------- | ------------- |
| --lolli-snackbar-background-color  | #323232  |
| --lolli-snackbar-color  | #EEFF41  |
