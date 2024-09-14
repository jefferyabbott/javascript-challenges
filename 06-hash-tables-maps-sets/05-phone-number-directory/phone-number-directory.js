function phoneNumberDirectory(phoneArr) {
  const phoneDirectory = new Map();
  phoneArr.forEach((record) => {
    const entry = record.split(':');
    phoneDirectory.set(entry[0], entry[1]);
  });
  return phoneDirectory;
}

module.exports = phoneNumberDirectory;
