import React, {Component} from 'react';
import Link from './Link';
import { VisibilityFilters } from '../redux/actions';

const Footer = ({ toggleFilter, activeFilter }) => {
  console.log('activeFIlter', activeFilter)
  return (
    <div>
      <span>Show: </span>
      <Link 
        filter={VisibilityFilters.SHOW_ALL}
        onClick={() => toggleFilter(VisibilityFilters.SHOW_ALL)}
        active={VisibilityFilters.SHOW_ALL === activeFilter}
      >
        All
      </Link>
      <Link 
        filter={VisibilityFilters.SHOW_ACTIVE}
        onClick={() => toggleFilter(VisibilityFilters.SHOW_ACTIVE)}
        active={VisibilityFilters.SHOW_ACTIVE === activeFilter}
      >
        Active
      </Link>
      <Link 
        filter={VisibilityFilters.SHOW_COMPLETED}
        onClick={() => toggleFilter(VisibilityFilters.SHOW_COMPLETED)}
        active={VisibilityFilters.SHOW_COMPLETED === activeFilter}
      >
        Completed
      </Link>
    </div>
  );
}
export default Footer
