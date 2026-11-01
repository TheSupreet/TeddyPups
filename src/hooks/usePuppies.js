import { useEffect, useState } from "react";
import { getErrorMessage, getPuppies, getPuppy } from "../services/api";

export function usePuppies(params) {
  const [state, setState] = useState({
    puppies: [],
    total: 0,
    loading: true,
    error: "",
  });
  const key = JSON.stringify(params || {});

  useEffect(() => {
    let active = true;
    setState((current) => ({ ...current, loading: true, error: "" }));
    getPuppies(params)
      .then((data) => {
        if (!active) return;
        setState({
          puppies: data.puppies || [],
          total: data.total || 0,
          loading: false,
          error: "",
        });
      })
      .catch((error) => {
        if (!active) return;
        setState({
          puppies: [],
          total: 0,
          loading: false,
          error: getErrorMessage(error),
        });
      });
    return () => {
      active = false;
    };
  }, [key]);

  return state;
}

export function usePuppy(slug) {
  const [state, setState] = useState({
    puppy: null,
    previous: null,
    next: null,
    loading: true,
    error: "",
  });

  useEffect(() => {
    let active = true;
    setState({
      puppy: null,
      previous: null,
      next: null,
      loading: true,
      error: "",
    });
    getPuppy(slug)
      .then((data) => {
        if (!active) return;
        setState({
          puppy: data.puppy,
          previous: data.previous,
          next: data.next,
          loading: false,
          error: "",
        });
      })
      .catch((error) => {
        if (!active) return;
        setState({
          puppy: null,
          previous: null,
          next: null,
          loading: false,
          error: getErrorMessage(error),
        });
      });
    return () => {
      active = false;
    };
  }, [slug]);

  return state;
}
