function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}
truncate('Вот, что мне хотелось бы сказать на эту тему:', 7) === 'Вот, ч…';

truncate('Всем привет!', 20) === 'Всем привет!';