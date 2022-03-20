import axios from "axios";

let Url = "https://tablemanage.herokuapp.com/table?";

const fetchData = async (obj: any) => {
  const response = await axios.get(
    Url +
      `short_temp=${obj.shortTemp}&contagion=${obj.contagion}&emergency=${obj.emergency}&mileage_surcharge=${obj.mileageSurcharge}&primary_quote=${obj.primaryQuote}`
  );
  console.log(obj);
  return response;
};

export default fetchData;
