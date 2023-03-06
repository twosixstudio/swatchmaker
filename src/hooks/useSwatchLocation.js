import debounce from "lodash.debounce";
import { useEffect, useState, useCallback } from "react";
import { createSwatch } from "../utils/colorUtils";
import { useQueryParams } from "./useQueryParams";

const defaultSwatch = {
  baseColor: "#8a1ade",
  steps: 10,
  title: "Color",
  sat: 0,
  range: 90,
  offset: 0,
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
    const t = createTitle(defaultSwatch.title, swatches);
    console.log({ t });
    const newSwatchParams = [
      ...(swatchParams || []),
      { ...defaultSwatch, title: createTitle(defaultSwatch.title, swatches) },
    ];
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

  const createTitle = (title, swatches, index = 1) => {
    const titles = swatches.map((s) => s.title);
    const proposedTitle = `${title} ${index}`;
    if (titles.includes(proposedTitle)) {
      return createTitle(title, swatches, index + 1);
    }
    return proposedTitle;
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
