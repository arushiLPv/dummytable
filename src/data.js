const Contentcolumns = [
  { id: 'DeploymentVersionNumber', label: 'Deployment\u00a0Version\u00a0Number', minWidth: 170 , Headers},
  { id: 'DeploymentEnvironment', label: 'Deployment\u00a0Environment', minWidth: 100 },
  {
    id: 'user',
    label: 'User',
    minWidth: 170,
    // align: 'right',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'dateAndTime',
    label: 'Date\u00a0&\u00a0Time',
    minWidth: 170,
    // align: 'right',
    sortType: (a, b) => {
                        // var a1 = new Date(a).getTime();
                        // var b1 = new Date(b).getTime();
                        var a1=a;
                        var b1=b;
                      if(a1<b1)
                      return 1;
                      else if(a1>b1)
                      return -1;
                      else
                      return 0;
                      },
    // format: (value) => value.toLocaleString('en-US'),
  },
 
];