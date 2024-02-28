# Part - 1

## Starting of the Application - 25 Jan 2024

### The Home page

When user send request to `/` then server respond a static html code which is just preloader

```jsx
<div className="h-screen w-screen flex items-center justify-center">
   <Image
      src="/assets/img/logo.png"
      alt="Pese logo"
      className="h-36 sm:h-48"
      width={500}
      height={500}
   />
</div>
```

After that a component name `<AuthChecker/>` loads lazily which contains a useEffect hook that checks that user is authenticated or not [Read more - <AuthChecker/>](/docs/components/home/AuthChecker.md)

If authenticated : go to `/otp`;
else: go to `/services` or default page;

```jsx
<>
   <Preloader /> {/* Just a html content */}
   <AuthChecker /> {/* That loads lazily and contains js function that checks the auth*/}
</>
```
