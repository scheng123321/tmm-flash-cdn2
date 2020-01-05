var request = new XMLHttpRequest();
request.open('GET', 'https://counter-sc.herokuapp.com/increment?tag=rawgit', true);
request.send(null);