const getTopLevelDomain = (email) => {
  const domainPattern = /@(.+)/;
  const domain = domainPattern.exec(email)[1];
  return domain.slice(domain.lastIndexOf("."));
};

export default getTopLevelDomain;
