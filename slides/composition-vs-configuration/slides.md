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
lineNumbers: false
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
layout: two-cols
---

# Alert Component

<Logo />

::left::

<div>
  
```jsx
<Alert>This is an alert message</Alert>
```

</div>

::right::

<div>
  <img src="/alert-simple.png" />
</div>

---
layout: two-cols
---

# Alert Component with a Header

<Logo />

::left::

<div>
  
```jsx
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
layout: two-cols
---

# Alert Component with a Variants

<Logo />

::left::

<div>
  
```jsx
<Alert 
  header="Success alert"
  variant="success">
    This is a success alert message
</Alert>
```
```jsx
<Alert 
  header="Danger alert"
  variant="danger">
    This is a success alert message
</Alert>
```

</div>

::right::

<div>
  <img src="/alert-variants.png" />
</div>

---
layout: two-cols
---

# Alert Component with Variants and Icons

<Logo />

::left::

<div>
  
```jsx
<Alert 
  header="Success alert"
  variant="success"
  icon="success">
    This is a success alert message
</Alert>
```

```jsx
<Alert 
  header="Danger alert"
  variant="danger"
  icon="danger">
    This is a danger alert message
</Alert>
```

</div>

::right::

<div>
  <img src="/alert-variants-header-icon.png" />
</div>

---
layout: two-cols
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

<h2 class="text-center">Let's build it</h2>

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

# Next - the Composition approach

<Logo />


---
layout: two-cols
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
layout: two-cols
---

# Alert Component with a Header

<Logo />

::left::

<div>
  
```jsx
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
layout: two-cols
---

# Alert Component with a Variants

<Logo />

::left::

<div>
  
```jsx
<Alert variant="success">
  <AlertContent>
    <AlertHeader>Success header</AlertHeader>
    <AlertBody>
      This is a success alert message.
    </AlertBody>
  </AlertContent>
</Alert>
```

```jsx
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
layout: two-cols
---

# Alert Component with Variants and Icons

<Logo />

::left::

<div>
  
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

```jsx
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
layout: two-cols
---

# Alert Component with Variants and Icons Positions

<Logo />

::left::

<div>
  
```jsx
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
```

```jsx
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

<h2 class="text-center">Let's build it</h2>

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
class:
---

# Which approach to use?

<div class="grid grid-cols-2 gap-12">
  <div>

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
  
  </div>

  <div>

## Composition

```jsx
<Alert variant="success">
  <AlertIcon 
    icon="success"
  />
  <AlertContent>
    <AlertHeader>Success header</AlertHeader>
    <AlertBody>
      This is a success alert message.
    </AlertBody>
  </AlertContent>
</Alert>
```
  
  </div>
</div>

<Logo />

---
layout: center
---

# Why not both?

<Logo />

---
---
# Composition + Configuration

```jsx
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

