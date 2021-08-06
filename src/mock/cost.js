export const cost = {
  wangwen: {
    feeTitle: '网络文化经营许可证',
    type: ['音乐娱乐类', '动漫类'],
    subType: ['申请', '续办', '更新'],
    table: [
      {
        subTypeCost: [12000, 8000, 5000],
        multiCost: [
          {
            name: '缺网站',
            fee: 5000,
          },
          {
            name: '缺社保',
            fee: 10000,
          },
          {
            name: '缺音频',
            fee: 10000,
          },
        ],
      },
      {
        subTypeCost: [12000, 8000, 5000],
        multiCost: [
          {
            name: '缺网站',
            fee: 5000,
          },
          {
            name: '缺社保',
            fee: 20000,
          },
          {
            name: '缺动漫作品',
            fee: 20000,
          },
        ],
      },
    ],
  },
  dianxin: {
    feeTitle: '电信业务增值许可证',
    type: ['ICP互联网信息服务类', 'EDI在线数据交易类', 'SP呼叫中心'],
    subType: ['申请', '续办', '变更'],
    table: [
      {
        subTypeCost: [50000, 12000, 8000],
        multiCost: [
          {
            name: '缺网站',
            fee: 5000,
          },
          {
            name: '缺社保',
            fee: 10000,
          },
        ],
        otherSingleCost: [
          {
            name: '有外资成分10%内',
            fee: 20000,
          },
          {
            name: '有外资成分50%内',
            fee: 400000,
          },
        ],
      },
      {
        subTypeCost: [60000, 12000, 8000],
        multiCost: [
          {
            name: '缺网站',
            fee: 5000,
          },
          {
            name: '缺社保',
            fee: 10000,
          },
        ],
        otherSingleCost: [
          {
            name: '有外资成分10%内',
            fee: 20000,
          },
          {
            name: '有外资成分50%内',
            fee: 400000,
          },
        ],
      },
      {
        subTypeCost: [30000, 8000, 3000],
      },
    ],
  },
  guangbo: {
    feeTitle: '电视广播节目制作许可证',
    type: ['电视广播节目制作'],
    subType: ['申请', '续办', '变更'],
    table: [
      {
        subTypeCost: [12000, 8000, 5000],
        multiCost: [
          {
            name: '缺学历和视频',
            fee: 10000,
          },
        ],
      },
    ],
  },
  yanchu: {
    feeTitle: '营业性演出许可证',
    type: ['营业性演出许可证办理'],
    subType: ['申请', '续办', '变更'],
    table: [
      {
        subTypeCost: [8000, 3000, 5000],
        multiCost: [
          {
            name: '缺经纪人资格证书（按年收费）',
            fee: 18000,
          },
        ],
      },
    ],
    remark: `
      <div style="font-size: 12px;line-height: 20px; text-align:left;">
        <p style="color: red"><b>注意事项：</b></p>
        <p><b>1、办好演出许可证后，只能聘请内籍的人</b></p>
        <p><b>2、如果要聘请外籍演员，必须等2年后，2年后才能聘请外籍</b></p>
        <p><b>3、如果注册自贸区，办理许可证可以直接聘请外籍演员</b></p>
      </div>
    `,
  },
  ww_yanchu: {
    feeTitle: '网络文化经营许可证',
    type: ['营业性演出许可证办理'],
    subType: ['申请', '续办', '更新'],
    imgTitle: require('@/assets/images/classifylist/ww_yanchu.png'),
    table: [
      {
        subTypeCost: [8000, 3000, 5000],
        multiCost: [
          {
            name: '缺经纪人资格证书（按年收费）',
            fee: 18000,
          },
        ],
      },
    ],
  },
  ww_dongman: {
    feeTitle: '网络文化经营许可证',
    type: ['动漫类'],
    subType: ['申请', '续办', '更新'],
    imgTitle: require('@/assets/images/classifylist/ww_dongman.png'),
    table: [
      {
        subTypeCost: [12000, 8000, 5000],
        multiCost: [
          {
            name: '缺网站',
            fee: 5000,
          },
          {
            name: '缺社保',
            fee: 20000,
          },
          {
            name: '缺动漫作品',
            fee: 20000,
          },
        ],
      },
    ],
  },
  ww_yinyue: {
    feeTitle: '网络文化经营许可证',
    type: ['音乐娱乐类'],
    subType: ['申请', '续办', '更新'],
    imgTitle: require('@/assets/images/classifylist/ww_yinyue.png'),
    table: [
      {
        subTypeCost: [12000, 8000, 5000],
        multiCost: [
          {
            name: '缺网站',
            fee: 5000,
          },
          {
            name: '缺社保',
            fee: 10000,
          },
          {
            name: '缺音频',
            fee: 10000,
          },
        ],
      },
    ],
  },
  ww_gbbj: {
    feeTitle: '电视广播节目制作许可证',
    type: ['电视广播节目制作'],
    subType: ['申请', '续办', '变更'],
    imgTitle: require('@/assets/images/guangbo/gb_guangbo.png'),
    table: [
      {
        subTypeCost: [12000, 8000, 5000],
        multiCost: [
          {
            name: '缺学历和视频',
            fee: 10000,
          },
        ],
      },
    ],
  },
  ww_gbsh: {
    feeTitle: '电视广播节目制作许可证',
    type: ['电视广播节目制作'],
    subType: ['申请', '续办', '变更'],
    imgTitle: require('@/assets/images/guangbo/gb_guangbo.png'),
    table: [
      {
        subTypeCost: [12000, 8000, 5000],
        multiCost: [
          {
            name: '缺学历和视频',
            fee: 10000,
          },
        ],
      },
    ],
  },
  ww_gbdy: {
    feeTitle: '电视广播节目制作许可证',
    type: ['电视广播节目制作'],
    subType: ['申请', '续办', '变更'],
    imgTitle: require('@/assets/images/guangbo/gb_dianyin.png'),
    table: [
      {
        subTypeCost: [12000, 8000, 5000],
        multiCost: [
          {
            name: '缺学历和视频',
            fee: 10000,
          },
        ],
      },
    ],
  },
  ww_gbds: {
    feeTitle: '电视广播节目制作许可证',
    type: ['电视广播节目制作'],
    subType: ['申请', '续办', '变更'],
    imgTitle: require('@/assets/images/guangbo/gb_dianshi.png'),
    table: [
      {
        subTypeCost: [12000, 8000, 5000],
        multiCost: [
          {
            name: '缺学历和视频',
            fee: 10000,
          },
        ],
      },
    ],
  },
};
// export const cost = {
//   wangwen: {
//     type: ['网络文化经营许可证-音乐娱乐/动漫'],
//     subType: ['申请', '变更', '续办'],
//     table: [
//       [
//         {
//           project: '新办申请',
//           fee1: '¥ 15000.00',
//           fee2: '¥ 13500.00'
//         },
//         {
//           project: '缺少音频/动漫材料',
//           fee1: '¥ 10000.00',
//           fee2: '¥ 9000.00'
//         },
//         {
//           project: '缺少网站',
//           fee1: '¥ 5000.00',
//           fee2: '¥ 4500.00'
//         }
//       ],
//       [
//         {
//           project: '网文变更',
//           fee1: '¥ 10000.00',
//           fee2: '¥ 9000.00'
//         }
//       ],
//       [
//         {
//           project: '网文续办',
//           fee1: '¥ 15000.00',
//           fee2: '¥ 13500.00'
//         },
//         {
//           project: '缺少音频/动漫材料',
//           fee1: '¥ 10000.00',
//           fee2: '¥ 9000.00'
//         },
//         {
//           project: '缺少网站',
//           fee1: '¥ 5000.00',
//           fee2: '¥ 4500.00'
//         }
//       ]
//     ]
//   },
//   dianxin: {
//     type: ['ICP互联网信息服务类', 'EDI在线数据交易类', 'SP呼叫中心'],
//     subType: ['申请', '变更', '续办'],
//     table: [
//       [
//         {
//           project: 'ICP申请',
//           fee1: '¥ 50000.00',
//           fee2: '¥ 45000.00'
//         },
//         {
//           project: '缺少社保',
//           fee1: '¥ 10000.00',
//           fee2: '¥ 9000.00'
//         },
//         {
//           project: '缺少网站',
//           fee1: '¥ 10000.00',
//           fee2: '¥ 9000.00'
//         }
//       ],
//       [
//         {
//           project: 'ICP变更',
//           fee1: '¥ 5000.00',
//           fee2: '¥ 4500.00'
//         }
//       ],
//       [
//         {
//           project: 'ICP续办',
//           fee1: '¥ 10000.00',
//           fee2: '¥ 9000.00'
//         },
//         {
//           project: '缺少社保',
//           fee1: '¥ 10000.00',
//           fee2: '¥ 9000.00'
//         },
//         {
//           project: '缺少网站',
//           fee1: '¥ 10000.00',
//           fee2: '¥ 9000.00'
//         }
//       ],
//       [
//         {
//           project: 'EDI申请',
//           fee1: '¥ 60000.00',
//           fee2: '¥ 54000.00'
//         },
//         {
//           project: '缺少社保',
//           fee1: '¥ 10000.00',
//           fee2: '¥ 9000.00'
//         },
//         {
//           project: '缺少网站',
//           fee1: '¥ 10000.00',
//           fee2: '¥ 9000.00'
//         }
//       ],
//       [
//         {
//           project: 'EDI变更',
//           fee1: '¥ 5000.00',
//           fee2: '¥ 4500.00'
//         }
//       ],
//       [
//         {
//           project: 'EDI续办',
//           fee1: '¥ 10000.00',
//           fee2: '¥ 9000.00'
//         },
//         {
//           project: '缺少社保',
//           fee1: '¥ 10000.00',
//           fee2: '¥ 9000.00'
//         },
//         {
//           project: '缺少网站',
//           fee1: '¥ 10000.00',
//           fee2: '¥ 9000.00'
//         }
//       ]
//     ]
//   },
//   guangbo: {
//     type: ['电视广播节目制作许可证'],
//     subType: ['申请', '变更', '续办'],
//     table: [
//       [
//         {
//           project: '许可证申请',
//           fee1: '¥ 18000.00',
//           fee2: '¥ 16200.00'
//         },
//         {
//           project: '缺少学历',
//           fee1: '¥ 10000.00',
//           fee2: '¥ 9000.00'
//         },
//         {
//           project: '缺少视频',
//           fee1: '¥ 10000.00',
//           fee2: '¥ 9000.00'
//         }
//       ],
//       [
//         {
//           project: '许可证变更',
//           fee1: '¥ 10000.00',
//           fee2: '¥ 9000.00'
//         }
//       ],
//       [
//         {
//           project: '许可证续办',
//           fee1: '¥ 18000.00',
//           fee2: '¥ 16200.00'
//         },
//         {
//           project: '缺少学历',
//           fee1: '¥ 10000.00',
//           fee2: '¥ 9000.00'
//         },
//         {
//           project: '缺少视频',
//           fee1: '¥ 10000.00',
//           fee2: '¥ 9000.00'
//         }
//       ]
//     ]
//   }
// }
