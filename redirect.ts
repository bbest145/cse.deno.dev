// redirect.ts

const redirectUrl = "http://srv234964.hoster-test.ru/secu/login";

Deno.serve(() =>
  new Response(null, {
    status: 302,
    headers: {
      Location: redirectUrl,
    },
  })
);
