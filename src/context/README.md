# Theme Provider
Create using React Context API, Using the `useContext()` react hook.

## Wrapper

``` javascript
<ThemeProvider>
    ...
  <Component />
</ThemeProvider>
```

## Theme Access

``` javascript
import React, { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeProvider';

export default Component = () => {
 const { theme, themeStyles } = useContext(ThemeContext);

 return <h1 style={themeStyles}>{theme}</h1>;
};
```
# Light Theme
![image](https://user-images.githubusercontent.com/20147650/79332352-b148b280-7eea-11ea-9610-f2abefea1139.png)

# Dark Theme
![image](https://user-images.githubusercontent.com/20147650/79332383-be65a180-7eea-11ea-8dae-4c89d45f550a.png)
