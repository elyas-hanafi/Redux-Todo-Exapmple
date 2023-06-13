import ColorFilters from './ColorFilters';
import StatusFilter from './StatusFilter';
import RemainingTodos from './RemainingTodos';
import Actions from './Actions';
import CustomColor from './CustomColor';

export default function Footer() {
  return (
    <footer className="footer">
      <Actions />
      <RemainingTodos />
      <StatusFilter />
      <ColorFilters />
      <CustomColor />
    </footer>
  );
}
