import axios from "axios";

let Url = "https://tablemanage.herokuapp.com/table?";

const fetchData = async (
  shortTemp: any,
  contagion: any,
  emergency: any,
  mileageSurcharge: any,
  primaryQuote: any
) => {
  console.log(shortTemp);
  console.log(contagion);
  console.log(emergency);
  console.log(mileageSurcharge);
  console.log(primaryQuote);

  if (shortTemp) {
    Url = `https://tablemanage.herokuapp.com/table?short_temp=true`;
  } else if (shortTemp == false) {
    Url = `https://tablemanage.herokuapp.com/table?short_temp=false`;
  }
  if (contagion) {
    Url = `https://tablemanage.herokuapp.com/table?contagion=true`;
  } else if (contagion == false) {
    Url = `https://tablemanage.herokuapp.com/table?contagion=false`;
  }
  if (emergency) {
    Url = `https://tablemanage.herokuapp.com/table?emergency=true`;
  } else if (emergency == false) {
    Url = `https://tablemanage.herokuapp.com/table?emergency=false`;
  }
  if (mileageSurcharge) {
    Url = `https://tablemanage.herokuapp.com/table?mileage_surcharge=true`;
  } else if (mileageSurcharge == false) {
    Url = `https://tablemanage.herokuapp.com/table?mileage_surcharge=false`;
  }
  if (primaryQuote) {
    Url = `https://tablemanage.herokuapp.com/table?primary_quote=true`;
  } else if (primaryQuote == false) {
    Url = `https://tablemanage.herokuapp.com/table?primary_quote=false`;
  }
  console.log(Url);
  const response = await axios.get(Url);

  return response;
};

export default fetchData;
