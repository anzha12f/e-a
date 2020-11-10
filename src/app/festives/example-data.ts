import { IMusicFestivals } from '../models/musicfestivals.model';

export const data1 = [
  {
    name: 'ABC Music Management Group',
    type: 'folder',
    recordLabel: '',
    children: [
      {
      name: 'Band A',
      type: 'folder',
      recordLabel: '',
      children: [
        {name: 'Band A',  type: 'file', recordLabel: 'Festival 1' },
        {name: 'Band A',  type: 'file', recordLabel: 'Festival 2' }
      ]
    },
    {
      name: 'Band B',
      type:'folder',
      recordLabel: '',
      children: [
        {name: 'Band B', type:'file',  recordLabel: 'Festival 3' },
      ]
    },

    ]
  }
];

/** Example file/folder data. */
export const files = [
  {
    name: 'components',
    type: 'folder',
    children: [
      {
        name: 'src',
        type: 'folder',
        children: [
          {
            name: 'cdk',
            type: 'folder',
            children: [
              { name: 'package.json', type: 'file' },
              { name: 'BUILD.bazel', type: 'file' },
            ]
          },
          { name: 'material', type: 'folder' }
        ]
      }
    ]
  },
  {
    name: 'angular',
    type: 'folder',
    children: [
      {
        name: 'packages',
        type: 'folder',
        children: [
          { name: '.travis.yml', type: 'file' },
          { name: 'firebase.json', type: 'file' }
        ]
      },
      { name: 'package.json', type: 'file' }
    ]
  },
  {
    name: 'angularjs',
    type: 'folder',
    children: [
      { name: 'gulpfile.js', type: 'file' },
      { name: 'README.md', type: 'file' }
    ]
  }
];

export const data: IMusicFestivals[] = [
  {
  name: 'ABC Music Management Group',
  band: [
    {
    name: 'Band A',
    recordLabel: 'Festival 1'
  },
  {
    name: 'Band A',
    recordLabel: 'Festival 2'
  },
  {
    name: 'Band B',
    recordLabel: 'Festival 3'
  },
  ]
},
{
  name: 'The Best Group',
  band: [
    {
    name: 'Band B34',
    recordLabel: 'Festival 12'
  },
  {
    name: 'Band 35',
    recordLabel: 'Festival 22'
  },
  {
    name: 'Band 35',
    recordLabel: 'Festival 34'
  },
  ]
},
];
