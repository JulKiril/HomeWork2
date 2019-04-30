$(function () {
   let str = '';
   let s1 = $('#s1').text();
   let s2 = $('.s2').text();
   let s3 = $('#second > i').text();
   let s4 = $('q[title="hello"]').text();
   let s5 = $('a[target=_blank]').text();
   let s6 = $('.extra:odd').text();
   str = `${s1}${s2}${s3}${s4}${s5}${s6}`;
   alert(str);
})