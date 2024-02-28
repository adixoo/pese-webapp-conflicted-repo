# Otp Verify

## When user submit forms

1. Set Form status to default `setOtpMatched(true);`
2. Get the values from the input
3. Now perform api request that send otp to server and matches it.
4. If otp matched and user is already sign up then the api also send authorized headers
5. If not matched then show the error
