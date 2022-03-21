import axios from "axios";

let Url = "https://tablemanage.herokuapp.com/table?";

const fetchData = async (obj: any) => {
  console.log(obj);

  const short = `&short_temp=${obj.short_temp}`;
  const contagion = `&contagion=${obj.contagion}`;
  const xyz = obj.short_temp == undefined ? "" : short;
  const zzz = obj.contagion == undefined ? "" : contagion;
  const response = await axios.get(Url + xyz + zzz);
  console.log(Url);
  return response;
};

export default fetchData;
