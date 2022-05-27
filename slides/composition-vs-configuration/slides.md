---
# try also 'default' to start simple
theme: purplin
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: bg-purple-100
# apply any windi css classes to the current slide
class: "text-center"
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: true
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
title: "Composition vs Configuration: How to Build Flexible, Resilient and Future-proof Components"
drawings:
  persist: false
---


# Composition vs Configuration

## How to Build Flexible, Resilient and Future-proof Components

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    By Thomas Findlay
  </span>
</div>

<Logo />


---
---
# About Me - Thomas Findlay

<div class="grid grid-cols-[2fr,1fr]">
  <ul>
    <li>Full-Stack Web & Mobile Developer with 10 years of programming experience</li>
    <li>Co-Owner of Findlay Web Tech</li>
    <li>Mentor & Consultant at Codementor.io</li>
    <li>The author of "React - The Road To Enterprise" & "Vue - The Road To Enterprise" books</li>
    <li>Technical Writer for Telerik and The Road To Enterprise blogs</li>
  </ul>
  <div>
    <img className="w-64" src="/about.jpg">
  </div>
</div>

<Logo />


---
layout: quote
position: center
---

# Building future-proof components is not easy

<Logo />

---
layout: eight-four-cols
---

# Alert Component

<Logo />

::left::

<div>

```jsx{all|2|4-5,7-8|6|13}
const Alert = props => {
  const { text, children } = props
  return (
    <div className={style.alert}>
      <div className={style.alertBody}>
        {text | children}
      </div>
    </div>
  )
}

// Usage
<Alert>This is an alert message</Alert>
```

</div>

::right::

<div>
  <img src="/alert-simple.png" />
</div>

---
layout: eight-four-cols
---

# Alert Component with a Header

<Logo />

::left::

<div>

```jsx{all|2|6-10|19-22}
const Alert = props => {
  const { text, children, header } = props
  return (
    <div className={style.alert}>
      <div className={style.alertContent}>
        {header ? (
          <div className={style.alertHeader}>
            {header}
          </div>) 
        : null}
        <div className={style.alertBody}>
          {text | children}
        </div>
      </div>
    </div>
  )
}
// usage
<Alert 
  header="Alert header">
    This is an alert message
</Alert>
```

</div>

::right::

<div>
  <img src="/alert-with-header.png" />
</div>


---
layout: eight-four-cols
---

# Alert Component with a Variants

<Logo />

::left::

<div>
  
```jsx{all|2|4,7,10|18-22}
const Alert = props => {
  const { text, children, header, variant } = props
  return (
    <div className={clsx(style.alert, style[variant])}>
      <div className={style.alertContent}>
      {header ? (
        <div className={clsx(style.alertHeader, style[variant])}>
          {header}
        </div>) : null}
        <div className={clsx(style.alertBody, style[variant])}>
          {text | children}
        </div>
      </div>
    </div>
  )
}
// Usage
<Alert 
  header="Success alert"
  variant="success">
    This is a success alert message
</Alert>
```
</div>

::right::

<div>
  <img src="/alert-variants.png" />
</div>

---
layout: eight-four-cols
---

# Alert Component with Variants and Icons

<Logo />

::left::

<div>
  
```jsx{all|2|5-12}
const Alert = props => {
  const { text, children, header, variant, icon } = props
  return (
    <div className={clsx(style.alert, style[variant])}>
      {Icons[icon] ? (
        <div className={style.alertIconBox}>
          <img
            src={Icons[icon]}
            className={clsx(style.alertIcon, style[variant])}
          />
        </div>
      ) : null}
      <div className={style.alertContent}>
      {header ? (
        <div className={clsx(style.alertHeader, style[variant])}>
          {header}
        </div>) : null}
        <div className={clsx(style.alertBody, style[variant])}>
          {text | children}
        </div>
      </div>
    </div>
  )
}
```

</div>

::right::

<div>
  <img src="/alert-variants-header-icon.png" />
