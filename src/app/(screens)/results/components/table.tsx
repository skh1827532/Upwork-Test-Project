import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const TableComponent = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow></TableRow>
        <TableRow>
          <TableHead>#</TableHead>
          <TableHead>Screens</TableHead>
          <TableHead>Screen views</TableHead>
          <TableHead>Exits</TableHead>
          <TableHead className="text-right">Drop-off rate</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">1</TableCell>
          <TableCell className="font-medium">start</TableCell>
          <TableCell>13</TableCell>
          <TableCell>9</TableCell>
          <TableCell className="text-right">69%</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">2</TableCell>
          <TableCell className="font-medium">marketing-channels</TableCell>
          <TableCell>6</TableCell>
          <TableCell>3</TableCell>
          <TableCell className="text-right">50%</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">1</TableCell>
          <TableCell className="font-medium">start</TableCell>
          <TableCell>13</TableCell>
          <TableCell>9</TableCell>
          <TableCell className="text-right">69%</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">2</TableCell>
          <TableCell className="font-medium">marketing-channels</TableCell>
          <TableCell>6</TableCell>
          <TableCell>3</TableCell>
          <TableCell className="text-right">50%</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">1</TableCell>
          <TableCell className="font-medium">start</TableCell>
          <TableCell>13</TableCell>
          <TableCell>9</TableCell>
          <TableCell className="text-right">69%</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">2</TableCell>
          <TableCell className="font-medium">marketing-channels</TableCell>
          <TableCell>6</TableCell>
          <TableCell>3</TableCell>
          <TableCell className="text-right">50%</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">1</TableCell>
          <TableCell className="font-medium">start</TableCell>
          <TableCell>13</TableCell>
          <TableCell>9</TableCell>
          <TableCell className="text-right">69%</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">2</TableCell>
          <TableCell className="font-medium">marketing-channels</TableCell>
          <TableCell>6</TableCell>
          <TableCell>3</TableCell>
          <TableCell className="text-right">50%</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">1</TableCell>
          <TableCell className="font-medium">start</TableCell>
          <TableCell>13</TableCell>
          <TableCell>9</TableCell>
          <TableCell className="text-right">69%</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">2</TableCell>
          <TableCell className="font-medium">marketing-channels</TableCell>
          <TableCell>6</TableCell>
          <TableCell>3</TableCell>
          <TableCell className="text-right">50%</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">1</TableCell>
          <TableCell className="font-medium">start</TableCell>
          <TableCell>13</TableCell>
          <TableCell>9</TableCell>
          <TableCell className="text-right">69%</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">2</TableCell>
          <TableCell className="font-medium">marketing-channels</TableCell>
          <TableCell>6</TableCell>
          <TableCell>3</TableCell>
          <TableCell className="text-right">50%</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="text-right"></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
