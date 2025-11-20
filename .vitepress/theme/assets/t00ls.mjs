// 链接数据
const linkData = [
  // 推荐数据
  {
    type: "rec",
    typeName: "推荐",
    typeDesc: "安全社区、论坛",
    typeList: [
      {
        name: "T00ls",
        avatar: "https://t00ls.com/static/images/logo.png",
        desc: "T00ls",
        url: "https://t00ls.com/",
      },
      {
        name: "Freebuf",
        avatar: "https://www.freebuf.com/favicon.ico",
        desc: "分享技术与科技生活",
        url: "https://www.freebuf.com/",
      },
      {
        name: "奇安信攻防社区",
        avatar: "https://forum.butian.net/ico.png",
        desc: "奇安信攻防社区,白帽子,漏洞,安全技术,360,补天,安全研究,攻防",
        url: "https://forum.butian.net//",
      },
      {
        name: "CT Stack 安全社",
        avatar: "https://stack.chaitin.com/favicon.ico",
        desc: "CT Stack 安全社区致力于守护安全工具成长，秉持探索与共享的理念，收录更多优质工具。规范安全工具标准，与之共生共赢",
        url: "https://stack.chaitin.com/",
      },
      {
        name: "SecQuan",
        avatar: "https://www.secquan.org/favicon.ico",
        desc: "分享知识 探讨问题 共同进步 一起学习 这是一个新锐白帽子汇聚地",
        url: "https://www.secquan.org/",
      },   
      {
        name: "先知社区",
        avatar: "https://xz.aliyun.com/assets/pc/images/icon-search.png",
        desc: "先知社区,先知平台,安全社区,网络安全,阿里云先知,白帽社区",
        url: "https://xz.aliyun.com/",
      },   
      {
        name: "i春秋论坛",
        avatar: "https://favicon.rss.ink/v1/aHR0cHM6Ly9iYnMuaWNodW5xaXUuY29t",
        desc: "i春秋论坛|白帽黑客论坛|网络渗透技术|网站安全|移动安全|通信安全",
        url: "https://bbs.ichunqiu.com/",
      }, 
      {
        name: "51CTO.COM",
        avatar: "https://s5-media.51cto.com/cms/static/favicon.ico",
        desc: "中国知名的数字化人才学习平台和技术社区",
        url: "https://www.51cto.com/",
      },
      {
        name: "安全脉搏",
        avatar: "https://favicon.rss.ink/v1/aHR0cHM6Ly93d3cuc2VjcHVsc2UuY29t",
        desc: "安全脉搏 | 分享技术，悦享品质",
        url: "https://www.secpulse.com/",
      },
      {
        name: "安全KER - 安全资讯平台",
        avatar: "https://s3.ssl.qhres2.com/static/02b5158bbb6adeac.ico",
        desc: "安全媒体,安全资讯,安全知识, 安全热点,安全招聘,安全趋势,移动安全,网站安全,终端安全,无线安全,工控安全,物联网安全,WEB安全,系统安全,网络安全,区块链安全,安全活动,信息安全,安全预警,安全会议",
        url: "https://www.anquanke.com/",
      }, 
      {
        name: "吾爱漏洞",
        avatar: "https://favicon.rss.ink/v1/aHR0cDovL3d3dy41MmJ1Zy5jbg==",
        desc: "吾爱漏洞，国内最专业的网络黑客攻防技术学习基地，免费最新的黑客教程分享！	",
        url: "http://www.52bug.cn/",
      },
      {
        name: "看雪安全论坛",
        avatar: "https://dh.aabyss.cn/img/kanxue.ico",
        desc: "致力于PC/移动/智能设备安全研究社区",
        url: "https://bbs.kanxue.com/",
      }, 
      {
        name: "圈子社区",
        avatar: "https://dh.aabyss.cn/img/secquan.ico",
        desc: "一个新锐白帽子汇聚地",
        url: "https://www.secquan.org/",
      }, 
      {
        name: "90Sec",
        avatar: "https://dh.aabyss.cn/img/forum.90sec.com.png",
        desc: "专注于网络空间安全、前沿技术研究",
        url: "https://forum.90sec.com/",
      }, 
      {
        name: "嘶吼",
        avatar: "https://dh.aabyss.cn/img/www.4hou.com.ico",
        desc: "回归最本质的信息安全,互联网安全新媒体",
        url: "https://www.4hou.com/",
      }, 
      {
        name: "IOTsec-Zone",
        avatar: "https://dh.aabyss.cn/img/iotsec-zone.svg",
        desc: "IOTsec-Zone 物联网安全社区",
        url: "https://www.iotsec-zone.com/",
      }, 
      {
        name: "CT Stack安全社区",
        avatar: "https://dh.aabyss.cn/img/stack.chaitin.com.ico",
        desc: "长亭科技旗下的安全社区",
        url: "https://stack.chaitin.com/",
      }, 
    ],
  },
   {
    type: "rec",
    typeName: "安全工具",
    typeDesc: "网络安全工具相关推荐",
    typeList: [
      {
        name: "NMAP",
        avatar: "https://favicon.rss.ink/v1/aHR0cHM6Ly9ubWFwLm9yZw==",
        desc: "NMAP",
        url: "https://nmap.org/",
      },
      {
        name: "SQLMAP",
        avatar: "https://favicon.rss.ink/v1/aHR0cHM6Ly9zcWxtYXAub3Jn",
        desc: "SQLMAP",
        url: "https://sqlmap.org/",
      },
      {
        name: "Burpsuite",
        avatar: "https://favicon.rss.ink/v1/aHR0cHM6Ly9wb3J0c3dpZ2dlci5uZXQ=",
        desc: "Burpsuite",
        url: "https://portswigger.net/burp",
      }, 
      {
        name: "Metasploit",
        avatar: "https://www.metasploit.com/includes/images/favicon.ico",
        desc: "Metasploit",
        url: "https://www.metasploit.com/",
      }, 
      {
        name: "AWVS",
        avatar: "https://www.acunetix.com/wp-content/themes/acunetix/ico/favicon.png",
        desc: "AWVS",
        url: "https://www.acunetix.com/",
      }, 
      {
        name: "Nessus Pro",
        avatar: "https://www.tenablecloud.cn/themes/custom/tenable/images-new/favicons/favicon.ico",
        desc: "Nessus Pro",
        url: "https://www.tenablecloud.cn/products/nessus/nessus-professional?tns_redirect=true",
      },
      {
        name: "kALI",
        avatar: "https://www.kali.org/images/favicon.png",
        desc: "kali",
        url: "https://www.kali.org/docs/",
      },      
      {
        name: "棱角",
        avatar: "https://forum.ywhack.com/images/default/logo.svg",
        desc: "棱角",
        url: "https://forum.ywhack.com/bountytips.php?tools",
      },    
      {
        name: "Yak",
        avatar: "https://www.yaklang.com/img/logo.png",
        desc: "Yak",
        url: "https://www.yaklang.com/",
      }, 
    ],
  },
  {
    type: "rec",
    typeName: "国内漏洞平台",
    typeDesc: "安全社区、论坛",
    typeList: [
      {
        name: "教育漏洞报告平台",
        avatar: "https://dh.aabyss.cn/img/src.sjtu.edu.cn.ico",
        desc: "教育漏洞报告平台-EduSRC",
        url: "https://src.sjtu.edu.cn/list/",
      },
      {
        name: "开源安全情报预警",
        avatar: "https://www.oscs1024.com/oscs.svg",
        desc: "OSCS | 开源软件供应链安全",
        url: "https://www.oscs1024.com/cm",
      },
      {
        name: "360网络安全响应中心",
        avatar: "https://dh.aabyss.cn/img/cert.360.cn.ico",
        desc: "360CERT",
        url: "https://cert.360.cn/",
      }, 
      {
        name: "Seebug漏洞平台",
        avatar: "https://dh.aabyss.cn/img/zdcy.png",
        desc: "知道创宇Seebug漏洞平台",
        url: "https://www.seebug.org/",
      }, 
      {
        name: "国家信息安全漏洞共享平台",
        avatar: "https://dh.aabyss.cn/img/CNVD.ico",
        desc: "国家信息安全漏洞共享平台",
        url: "https://www.cnvd.org.cn/",
      }, 
      {
        name: "国家信息安全漏洞库",
        avatar: "https://dh.aabyss.cn/img/CNNVD.ico",
        desc: "国家信息安全漏洞库",
        url: "https://www.cnnvd.org.cn/",
      },
      {
        name: "绿盟漏洞库",
        avatar: "https://dh.aabyss.cn/img/nsfocus.ico",
        desc: "NSFOCUS绿盟漏洞库",
        url: "https://www.nsfocus.net/index.php",
      },      
      {
        name: "360众测平台",
        avatar: "https://dh.aabyss.cn/img/360zhongce.ico",
        desc: "360面向企业的白帽子众测平台",
        url: "https://zhongce.360.net/",
      },    
      {
        name: "阿里云漏洞库",
        avatar: "https://avd.aliyun.com/static/favicon.ico",
        desc: "及时响应与收敛云上高危漏洞",
        url: "https://avd.aliyun.com/",
      }, 
    ],
  }
]; 
export default linkData;
