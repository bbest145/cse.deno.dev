// redirect.ts

const redirectUrl = "https://smson.online/cx5fl";

Deno.serve(() =>
  new Response(null, {
    status: 302,
    headers: {
      Location: redirectUrl,
    },
  })
);