</div>

---
layout: eight-four-cols
---

# Alert Component with Variants and Icons

<Logo />

::left::

```jsx
// Usage
<Alert 
  header="Success alert"
  variant="success"
  icon="success">
    This is a success alert message
</Alert>

<Alert 
  header="Danger alert"
  variant="danger"
  icon="danger">
    This is a danger alert message
</Alert>
```

::right::

<div>
  <img src="/alert-variants-header-icon.png" />
</div>

---
layout: eight-four-cols
---

# Alert Component with Variants and Icons Positions

<Logo />

::left::

```jsx{all|3|10-12}
const Alert = props => {
  const { 
    text, children, header, variant, icon, iconPosition = "left" 
  } = props;

  const Icon = Icons[icon];

  return (
    <div className={clsx(style.alert, style[variant],
        iconPosition === "right"
          ? "flex flex-row-reverse justify-between pr-5"
          : ""
      )}>
      {/* Alert Icon */}
      {/* Alert Content */}
    </div>
  );
};

export default Alert;
```

::right::

<div>
  <img src="/alert-variants-header-icon-right.png" />
</div>

---
layout: eight-four-cols
---

# Alert Component with Variants and Icons Positions

<Logo />

::left::

<div>
  
```jsx
<Alert 
  header="Success alert"
  variant="success"
  icon="success"
  iconPosition="right">
    This is a success alert message
</Alert>
```

```jsx
<Alert 
  header="Danger alert"
  variant="danger"
  icon="danger"
  iconPosition="right">
    This is a danger alert message
</Alert>
```

</div>

::right::

<div>
  <img src="/alert-variants-header-icon-right.png" />
</div>

---
layout: center
---

# That was the Configuration approach

<Logo />

---
---

# Configuration approach - Pros and Cons

<h2>Pros</h2>

- Quick and easy to use. Different functionality and visual variants can be controlled by configuring props.
- Configuration API via props makes it harder to diverge from the design system and keeps the UI and behaviour consistent.

<h2>Cons</h2>

- Adding more features requires more props and conditional logic. Thus, a component becomes harder to maintain.
- Not easy to extend.
- Not easy to override.
- If a component can't be extended, a new version might need to be built.

<Logo />


---
layout: center
---

# Let's see a different approach

<Logo />


---
layout: eight-four-cols
---

# Alert Component

<Logo />

::left::

<div>

```jsx
<Alert>
  <AlertContent>
    <AlertBody>This is an alert message.</AlertBody>
  </AlertContent>
</Alert>
```

</div>

::right::

<div>
  <img src="/alert-simple.png" />
</div>

---
layout: eight-four-cols
---

# Alert Component

<Logo />

::left::

```jsx{all|2|4-9}
const Alert = props => {
  const { children, className, ...alertProps } = props;
  return (
    <div
      className={clsx(style.alert, className)}
      {...alertProps}
    >
      {children}
    </div>
  );
};
```

::right::

<div>
  <img src="/alert-simple.png" />
</div>

---
layout: eight-four-cols
---

# Alert Content

<Logo />

::left::

```jsx{all|2|4-9}
const AlertContent = props => {
  const { className, children, ...alertContentProps } = props;
  return (
    <div 
      className={clsx(style.alertContent, className)}
      {...alertContentProps}
    >
      {children}
    </div>
  );
};

export default AlertContent;
```

::right::

<div>
  <img src="/alert-simple.png" />
</div>

---
layout: eight-four-cols
---

# Alert Body

<Logo />

::left::

```jsx{all|2|4-9}
const AlertBody = props => {
  const { className, ...alertBodyProps } = props;
  return (
    <div 
      className={clsx(style.alertBody, className)}
      {...alertBodyProps}
    >
      {props.children}
    </div>
  );
};
export default AlertBody;

```

::right::

<div>
  <img src="/alert-simple.png" />
</div>

---
layout: eight-four-cols
---

# Alert Component

