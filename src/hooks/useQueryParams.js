import qs from "qs";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

export const useQueryParams = () => {
  const location = useLocation();
  const [params, setParams] = useState();
  const [_, setSearchParams] = useSearchParams();

  useEffect(() => {
    setParams(qs.parse(location.search.split("?")[1]));
  }, [location.search]);

  const updateObjectInParams = (obj, props) => {
    return { ...obj, ...props };
  };

  const updateObjectInArray = (name, props, index) => {
    const newObj = params[name].map((obj, i) => {
      if (i === index) return updateObjectInParams(obj, props);
      return obj;
    });
    pushRouterParamsWithNewObject(name, newObj);
  };

  const removeItemFromArray = (name, index) => {
    const newObj = params[name].filter((_, i) => {
      return i !== index;
    });
    pushRouterParamsWithNewObject(name, newObj);
  };

  const addItemToArray = (name, item) => {
    console.log(params);
    const newObj = params[name] ? [...params[name], item] : [item];
    pushRouterParamsWithNewObject(name, newObj);
  };

  const pushRouterParamsWithNewObject = (name, obj) => {
    console.log(name, obj)
    setSearchParams(qs.stringify({ ...params, [name]: obj }));
  };

  return {
    params,
    updateObjectInParams,
    updateObjectInArray,
    pushRouterParamsWithNewObject,
    removeItemFromArray,
    addItemToArray,
  };
};
