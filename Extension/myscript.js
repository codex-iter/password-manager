chrome.runtime.onMessage.addListener (function (request, sender, sendResponse) {
  if (
    document.getElementsByTagName ('title')[0].innerHTML ==
    'Facebook – log in or sign up'
  ) {
    request.message === 'start';
    document.getElementById ('email').value = request.email;
    document.getElementById ('pass').value = request.pass;
  } else if (
    document.getElementsByTagName ('title')[0].innerHTML ==
    'LinkedIn: Log In or Sign Up'
  ) {
    request.message === 'start';
    document.getElementById ('login-email').value = request.email;
    document.getElementById ('login-password').value = request.pass;
  } else if (
    document.getElementsByTagName ('title')[0].innerHTML == 'Instagram'
  ) {
    request.message === 'start';
    document.getElementsByName ('username').value = request.email;
    document.getElementsByName ('password').value = request.pass;
  }
});
