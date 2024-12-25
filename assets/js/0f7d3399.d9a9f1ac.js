"use strict";(self.webpackChunkjuno_docs=self.webpackChunkjuno_docs||[]).push([[1004],{7949:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var t=s(4848),r=s(8453);const o={slug:"/snapshots",sidebar_position:4,title:"Database Snapshots"},i=void 0,a={id:"snapshots",title:"Database Snapshots",description:"To decrease sync times, users may opt to download a Juno database snapshot.",source:"@site/versioned_docs/version-0.9.3/snapshots.md",sourceDirName:".",slug:"/snapshots",permalink:"/0.9.3/snapshots",draft:!1,unlisted:!1,tags:[],version:"0.9.3",sidebarPosition:4,frontMatter:{slug:"/snapshots",sidebar_position:4,title:"Database Snapshots"},sidebar:"main",previous:{title:"Example Configuration",permalink:"/0.9.3/config"},next:{title:"Hardware Requirements",permalink:"/0.9.3/hardware-requirements"}},d={},h=[{value:"Mainnet",id:"mainnet",level:2},{value:"Goerli",id:"goerli",level:2},{value:"Run Juno Using Snapshot",id:"run-juno-using-snapshot",level:2}];function l(n){const e={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"To decrease sync times, users may opt to download a Juno database snapshot.\nAfter downloading a snapshot and starting a Juno node, only recent blocks must be synced."}),"\n",(0,t.jsx)(e.h2,{id:"mainnet",children:"Mainnet"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Version"}),(0,t.jsx)(e.th,{children:"Size"}),(0,t.jsx)(e.th,{children:"Block"}),(0,t.jsx)(e.th,{children:"Download Link"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:">=v0.9.2"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"156 GB"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"519634"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.a,{href:"https://juno-snapshots.nethermind.io/mainnet/juno_mainnet_v0.9.3_519634.tar",children:(0,t.jsx)(e.strong,{children:"juno_mainnet.tar"})})})]})})]}),"\n",(0,t.jsx)(e.h2,{id:"goerli",children:"Goerli"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Version"}),(0,t.jsx)(e.th,{children:"Size"}),(0,t.jsx)(e.th,{children:"Block"}),(0,t.jsx)(e.th,{children:"Download Link"})]})}),(0,t.jsx)(e.tbody,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:">=v0.6.0"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"41.4 GB"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"911580"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.a,{href:"https://juno-snapshots.nethermind.io/goerli/juno_goerli_v0.7.5_911580.tar",children:(0,t.jsx)(e.strong,{children:"juno_goerli.tar"})})})]})})]}),"\n",(0,t.jsx)(e.h2,{id:"run-juno-using-snapshot",children:"Run Juno Using Snapshot"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Download Snapshot"})}),"\n",(0,t.jsx)(e.p,{children:"Fetch a snapshot from one of the provided URLs:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"wget -O juno_mainnet.tar https://juno-snapshots.nethermind.io/mainnet/juno_mainnet_v0.9.3_519634.tar\n"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Prepare Directory"})}),"\n",(0,t.jsxs)(e.p,{children:["Ensure you have a directory where you will store the snapshots. We will use ",(0,t.jsx)(e.code,{children:"$HOME/snapshots"}),"."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"mkdir -p $HOME/snapshots\n"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Extract Tarball"})}),"\n",(0,t.jsxs)(e.p,{children:["Extract the contents of the ",(0,t.jsx)(e.code,{children:".tar"})," file:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"tar -xvf juno_mainnet.tar -C $HOME/snapshots\n"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Run Juno"})}),"\n",(0,t.jsxs)(e.p,{children:["Execute the Docker command to run Juno, ensuring that you're using the correct snapshot path ",(0,t.jsx)(e.code,{children:"$HOME/snapshots/juno_mainnet"}),":"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"docker run -d \\\n   --name juno \\\n   -p 6060:6060 \\\n   -v $HOME/snapshots/juno_mainnet:/var/lib/juno \\\n   nethermind/juno \\\n   --http \\\n   --http-port 6060 \\\n   --http-host 0.0.0.0 \\\n   --db-path /var/lib/juno\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"After following these steps, Juno should be up and running on your machine, utilizing the provided snapshot."})]})}function c(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>i,x:()=>a});var t=s(6540);const r={},o=t.createContext(r);function i(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);