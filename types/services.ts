import { servicesData } from "@/Data/services";

export type ServiceCategory = keyof typeof servicesData;

export type ServiceItem = (typeof servicesData)[ServiceCategory][number];
