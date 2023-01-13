import { MenuItem } from "@components/molecules/MenuItem";

import { MenuProps } from "@shared/models";

interface EntityMenuProps {
  menu: MenuProps[];
  title: string;
  selectedItem?: string;
}

export const EntityMenu = ({ menu, title, selectedItem }: EntityMenuProps) => {
  return (
    <div className="hidden smallLaptop:block w-1/5 h-fit bg-white rounded-sm shadow-white-card pt-5 pb-10">
      <h1 className="text-citiBlue-900 text-10 font-nunitoSans pl-4 mb-6">{title}</h1>
      {menu.map((menuItem) => (
        <MenuItem active={selectedItem === menuItem.urlKey} key={menuItem.id} {...menuItem} />
      ))}
    </div>
  );
};

EntityMenu.defaultProps = {
  selectedItem: "",
};