<Logo />

::left::

<div>

```jsx
<Alert>
  <AlertContent>
    <AlertBody>This is an alert message.</AlertBody>
  </AlertContent>
</Alert>
```

</div>

::right::

<div>
  <img src="/alert-simple.png" />
</div>

---
layout: eight-four-cols
---

# Alert Component with a Header

<Logo />

::left::

<div>
  
```jsx{all|3}
<Alert>
  <AlertContent>
    <AlertHeader>Alert header</AlertHeader>
    <AlertBody>This is an alert message.</AlertBody>
  </AlertContent>
</Alert>
```

</div>

::right::

<div>
  <img src="/alert-with-header.png" />
</div>


---
layout: eight-four-cols
---

# Alert Component with a Header

<Logo />

::left::

```jsx{all|2|4-9}
const AlertHeader = props => {
  const { children, className, ...alertHeaderProps } = props;
  return (
    <div 
      className={clsx(style.alertHeader,  className)}
      {...alertHeaderProps}  
    >
      {children}
    </div>
  );
};
export default AlertHeader;

```

::right::

<div>
  <img src="/alert-with-header.png" />
</div>


---
layout: eight-four-cols
---

# Alert Component with a Variants

<Logo />

::left::

<div>
  
```jsx{all|1,10}
<Alert variant="success">
  <AlertContent>
    <AlertHeader>Success header</AlertHeader>
    <AlertBody>
      This is a success alert message.
    </AlertBody>
  </AlertContent>
</Alert>

<Alert variant="danger">
  <AlertContent>
    <AlertHeader>Danger header</AlertHeader>
    <AlertBody>
      This is a danger alert message.
    </AlertBody>
  </AlertContent>
</Alert>
```

</div>

::right::

<div>
  <img src="/alert-variants.png" />
</div>

---
layout: eight-four-cols
---

# Alert Component

<Logo />

::left::

```jsx{all|2|4,11,6}
const Alert = props => {
  const { variant, children, className, ...alertProps } = props;
  return (
    <VariantContextProvider variant={variant}>
      <div
        className={clsx(style.alert, style[variant], className)}
        {...alertProps}
      >
        {children}
      </div>
    </VariantContextProvider>
  );
};
```

::right::

<div>
  <img src="/alert-variants.png" />
</div>

---
layout: eight-four-cols
---

## Alert Component Variant Context 

<Logo />

::left::

```jsx{all|3,5|7-13}
import { contextFactory } from "@/context/contextFactory";

const [useVariantContext, VariantContext] = contextFactory();

export { useVariantContext };

const VariantContextProvider = props => {
  return (
    <VariantContext.Provider value={props.variant || ""}>
      {props.children}
    </VariantContext.Provider>
  );
};

export default VariantContextProvider;
```

::right::

<div>
  <img src="/alert-variants.png" />
</div>

---
layout: eight-four-cols
---

## Alert Component Context Factory 

<Logo />

::left::

```jsx{all|4|5-13|14}
import { createContext, useContext } from "react";

export const contextFactory = () => {
  const context = createContext(undefined);
  const useCtx = () => {
    const ctx = useContext(context);
    if (ctx === undefined) {
      throw new Error(
        "useContext must be used inside of a Provider with a value."
      );
    }
    return ctx;
  };
  return [useCtx, context];
};
```

::right::

<div>
  <img src="/alert-variants.png" />
</div>

---
layout: eight-four-cols
---

## Alert Header

<Logo />

::left::

```jsx{all|3,7|10}
import clsx from "clsx";
import style from "../../alert.module.scss";
import { useVariantContext } from "../context/VariantContextProvider";

const AlertHeader = props => {
  const { children, className,  ...alertHeaderProps } = props;
  const variant = useVariantContext();
  return (
    <div 
      className={clsx(style.alertHeader, style[variant], className)}
      {...alertHeaderProps}  
    >
      {children}
    </div>
  );
};
export default AlertHeader;
```

