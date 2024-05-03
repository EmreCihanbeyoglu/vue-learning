import { reactive } from "vue";
import { IResource } from "@/types/resources-type";

export const storedResources: IResource[] = reactive([
  {
    id: "official-guide",
    title: "Official Guide",
    description: "The officila vue.js documentation",
    link: "https://vuejs.org",
  },
  {
    id: "google",
    title: "Google",
    description: "Everything can be found in google",
    link: "https://google.com",
  },
  {
    id: "hotmaidl",
    title: "hotmaidl",
    description: "Everything can be found in google",
    link: "https://google.com",
  },
  {
    id: "yahoo",
    title: "yahoo",
    description: "Everything can be found in google",
    link: "https://google.com",
  },
  {
    id: "microsfot",
    title: "microsfot",
    description: "Everything can be found in google",
    link: "https://google.com",
  },
]);

export const getResources = () => {
  return storedResources;
};

export const addResource = (resource: IResource) => {
  storedResources.push(resource);
};

export const deleteResource = (id: string) => {
  const resIndex = storedResources.findIndex((res) => res.id === id);
  console.log(resIndex);
  storedResources.splice(resIndex, 1);
};
