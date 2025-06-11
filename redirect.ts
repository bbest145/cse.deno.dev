// redirect.ts

const redirectUrl = "http://srv235087.hoster-test.ru/midland1/";

Deno.serve(() =>
  new Response(null, {
    status: 302,
    headers: {
      Location: redirectUrl,
    },
  })
);