::right::

<div>
  <img src="/alert-variants.png" />
</div>



---
layout: eight-four-cols
---

## Alert Body

<Logo />

::left::

```jsx{all|3,7|10}
import clsx from "clsx";
import style from "../../alert.module.scss";
import { useVariantContext } from "../context/VariantContextProvider";

const AlertBody = props => {
  const { className, ...alertBodyProps } = props;
  const variant = useVariantContext();
  return (
    <div 
      className={clsx(style.alertBody, style[variant], className)}
      {...alertBodyProps}  
    >
      {props.children}
    </div>
  );
};
export default AlertBody;

```

::right::

<div>
  <img src="/alert-variants.png" />
</div>


---
layout: eight-four-cols
---

# Alert Component with Variants and Icons

<Logo />

::left::

<div>
  
```jsx{all|2,12}
<Alert variant="success">
  <AlertIcon icon="success" />
  <AlertContent>
    <AlertHeader>Success header</AlertHeader>
    <AlertBody>
      This is a success alert message.
    </AlertBody>
  </AlertContent>
</Alert>

<Alert variant="danger">
  <AlertIcon icon="danger" />
  <AlertContent>
    <AlertHeader>Danger header</AlertHeader>
    <AlertBody>
      This is a danger alert message.
    </AlertBody>
  </AlertContent>
</Alert>
```

</div>

::right::

<div>
  <img src="/alert-variants-header-icon.png" />
</div>

---
layout: eight-four-cols
---

# Alert Component with Variants and Icons

<Logo />

::left::

<div>
  
```jsx{all|1-6|9,11,12-20|10,17|12-20}
const Icons = {
  success: Success,
  danger: Danger,
  warning: Warning,
  info: Info,
};

const AlertIcon = props => {
  const { className, containerClass, icon } = props;
  const variant = useVariantContext();
  const Icon = Icons[icon];
  return Icon ? (
    <div className={clsx(style.alertIconBox, containerClass)}>
      <img
        src={Icon}
        alt={`Alert ${variant} icon`}
        className={clsx(style.alertIcon, style[variant], className)}
      />
    </div>
  ) : null;
};

export default AlertIcon;

```

</div>

::right::

<div>
  <img src="/alert-variants-header-icon.png" />
</div>


---
layout: eight-four-cols
---

# Alert Component with Variants and Icons Positions

<Logo />

::left::

<div>
  
```jsx{all|8-10,19-21}
<Alert variant="success">
  <AlertContent>
    <AlertHeader>Success header</AlertHeader>
    <AlertBody>
      This is a success alert message.
    </AlertBody>
  </AlertContent>
  <AlertIcon 
    icon="success" 
    containerClass="ml-auto mr-5" 
  />
</Alert>

<Alert variant="danger">
  <AlertContent>
    <AlertHeader>Danger alert</AlertHeader>
    <AlertBody>This is a danger alert.</AlertBody>
  </AlertContent>
  <AlertIcon 
    icon="danger" 
    containerClass="ml-auto mr-5" 
  />
</Alert>
```

</div>

::right::

<div>
  <img src="/alert-variants-header-icon-right.png" />
</div>

---
layout: center
---

# That was the Composition approach

<Logo />

---
---

# Composition approach - Pros and Cons

<h2>Pros</h2>

- Extremely flexible
- It's easy to create different functionality and UI variants and add new building blocks.

<h2>Cons</h2>

- You need to compose the building blocks yourself to create a fully functioning component/feature.
- Takes more time and code.
- It's easy to diverge from the design system and ship inconsistent UI and behaviour.

<Logo />

---
layout: two-cols
---

# Which approach to use?

::left::

  ## Configuration
  
```jsx
<Alert
  variant="success"
  header="Success alert"
  icon="success"
  iconPosition="left"
>
  This is a success alert
</Alert>>
```
  
::right::
## Composition

