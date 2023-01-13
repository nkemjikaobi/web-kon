/* eslint-disable no-unused-vars */
import { ElementType } from "react";

export interface CustomMobileMenuProps {
  customMobileMenu: ElementType<{ onClose: () => void }>;
}

export interface MenuProps {
  id: number;
  icon?: string;
  name: string;
  route: string;
  urlKey?: string;
}

export interface MetaProps {
  pages: number;
  prev: boolean;
  next: boolean;
  total: number;
  page: number;
  limit: number;
}

export interface ReservationPageProps {
  reservationId: string;
}

export enum Portal {
  CUSTOMER = "customer",
}
