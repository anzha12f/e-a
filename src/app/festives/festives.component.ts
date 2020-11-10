import { Component } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { groupBy, chain, forEach} from 'lodash';
import { GetDataService } from '../services/get-data.service';
import { take, tap } from 'rxjs/operators';
/** File node data with possible child nodes. */
export interface FileNode {
  name: string;
  type: string;
  recordLabel: string;
  children?: FileNode[];
}

/**
 * Flattened tree node that has been created from a FileNode through the flattener. Flattened
 * nodes include level index and whether they can be expanded or not.
 */
export interface FlatTreeNode {
  name: string;
  type: string;
  recordLabel: string;
  level: number;
  expandable: boolean;
}

@Component({
  selector: 'app-festives',
  templateUrl: './festives.component.html',
  styleUrls: ['./festives.component.css']
})
export class FestivesComponent {

  /** The TreeControl controls the expand/collapse state of tree nodes.  */
  treeControl: FlatTreeControl<FlatTreeNode>;

  /** The TreeFlattener is used to generate the flat list of items from hierarchical data. */
  treeFlattener: MatTreeFlattener<FileNode, FlatTreeNode>;

  /** The MatTreeFlatDataSource connects the control and flattener to provide data. */
  dataSource: MatTreeFlatDataSource<FileNode, FlatTreeNode>;

  array1: Array<any> = [];

  constructor(private getDataService: GetDataService) {
    this.treeFlattener = new MatTreeFlattener(
      this.transformer,
      this.getLevel,
      this.isExpandable,
      this.getChildren);

    this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
    this.getDataService.getMusicFestives().pipe(
      tap(data => {
        data.map(z => {
          this.array1.push({
            name: z.name,
            type: 'folder',
            recordLabel: '',
            children: this.getBand(z.band)
          });
        });
        this.dataSource.data = this.array1;
        }),
      take(1)
    )
     .subscribe();
  }

  /** Transform the data to something the tree can read. */
  transformer(node: FileNode, level: number) {
    return {
      name: node.name,
      type: node.type,
      recordLabel: node.recordLabel,
      level,
      expandable: !!node.children
    };
  }

  /** Get the level of the node */
  getLevel(node: FlatTreeNode) {
    return node.level;
  }

  /** Get whether the node is expanded or not. */
  isExpandable(node: FlatTreeNode) {
    return node.expandable;
  }

  /** Get whether the node has children or not. */
  hasChild(index: number, node: FlatTreeNode) {
    return node.expandable;
  }

  /** Get the children for the node. */
  getChildren(node: FileNode): FileNode[] | null | undefined {
    return node.children;
  }

  /** Transform data to groups  */
  getBand(bandData) {
   return  chain(bandData)
    .groupBy('name')
    .map((children, name) => ({ children, name }))
    .value();
  }
}
