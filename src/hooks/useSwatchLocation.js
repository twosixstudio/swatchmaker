import debounce from "lodash.debounce";
import { useEffect, useState, useCallback } from "react";
import { createSwatch } from "../utils/colorUtils";
import { useQueryParams } from "./useQueryParams";

const defaultSwatch = {
  baseColor: "#e8e8e8",
  steps: 10,
  title: "Change me",
};

export const useSwatchLocation = () => {
  const [swatches, setSwatches] = useState([]);
  const [swatchParams, setSwatchParams] = useState([]);
  const { params, pushRouterParamsWithNewObject } = useQueryParams();

  useEffect(() => {
    setSwatchParams(params?.sw);
  }, [params]);

  useEffect(() => {
    if (swatchParams) {
      setSwatches(
        swatchParams?.map((swatch) => ({
          pallete: createSwatch({ ...swatch }),
          ...swatch,
        }))
      );
    }
  }, [swatchParams]);

  const debouncedUpdate = useCallback(
    debounce(
      (newSwatchParams) => pushRouterParamsWithNewObject("sw", newSwatchParams),
      500
    ),
    []
  );

  const addSwatch = () => {
    const newSwatchParams = [...(swatchParams || []), defaultSwatch];
    setSwatchParams(newSwatchParams);
    debouncedUpdate(newSwatchParams);
  };

  const removeSwatch = (index) => {
    const newSwatchParams = swatchParams.filter((_, i) => i !== index);
    setSwatchParams(newSwatchParams);
    debouncedUpdate(newSwatchParams);
  };

  const editValue = (props, index) => {
    const newSwatchParams = swatchParams.map((item, i) => {
      if (index === i) return { ...item, ...props };
      return item;
    });
    setSwatchParams(newSwatchParams);
    debouncedUpdate(newSwatchParams);
  };

  return {
    swatchParams,
    setSwatchParams,
    swatches,
    addSwatch,
    removeSwatch,
    editValue,
  };
};