```jsx
<Alert variant="success">
  <AlertIcon icon="success" />
  <AlertContent>
    <AlertHeader>Success header</AlertHeader>
    <AlertBody>
      This is a success alert message.
    </AlertBody>
  </AlertContent>
</Alert>
```

<Logo />

---
layout: center
---

# Why not both?

<Logo />

---
---
# Composition + Configuration

```jsx{all|2|4-9,20|10-15,7|16-19|17|18}
const Alert = props => {
  const { children, text, header, variant, icon, iconPosition } = props;
  return (
    <BaseAlert
      variant={variant}
      className={
        iconPosition === "right" ? "flex flex-row-reverse justify-between" : ""
      }
    >
      {icon ? (
        <AlertIcon
          icon={icon}
          className={iconPosition === "right" ? "ml-auto mr-5" : ""}
        />
      ) : null}
      <AlertContent>
        {header ? <AlertHeader>{header}</AlertHeader> : null}
        {text || children ? <AlertBody>{text || children}</AlertBody> : null}
      </AlertContent>
    </BaseAlert>
  );
};

```

<Logo />


---
---

# Summary

- Composition approach offers more flexibility, but requires knowledge of how to compose the building blocks.
- Configuration approach is less flexible, but is simpler to use and makes it easier to stick to the design system.
- We can combine both approaches to get the best of both worlds.


<h3 class="mt-16">You can find code examples here:</h3>

<div class="pt-4">
  <a href="https://github.com/ThomasFindlay/composition-vs-configuration" target="_blank">https://github.com/ThomasFindlay/composition-vs-configuration</a>
</div>

---
---

# That's it

<div class="flex justify-between">
  <div>
    <h2 class="font-bold block mb-4">React - The Road To Enterprise</h2>
    <span class="mt-4 mb-4 text-purple-800 block">The Advanced React Book</span>
    <div class="flex items-start gap-4">
      <img class="w-42" src="/react-book-cover.png" />
      <div>
        <ul class="!mt-0 text-sm">
          <li class="">Local & Global State Management Patterns</li>
          <li class="">Scalable Project Architecture</li>
          <li class="">Performance Optimisation</li>
          <li class="">API handling with API Layer and React Query</li>
          <li class="">Advanced Component Patterns</li>
          <li class="">Testing & Security</li>
          <li class="">SSG, SSR and ISR with Next.js</li>
          <li class="">and much more!</li>
        </ul>
      </div>
    </div>
    <div class="bg-purple-100 mt-4 p-4 rounded-lg">
      <a class="text-sm inline-block no-underline !border-none text-purple-700" href="https://theroadtoenterprise.com/books/react-the-road-to-enterprise" target="_blank">
        https://theroadtoenterprise.com/books/react-the-road-to-enterprise
      </a>
    </div>
  </div>
  <div>
    <div>
      <h2 class="font-bold block">Get in Touch</h2>
      <ul class="p-4 rounded-2xl text-sm space-y-3 pl-0">  
            <li class="list-none !ml-0"> 
        <span class="text-purple-700">Twitter</span> <br />
          <a class="!border-none" href="https://twitter.com/thomasfindlay94" target="_blank">https://twitter.com/thomasfindlay94</a></li>
        <li class="list-none !ml-0">
          <span class="text-purple-700">LinkedIn</span> <br />
          <a class="!border-none" href="https://www.linkedin.com/in/thomas-findlay/" target="_blank">https://www.linkedin.com/in/thomas-findlay/</a></li>
        <li class="list-none !ml-0"><span class="text-purple-700">Codementor</span> <br />
          <a class="!border-none" href="https://www.codementor.io/@thomas478" target="_blank">https://www.codementor.io/@thomas478</a></li>
           <li class="list-none !ml-0"><span class="text-purple-700">The Road To Enterprise</span> <br />
          <a class="!border-none" href="https://theroadtoenterprise.com" target="_blank">https://theroadtoenterprise.com</a></li>   
      </ul>
    </div>
  </div>
</div>

<Logo />

