var Kl="160";var Lf=0,zc=1,If=2;var Wo=1,Df=2,Yn=3,di=0,Xe=1,Je=2;var Pe=0,ls=1,Kn=2,Bc=3,Hc=4,Jl=5,Sn=100,Uf=101,Nf=102,kc=103,Vc=104,ws=200,Of=201,Ff=202,zf=203,ll=204,cl=205,Xo=206,Bf=207,qo=208,Hf=209,kf=210,Vf=211,Gf=212,Wf=213,Xf=214,qf=0,Yf=1,Zf=2,co=3,$f=4,Kf=5,Jf=6,jf=7,vu=0,Qf=1,td=2,fi=0,jl=1,Ql=2,tc=3,fr=4,ed=5,ec=6;var xu=300,us=301,fs=302,js=303,hl=304,Yo=306,cn=1e3,mn=1001,Qs=1002,we=1003,Gc=1004;var Ra=1005;var on=1006,nd=1007;var Di=1008;var Bn=1009,id=1010,sd=1011,nc=1012,_u=1013,hi=1014,ui=1015,Ie=1016,yu=1017,Mu=1018,$n=1020,rd=1021,gn=1023,od=1024,ad=1025,Li=1026,pi=1027,ld=1028,Su=1029,cd=1030,bu=1031,Eu=1033,Ca=33776,Pa=33777,La=33778,Ia=33779,Wc=35840,Xc=35841,qc=35842,Yc=35843,Tu=36196,Zc=37492,$c=37496,Kc=37808,Jc=37809,jc=37810,Qc=37811,th=37812,eh=37813,nh=37814,ih=37815,sh=37816,rh=37817,oh=37818,ah=37819,lh=37820,ch=37821,Da=36492,hh=36494,uh=36495,hd=36283,fh=36284,dh=36285,ph=36286;var ho=2300,uo=2301,Ua=2302,mh=2400,gh=2401,vh=2402;var wu=3e3,Ii=3001,ud=3200,dr=3201,ic=0,fd=1,bn="",oe="srgb",Jn="srgb-linear",sc="display-p3",Zo="display-p3-linear",fo="linear",le="srgb",po="rec709",mo="p3";var Hi=7680;var xh=519,dd=512,pd=513,md=514,Au=515,gd=516,vd=517,xd=518,_d=519,_h=35044;var yh="300 es",ul=1035,Zn=2e3,go=2001,mi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},$e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mh=1234567,Xs=Math.PI/180,tr=180/Math.PI;function Bi(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($e[s&255]+$e[s>>8&255]+$e[s>>16&255]+$e[s>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]).toLowerCase()}function He(s,t,e){return Math.max(t,Math.min(e,s))}function rc(s,t){return(s%t+t)%t}function yd(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Md(s,t,e){return s!==t?(e-s)/(t-s):0}function qs(s,t,e){return(1-e)*s+e*t}function Sd(s,t,e,n){return qs(s,t,1-Math.exp(-e*n))}function bd(s,t=1){return t-Math.abs(rc(s,t*2)-t)}function Ed(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Td(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function wd(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Ad(s,t){return s+Math.random()*(t-s)}function Rd(s){return s*(.5-Math.random())}function Cd(s){s!==void 0&&(Mh=s);let t=Mh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Pd(s){return s*Xs}function Ld(s){return s*tr}function fl(s){return(s&s-1)===0&&s!==0}function Id(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function vo(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Dd(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*m,l*d,a*c);break;case"YXY":s.set(l*d,a*h,l*m,a*c);break;case"ZYZ":s.set(l*m,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function is(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function sn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var un={DEG2RAD:Xs,RAD2DEG:tr,generateUUID:Bi,clamp:He,euclideanModulo:rc,mapLinear:yd,inverseLerp:Md,lerp:qs,damp:Sd,pingpong:bd,smoothstep:Ed,smootherstep:Td,randInt:wd,randFloat:Ad,randFloatSpread:Rd,seededRandom:Cd,degToRad:Pd,radToDeg:Ld,isPowerOfTwo:fl,ceilPowerOfTwo:Id,floorPowerOfTwo:vo,setQuaternionFromProperEuler:Dd,normalize:sn,denormalize:is},at=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(He(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ee=class s{constructor(t,e,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],g=i[0],v=i[3],p=i[6],_=i[1],x=i[4],M=i[7],A=i[2],b=i[5],T=i[8];return r[0]=o*g+a*_+l*A,r[3]=o*v+a*x+l*b,r[6]=o*p+a*M+l*T,r[1]=c*g+h*_+u*A,r[4]=c*v+h*x+u*b,r[7]=c*p+h*M+u*T,r[2]=f*g+d*_+m*A,r[5]=f*v+d*x+m*b,r[8]=f*p+d*M+m*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,m=e*u+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/m;return t[0]=u*g,t[1]=(i*c-h*n)*g,t[2]=(a*n-i*o)*g,t[3]=f*g,t[4]=(h*e-i*l)*g,t[5]=(i*r-a*e)*g,t[6]=d*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Na.makeScale(t,e)),this}rotate(t){return this.premultiply(Na.makeRotation(-t)),this}translate(t,e){return this.premultiply(Na.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Na=new ee;function Ru(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function xo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ud(){let s=xo("canvas");return s.style.display="block",s}var Sh={};function Ys(s){s in Sh||(Sh[s]=!0,console.warn(s))}var bh=new ee().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Eh=new ee().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ur={[Jn]:{transfer:fo,primaries:po,toReference:s=>s,fromReference:s=>s},[oe]:{transfer:le,primaries:po,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Zo]:{transfer:fo,primaries:mo,toReference:s=>s.applyMatrix3(Eh),fromReference:s=>s.applyMatrix3(bh)},[sc]:{transfer:le,primaries:mo,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Eh),fromReference:s=>s.applyMatrix3(bh).convertLinearToSRGB()}},Nd=new Set([Jn,Zo]),re={enabled:!0,_workingColorSpace:Jn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Nd.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;let n=Ur[t].toReference,i=Ur[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Ur[s].primaries},getTransfer:function(s){return s===bn?fo:Ur[s].transfer}};function cs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Oa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var ki,_o=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ki===void 0&&(ki=xo("canvas")),ki.width=t.width,ki.height=t.height;let n=ki.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ki}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=xo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=cs(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(cs(e[n]/255)*255):e[n]=cs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Od=0,yo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=Bi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Fa(i[o].image)):r.push(Fa(i[o]))}else r=Fa(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Fa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?_o.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Fd=0,je=class s extends mi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=mn,i=mn,r=on,o=Di,a=gn,l=Bn,c=s.DEFAULT_ANISOTROPY,h=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=Bi(),this.name="",this.source=new yo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ii?oe:bn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case cn:t.x=t.x-Math.floor(t.x);break;case mn:t.x=t.x<0?0:1;break;case Qs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case cn:t.y=t.y-Math.floor(t.y);break;case mn:t.y=t.y<0?0:1;break;case Qs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===oe?Ii:wu}set encoding(t){Ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ii?oe:bn}};je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=xu;je.DEFAULT_ANISOTROPY=1;var ve=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],g=l[2],v=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(m-v)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(m+v)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,M=(d+1)/2,A=(p+1)/2,b=(h+f)/4,T=(u+g)/4,I=(m+v)/4;return x>M&&x>A?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=b/n,r=T/n):M>A?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=b/i,r=I/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=T/r,i=I/r),this.set(n,i,r,e),this}let _=Math.sqrt((v-m)*(v-m)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(v-m)/_,this.y=(u-g)/_,this.z=(f-h)/_,this.w=Math.acos((c+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},dl=class extends mi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);let i={width:t,height:e,depth:1};n.encoding!==void 0&&(Ys("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ii?oe:bn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new je(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new yo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},pe=class extends dl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Mo=class extends je{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=we,this.minFilter=we,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pl=class extends je{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=we,this.minFilter=we,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],d=r[o+1],m=r[o+2],g=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=m,t[e+3]=g;return}if(u!==g||l!==f||c!==d||h!==m){let v=1-a,p=l*f+c*d+h*m+u*g,_=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let A=Math.sqrt(x),b=Math.atan2(A,p*_);v=Math.sin(v*b)/A,a=Math.sin(a*b)/A}let M=a*_;if(l=l*v+f*M,c=c*v+d*M,h=h*v+m*M,u=u*v+g*M,v===1-a){let A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+h*u+l*d-c*f,t[e+1]=l*m+h*f+c*u-a*d,t[e+2]=c*m+h*d+a*f-l*u,t[e+3]=h*m-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),f=l(n/2),d=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(He(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Th.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Th.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return za.copy(this).projectOnVector(t),this.sub(za)}reflect(t){return this.sub(za.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(He(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},za=new C,Th=new hn,jn=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Pn):Pn.fromBufferAttribute(r,o),Pn.applyMatrix4(t.matrixWorld),this.expandByPoint(Pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Nr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Nr.copy(n.boundingBox)),Nr.applyMatrix4(t.matrixWorld),this.union(Nr)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Pn),Pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zs),Or.subVectors(this.max,zs),Vi.subVectors(t.a,zs),Gi.subVectors(t.b,zs),Wi.subVectors(t.c,zs),ri.subVectors(Gi,Vi),oi.subVectors(Wi,Gi),Ti.subVectors(Vi,Wi);let e=[0,-ri.z,ri.y,0,-oi.z,oi.y,0,-Ti.z,Ti.y,ri.z,0,-ri.x,oi.z,0,-oi.x,Ti.z,0,-Ti.x,-ri.y,ri.x,0,-oi.y,oi.x,0,-Ti.y,Ti.x,0];return!Ba(e,Vi,Gi,Wi,Or)||(e=[1,0,0,0,1,0,0,0,1],!Ba(e,Vi,Gi,Wi,Or))?!1:(Fr.crossVectors(ri,oi),e=[Fr.x,Fr.y,Fr.z],Ba(e,Vi,Gi,Wi,Or))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Vn=[new C,new C,new C,new C,new C,new C,new C,new C],Pn=new C,Nr=new jn,Vi=new C,Gi=new C,Wi=new C,ri=new C,oi=new C,Ti=new C,zs=new C,Or=new C,Fr=new C,wi=new C;function Ba(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){wi.fromArray(s,r);let a=i.x*Math.abs(wi.x)+i.y*Math.abs(wi.y)+i.z*Math.abs(wi.z),l=t.dot(wi),c=e.dot(wi),h=n.dot(wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var zd=new jn,Bs=new C,Ha=new C,gi=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):zd.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bs.subVectors(t,this.center);let e=Bs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Bs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ha.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bs.copy(t.center).add(Ha)),this.expandByPoint(Bs.copy(t.center).sub(Ha))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Gn=new C,ka=new C,zr=new C,ai=new C,Va=new C,Br=new C,Ga=new C,So=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gn.copy(this.origin).addScaledVector(this.direction,e),Gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ka.copy(t).add(e).multiplyScalar(.5),zr.copy(e).sub(t).normalize(),ai.copy(this.origin).sub(ka);let r=t.distanceTo(e)*.5,o=-this.direction.dot(zr),a=ai.dot(this.direction),l=-ai.dot(zr),c=ai.lengthSq(),h=Math.abs(1-o*o),u,f,d,m;if(h>0)if(u=o*l-a,f=o*a-l,m=r*h,u>=0)if(f>=-m)if(f<=m){let g=1/h;u*=g,f*=g,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ka).addScaledVector(zr,f),d}intersectSphere(t,e){Gn.subVectors(t.center,this.origin);let n=Gn.dot(this.direction),i=Gn.dot(Gn)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Gn)!==null}intersectTriangle(t,e,n,i,r){Va.subVectors(e,t),Br.subVectors(n,t),Ga.crossVectors(Va,Br);let o=this.direction.dot(Ga),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ai.subVectors(this.origin,t);let l=a*this.direction.dot(Br.crossVectors(ai,Br));if(l<0)return null;let c=a*this.direction.dot(Va.cross(ai));if(c<0||l+c>o)return null;let h=-a*ai.dot(Ga);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},qt=class s{constructor(t,e,n,i,r,o,a,l,c,h,u,f,d,m,g,v){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,f,d,m,g,v)}set(t,e,n,i,r,o,a,l,c,h,u,f,d,m,g,v){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=g,p[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Xi.setFromMatrixColumn(t,0).length(),r=1/Xi.setFromMatrixColumn(t,1).length(),o=1/Xi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,m=a*h,g=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+m*c,e[5]=f-g*c,e[9]=-a*l,e[2]=g-f*c,e[6]=m+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,m=c*h,g=c*u;e[0]=f+g*a,e[4]=m*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-m,e[6]=g+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,m=c*h,g=c*u;e[0]=f-g*a,e[4]=-o*u,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*h,e[9]=g-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,m=a*h,g=a*u;e[0]=l*h,e[4]=m*c-d,e[8]=f*c+g,e[1]=l*u,e[5]=g*c+f,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,m=a*l,g=a*c;e[0]=l*h,e[4]=g-f*u,e[8]=m*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+m,e[10]=f-g*u}else if(t.order==="XZY"){let f=o*l,d=o*c,m=a*l,g=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+g,e[5]=o*h,e[9]=d*u-m,e[2]=m*u-d,e[6]=a*h,e[10]=g*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bd,t,Hd)}lookAt(t,e,n){let i=this.elements;return dn.subVectors(t,e),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),li.crossVectors(n,dn),li.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),li.crossVectors(n,dn)),li.normalize(),Hr.crossVectors(dn,li),i[0]=li.x,i[4]=Hr.x,i[8]=dn.x,i[1]=li.y,i[5]=Hr.y,i[9]=dn.y,i[2]=li.z,i[6]=Hr.z,i[10]=dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],g=n[6],v=n[10],p=n[14],_=n[3],x=n[7],M=n[11],A=n[15],b=i[0],T=i[4],I=i[8],y=i[12],S=i[1],N=i[5],O=i[9],W=i[13],D=i[2],H=i[6],X=i[10],K=i[14],Q=i[3],$=i[7],ot=i[11],rt=i[15];return r[0]=o*b+a*S+l*D+c*Q,r[4]=o*T+a*N+l*H+c*$,r[8]=o*I+a*O+l*X+c*ot,r[12]=o*y+a*W+l*K+c*rt,r[1]=h*b+u*S+f*D+d*Q,r[5]=h*T+u*N+f*H+d*$,r[9]=h*I+u*O+f*X+d*ot,r[13]=h*y+u*W+f*K+d*rt,r[2]=m*b+g*S+v*D+p*Q,r[6]=m*T+g*N+v*H+p*$,r[10]=m*I+g*O+v*X+p*ot,r[14]=m*y+g*W+v*K+p*rt,r[3]=_*b+x*S+M*D+A*Q,r[7]=_*T+x*N+M*H+A*$,r[11]=_*I+x*O+M*X+A*ot,r[15]=_*y+x*W+M*K+A*rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],m=t[3],g=t[7],v=t[11],p=t[15];return m*(+r*l*u-i*c*u-r*a*f+n*c*f+i*a*d-n*l*d)+g*(+e*l*d-e*c*f+r*o*f-i*o*d+i*c*h-r*l*h)+v*(+e*c*u-e*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+p*(-i*a*h-e*l*u+e*a*f+i*o*u-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],m=t[12],g=t[13],v=t[14],p=t[15],_=u*v*c-g*f*c+g*l*d-a*v*d-u*l*p+a*f*p,x=m*f*c-h*v*c-m*l*d+o*v*d+h*l*p-o*f*p,M=h*g*c-m*u*c+m*a*d-o*g*d-h*a*p+o*u*p,A=m*u*l-h*g*l-m*a*f+o*g*f+h*a*v-o*u*v,b=e*_+n*x+i*M+r*A;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/b;return t[0]=_*T,t[1]=(g*f*r-u*v*r-g*i*d+n*v*d+u*i*p-n*f*p)*T,t[2]=(a*v*r-g*l*r+g*i*c-n*v*c-a*i*p+n*l*p)*T,t[3]=(u*l*r-a*f*r-u*i*c+n*f*c+a*i*d-n*l*d)*T,t[4]=x*T,t[5]=(h*v*r-m*f*r+m*i*d-e*v*d-h*i*p+e*f*p)*T,t[6]=(m*l*r-o*v*r-m*i*c+e*v*c+o*i*p-e*l*p)*T,t[7]=(o*f*r-h*l*r+h*i*c-e*f*c-o*i*d+e*l*d)*T,t[8]=M*T,t[9]=(m*u*r-h*g*r-m*n*d+e*g*d+h*n*p-e*u*p)*T,t[10]=(o*g*r-m*a*r+m*n*c-e*g*c-o*n*p+e*a*p)*T,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*d-e*a*d)*T,t[12]=A*T,t[13]=(h*g*i-m*u*i+m*n*f-e*g*f-h*n*v+e*u*v)*T,t[14]=(m*a*i-o*g*i-m*n*l+e*g*l+o*n*v-e*a*v)*T,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*f+e*a*f)*T,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,m=r*u,g=o*h,v=o*u,p=a*u,_=l*c,x=l*h,M=l*u,A=n.x,b=n.y,T=n.z;return i[0]=(1-(g+p))*A,i[1]=(d+M)*A,i[2]=(m-x)*A,i[3]=0,i[4]=(d-M)*b,i[5]=(1-(f+p))*b,i[6]=(v+_)*b,i[7]=0,i[8]=(m+x)*T,i[9]=(v-_)*T,i[10]=(1-(f+g))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Xi.set(i[0],i[1],i[2]).length(),o=Xi.set(i[4],i[5],i[6]).length(),a=Xi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Ln.copy(this);let c=1/r,h=1/o,u=1/a;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=h,Ln.elements[5]*=h,Ln.elements[6]*=h,Ln.elements[8]*=u,Ln.elements[9]*=u,Ln.elements[10]*=u,e.setFromRotationMatrix(Ln),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Zn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),d,m;if(a===Zn)d=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===go)d=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Zn){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-r),f=(e+t)*c,d=(n+i)*h,m,g;if(a===Zn)m=(o+r)*u,g=-2*u;else if(a===go)m=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Xi=new C,Ln=new qt,Bd=new C(0,0,0),Hd=new C(1,1,1),li=new C,Hr=new C,dn=new C,wh=new qt,Ah=new hn,ds=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(He(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return wh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ah.setFromEuler(this),this.setFromQuaternion(Ah,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ds.DEFAULT_ORDER="XYZ";var bo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},kd=0,Rh=new C,qi=new hn,Wn=new qt,kr=new C,Hs=new C,Vd=new C,Gd=new hn,Ch=new C(1,0,0),Ph=new C(0,1,0),Lh=new C(0,0,1),Wd={type:"added"},Xd={type:"removed"},be=class s extends mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=Bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new C,e=new ds,n=new hn,i=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new qt},normalMatrix:{value:new ee}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.multiply(qi),this}rotateOnWorldAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.premultiply(qi),this}rotateX(t){return this.rotateOnAxis(Ch,t)}rotateY(t){return this.rotateOnAxis(Ph,t)}rotateZ(t){return this.rotateOnAxis(Lh,t)}translateOnAxis(t,e){return Rh.copy(t).applyQuaternion(this.quaternion),this.position.add(Rh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ch,t)}translateY(t){return this.translateOnAxis(Ph,t)}translateZ(t){return this.translateOnAxis(Lh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?kr.copy(t):kr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(Hs,kr,this.up):Wn.lookAt(kr,Hs,this.up),this.quaternion.setFromRotationMatrix(Wn),i&&(Wn.extractRotation(i.matrixWorld),qi.setFromRotationMatrix(Wn),this.quaternion.premultiply(qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Wd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xd)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,t,Vd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,Gd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++){let a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};be.DEFAULT_UP=new C(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var In=new C,Xn=new C,Wa=new C,qn=new C,Yi=new C,Zi=new C,Ih=new C,Xa=new C,qa=new C,Ya=new C,Vr=!1,ss=class s{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),In.subVectors(t,e),i.cross(In);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){In.subVectors(i,e),Xn.subVectors(n,e),Wa.subVectors(t,e);let o=In.dot(In),a=In.dot(Xn),l=In.dot(Wa),c=Xn.dot(Xn),h=Xn.dot(Wa),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,m=(o*h-a*l)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getUV(t,e,n,i,r,o,a,l){return Vr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Vr=!0),this.getInterpolation(t,e,n,i,r,o,a,l)}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,qn.x),l.addScaledVector(o,qn.y),l.addScaledVector(a,qn.z),l)}static isFrontFacing(t,e,n,i){return In.subVectors(n,e),Xn.subVectors(t,e),In.cross(Xn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return In.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),In.cross(Xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return Vr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Vr=!0),s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Yi.subVectors(i,n),Zi.subVectors(r,n),Xa.subVectors(t,n);let l=Yi.dot(Xa),c=Zi.dot(Xa);if(l<=0&&c<=0)return e.copy(n);qa.subVectors(t,i);let h=Yi.dot(qa),u=Zi.dot(qa);if(h>=0&&u<=h)return e.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Yi,o);Ya.subVectors(t,r);let d=Yi.dot(Ya),m=Zi.dot(Ya);if(m>=0&&d<=m)return e.copy(r);let g=d*c-l*m;if(g<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(Zi,a);let v=h*m-d*u;if(v<=0&&u-h>=0&&d-m>=0)return Ih.subVectors(r,i),a=(u-h)/(u-h+(d-m)),e.copy(i).addScaledVector(Ih,a);let p=1/(v+g+f);return o=g*p,a=f*p,e.copy(n).addScaledVector(Yi,o).addScaledVector(Zi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Cu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},Gr={h:0,s:0,l:0};function Za(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Lt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=re.workingColorSpace){if(t=rc(t,1),e=He(e,0,1),n=He(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Za(o,r,t+1/3),this.g=Za(o,r,t),this.b=Za(o,r,t-1/3)}return re.toWorkingColorSpace(this,i),this}setStyle(t,e=oe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=oe){let n=Cu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=cs(t.r),this.g=cs(t.g),this.b=cs(t.b),this}copyLinearToSRGB(t){return this.r=Oa(t.r),this.g=Oa(t.g),this.b=Oa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=oe){return re.fromWorkingColorSpace(Ke.copy(this),t),Math.round(He(Ke.r*255,0,255))*65536+Math.round(He(Ke.g*255,0,255))*256+Math.round(He(Ke.b*255,0,255))}getHexString(t=oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.fromWorkingColorSpace(Ke.copy(this),e);let n=Ke.r,i=Ke.g,r=Ke.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.fromWorkingColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=oe){re.fromWorkingColorSpace(Ke.copy(this),t);let e=Ke.r,n=Ke.g,i=Ke.b;return t!==oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ci),this.setHSL(ci.h+t,ci.s+e,ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ci),t.getHSL(Gr);let n=qs(ci.h,Gr.h,e),i=qs(ci.s,Gr.s,e),r=qs(ci.l,Gr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ke=new Lt;Lt.NAMES=Cu;var qd=0,Qn=class extends mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Bi(),this.name="",this.type="Material",this.blending=ls,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ll,this.blendDst=cl,this.blendEquation=Sn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hi,this.stencilZFail=Hi,this.stencilZPass=Hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ls&&(n.blending=this.blending),this.side!==di&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ll&&(n.blendSrc=this.blendSrc),this.blendDst!==cl&&(n.blendDst=this.blendDst),this.blendEquation!==Sn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==co&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ae=class extends Qn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Te=new C,Wr=new at,Le=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=_h,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Wr.fromBufferAttribute(this,e),Wr.applyMatrix3(t),this.setXY(e,Wr.x,Wr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=is(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=sn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=is(e,this.array)),e}setX(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=is(e,this.array)),e}setY(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=is(e,this.array)),e}setZ(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=is(e,this.array)),e}setW(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array),i=sn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array),i=sn(i,this.array),r=sn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_h&&(t.usage=this.usage),t}};var Eo=class extends Le{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var To=class extends Le{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Wt=class extends Le{constructor(t,e,n){super(new Float32Array(t),e,n)}};var Yd=0,Mn=new qt,$a=new be,$i=new C,pn=new jn,ks=new jn,Be=new C,ce=class s extends mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=Bi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ru(t)?To:Eo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ee().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Mn.makeRotationFromQuaternion(t),this.applyMatrix4(Mn),this}rotateX(t){return Mn.makeRotationX(t),this.applyMatrix4(Mn),this}rotateY(t){return Mn.makeRotationY(t),this.applyMatrix4(Mn),this}rotateZ(t){return Mn.makeRotationZ(t),this.applyMatrix4(Mn),this}translate(t,e,n){return Mn.makeTranslation(t,e,n),this.applyMatrix4(Mn),this}scale(t,e,n){return Mn.makeScale(t,e,n),this.applyMatrix4(Mn),this}lookAt(t){return $a.lookAt(t),$a.updateMatrix(),this.applyMatrix4($a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(t){let e=[];for(let n=0,i=t.length;n<i;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Wt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(pn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ks.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors(pn.min,ks.min),pn.expandByPoint(Be),Be.addVectors(pn.max,ks.max),pn.expandByPoint(Be)):(pn.expandByPoint(ks.min),pn.expandByPoint(ks.max))}pn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Be.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Be));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Be.fromBufferAttribute(a,c),l&&($i.fromBufferAttribute(t,c),Be.add($i)),i=Math.max(i,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Le(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let S=0;S<a;S++)c[S]=new C,h[S]=new C;let u=new C,f=new C,d=new C,m=new at,g=new at,v=new at,p=new C,_=new C;function x(S,N,O){u.fromArray(i,S*3),f.fromArray(i,N*3),d.fromArray(i,O*3),m.fromArray(o,S*2),g.fromArray(o,N*2),v.fromArray(o,O*2),f.sub(u),d.sub(u),g.sub(m),v.sub(m);let W=1/(g.x*v.y-v.x*g.y);isFinite(W)&&(p.copy(f).multiplyScalar(v.y).addScaledVector(d,-g.y).multiplyScalar(W),_.copy(d).multiplyScalar(g.x).addScaledVector(f,-v.x).multiplyScalar(W),c[S].add(p),c[N].add(p),c[O].add(p),h[S].add(_),h[N].add(_),h[O].add(_))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let S=0,N=M.length;S<N;++S){let O=M[S],W=O.start,D=O.count;for(let H=W,X=W+D;H<X;H+=3)x(n[H+0],n[H+1],n[H+2])}let A=new C,b=new C,T=new C,I=new C;function y(S){T.fromArray(r,S*3),I.copy(T);let N=c[S];A.copy(N),A.sub(T.multiplyScalar(T.dot(N))).normalize(),b.crossVectors(I,N);let W=b.dot(h[S])<0?-1:1;l[S*4]=A.x,l[S*4+1]=A.y,l[S*4+2]=A.z,l[S*4+3]=W}for(let S=0,N=M.length;S<N;++S){let O=M[S],W=O.start,D=O.count;for(let H=W,X=W+D;H<X;H+=3)y(n[H+0]),y(n[H+1]),y(n[H+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Le(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let f=0,d=t.count;f<d;f+=3){let m=t.getX(f+0),g=t.getX(f+1),v=t.getX(f+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,v),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(v,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,m=0;for(let g=0,v=l.length;g<v;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*h;for(let p=0;p<h;p++)f[m++]=c[d++]}return new Le(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dh=new qt,Ai=new So,Xr=new gi,Uh=new C,Ki=new C,Ji=new C,ji=new C,Ka=new C,qr=new C,Yr=new at,Zr=new at,$r=new at,Nh=new C,Oh=new C,Fh=new C,Kr=new C,Jr=new C,Jt=class extends be{constructor(t=new ce,e=new Ae){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){qr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Ka.fromBufferAttribute(u,t),o?qr.addScaledVector(Ka,h):qr.addScaledVector(Ka.sub(e),h))}e.add(qr)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(r),Ai.copy(t.ray).recast(t.near),!(Xr.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(Xr,Uh)===null||Ai.origin.distanceToSquared(Uh)>(t.far-t.near)**2))&&(Dh.copy(r).invert(),Ai.copy(t.ray).applyMatrix4(Dh),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ai)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,g=f.length;m<g;m++){let v=f[m],p=o[v.materialIndex],_=Math.max(v.start,d.start),x=Math.min(a.count,Math.min(v.start+v.count,d.start+d.count));for(let M=_,A=x;M<A;M+=3){let b=a.getX(M),T=a.getX(M+1),I=a.getX(M+2);i=jr(this,p,t,n,c,h,u,b,T,I),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=v.materialIndex,e.push(i))}}else{let m=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let v=m,p=g;v<p;v+=3){let _=a.getX(v),x=a.getX(v+1),M=a.getX(v+2);i=jr(this,o,t,n,c,h,u,_,x,M),i&&(i.faceIndex=Math.floor(v/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,g=f.length;m<g;m++){let v=f[m],p=o[v.materialIndex],_=Math.max(v.start,d.start),x=Math.min(l.count,Math.min(v.start+v.count,d.start+d.count));for(let M=_,A=x;M<A;M+=3){let b=M,T=M+1,I=M+2;i=jr(this,p,t,n,c,h,u,b,T,I),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=v.materialIndex,e.push(i))}}else{let m=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let v=m,p=g;v<p;v+=3){let _=v,x=v+1,M=v+2;i=jr(this,o,t,n,c,h,u,_,x,M),i&&(i.faceIndex=Math.floor(v/3),e.push(i))}}}};function Zd(s,t,e,n,i,r,o,a){let l;if(t.side===Xe?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===di,a),l===null)return null;Jr.copy(a),Jr.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Jr);return c<e.near||c>e.far?null:{distance:c,point:Jr.clone(),object:s}}function jr(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Ki),s.getVertexPosition(l,Ji),s.getVertexPosition(c,ji);let h=Zd(s,t,e,n,Ki,Ji,ji,Kr);if(h){i&&(Yr.fromBufferAttribute(i,a),Zr.fromBufferAttribute(i,l),$r.fromBufferAttribute(i,c),h.uv=ss.getInterpolation(Kr,Ki,Ji,ji,Yr,Zr,$r,new at)),r&&(Yr.fromBufferAttribute(r,a),Zr.fromBufferAttribute(r,l),$r.fromBufferAttribute(r,c),h.uv1=ss.getInterpolation(Kr,Ki,Ji,ji,Yr,Zr,$r,new at),h.uv2=h.uv1),o&&(Nh.fromBufferAttribute(o,a),Oh.fromBufferAttribute(o,l),Fh.fromBufferAttribute(o,c),h.normal=ss.getInterpolation(Kr,Ki,Ji,ji,Nh,Oh,Fh,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new C,materialIndex:0};ss.getNormal(Ki,Ji,ji,u.normal),h.face=u}return h}var Qe=class s extends ce{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Wt(c,3)),this.setAttribute("normal",new Wt(h,3)),this.setAttribute("uv",new Wt(u,2));function m(g,v,p,_,x,M,A,b,T,I,y){let S=M/T,N=A/I,O=M/2,W=A/2,D=b/2,H=T+1,X=I+1,K=0,Q=0,$=new C;for(let ot=0;ot<X;ot++){let rt=ot*N-W;for(let xt=0;xt<H;xt++){let j=xt*S-O;$[g]=j*_,$[v]=rt*x,$[p]=D,c.push($.x,$.y,$.z),$[g]=0,$[v]=0,$[p]=b>0?1:-1,h.push($.x,$.y,$.z),u.push(xt/T),u.push(1-ot/I),K+=1}}for(let ot=0;ot<I;ot++)for(let rt=0;rt<T;rt++){let xt=f+rt+H*ot,j=f+rt+H*(ot+1),lt=f+(rt+1)+H*(ot+1),St=f+(rt+1)+H*ot;l.push(xt,j,St),l.push(j,lt,St),Q+=6}a.addGroup(d,Q,y),d+=Q,f+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ps(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function rn(s){let t={};for(let e=0;e<s.length;e++){let n=ps(s[e]);for(let i in n)t[i]=n[i]}return t}function $d(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Pu(s){return s.getRenderTarget()===null?s.outputColorSpace:re.workingColorSpace}var ke={clone:ps,merge:rn},Kd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ne=class extends Qn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kd,this.fragmentShader=Jd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ps(t.uniforms),this.uniformsGroups=$d(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},wo=class extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=Zn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Re=class extends wo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=tr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Xs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return tr*2*Math.atan(Math.tan(Xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Xs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Qi=-90,ts=1,ml=class extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Re(Qi,ts,t,e);i.layers=this.layers,this.add(i);let r=new Re(Qi,ts,t,e);r.layers=this.layers,this.add(r);let o=new Re(Qi,ts,t,e);o.layers=this.layers,this.add(o);let a=new Re(Qi,ts,t,e);a.layers=this.layers,this.add(a);let l=new Re(Qi,ts,t,e);l.layers=this.layers,this.add(l);let c=new Re(Qi,ts,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===go)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Ao=class extends je{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:us,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},gl=class extends pe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Ys("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ii?oe:bn),this.texture=new Ao(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:on}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Qe(5,5,5),r=new ne({name:"CubemapFromEquirect",uniforms:ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xe,blending:Pe});r.uniforms.tEquirect.value=e;let o=new Jt(i,r),a=e.minFilter;return e.minFilter===Di&&(e.minFilter=on),new ml(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},Ja=new C,jd=new C,Qd=new ee,Dn=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Ja.subVectors(n,e).cross(jd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ja),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Qd.getNormalMatrix(t),i=this.coplanarPoint(Ja).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ri=new gi,Qr=new C,er=class{constructor(t=new Dn,e=new Dn,n=new Dn,i=new Dn,r=new Dn,o=new Dn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Zn){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],m=i[9],g=i[10],v=i[11],p=i[12],_=i[13],x=i[14],M=i[15];if(n[0].setComponents(l-r,f-c,v-d,M-p).normalize(),n[1].setComponents(l+r,f+c,v+d,M+p).normalize(),n[2].setComponents(l+o,f+h,v+m,M+_).normalize(),n[3].setComponents(l-o,f-h,v-m,M-_).normalize(),n[4].setComponents(l-a,f-u,v-g,M-x).normalize(),e===Zn)n[5].setComponents(l+a,f+u,v+g,M+x).normalize();else if(e===go)n[5].setComponents(a,u,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(t){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Qr.x=i.normal.x>0?t.max.x:t.min.x,Qr.y=i.normal.y>0?t.max.y:t.min.y,Qr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Qr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Lu(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function tp(s,t){let e=t.isWebGL2,n=new WeakMap;function i(c,h){let u=c.array,f=c.usage,d=u.byteLength,m=s.createBuffer();s.bindBuffer(h,m),s.bufferData(h,u,f),c.onUploadCallback();let g;if(u instanceof Float32Array)g=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=s.SHORT;else if(u instanceof Uint32Array)g=s.UNSIGNED_INT;else if(u instanceof Int32Array)g=s.INT;else if(u instanceof Int8Array)g=s.BYTE;else if(u instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:d}}function r(c,h,u){let f=h.array,d=h._updateRange,m=h.updateRanges;if(s.bindBuffer(u,c),d.count===-1&&m.length===0&&s.bufferSubData(u,0,f),m.length!==0){for(let g=0,v=m.length;g<v;g++){let p=m[g];e?s.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):s.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}d.count!==-1&&(e?s.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):s.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var Ee=class s extends ce{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,f=e/l,d=[],m=[],g=[],v=[];for(let p=0;p<h;p++){let _=p*f-o;for(let x=0;x<c;x++){let M=x*u-r;m.push(M,-_,0),g.push(0,0,1),v.push(x/a),v.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){let x=_+c*p,M=_+c*(p+1),A=_+1+c*(p+1),b=_+1+c*p;d.push(x,M,b),d.push(M,A,b)}this.setIndex(d),this.setAttribute("position",new Wt(m,3)),this.setAttribute("normal",new Wt(g,3)),this.setAttribute("uv",new Wt(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},ep=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,np=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ip=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,op=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ap=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cp=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,up=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ep=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Tp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ap=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ip=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Dp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Up=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Np=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Op=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Gp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Wp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Zp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$p=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,em=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,im=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,om=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,am=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,lm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,um=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,gm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,vm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,xm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_m=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Em=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Am=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Pm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Im=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Um=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Om=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Fm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Bm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,km=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ym=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$m=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,t0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,a0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,l0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,c0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,h0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,u0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,d0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,p0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,m0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,M0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,S0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,T0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,C0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,P0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,I0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,D0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zt={alphahash_fragment:ep,alphahash_pars_fragment:np,alphamap_fragment:ip,alphamap_pars_fragment:sp,alphatest_fragment:rp,alphatest_pars_fragment:op,aomap_fragment:ap,aomap_pars_fragment:lp,batching_pars_vertex:cp,batching_vertex:hp,begin_vertex:up,beginnormal_vertex:fp,bsdfs:dp,iridescence_fragment:pp,bumpmap_pars_fragment:mp,clipping_planes_fragment:gp,clipping_planes_pars_fragment:vp,clipping_planes_pars_vertex:xp,clipping_planes_vertex:_p,color_fragment:yp,color_pars_fragment:Mp,color_pars_vertex:Sp,color_vertex:bp,common:Ep,cube_uv_reflection_fragment:Tp,defaultnormal_vertex:wp,displacementmap_pars_vertex:Ap,displacementmap_vertex:Rp,emissivemap_fragment:Cp,emissivemap_pars_fragment:Pp,colorspace_fragment:Lp,colorspace_pars_fragment:Ip,envmap_fragment:Dp,envmap_common_pars_fragment:Up,envmap_pars_fragment:Np,envmap_pars_vertex:Op,envmap_physical_pars_fragment:Zp,envmap_vertex:Fp,fog_vertex:zp,fog_pars_vertex:Bp,fog_fragment:Hp,fog_pars_fragment:kp,gradientmap_pars_fragment:Vp,lightmap_fragment:Gp,lightmap_pars_fragment:Wp,lights_lambert_fragment:Xp,lights_lambert_pars_fragment:qp,lights_pars_begin:Yp,lights_toon_fragment:$p,lights_toon_pars_fragment:Kp,lights_phong_fragment:Jp,lights_phong_pars_fragment:jp,lights_physical_fragment:Qp,lights_physical_pars_fragment:tm,lights_fragment_begin:em,lights_fragment_maps:nm,lights_fragment_end:im,logdepthbuf_fragment:sm,logdepthbuf_pars_fragment:rm,logdepthbuf_pars_vertex:om,logdepthbuf_vertex:am,map_fragment:lm,map_pars_fragment:cm,map_particle_fragment:hm,map_particle_pars_fragment:um,metalnessmap_fragment:fm,metalnessmap_pars_fragment:dm,morphcolor_vertex:pm,morphnormal_vertex:mm,morphtarget_pars_vertex:gm,morphtarget_vertex:vm,normal_fragment_begin:xm,normal_fragment_maps:_m,normal_pars_fragment:ym,normal_pars_vertex:Mm,normal_vertex:Sm,normalmap_pars_fragment:bm,clearcoat_normal_fragment_begin:Em,clearcoat_normal_fragment_maps:Tm,clearcoat_pars_fragment:wm,iridescence_pars_fragment:Am,opaque_fragment:Rm,packing:Cm,premultiplied_alpha_fragment:Pm,project_vertex:Lm,dithering_fragment:Im,dithering_pars_fragment:Dm,roughnessmap_fragment:Um,roughnessmap_pars_fragment:Nm,shadowmap_pars_fragment:Om,shadowmap_pars_vertex:Fm,shadowmap_vertex:zm,shadowmask_pars_fragment:Bm,skinbase_vertex:Hm,skinning_pars_vertex:km,skinning_vertex:Vm,skinnormal_vertex:Gm,specularmap_fragment:Wm,specularmap_pars_fragment:Xm,tonemapping_fragment:qm,tonemapping_pars_fragment:Ym,transmission_fragment:Zm,transmission_pars_fragment:$m,uv_pars_fragment:Km,uv_pars_vertex:Jm,uv_vertex:jm,worldpos_vertex:Qm,background_vert:t0,background_frag:e0,backgroundCube_vert:n0,backgroundCube_frag:i0,cube_vert:s0,cube_frag:r0,depth_vert:o0,depth_frag:a0,distanceRGBA_vert:l0,distanceRGBA_frag:c0,equirect_vert:h0,equirect_frag:u0,linedashed_vert:f0,linedashed_frag:d0,meshbasic_vert:p0,meshbasic_frag:m0,meshlambert_vert:g0,meshlambert_frag:v0,meshmatcap_vert:x0,meshmatcap_frag:_0,meshnormal_vert:y0,meshnormal_frag:M0,meshphong_vert:S0,meshphong_frag:b0,meshphysical_vert:E0,meshphysical_frag:T0,meshtoon_vert:w0,meshtoon_frag:A0,points_vert:R0,points_frag:C0,shadow_vert:P0,shadow_frag:L0,sprite_vert:I0,sprite_frag:D0},Mt={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},zn={basic:{uniforms:rn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:rn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:rn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:rn([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:rn([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:rn([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:rn([Mt.points,Mt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:rn([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:rn([Mt.common,Mt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:rn([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:rn([Mt.sprite,Mt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:rn([Mt.common,Mt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:rn([Mt.lights,Mt.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};zn.physical={uniforms:rn([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var to={r:0,b:0,g:0};function U0(s,t,e,n,i,r,o){let a=new Lt(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function m(v,p){let _=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?e:t).get(x)),x===null?g(a,l):x&&x.isColor&&(g(x,1),_=!0);let M=s.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||_)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Yo)?(h===void 0&&(h=new Jt(new Qe(1,1,1),new ne({name:"BackgroundCubeMaterial",uniforms:ps(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=re.getTransfer(x.colorSpace)!==le,(u!==x||f!==x.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,d=s.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Jt(new Ee(2,2),new ne({name:"BackgroundMaterial",uniforms:ps(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=re.getTransfer(x.colorSpace)!==le,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,d=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function g(v,p){v.getRGB(to,Pu(s)),n.buffers.color.setClear(to.r,to.g,to.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(v,p=1){a.set(v),l=p,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,g(a,l)},render:m}}function N0(s,t,e,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=v(null),c=l,h=!1;function u(D,H,X,K,Q){let $=!1;if(o){let ot=g(K,X,H);c!==ot&&(c=ot,d(c.object)),$=p(D,K,X,Q),$&&_(D,K,X,Q)}else{let ot=H.wireframe===!0;(c.geometry!==K.id||c.program!==X.id||c.wireframe!==ot)&&(c.geometry=K.id,c.program=X.id,c.wireframe=ot,$=!0)}Q!==null&&e.update(Q,s.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,I(D,H,X,K),Q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(D){return n.isWebGL2?s.bindVertexArray(D):r.bindVertexArrayOES(D)}function m(D){return n.isWebGL2?s.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function g(D,H,X){let K=X.wireframe===!0,Q=a[D.id];Q===void 0&&(Q={},a[D.id]=Q);let $=Q[H.id];$===void 0&&($={},Q[H.id]=$);let ot=$[K];return ot===void 0&&(ot=v(f()),$[K]=ot),ot}function v(D){let H=[],X=[],K=[];for(let Q=0;Q<i;Q++)H[Q]=0,X[Q]=0,K[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:X,attributeDivisors:K,object:D,attributes:{},index:null}}function p(D,H,X,K){let Q=c.attributes,$=H.attributes,ot=0,rt=X.getAttributes();for(let xt in rt)if(rt[xt].location>=0){let lt=Q[xt],St=$[xt];if(St===void 0&&(xt==="instanceMatrix"&&D.instanceMatrix&&(St=D.instanceMatrix),xt==="instanceColor"&&D.instanceColor&&(St=D.instanceColor)),lt===void 0||lt.attribute!==St||St&&lt.data!==St.data)return!0;ot++}return c.attributesNum!==ot||c.index!==K}function _(D,H,X,K){let Q={},$=H.attributes,ot=0,rt=X.getAttributes();for(let xt in rt)if(rt[xt].location>=0){let lt=$[xt];lt===void 0&&(xt==="instanceMatrix"&&D.instanceMatrix&&(lt=D.instanceMatrix),xt==="instanceColor"&&D.instanceColor&&(lt=D.instanceColor));let St={};St.attribute=lt,lt&&lt.data&&(St.data=lt.data),Q[xt]=St,ot++}c.attributes=Q,c.attributesNum=ot,c.index=K}function x(){let D=c.newAttributes;for(let H=0,X=D.length;H<X;H++)D[H]=0}function M(D){A(D,0)}function A(D,H){let X=c.newAttributes,K=c.enabledAttributes,Q=c.attributeDivisors;X[D]=1,K[D]===0&&(s.enableVertexAttribArray(D),K[D]=1),Q[D]!==H&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,H),Q[D]=H)}function b(){let D=c.newAttributes,H=c.enabledAttributes;for(let X=0,K=H.length;X<K;X++)H[X]!==D[X]&&(s.disableVertexAttribArray(X),H[X]=0)}function T(D,H,X,K,Q,$,ot){ot===!0?s.vertexAttribIPointer(D,H,X,Q,$):s.vertexAttribPointer(D,H,X,K,Q,$)}function I(D,H,X,K){if(n.isWebGL2===!1&&(D.isInstancedMesh||K.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let Q=K.attributes,$=X.getAttributes(),ot=H.defaultAttributeValues;for(let rt in $){let xt=$[rt];if(xt.location>=0){let j=Q[rt];if(j===void 0&&(rt==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),rt==="instanceColor"&&D.instanceColor&&(j=D.instanceColor)),j!==void 0){let lt=j.normalized,St=j.itemSize,Ct=e.get(j);if(Ct===void 0)continue;let bt=Ct.buffer,Nt=Ct.type,Ot=Ct.bytesPerElement,At=n.isWebGL2===!0&&(Nt===s.INT||Nt===s.UNSIGNED_INT||j.gpuType===_u);if(j.isInterleavedBufferAttribute){let zt=j.data,U=zt.stride,vt=j.offset;if(zt.isInstancedInterleavedBuffer){for(let tt=0;tt<xt.locationSize;tt++)A(xt.location+tt,zt.meshPerAttribute);D.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=zt.meshPerAttribute*zt.count)}else for(let tt=0;tt<xt.locationSize;tt++)M(xt.location+tt);s.bindBuffer(s.ARRAY_BUFFER,bt);for(let tt=0;tt<xt.locationSize;tt++)T(xt.location+tt,St/xt.locationSize,Nt,lt,U*Ot,(vt+St/xt.locationSize*tt)*Ot,At)}else{if(j.isInstancedBufferAttribute){for(let zt=0;zt<xt.locationSize;zt++)A(xt.location+zt,j.meshPerAttribute);D.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let zt=0;zt<xt.locationSize;zt++)M(xt.location+zt);s.bindBuffer(s.ARRAY_BUFFER,bt);for(let zt=0;zt<xt.locationSize;zt++)T(xt.location+zt,St/xt.locationSize,Nt,lt,St*Ot,St/xt.locationSize*zt*Ot,At)}}else if(ot!==void 0){let lt=ot[rt];if(lt!==void 0)switch(lt.length){case 2:s.vertexAttrib2fv(xt.location,lt);break;case 3:s.vertexAttrib3fv(xt.location,lt);break;case 4:s.vertexAttrib4fv(xt.location,lt);break;default:s.vertexAttrib1fv(xt.location,lt)}}}}b()}function y(){O();for(let D in a){let H=a[D];for(let X in H){let K=H[X];for(let Q in K)m(K[Q].object),delete K[Q];delete H[X]}delete a[D]}}function S(D){if(a[D.id]===void 0)return;let H=a[D.id];for(let X in H){let K=H[X];for(let Q in K)m(K[Q].object),delete K[Q];delete H[X]}delete a[D.id]}function N(D){for(let H in a){let X=a[H];if(X[D.id]===void 0)continue;let K=X[D.id];for(let Q in K)m(K[Q].object),delete K[Q];delete X[D.id]}}function O(){W(),h=!0,c!==l&&(c=l,d(c.object))}function W(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:O,resetDefaultState:W,dispose:y,releaseStatesOfGeometry:S,releaseStatesOfProgram:N,initAttributes:x,enableAttribute:M,disableUnusedAttributes:b}}function O0(s,t,e,n){let i=n.isWebGL2,r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,f){if(f===0)return;let d,m;if(i)d=s,m="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](r,h,u,f),e.update(u,r,f)}function c(h,u,f){if(f===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<f;m++)this.render(h[m],u[m]);else{d.multiDrawArraysWEBGL(r,h,0,u,0,f);let m=0;for(let g=0;g<f;g++)m+=u[g];e.update(m,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function F0(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,M=o||t.has("OES_texture_float"),A=x&&M,b=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:p,maxFragmentUniforms:_,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:A,maxSamples:b}}function z0(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Dn,a=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,g=u.clipIntersection,v=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!v)r?h(null):c();else{let _=r?0:n,x=_*4,M=p.clippingState||null;l.value=M,M=h(m,f,x,d);for(let A=0;A!==x;++A)M[A]=e[A];p.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,m){let g=u!==null?u.length:0,v=null;if(g!==0){if(v=l.value,m!==!0||v===null){let p=d+g*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(v===null||v.length<p)&&(v=new Float32Array(p));for(let x=0,M=d;x!==g;++x,M+=4)o.copy(u[x]).applyMatrix4(_,a),o.normal.toArray(v,M),v[M+3]=o.constant}l.value=v,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,v}}function B0(s){let t=new WeakMap;function e(o,a){return a===js?o.mapping=us:a===hl&&(o.mapping=fs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===js||a===hl)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new gl(l.height/2);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ms=class extends wo{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},rs=4,zh=[.125,.215,.35,.446,.526,.582],Pi=20,ja=new ms,Bh=new Lt,Qa=null,tl=0,el=0,Ci=(1+Math.sqrt(5))/2,es=1/Ci,Hh=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Ci,es),new C(0,Ci,-es),new C(es,0,Ci),new C(-es,0,Ci),new C(Ci,es,0),new C(-Ci,es,0)],gs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Qa=this._renderer.getRenderTarget(),tl=this._renderer.getActiveCubeFace(),el=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Qa,tl,el),t.scissorTest=!1,eo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===us||t.mapping===fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qa=this._renderer.getRenderTarget(),tl=this._renderer.getActiveCubeFace(),el=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:Ie,format:gn,colorSpace:Jn,depthBuffer:!1},i=kh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=H0(r)),this._blurMaterial=k0(r,t,e)}return i}_compileMaterial(t){let e=new Jt(this._lodPlanes[0],t);this._renderer.compile(e,ja)}_sceneToCubeUV(t,e,n,i){let a=new Re(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Bh),h.toneMapping=fi,h.autoClear=!1;let d=new Ae({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1}),m=new Jt(new Qe,d),g=!1,v=t.background;v?v.isColor&&(d.color.copy(v),t.background=null,g=!0):(d.color.copy(Bh),g=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):_===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let x=this._cubeSize;eo(i,_*x,p>2?x:0,x,x),h.setRenderTarget(i),g&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=v}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===us||t.mapping===fs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vh());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Jt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;eo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ja)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Hh[(i-1)%Hh.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Jt(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Pi-1),g=r/m,v=isFinite(r)?1+Math.floor(h*g):Pi;v>Pi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Pi}`);let p=[],_=0;for(let T=0;T<Pi;++T){let I=T/g,y=Math.exp(-I*I/2);p.push(y),T===0?_+=y:T<v&&(_+=2*y)}for(let T=0;T<p.length;T++)p[T]=p[T]/_;f.envMap.value=t.texture,f.samples.value=v,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:x}=this;f.dTheta.value=m,f.mipInt.value=x-n;let M=this._sizeLods[i],A=3*M*(i>x-rs?i-x+rs:0),b=4*(this._cubeSize-M);eo(e,A,b,3*M,2*M),l.setRenderTarget(e),l.render(u,ja)}};function H0(s){let t=[],e=[],n=[],i=s,r=s-rs+1+zh.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>s-rs?l=zh[o-s+rs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,g=3,v=2,p=1,_=new Float32Array(g*m*d),x=new Float32Array(v*m*d),M=new Float32Array(p*m*d);for(let b=0;b<d;b++){let T=b%3*2/3-1,I=b>2?0:-1,y=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];_.set(y,g*m*b),x.set(f,v*m*b);let S=[b,b,b,b,b,b];M.set(S,p*m*b)}let A=new ce;A.setAttribute("position",new Le(_,g)),A.setAttribute("uv",new Le(x,v)),A.setAttribute("faceIndex",new Le(M,p)),t.push(A),i>rs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function kh(s,t,e){let n=new pe(s,t,e);return n.texture.mapping=Yo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function eo(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function k0(s,t,e){let n=new Float32Array(Pi),i=new C(0,1,0);return new ne({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pe,depthTest:!1,depthWrite:!1})}function Vh(){return new ne({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pe,depthTest:!1,depthWrite:!1})}function Gh(){return new ne({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pe,depthTest:!1,depthWrite:!1})}function oc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function V0(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===js||l===hl,h=l===us||l===fs;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new gs(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new gs(s));let f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function G0(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function W0(s,t,e,n){let i={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);for(let m in f.morphAttributes){let g=f.morphAttributes[m];for(let v=0,p=g.length;v<p;v++)t.remove(g[v])}f.removeEventListener("dispose",o),delete i[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let m in f)t.update(f[m],s.ARRAY_BUFFER);let d=u.morphAttributes;for(let m in d){let g=d[m];for(let v=0,p=g.length;v<p;v++)t.update(g[v],s.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,m=u.attributes.position,g=0;if(d!==null){let _=d.array;g=d.version;for(let x=0,M=_.length;x<M;x+=3){let A=_[x+0],b=_[x+1],T=_[x+2];f.push(A,b,b,T,T,A)}}else if(m!==void 0){let _=m.array;g=m.version;for(let x=0,M=_.length/3-1;x<M;x+=3){let A=x+0,b=x+1,T=x+2;f.push(A,b,b,T,T,A)}}else return;let v=new(Ru(f)?To:Eo)(f,1);v.version=g;let p=r.get(u);p&&t.remove(p),r.set(u,v)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function X0(s,t,e,n){let i=n.isWebGL2,r;function o(d){r=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,m){s.drawElements(r,m,a,d*l),e.update(m,r,1)}function u(d,m,g){if(g===0)return;let v,p;if(i)v=s,p="drawElementsInstanced";else if(v=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[p](r,m,a,d*l,g),e.update(m,r,g)}function f(d,m,g){if(g===0)return;let v=t.get("WEBGL_multi_draw");if(v===null)for(let p=0;p<g;p++)this.render(d[p]/l,m[p]);else{v.multiDrawElementsWEBGL(r,m,0,a,d,0,g);let p=0;for(let _=0;_<g;_++)p+=m[_];e.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function q0(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Y0(s,t){return s[0]-t[0]}function Z0(s,t){return Math.abs(t[1])-Math.abs(s[1])}function $0(s,t,e){let n={},i=new Float32Array(8),r=new WeakMap,o=new ve,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let f=c.morphTargetInfluences;if(t.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=d!==void 0?d.length:0,g=r.get(h);if(g===void 0||g.count!==m){let D=function(){O.dispose(),r.delete(h),h.removeEventListener("dispose",D)};g!==void 0&&g.texture.dispose();let _=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],T=h.morphAttributes.color||[],I=0;_===!0&&(I=1),x===!0&&(I=2),M===!0&&(I=3);let y=h.attributes.position.count*I,S=1;y>t.maxTextureSize&&(S=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let N=new Float32Array(y*S*4*m),O=new Mo(N,y,S,m);O.type=ui,O.needsUpdate=!0;let W=I*4;for(let H=0;H<m;H++){let X=A[H],K=b[H],Q=T[H],$=y*S*4*H;for(let ot=0;ot<X.count;ot++){let rt=ot*W;_===!0&&(o.fromBufferAttribute(X,ot),N[$+rt+0]=o.x,N[$+rt+1]=o.y,N[$+rt+2]=o.z,N[$+rt+3]=0),x===!0&&(o.fromBufferAttribute(K,ot),N[$+rt+4]=o.x,N[$+rt+5]=o.y,N[$+rt+6]=o.z,N[$+rt+7]=0),M===!0&&(o.fromBufferAttribute(Q,ot),N[$+rt+8]=o.x,N[$+rt+9]=o.y,N[$+rt+10]=o.z,N[$+rt+11]=Q.itemSize===4?o.w:1)}}g={count:m,texture:O,size:new at(y,S)},r.set(h,g),h.addEventListener("dispose",D)}let v=0;for(let _=0;_<f.length;_++)v+=f[_];let p=h.morphTargetsRelative?1:1-v;u.getUniforms().setValue(s,"morphTargetBaseInfluence",p),u.getUniforms().setValue(s,"morphTargetInfluences",f),u.getUniforms().setValue(s,"morphTargetsTexture",g.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}else{let d=f===void 0?0:f.length,m=n[h.id];if(m===void 0||m.length!==d){m=[];for(let x=0;x<d;x++)m[x]=[x,0];n[h.id]=m}for(let x=0;x<d;x++){let M=m[x];M[0]=x,M[1]=f[x]}m.sort(Z0);for(let x=0;x<8;x++)x<d&&m[x][1]?(a[x][0]=m[x][0],a[x][1]=m[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Y0);let g=h.morphAttributes.position,v=h.morphAttributes.normal,p=0;for(let x=0;x<8;x++){let M=a[x],A=M[0],b=M[1];A!==Number.MAX_SAFE_INTEGER&&b?(g&&h.getAttribute("morphTarget"+x)!==g[A]&&h.setAttribute("morphTarget"+x,g[A]),v&&h.getAttribute("morphNormal"+x)!==v[A]&&h.setAttribute("morphNormal"+x,v[A]),i[x]=b,p+=b):(g&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),v&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}let _=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",_),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function K0(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var vs=class extends je{constructor(t,e,n,i,r,o,a,l,c,h){if(h=h!==void 0?h:Li,h!==Li&&h!==pi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Li&&(n=hi),n===void 0&&h===pi&&(n=$n),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:we,this.minFilter=l!==void 0?l:we,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Iu=new je,Du=new vs(1,1);Du.compareFunction=Au;var Uu=new Mo,Nu=new pl,Ou=new Ao,Wh=[],Xh=[],qh=new Float32Array(16),Yh=new Float32Array(9),Zh=new Float32Array(4);function As(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Wh[i];if(r===void 0&&(r=new Float32Array(i),Wh[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function De(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ue(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function $o(s,t){let e=Xh[t];e===void 0&&(e=new Int32Array(t),Xh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function J0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function j0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2fv(this.addr,t),Ue(e,t)}}function Q0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;s.uniform3fv(this.addr,t),Ue(e,t)}}function tg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4fv(this.addr,t),Ue(e,t)}}function eg(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;Zh.set(n),s.uniformMatrix2fv(this.addr,!1,Zh),Ue(e,n)}}function ng(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;Yh.set(n),s.uniformMatrix3fv(this.addr,!1,Yh),Ue(e,n)}}function ig(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;qh.set(n),s.uniformMatrix4fv(this.addr,!1,qh),Ue(e,n)}}function sg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function rg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2iv(this.addr,t),Ue(e,t)}}function og(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;s.uniform3iv(this.addr,t),Ue(e,t)}}function ag(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4iv(this.addr,t),Ue(e,t)}}function lg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function cg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2uiv(this.addr,t),Ue(e,t)}}function hg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;s.uniform3uiv(this.addr,t),Ue(e,t)}}function ug(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4uiv(this.addr,t),Ue(e,t)}}function fg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?Du:Iu;e.setTexture2D(t||r,i)}function dg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Nu,i)}function pg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Ou,i)}function mg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Uu,i)}function gg(s){switch(s){case 5126:return J0;case 35664:return j0;case 35665:return Q0;case 35666:return tg;case 35674:return eg;case 35675:return ng;case 35676:return ig;case 5124:case 35670:return sg;case 35667:case 35671:return rg;case 35668:case 35672:return og;case 35669:case 35673:return ag;case 5125:return lg;case 36294:return cg;case 36295:return hg;case 36296:return ug;case 35678:case 36198:case 36298:case 36306:case 35682:return fg;case 35679:case 36299:case 36307:return dg;case 35680:case 36300:case 36308:case 36293:return pg;case 36289:case 36303:case 36311:case 36292:return mg}}function vg(s,t){s.uniform1fv(this.addr,t)}function xg(s,t){let e=As(t,this.size,2);s.uniform2fv(this.addr,e)}function _g(s,t){let e=As(t,this.size,3);s.uniform3fv(this.addr,e)}function yg(s,t){let e=As(t,this.size,4);s.uniform4fv(this.addr,e)}function Mg(s,t){let e=As(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Sg(s,t){let e=As(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function bg(s,t){let e=As(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Eg(s,t){s.uniform1iv(this.addr,t)}function Tg(s,t){s.uniform2iv(this.addr,t)}function wg(s,t){s.uniform3iv(this.addr,t)}function Ag(s,t){s.uniform4iv(this.addr,t)}function Rg(s,t){s.uniform1uiv(this.addr,t)}function Cg(s,t){s.uniform2uiv(this.addr,t)}function Pg(s,t){s.uniform3uiv(this.addr,t)}function Lg(s,t){s.uniform4uiv(this.addr,t)}function Ig(s,t,e){let n=this.cache,i=t.length,r=$o(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Iu,r[o])}function Dg(s,t,e){let n=this.cache,i=t.length,r=$o(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Nu,r[o])}function Ug(s,t,e){let n=this.cache,i=t.length,r=$o(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Ou,r[o])}function Ng(s,t,e){let n=this.cache,i=t.length,r=$o(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Uu,r[o])}function Og(s){switch(s){case 5126:return vg;case 35664:return xg;case 35665:return _g;case 35666:return yg;case 35674:return Mg;case 35675:return Sg;case 35676:return bg;case 5124:case 35670:return Eg;case 35667:case 35671:return Tg;case 35668:case 35672:return wg;case 35669:case 35673:return Ag;case 5125:return Rg;case 36294:return Cg;case 36295:return Pg;case 36296:return Lg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ig;case 35679:case 36299:case 36307:return Dg;case 35680:case 36300:case 36308:case 36293:return Ug;case 36289:case 36303:case 36311:case 36292:return Ng}}var vl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=gg(e.type)}},xl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Og(e.type)}},_l=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},nl=/(\w+)(\])?(\[|\.)?/g;function $h(s,t){s.seq.push(t),s.map[t.id]=t}function Fg(s,t,e){let n=s.name,i=n.length;for(nl.lastIndex=0;;){let r=nl.exec(n),o=nl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){$h(e,c===void 0?new vl(a,s,t):new xl(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new _l(a),$h(e,u)),e=u}}}var hs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Fg(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Kh(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var zg=37297,Bg=0;function Hg(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function kg(s){let t=re.getPrimaries(re.workingColorSpace),e=re.getPrimaries(s),n;switch(t===e?n="":t===mo&&e===po?n="LinearDisplayP3ToLinearSRGB":t===po&&e===mo&&(n="LinearSRGBToLinearDisplayP3"),s){case Jn:case Zo:return[n,"LinearTransferOETF"];case oe:case sc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Jh(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Hg(s.getShaderSource(t),o)}else return i}function Vg(s,t){let e=kg(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Gg(s,t){let e;switch(t){case jl:e="Linear";break;case Ql:e="Reinhard";break;case tc:e="OptimizedCineon";break;case fr:e="ACESFilmic";break;case ec:e="AgX";break;case ed:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Wg(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(os).join(`
`)}function Xg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(os).join(`
`)}function qg(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Yg(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function os(s){return s!==""}function jh(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Qh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Zg=/^[ \t]*#include +<([\w\d./]+)>/gm;function yl(s){return s.replace(Zg,Kg)}var $g=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Kg(s,t){let e=Zt[t];if(e===void 0){let n=$g.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return yl(e)}var Jg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tu(s){return s.replace(Jg,jg)}function jg(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function eu(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Qg(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Wo?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Df?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Yn&&(t="SHADOWMAP_TYPE_VSM"),t}function tv(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case us:case fs:t="ENVMAP_TYPE_CUBE";break;case Yo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ev(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case fs:t="ENVMAP_MODE_REFRACTION";break}return t}function nv(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case vu:t="ENVMAP_BLENDING_MULTIPLY";break;case Qf:t="ENVMAP_BLENDING_MIX";break;case td:t="ENVMAP_BLENDING_ADD";break}return t}function iv(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function sv(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Qg(e),c=tv(e),h=ev(e),u=nv(e),f=iv(e),d=e.isWebGL2?"":Wg(e),m=Xg(e),g=qg(r),v=i.createProgram(),p,_,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(os).join(`
`),p.length>0&&(p+=`
`),_=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(os).join(`
`),_.length>0&&(_+=`
`)):(p=[eu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(os).join(`
`),_=[d,eu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fi?"#define TONE_MAPPING":"",e.toneMapping!==fi?Zt.tonemapping_pars_fragment:"",e.toneMapping!==fi?Gg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,Vg("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(os).join(`
`)),o=yl(o),o=jh(o,e),o=Qh(o,e),a=yl(a),a=jh(a,e),a=Qh(a,e),o=tu(o),a=tu(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let M=x+p+o,A=x+_+a,b=Kh(i,i.VERTEX_SHADER,M),T=Kh(i,i.FRAGMENT_SHADER,A);i.attachShader(v,b),i.attachShader(v,T),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function I(O){if(s.debug.checkShaderErrors){let W=i.getProgramInfoLog(v).trim(),D=i.getShaderInfoLog(b).trim(),H=i.getShaderInfoLog(T).trim(),X=!0,K=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,b,T);else{let Q=Jh(i,b,"vertex"),$=Jh(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Program Info Log: `+W+`
`+Q+`
`+$)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(D===""||H==="")&&(K=!1);K&&(O.diagnostics={runnable:X,programLog:W,vertexShader:{log:D,prefix:p},fragmentShader:{log:H,prefix:_}})}i.deleteShader(b),i.deleteShader(T),y=new hs(i,v),S=Yg(i,v)}let y;this.getUniforms=function(){return y===void 0&&I(this),y};let S;this.getAttributes=function(){return S===void 0&&I(this),S};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=i.getProgramParameter(v,zg)),N},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Bg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=T,this}var rv=0,Ml=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Sl(t),e.set(t,n)),n}},Sl=class{constructor(t){this.id=rv++,this.code=t,this.usedTimes=0}};function ov(s,t,e,n,i,r,o){let a=new bo,l=new Ml,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return y===0?"uv":`uv${y}`}function v(y,S,N,O,W){let D=O.fog,H=W.geometry,X=y.isMeshStandardMaterial?O.environment:null,K=(y.isMeshStandardMaterial?e:t).get(y.envMap||X),Q=K&&K.mapping===Yo?K.image.height:null,$=m[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let ot=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,rt=ot!==void 0?ot.length:0,xt=0;H.morphAttributes.position!==void 0&&(xt=1),H.morphAttributes.normal!==void 0&&(xt=2),H.morphAttributes.color!==void 0&&(xt=3);let j,lt,St,Ct;if($){let en=zn[$];j=en.vertexShader,lt=en.fragmentShader}else j=y.vertexShader,lt=y.fragmentShader,l.update(y),St=l.getVertexShaderID(y),Ct=l.getFragmentShaderID(y);let bt=s.getRenderTarget(),Nt=W.isInstancedMesh===!0,Ot=W.isBatchedMesh===!0,At=!!y.map,zt=!!y.matcap,U=!!K,vt=!!y.aoMap,tt=!!y.lightMap,gt=!!y.bumpMap,nt=!!y.normalMap,Ut=!!y.displacementMap,yt=!!y.emissiveMap,w=!!y.metalnessMap,E=!!y.roughnessMap,V=y.anisotropy>0,dt=y.clearcoat>0,ft=y.iridescence>0,ct=y.sheen>0,P=y.transmission>0,L=V&&!!y.anisotropyMap,z=dt&&!!y.clearcoatMap,k=dt&&!!y.clearcoatNormalMap,q=dt&&!!y.clearcoatRoughnessMap,B=ft&&!!y.iridescenceMap,it=ft&&!!y.iridescenceThicknessMap,st=ct&&!!y.sheenColorMap,et=ct&&!!y.sheenRoughnessMap,ht=!!y.specularMap,ut=!!y.specularColorMap,_t=!!y.specularIntensityMap,wt=P&&!!y.transmissionMap,Dt=P&&!!y.thicknessMap,Pt=!!y.gradientMap,mt=!!y.alphaMap,F=y.alphaTest>0,Et=!!y.alphaHash,Tt=!!y.extensions,Gt=!!H.attributes.uv1,kt=!!H.attributes.uv2,he=!!H.attributes.uv3,ue=fi;return y.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(ue=s.toneMapping),{isWebGL2:h,shaderID:$,shaderType:y.type,shaderName:y.name,vertexShader:j,fragmentShader:lt,defines:y.defines,customVertexShaderID:St,customFragmentShaderID:Ct,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Ot,instancing:Nt,instancingColor:Nt&&W.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:bt===null?s.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:Jn,map:At,matcap:zt,envMap:U,envMapMode:U&&K.mapping,envMapCubeUVHeight:Q,aoMap:vt,lightMap:tt,bumpMap:gt,normalMap:nt,displacementMap:f&&Ut,emissiveMap:yt,normalMapObjectSpace:nt&&y.normalMapType===fd,normalMapTangentSpace:nt&&y.normalMapType===ic,metalnessMap:w,roughnessMap:E,anisotropy:V,anisotropyMap:L,clearcoat:dt,clearcoatMap:z,clearcoatNormalMap:k,clearcoatRoughnessMap:q,iridescence:ft,iridescenceMap:B,iridescenceThicknessMap:it,sheen:ct,sheenColorMap:st,sheenRoughnessMap:et,specularMap:ht,specularColorMap:ut,specularIntensityMap:_t,transmission:P,transmissionMap:wt,thicknessMap:Dt,gradientMap:Pt,opaque:y.transparent===!1&&y.blending===ls,alphaMap:mt,alphaTest:F,alphaHash:Et,combine:y.combine,mapUv:At&&g(y.map.channel),aoMapUv:vt&&g(y.aoMap.channel),lightMapUv:tt&&g(y.lightMap.channel),bumpMapUv:gt&&g(y.bumpMap.channel),normalMapUv:nt&&g(y.normalMap.channel),displacementMapUv:Ut&&g(y.displacementMap.channel),emissiveMapUv:yt&&g(y.emissiveMap.channel),metalnessMapUv:w&&g(y.metalnessMap.channel),roughnessMapUv:E&&g(y.roughnessMap.channel),anisotropyMapUv:L&&g(y.anisotropyMap.channel),clearcoatMapUv:z&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:k&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:B&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:it&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:st&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:et&&g(y.sheenRoughnessMap.channel),specularMapUv:ht&&g(y.specularMap.channel),specularColorMapUv:ut&&g(y.specularColorMap.channel),specularIntensityMapUv:_t&&g(y.specularIntensityMap.channel),transmissionMapUv:wt&&g(y.transmissionMap.channel),thicknessMapUv:Dt&&g(y.thicknessMap.channel),alphaMapUv:mt&&g(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(nt||V),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:Gt,vertexUv2s:kt,vertexUv3s:he,pointsUvs:W.isPoints===!0&&!!H.attributes.uv&&(At||mt),fog:!!D,useFog:y.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:W.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:xt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:ue,useLegacyLights:s._useLegacyLights,decodeVideoTexture:At&&y.map.isVideoTexture===!0&&re.getTransfer(y.map.colorSpace)===le,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Je,flipSided:y.side===Xe,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:Tt&&y.extensions.derivatives===!0,extensionFragDepth:Tt&&y.extensions.fragDepth===!0,extensionDrawBuffers:Tt&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:Tt&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Tt&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){let S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(let N in y.defines)S.push(N),S.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(_(S,y),x(S,y),S.push(s.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function _(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function x(y,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function M(y){let S=m[y.type],N;if(S){let O=zn[S];N=ke.clone(O.uniforms)}else N=y.uniforms;return N}function A(y,S){let N;for(let O=0,W=c.length;O<W;O++){let D=c[O];if(D.cacheKey===S){N=D,++N.usedTimes;break}}return N===void 0&&(N=new sv(s,S,y,r),c.push(N)),N}function b(y){if(--y.usedTimes===0){let S=c.indexOf(y);c[S]=c[c.length-1],c.pop(),y.destroy()}}function T(y){l.remove(y)}function I(){l.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:M,acquireProgram:A,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:I}}function av(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function lv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function nu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function iu(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,d,m,g,v){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:g,group:v},s[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=g,p.group=v),t++,p}function a(u,f,d,m,g,v){let p=o(u,f,d,m,g,v);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function l(u,f,d,m,g,v){let p=o(u,f,d,m,g,v);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||lv),n.length>1&&n.sort(f||nu),i.length>1&&i.sort(f||nu)}function h(){for(let u=t,f=s.length;u<f;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function cv(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new iu,s.set(n,[o])):i>=r.length?(o=new iu,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function hv(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Lt};break;case"SpotLight":e={position:new C,direction:new C,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new C,halfWidth:new C,halfHeight:new C};break}return s[t.id]=e,e}}}function uv(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var fv=0;function dv(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function pv(s,t){let e=new hv,n=uv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new C);let r=new C,o=new qt,a=new qt;function l(h,u){let f=0,d=0,m=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let g=0,v=0,p=0,_=0,x=0,M=0,A=0,b=0,T=0,I=0,y=0;h.sort(dv);let S=u===!0?Math.PI:1;for(let O=0,W=h.length;O<W;O++){let D=h[O],H=D.color,X=D.intensity,K=D.distance,Q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=H.r*X*S,d+=H.g*X*S,m+=H.b*X*S;else if(D.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(D.sh.coefficients[$],X);y++}else if(D.isDirectionalLight){let $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity*S),D.castShadow){let ot=D.shadow,rt=n.get(D);rt.shadowBias=ot.bias,rt.shadowNormalBias=ot.normalBias,rt.shadowRadius=ot.radius,rt.shadowMapSize=ot.mapSize,i.directionalShadow[g]=rt,i.directionalShadowMap[g]=Q,i.directionalShadowMatrix[g]=D.shadow.matrix,M++}i.directional[g]=$,g++}else if(D.isSpotLight){let $=e.get(D);$.position.setFromMatrixPosition(D.matrixWorld),$.color.copy(H).multiplyScalar(X*S),$.distance=K,$.coneCos=Math.cos(D.angle),$.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),$.decay=D.decay,i.spot[p]=$;let ot=D.shadow;if(D.map&&(i.spotLightMap[T]=D.map,T++,ot.updateMatrices(D),D.castShadow&&I++),i.spotLightMatrix[p]=ot.matrix,D.castShadow){let rt=n.get(D);rt.shadowBias=ot.bias,rt.shadowNormalBias=ot.normalBias,rt.shadowRadius=ot.radius,rt.shadowMapSize=ot.mapSize,i.spotShadow[p]=rt,i.spotShadowMap[p]=Q,b++}p++}else if(D.isRectAreaLight){let $=e.get(D);$.color.copy(H).multiplyScalar(X),$.halfWidth.set(D.width*.5,0,0),$.halfHeight.set(0,D.height*.5,0),i.rectArea[_]=$,_++}else if(D.isPointLight){let $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity*S),$.distance=D.distance,$.decay=D.decay,D.castShadow){let ot=D.shadow,rt=n.get(D);rt.shadowBias=ot.bias,rt.shadowNormalBias=ot.normalBias,rt.shadowRadius=ot.radius,rt.shadowMapSize=ot.mapSize,rt.shadowCameraNear=ot.camera.near,rt.shadowCameraFar=ot.camera.far,i.pointShadow[v]=rt,i.pointShadowMap[v]=Q,i.pointShadowMatrix[v]=D.shadow.matrix,A++}i.point[v]=$,v++}else if(D.isHemisphereLight){let $=e.get(D);$.skyColor.copy(D.color).multiplyScalar(X*S),$.groundColor.copy(D.groundColor).multiplyScalar(X*S),i.hemi[x]=$,x++}}_>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Mt.LTC_FLOAT_1,i.rectAreaLTC2=Mt.LTC_FLOAT_2):(i.rectAreaLTC1=Mt.LTC_HALF_1,i.rectAreaLTC2=Mt.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Mt.LTC_FLOAT_1,i.rectAreaLTC2=Mt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Mt.LTC_HALF_1,i.rectAreaLTC2=Mt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=m;let N=i.hash;(N.directionalLength!==g||N.pointLength!==v||N.spotLength!==p||N.rectAreaLength!==_||N.hemiLength!==x||N.numDirectionalShadows!==M||N.numPointShadows!==A||N.numSpotShadows!==b||N.numSpotMaps!==T||N.numLightProbes!==y)&&(i.directional.length=g,i.spot.length=p,i.rectArea.length=_,i.point.length=v,i.hemi.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=b+T-I,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=y,N.directionalLength=g,N.pointLength=v,N.spotLength=p,N.rectAreaLength=_,N.hemiLength=x,N.numDirectionalShadows=M,N.numPointShadows=A,N.numSpotShadows=b,N.numSpotMaps=T,N.numLightProbes=y,i.version=fv++)}function c(h,u){let f=0,d=0,m=0,g=0,v=0,p=u.matrixWorldInverse;for(let _=0,x=h.length;_<x;_++){let M=h[_];if(M.isDirectionalLight){let A=i.directional[f];A.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),f++}else if(M.isSpotLight){let A=i.spot[m];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),m++}else if(M.isRectAreaLight){let A=i.rectArea[g];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(p),a.identity(),o.copy(M.matrixWorld),o.premultiply(p),a.extractRotation(o),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){let A=i.point[d];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){let A=i.hemi[v];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(p),v++}}}return{setup:l,setupView:c,state:i}}function su(s,t){let e=new pv(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function mv(s,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),l;return a===void 0?(l=new su(s,t),e.set(r,[l])):o>=a.length?(l=new su(s,t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}var Ui=class extends Qn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ud,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},bl=class extends Qn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},gv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function xv(s,t,e){let n=new er,i=new at,r=new at,o=new ve,a=new Ui({depthPacking:dr}),l=new bl,c={},h=e.maxTextureSize,u={[di]:Xe,[Xe]:di,[Je]:Je},f=new ne({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:gv,fragmentShader:vv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new ce;m.setAttribute("position",new Le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Jt(m,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wo;let p=this.type;this.render=function(b,T,I){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||b.length===0)return;let y=s.getRenderTarget(),S=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),O=s.state;O.setBlending(Pe),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let W=p!==Yn&&this.type===Yn,D=p===Yn&&this.type!==Yn;for(let H=0,X=b.length;H<X;H++){let K=b[H],Q=K.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;i.copy(Q.mapSize);let $=Q.getFrameExtents();if(i.multiply($),r.copy(Q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/$.x),i.x=r.x*$.x,Q.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/$.y),i.y=r.y*$.y,Q.mapSize.y=r.y)),Q.map===null||W===!0||D===!0){let rt=this.type!==Yn?{minFilter:we,magFilter:we}:{};Q.map!==null&&Q.map.dispose(),Q.map=new pe(i.x,i.y,rt),Q.map.texture.name=K.name+".shadowMap",Q.camera.updateProjectionMatrix()}s.setRenderTarget(Q.map),s.clear();let ot=Q.getViewportCount();for(let rt=0;rt<ot;rt++){let xt=Q.getViewport(rt);o.set(r.x*xt.x,r.y*xt.y,r.x*xt.z,r.y*xt.w),O.viewport(o),Q.updateMatrices(K,rt),n=Q.getFrustum(),M(T,I,Q.camera,K,this.type)}Q.isPointLightShadow!==!0&&this.type===Yn&&_(Q,I),Q.needsUpdate=!1}p=this.type,v.needsUpdate=!1,s.setRenderTarget(y,S,N)};function _(b,T){let I=t.update(g);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new pe(i.x,i.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(T,null,I,f,g,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(T,null,I,d,g,null)}function x(b,T,I,y){let S=null,N=I.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)S=N;else if(S=I.isPointLight===!0?l:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let O=S.uuid,W=T.uuid,D=c[O];D===void 0&&(D={},c[O]=D);let H=D[W];H===void 0&&(H=S.clone(),D[W]=H,T.addEventListener("dispose",A)),S=H}if(S.visible=T.visible,S.wireframe=T.wireframe,y===Yn?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:u[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let O=s.properties.get(S);O.light=I}return S}function M(b,T,I,y,S){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===Yn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,b.matrixWorld);let W=t.update(b),D=b.material;if(Array.isArray(D)){let H=W.groups;for(let X=0,K=H.length;X<K;X++){let Q=H[X],$=D[Q.materialIndex];if($&&$.visible){let ot=x(b,$,y,S);b.onBeforeShadow(s,b,T,I,W,ot,Q),s.renderBufferDirect(I,null,W,ot,b,Q),b.onAfterShadow(s,b,T,I,W,ot,Q)}}}else if(D.visible){let H=x(b,D,y,S);b.onBeforeShadow(s,b,T,I,W,H,null),s.renderBufferDirect(I,null,W,H,b,null),b.onAfterShadow(s,b,T,I,W,H,null)}}let O=b.children;for(let W=0,D=O.length;W<D;W++)M(O[W],T,I,y,S)}function A(b){b.target.removeEventListener("dispose",A);for(let I in c){let y=c[I],S=b.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}function _v(s,t,e){let n=e.isWebGL2;function i(){let F=!1,Et=new ve,Tt=null,Gt=new ve(0,0,0,0);return{setMask:function(kt){Tt!==kt&&!F&&(s.colorMask(kt,kt,kt,kt),Tt=kt)},setLocked:function(kt){F=kt},setClear:function(kt,he,ue,Fe,en){en===!0&&(kt*=Fe,he*=Fe,ue*=Fe),Et.set(kt,he,ue,Fe),Gt.equals(Et)===!1&&(s.clearColor(kt,he,ue,Fe),Gt.copy(Et))},reset:function(){F=!1,Tt=null,Gt.set(-1,0,0,0)}}}function r(){let F=!1,Et=null,Tt=null,Gt=null;return{setTest:function(kt){kt?Ot(s.DEPTH_TEST):At(s.DEPTH_TEST)},setMask:function(kt){Et!==kt&&!F&&(s.depthMask(kt),Et=kt)},setFunc:function(kt){if(Tt!==kt){switch(kt){case qf:s.depthFunc(s.NEVER);break;case Yf:s.depthFunc(s.ALWAYS);break;case Zf:s.depthFunc(s.LESS);break;case co:s.depthFunc(s.LEQUAL);break;case $f:s.depthFunc(s.EQUAL);break;case Kf:s.depthFunc(s.GEQUAL);break;case Jf:s.depthFunc(s.GREATER);break;case jf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Tt=kt}},setLocked:function(kt){F=kt},setClear:function(kt){Gt!==kt&&(s.clearDepth(kt),Gt=kt)},reset:function(){F=!1,Et=null,Tt=null,Gt=null}}}function o(){let F=!1,Et=null,Tt=null,Gt=null,kt=null,he=null,ue=null,Fe=null,en=null;return{setTest:function(fe){F||(fe?Ot(s.STENCIL_TEST):At(s.STENCIL_TEST))},setMask:function(fe){Et!==fe&&!F&&(s.stencilMask(fe),Et=fe)},setFunc:function(fe,nn,Fn){(Tt!==fe||Gt!==nn||kt!==Fn)&&(s.stencilFunc(fe,nn,Fn),Tt=fe,Gt=nn,kt=Fn)},setOp:function(fe,nn,Fn){(he!==fe||ue!==nn||Fe!==Fn)&&(s.stencilOp(fe,nn,Fn),he=fe,ue=nn,Fe=Fn)},setLocked:function(fe){F=fe},setClear:function(fe){en!==fe&&(s.clearStencil(fe),en=fe)},reset:function(){F=!1,Et=null,Tt=null,Gt=null,kt=null,he=null,ue=null,Fe=null,en=null}}}let a=new i,l=new r,c=new o,h=new WeakMap,u=new WeakMap,f={},d={},m=new WeakMap,g=[],v=null,p=!1,_=null,x=null,M=null,A=null,b=null,T=null,I=null,y=new Lt(0,0,0),S=0,N=!1,O=null,W=null,D=null,H=null,X=null,K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Q=!1,$=0,ot=s.getParameter(s.VERSION);ot.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(ot)[1]),Q=$>=1):ot.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),Q=$>=2);let rt=null,xt={},j=s.getParameter(s.SCISSOR_BOX),lt=s.getParameter(s.VIEWPORT),St=new ve().fromArray(j),Ct=new ve().fromArray(lt);function bt(F,Et,Tt,Gt){let kt=new Uint8Array(4),he=s.createTexture();s.bindTexture(F,he),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ue=0;ue<Tt;ue++)n&&(F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY)?s.texImage3D(Et,0,s.RGBA,1,1,Gt,0,s.RGBA,s.UNSIGNED_BYTE,kt):s.texImage2D(Et+ue,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,kt);return he}let Nt={};Nt[s.TEXTURE_2D]=bt(s.TEXTURE_2D,s.TEXTURE_2D,1),Nt[s.TEXTURE_CUBE_MAP]=bt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Nt[s.TEXTURE_2D_ARRAY]=bt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Nt[s.TEXTURE_3D]=bt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ot(s.DEPTH_TEST),l.setFunc(co),yt(!1),w(zc),Ot(s.CULL_FACE),nt(Pe);function Ot(F){f[F]!==!0&&(s.enable(F),f[F]=!0)}function At(F){f[F]!==!1&&(s.disable(F),f[F]=!1)}function zt(F,Et){return d[F]!==Et?(s.bindFramebuffer(F,Et),d[F]=Et,n&&(F===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=Et),F===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=Et)),!0):!1}function U(F,Et){let Tt=g,Gt=!1;if(F)if(Tt=m.get(Et),Tt===void 0&&(Tt=[],m.set(Et,Tt)),F.isWebGLMultipleRenderTargets){let kt=F.texture;if(Tt.length!==kt.length||Tt[0]!==s.COLOR_ATTACHMENT0){for(let he=0,ue=kt.length;he<ue;he++)Tt[he]=s.COLOR_ATTACHMENT0+he;Tt.length=kt.length,Gt=!0}}else Tt[0]!==s.COLOR_ATTACHMENT0&&(Tt[0]=s.COLOR_ATTACHMENT0,Gt=!0);else Tt[0]!==s.BACK&&(Tt[0]=s.BACK,Gt=!0);Gt&&(e.isWebGL2?s.drawBuffers(Tt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Tt))}function vt(F){return v!==F?(s.useProgram(F),v=F,!0):!1}let tt={[Sn]:s.FUNC_ADD,[Uf]:s.FUNC_SUBTRACT,[Nf]:s.FUNC_REVERSE_SUBTRACT};if(n)tt[kc]=s.MIN,tt[Vc]=s.MAX;else{let F=t.get("EXT_blend_minmax");F!==null&&(tt[kc]=F.MIN_EXT,tt[Vc]=F.MAX_EXT)}let gt={[ws]:s.ZERO,[Of]:s.ONE,[Ff]:s.SRC_COLOR,[ll]:s.SRC_ALPHA,[kf]:s.SRC_ALPHA_SATURATE,[qo]:s.DST_COLOR,[Xo]:s.DST_ALPHA,[zf]:s.ONE_MINUS_SRC_COLOR,[cl]:s.ONE_MINUS_SRC_ALPHA,[Hf]:s.ONE_MINUS_DST_COLOR,[Bf]:s.ONE_MINUS_DST_ALPHA,[Vf]:s.CONSTANT_COLOR,[Gf]:s.ONE_MINUS_CONSTANT_COLOR,[Wf]:s.CONSTANT_ALPHA,[Xf]:s.ONE_MINUS_CONSTANT_ALPHA};function nt(F,Et,Tt,Gt,kt,he,ue,Fe,en,fe){if(F===Pe){p===!0&&(At(s.BLEND),p=!1);return}if(p===!1&&(Ot(s.BLEND),p=!0),F!==Jl){if(F!==_||fe!==N){if((x!==Sn||b!==Sn)&&(s.blendEquation(s.FUNC_ADD),x=Sn,b=Sn),fe)switch(F){case ls:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Kn:s.blendFunc(s.ONE,s.ONE);break;case Bc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Hc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case ls:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Kn:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Bc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Hc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}M=null,A=null,T=null,I=null,y.set(0,0,0),S=0,_=F,N=fe}return}kt=kt||Et,he=he||Tt,ue=ue||Gt,(Et!==x||kt!==b)&&(s.blendEquationSeparate(tt[Et],tt[kt]),x=Et,b=kt),(Tt!==M||Gt!==A||he!==T||ue!==I)&&(s.blendFuncSeparate(gt[Tt],gt[Gt],gt[he],gt[ue]),M=Tt,A=Gt,T=he,I=ue),(Fe.equals(y)===!1||en!==S)&&(s.blendColor(Fe.r,Fe.g,Fe.b,en),y.copy(Fe),S=en),_=F,N=!1}function Ut(F,Et){F.side===Je?At(s.CULL_FACE):Ot(s.CULL_FACE);let Tt=F.side===Xe;Et&&(Tt=!Tt),yt(Tt),F.blending===ls&&F.transparent===!1?nt(Pe):nt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),a.setMask(F.colorWrite);let Gt=F.stencilWrite;c.setTest(Gt),Gt&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),V(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Ot(s.SAMPLE_ALPHA_TO_COVERAGE):At(s.SAMPLE_ALPHA_TO_COVERAGE)}function yt(F){O!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),O=F)}function w(F){F!==Lf?(Ot(s.CULL_FACE),F!==W&&(F===zc?s.cullFace(s.BACK):F===If?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):At(s.CULL_FACE),W=F}function E(F){F!==D&&(Q&&s.lineWidth(F),D=F)}function V(F,Et,Tt){F?(Ot(s.POLYGON_OFFSET_FILL),(H!==Et||X!==Tt)&&(s.polygonOffset(Et,Tt),H=Et,X=Tt)):At(s.POLYGON_OFFSET_FILL)}function dt(F){F?Ot(s.SCISSOR_TEST):At(s.SCISSOR_TEST)}function ft(F){F===void 0&&(F=s.TEXTURE0+K-1),rt!==F&&(s.activeTexture(F),rt=F)}function ct(F,Et,Tt){Tt===void 0&&(rt===null?Tt=s.TEXTURE0+K-1:Tt=rt);let Gt=xt[Tt];Gt===void 0&&(Gt={type:void 0,texture:void 0},xt[Tt]=Gt),(Gt.type!==F||Gt.texture!==Et)&&(rt!==Tt&&(s.activeTexture(Tt),rt=Tt),s.bindTexture(F,Et||Nt[F]),Gt.type=F,Gt.texture=Et)}function P(){let F=xt[rt];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function L(){try{s.compressedTexImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function z(){try{s.compressedTexImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function k(){try{s.texSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function q(){try{s.texSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function B(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function it(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function st(){try{s.texStorage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function et(){try{s.texStorage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ht(){try{s.texImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ut(){try{s.texImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _t(F){St.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),St.copy(F))}function wt(F){Ct.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),Ct.copy(F))}function Dt(F,Et){let Tt=u.get(Et);Tt===void 0&&(Tt=new WeakMap,u.set(Et,Tt));let Gt=Tt.get(F);Gt===void 0&&(Gt=s.getUniformBlockIndex(Et,F.name),Tt.set(F,Gt))}function Pt(F,Et){let Gt=u.get(Et).get(F);h.get(Et)!==Gt&&(s.uniformBlockBinding(Et,Gt,F.__bindingPointIndex),h.set(Et,Gt))}function mt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},rt=null,xt={},d={},m=new WeakMap,g=[],v=null,p=!1,_=null,x=null,M=null,A=null,b=null,T=null,I=null,y=new Lt(0,0,0),S=0,N=!1,O=null,W=null,D=null,H=null,X=null,St.set(0,0,s.canvas.width,s.canvas.height),Ct.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ot,disable:At,bindFramebuffer:zt,drawBuffers:U,useProgram:vt,setBlending:nt,setMaterial:Ut,setFlipSided:yt,setCullFace:w,setLineWidth:E,setPolygonOffset:V,setScissorTest:dt,activeTexture:ft,bindTexture:ct,unbindTexture:P,compressedTexImage2D:L,compressedTexImage3D:z,texImage2D:ht,texImage3D:ut,updateUBOMapping:Dt,uniformBlockBinding:Pt,texStorage2D:st,texStorage3D:et,texSubImage2D:k,texSubImage3D:q,compressedTexSubImage2D:B,compressedTexSubImage3D:it,scissor:_t,viewport:wt,reset:mt}}function yv(s,t,e,n,i,r,o){let a=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,E){return d?new OffscreenCanvas(w,E):xo("canvas")}function g(w,E,V,dt){let ft=1;if((w.width>dt||w.height>dt)&&(ft=dt/Math.max(w.width,w.height)),ft<1||E===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){let ct=E?vo:Math.floor,P=ct(ft*w.width),L=ct(ft*w.height);u===void 0&&(u=m(P,L));let z=V?m(P,L):u;return z.width=P,z.height=L,z.getContext("2d").drawImage(w,0,0,P,L),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+P+"x"+L+")."),z}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function v(w){return fl(w.width)&&fl(w.height)}function p(w){return a?!1:w.wrapS!==mn||w.wrapT!==mn||w.minFilter!==we&&w.minFilter!==on}function _(w,E){return w.generateMipmaps&&E&&w.minFilter!==we&&w.minFilter!==on}function x(w){s.generateMipmap(w)}function M(w,E,V,dt,ft=!1){if(a===!1)return E;if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ct=E;if(E===s.RED&&(V===s.FLOAT&&(ct=s.R32F),V===s.HALF_FLOAT&&(ct=s.R16F),V===s.UNSIGNED_BYTE&&(ct=s.R8)),E===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(ct=s.R8UI),V===s.UNSIGNED_SHORT&&(ct=s.R16UI),V===s.UNSIGNED_INT&&(ct=s.R32UI),V===s.BYTE&&(ct=s.R8I),V===s.SHORT&&(ct=s.R16I),V===s.INT&&(ct=s.R32I)),E===s.RG&&(V===s.FLOAT&&(ct=s.RG32F),V===s.HALF_FLOAT&&(ct=s.RG16F),V===s.UNSIGNED_BYTE&&(ct=s.RG8)),E===s.RGBA){let P=ft?fo:re.getTransfer(dt);V===s.FLOAT&&(ct=s.RGBA32F),V===s.HALF_FLOAT&&(ct=s.RGBA16F),V===s.UNSIGNED_BYTE&&(ct=P===le?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&(ct=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(ct=s.RGB5_A1)}return(ct===s.R16F||ct===s.R32F||ct===s.RG16F||ct===s.RG32F||ct===s.RGBA16F||ct===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function A(w,E,V){return _(w,V)===!0||w.isFramebufferTexture&&w.minFilter!==we&&w.minFilter!==on?Math.log2(Math.max(E.width,E.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?E.mipmaps.length:1}function b(w){return w===we||w===Gc||w===Ra?s.NEAREST:s.LINEAR}function T(w){let E=w.target;E.removeEventListener("dispose",T),y(E),E.isVideoTexture&&h.delete(E)}function I(w){let E=w.target;E.removeEventListener("dispose",I),N(E)}function y(w){let E=n.get(w);if(E.__webglInit===void 0)return;let V=w.source,dt=f.get(V);if(dt){let ft=dt[E.__cacheKey];ft.usedTimes--,ft.usedTimes===0&&S(w),Object.keys(dt).length===0&&f.delete(V)}n.remove(w)}function S(w){let E=n.get(w);s.deleteTexture(E.__webglTexture);let V=w.source,dt=f.get(V);delete dt[E.__cacheKey],o.memory.textures--}function N(w){let E=w.texture,V=n.get(w),dt=n.get(E);if(dt.__webglTexture!==void 0&&(s.deleteTexture(dt.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(V.__webglFramebuffer[ft]))for(let ct=0;ct<V.__webglFramebuffer[ft].length;ct++)s.deleteFramebuffer(V.__webglFramebuffer[ft][ct]);else s.deleteFramebuffer(V.__webglFramebuffer[ft]);V.__webglDepthbuffer&&s.deleteRenderbuffer(V.__webglDepthbuffer[ft])}else{if(Array.isArray(V.__webglFramebuffer))for(let ft=0;ft<V.__webglFramebuffer.length;ft++)s.deleteFramebuffer(V.__webglFramebuffer[ft]);else s.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&s.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&s.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let ft=0;ft<V.__webglColorRenderbuffer.length;ft++)V.__webglColorRenderbuffer[ft]&&s.deleteRenderbuffer(V.__webglColorRenderbuffer[ft]);V.__webglDepthRenderbuffer&&s.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let ft=0,ct=E.length;ft<ct;ft++){let P=n.get(E[ft]);P.__webglTexture&&(s.deleteTexture(P.__webglTexture),o.memory.textures--),n.remove(E[ft])}n.remove(E),n.remove(w)}let O=0;function W(){O=0}function D(){let w=O;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),O+=1,w}function H(w){let E=[];return E.push(w.wrapS),E.push(w.wrapT),E.push(w.wrapR||0),E.push(w.magFilter),E.push(w.minFilter),E.push(w.anisotropy),E.push(w.internalFormat),E.push(w.format),E.push(w.type),E.push(w.generateMipmaps),E.push(w.premultiplyAlpha),E.push(w.flipY),E.push(w.unpackAlignment),E.push(w.colorSpace),E.join()}function X(w,E){let V=n.get(w);if(w.isVideoTexture&&Ut(w),w.isRenderTargetTexture===!1&&w.version>0&&V.__version!==w.version){let dt=w.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{St(V,w,E);return}}e.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+E)}function K(w,E){let V=n.get(w);if(w.version>0&&V.__version!==w.version){St(V,w,E);return}e.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+E)}function Q(w,E){let V=n.get(w);if(w.version>0&&V.__version!==w.version){St(V,w,E);return}e.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+E)}function $(w,E){let V=n.get(w);if(w.version>0&&V.__version!==w.version){Ct(V,w,E);return}e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+E)}let ot={[cn]:s.REPEAT,[mn]:s.CLAMP_TO_EDGE,[Qs]:s.MIRRORED_REPEAT},rt={[we]:s.NEAREST,[Gc]:s.NEAREST_MIPMAP_NEAREST,[Ra]:s.NEAREST_MIPMAP_LINEAR,[on]:s.LINEAR,[nd]:s.LINEAR_MIPMAP_NEAREST,[Di]:s.LINEAR_MIPMAP_LINEAR},xt={[dd]:s.NEVER,[_d]:s.ALWAYS,[pd]:s.LESS,[Au]:s.LEQUAL,[md]:s.EQUAL,[xd]:s.GEQUAL,[gd]:s.GREATER,[vd]:s.NOTEQUAL};function j(w,E,V){if(V?(s.texParameteri(w,s.TEXTURE_WRAP_S,ot[E.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,ot[E.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,ot[E.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,rt[E.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,rt[E.minFilter])):(s.texParameteri(w,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(w,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(E.wrapS!==mn||E.wrapT!==mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(w,s.TEXTURE_MAG_FILTER,b(E.magFilter)),s.texParameteri(w,s.TEXTURE_MIN_FILTER,b(E.minFilter)),E.minFilter!==we&&E.minFilter!==on&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,xt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let dt=t.get("EXT_texture_filter_anisotropic");if(E.magFilter===we||E.minFilter!==Ra&&E.minFilter!==Di||E.type===ui&&t.has("OES_texture_float_linear")===!1||a===!1&&E.type===Ie&&t.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(s.texParameterf(w,dt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function lt(w,E){let V=!1;w.__webglInit===void 0&&(w.__webglInit=!0,E.addEventListener("dispose",T));let dt=E.source,ft=f.get(dt);ft===void 0&&(ft={},f.set(dt,ft));let ct=H(E);if(ct!==w.__cacheKey){ft[ct]===void 0&&(ft[ct]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ft[ct].usedTimes++;let P=ft[w.__cacheKey];P!==void 0&&(ft[w.__cacheKey].usedTimes--,P.usedTimes===0&&S(E)),w.__cacheKey=ct,w.__webglTexture=ft[ct].texture}return V}function St(w,E,V){let dt=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(dt=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(dt=s.TEXTURE_3D);let ft=lt(w,E),ct=E.source;e.bindTexture(dt,w.__webglTexture,s.TEXTURE0+V);let P=n.get(ct);if(ct.version!==P.__version||ft===!0){e.activeTexture(s.TEXTURE0+V);let L=re.getPrimaries(re.workingColorSpace),z=E.colorSpace===bn?null:re.getPrimaries(E.colorSpace),k=E.colorSpace===bn||L===z?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,k);let q=p(E)&&v(E.image)===!1,B=g(E.image,q,!1,i.maxTextureSize);B=yt(E,B);let it=v(B)||a,st=r.convert(E.format,E.colorSpace),et=r.convert(E.type),ht=M(E.internalFormat,st,et,E.colorSpace,E.isVideoTexture);j(dt,E,it);let ut,_t=E.mipmaps,wt=a&&E.isVideoTexture!==!0&&ht!==Tu,Dt=P.__version===void 0||ft===!0,Pt=A(E,B,it);if(E.isDepthTexture)ht=s.DEPTH_COMPONENT,a?E.type===ui?ht=s.DEPTH_COMPONENT32F:E.type===hi?ht=s.DEPTH_COMPONENT24:E.type===$n?ht=s.DEPTH24_STENCIL8:ht=s.DEPTH_COMPONENT16:E.type===ui&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Li&&ht===s.DEPTH_COMPONENT&&E.type!==nc&&E.type!==hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=hi,et=r.convert(E.type)),E.format===pi&&ht===s.DEPTH_COMPONENT&&(ht=s.DEPTH_STENCIL,E.type!==$n&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=$n,et=r.convert(E.type))),Dt&&(wt?e.texStorage2D(s.TEXTURE_2D,1,ht,B.width,B.height):e.texImage2D(s.TEXTURE_2D,0,ht,B.width,B.height,0,st,et,null));else if(E.isDataTexture)if(_t.length>0&&it){wt&&Dt&&e.texStorage2D(s.TEXTURE_2D,Pt,ht,_t[0].width,_t[0].height);for(let mt=0,F=_t.length;mt<F;mt++)ut=_t[mt],wt?e.texSubImage2D(s.TEXTURE_2D,mt,0,0,ut.width,ut.height,st,et,ut.data):e.texImage2D(s.TEXTURE_2D,mt,ht,ut.width,ut.height,0,st,et,ut.data);E.generateMipmaps=!1}else wt?(Dt&&e.texStorage2D(s.TEXTURE_2D,Pt,ht,B.width,B.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,B.width,B.height,st,et,B.data)):e.texImage2D(s.TEXTURE_2D,0,ht,B.width,B.height,0,st,et,B.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){wt&&Dt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Pt,ht,_t[0].width,_t[0].height,B.depth);for(let mt=0,F=_t.length;mt<F;mt++)ut=_t[mt],E.format!==gn?st!==null?wt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,mt,0,0,0,ut.width,ut.height,B.depth,st,ut.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,mt,ht,ut.width,ut.height,B.depth,0,ut.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):wt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,mt,0,0,0,ut.width,ut.height,B.depth,st,et,ut.data):e.texImage3D(s.TEXTURE_2D_ARRAY,mt,ht,ut.width,ut.height,B.depth,0,st,et,ut.data)}else{wt&&Dt&&e.texStorage2D(s.TEXTURE_2D,Pt,ht,_t[0].width,_t[0].height);for(let mt=0,F=_t.length;mt<F;mt++)ut=_t[mt],E.format!==gn?st!==null?wt?e.compressedTexSubImage2D(s.TEXTURE_2D,mt,0,0,ut.width,ut.height,st,ut.data):e.compressedTexImage2D(s.TEXTURE_2D,mt,ht,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):wt?e.texSubImage2D(s.TEXTURE_2D,mt,0,0,ut.width,ut.height,st,et,ut.data):e.texImage2D(s.TEXTURE_2D,mt,ht,ut.width,ut.height,0,st,et,ut.data)}else if(E.isDataArrayTexture)wt?(Dt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Pt,ht,B.width,B.height,B.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,B.width,B.height,B.depth,st,et,B.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,ht,B.width,B.height,B.depth,0,st,et,B.data);else if(E.isData3DTexture)wt?(Dt&&e.texStorage3D(s.TEXTURE_3D,Pt,ht,B.width,B.height,B.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,B.width,B.height,B.depth,st,et,B.data)):e.texImage3D(s.TEXTURE_3D,0,ht,B.width,B.height,B.depth,0,st,et,B.data);else if(E.isFramebufferTexture){if(Dt)if(wt)e.texStorage2D(s.TEXTURE_2D,Pt,ht,B.width,B.height);else{let mt=B.width,F=B.height;for(let Et=0;Et<Pt;Et++)e.texImage2D(s.TEXTURE_2D,Et,ht,mt,F,0,st,et,null),mt>>=1,F>>=1}}else if(_t.length>0&&it){wt&&Dt&&e.texStorage2D(s.TEXTURE_2D,Pt,ht,_t[0].width,_t[0].height);for(let mt=0,F=_t.length;mt<F;mt++)ut=_t[mt],wt?e.texSubImage2D(s.TEXTURE_2D,mt,0,0,st,et,ut):e.texImage2D(s.TEXTURE_2D,mt,ht,st,et,ut);E.generateMipmaps=!1}else wt?(Dt&&e.texStorage2D(s.TEXTURE_2D,Pt,ht,B.width,B.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,st,et,B)):e.texImage2D(s.TEXTURE_2D,0,ht,st,et,B);_(E,it)&&x(dt),P.__version=ct.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function Ct(w,E,V){if(E.image.length!==6)return;let dt=lt(w,E),ft=E.source;e.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+V);let ct=n.get(ft);if(ft.version!==ct.__version||dt===!0){e.activeTexture(s.TEXTURE0+V);let P=re.getPrimaries(re.workingColorSpace),L=E.colorSpace===bn?null:re.getPrimaries(E.colorSpace),z=E.colorSpace===bn||P===L?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,z);let k=E.isCompressedTexture||E.image[0].isCompressedTexture,q=E.image[0]&&E.image[0].isDataTexture,B=[];for(let mt=0;mt<6;mt++)!k&&!q?B[mt]=g(E.image[mt],!1,!0,i.maxCubemapSize):B[mt]=q?E.image[mt].image:E.image[mt],B[mt]=yt(E,B[mt]);let it=B[0],st=v(it)||a,et=r.convert(E.format,E.colorSpace),ht=r.convert(E.type),ut=M(E.internalFormat,et,ht,E.colorSpace),_t=a&&E.isVideoTexture!==!0,wt=ct.__version===void 0||dt===!0,Dt=A(E,it,st);j(s.TEXTURE_CUBE_MAP,E,st);let Pt;if(k){_t&&wt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Dt,ut,it.width,it.height);for(let mt=0;mt<6;mt++){Pt=B[mt].mipmaps;for(let F=0;F<Pt.length;F++){let Et=Pt[F];E.format!==gn?et!==null?_t?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,F,0,0,Et.width,Et.height,et,Et.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,F,ut,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_t?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,F,0,0,Et.width,Et.height,et,ht,Et.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,F,ut,Et.width,Et.height,0,et,ht,Et.data)}}}else{Pt=E.mipmaps,_t&&wt&&(Pt.length>0&&Dt++,e.texStorage2D(s.TEXTURE_CUBE_MAP,Dt,ut,B[0].width,B[0].height));for(let mt=0;mt<6;mt++)if(q){_t?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,B[mt].width,B[mt].height,et,ht,B[mt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ut,B[mt].width,B[mt].height,0,et,ht,B[mt].data);for(let F=0;F<Pt.length;F++){let Tt=Pt[F].image[mt].image;_t?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,F+1,0,0,Tt.width,Tt.height,et,ht,Tt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,F+1,ut,Tt.width,Tt.height,0,et,ht,Tt.data)}}else{_t?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,et,ht,B[mt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ut,et,ht,B[mt]);for(let F=0;F<Pt.length;F++){let Et=Pt[F];_t?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,F+1,0,0,et,ht,Et.image[mt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,F+1,ut,et,ht,Et.image[mt])}}}_(E,st)&&x(s.TEXTURE_CUBE_MAP),ct.__version=ft.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function bt(w,E,V,dt,ft,ct){let P=r.convert(V.format,V.colorSpace),L=r.convert(V.type),z=M(V.internalFormat,P,L,V.colorSpace);if(!n.get(E).__hasExternalTextures){let q=Math.max(1,E.width>>ct),B=Math.max(1,E.height>>ct);ft===s.TEXTURE_3D||ft===s.TEXTURE_2D_ARRAY?e.texImage3D(ft,ct,z,q,B,E.depth,0,P,L,null):e.texImage2D(ft,ct,z,q,B,0,P,L,null)}e.bindFramebuffer(s.FRAMEBUFFER,w),nt(E)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,dt,ft,n.get(V).__webglTexture,0,gt(E)):(ft===s.TEXTURE_2D||ft>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ft<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,dt,ft,n.get(V).__webglTexture,ct),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Nt(w,E,V){if(s.bindRenderbuffer(s.RENDERBUFFER,w),E.depthBuffer&&!E.stencilBuffer){let dt=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(V||nt(E)){let ft=E.depthTexture;ft&&ft.isDepthTexture&&(ft.type===ui?dt=s.DEPTH_COMPONENT32F:ft.type===hi&&(dt=s.DEPTH_COMPONENT24));let ct=gt(E);nt(E)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct,dt,E.width,E.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,dt,E.width,E.height)}else s.renderbufferStorage(s.RENDERBUFFER,dt,E.width,E.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,w)}else if(E.depthBuffer&&E.stencilBuffer){let dt=gt(E);V&&nt(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,s.DEPTH24_STENCIL8,E.width,E.height):nt(E)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,s.DEPTH24_STENCIL8,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,w)}else{let dt=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ft=0;ft<dt.length;ft++){let ct=dt[ft],P=r.convert(ct.format,ct.colorSpace),L=r.convert(ct.type),z=M(ct.internalFormat,P,L,ct.colorSpace),k=gt(E);V&&nt(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,k,z,E.width,E.height):nt(E)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,k,z,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,z,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ot(w,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,w),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),X(E.depthTexture,0);let dt=n.get(E.depthTexture).__webglTexture,ft=gt(E);if(E.depthTexture.format===Li)nt(E)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,dt,0,ft):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,dt,0);else if(E.depthTexture.format===pi)nt(E)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,dt,0,ft):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function At(w){let E=n.get(w),V=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!E.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Ot(E.__webglFramebuffer,w)}else if(V){E.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[dt]),E.__webglDepthbuffer[dt]=s.createRenderbuffer(),Nt(E.__webglDepthbuffer[dt],w,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=s.createRenderbuffer(),Nt(E.__webglDepthbuffer,w,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function zt(w,E,V){let dt=n.get(w);E!==void 0&&bt(dt.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&At(w)}function U(w){let E=w.texture,V=n.get(w),dt=n.get(E);w.addEventListener("dispose",I),w.isWebGLMultipleRenderTargets!==!0&&(dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture()),dt.__version=E.version,o.memory.textures++);let ft=w.isWebGLCubeRenderTarget===!0,ct=w.isWebGLMultipleRenderTargets===!0,P=v(w)||a;if(ft){V.__webglFramebuffer=[];for(let L=0;L<6;L++)if(a&&E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer[L]=[];for(let z=0;z<E.mipmaps.length;z++)V.__webglFramebuffer[L][z]=s.createFramebuffer()}else V.__webglFramebuffer[L]=s.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer=[];for(let L=0;L<E.mipmaps.length;L++)V.__webglFramebuffer[L]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(ct)if(i.drawBuffers){let L=w.texture;for(let z=0,k=L.length;z<k;z++){let q=n.get(L[z]);q.__webglTexture===void 0&&(q.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&nt(w)===!1){let L=ct?E:[E];V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let z=0;z<L.length;z++){let k=L[z];V.__webglColorRenderbuffer[z]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[z]);let q=r.convert(k.format,k.colorSpace),B=r.convert(k.type),it=M(k.internalFormat,q,B,k.colorSpace,w.isXRRenderTarget===!0),st=gt(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,st,it,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+z,s.RENDERBUFFER,V.__webglColorRenderbuffer[z])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),Nt(V.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ft){e.bindTexture(s.TEXTURE_CUBE_MAP,dt.__webglTexture),j(s.TEXTURE_CUBE_MAP,E,P);for(let L=0;L<6;L++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let z=0;z<E.mipmaps.length;z++)bt(V.__webglFramebuffer[L][z],w,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+L,z);else bt(V.__webglFramebuffer[L],w,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+L,0);_(E,P)&&x(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){let L=w.texture;for(let z=0,k=L.length;z<k;z++){let q=L[z],B=n.get(q);e.bindTexture(s.TEXTURE_2D,B.__webglTexture),j(s.TEXTURE_2D,q,P),bt(V.__webglFramebuffer,w,q,s.COLOR_ATTACHMENT0+z,s.TEXTURE_2D,0),_(q,P)&&x(s.TEXTURE_2D)}e.unbindTexture()}else{let L=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?L=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(L,dt.__webglTexture),j(L,E,P),a&&E.mipmaps&&E.mipmaps.length>0)for(let z=0;z<E.mipmaps.length;z++)bt(V.__webglFramebuffer[z],w,E,s.COLOR_ATTACHMENT0,L,z);else bt(V.__webglFramebuffer,w,E,s.COLOR_ATTACHMENT0,L,0);_(E,P)&&x(L),e.unbindTexture()}w.depthBuffer&&At(w)}function vt(w){let E=v(w)||a,V=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let dt=0,ft=V.length;dt<ft;dt++){let ct=V[dt];if(_(ct,E)){let P=w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,L=n.get(ct).__webglTexture;e.bindTexture(P,L),x(P),e.unbindTexture()}}}function tt(w){if(a&&w.samples>0&&nt(w)===!1){let E=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],V=w.width,dt=w.height,ft=s.COLOR_BUFFER_BIT,ct=[],P=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,L=n.get(w),z=w.isWebGLMultipleRenderTargets===!0;if(z)for(let k=0;k<E.length;k++)e.bindFramebuffer(s.FRAMEBUFFER,L.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+k,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,L.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+k,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,L.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,L.__webglFramebuffer);for(let k=0;k<E.length;k++){ct.push(s.COLOR_ATTACHMENT0+k),w.depthBuffer&&ct.push(P);let q=L.__ignoreDepthValues!==void 0?L.__ignoreDepthValues:!1;if(q===!1&&(w.depthBuffer&&(ft|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&(ft|=s.STENCIL_BUFFER_BIT)),z&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,L.__webglColorRenderbuffer[k]),q===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[P]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[P])),z){let B=n.get(E[k]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,B,0)}s.blitFramebuffer(0,0,V,dt,0,0,V,dt,ft,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ct)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),z)for(let k=0;k<E.length;k++){e.bindFramebuffer(s.FRAMEBUFFER,L.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+k,s.RENDERBUFFER,L.__webglColorRenderbuffer[k]);let q=n.get(E[k]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,L.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+k,s.TEXTURE_2D,q,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,L.__webglMultisampledFramebuffer)}}function gt(w){return Math.min(i.maxSamples,w.samples)}function nt(w){let E=n.get(w);return a&&w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ut(w){let E=o.render.frame;h.get(w)!==E&&(h.set(w,E),w.update())}function yt(w,E){let V=w.colorSpace,dt=w.format,ft=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===ul||V!==Jn&&V!==bn&&(re.getTransfer(V)===le?a===!1?t.has("EXT_sRGB")===!0&&dt===gn?(w.format=ul,w.minFilter=on,w.generateMipmaps=!1):E=_o.sRGBToLinear(E):(dt!==gn||ft!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),E}this.allocateTextureUnit=D,this.resetTextureUnits=W,this.setTexture2D=X,this.setTexture2DArray=K,this.setTexture3D=Q,this.setTextureCube=$,this.rebindTextures=zt,this.setupRenderTarget=U,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=nt}function Mv(s,t,e){let n=e.isWebGL2;function i(r,o=bn){let a,l=re.getTransfer(o);if(r===Bn)return s.UNSIGNED_BYTE;if(r===yu)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Mu)return s.UNSIGNED_SHORT_5_5_5_1;if(r===id)return s.BYTE;if(r===sd)return s.SHORT;if(r===nc)return s.UNSIGNED_SHORT;if(r===_u)return s.INT;if(r===hi)return s.UNSIGNED_INT;if(r===ui)return s.FLOAT;if(r===Ie)return n?s.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===rd)return s.ALPHA;if(r===gn)return s.RGBA;if(r===od)return s.LUMINANCE;if(r===ad)return s.LUMINANCE_ALPHA;if(r===Li)return s.DEPTH_COMPONENT;if(r===pi)return s.DEPTH_STENCIL;if(r===ul)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===ld)return s.RED;if(r===Su)return s.RED_INTEGER;if(r===cd)return s.RG;if(r===bu)return s.RG_INTEGER;if(r===Eu)return s.RGBA_INTEGER;if(r===Ca||r===Pa||r===La||r===Ia)if(l===le)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ca)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Pa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===La)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ia)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ca)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Pa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===La)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ia)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Wc||r===Xc||r===qc||r===Yc)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Wc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Xc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===qc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Yc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Tu)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Zc||r===$c)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Zc)return l===le?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===$c)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Kc||r===Jc||r===jc||r===Qc||r===th||r===eh||r===nh||r===ih||r===sh||r===rh||r===oh||r===ah||r===lh||r===ch)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Kc)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Jc)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===jc)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Qc)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===th)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===eh)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===nh)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ih)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===sh)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===rh)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===oh)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ah)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===lh)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ch)return l===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Da||r===hh||r===uh)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Da)return l===le?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===hh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===uh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===hd||r===fh||r===dh||r===ph)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Da)return a.COMPRESSED_RED_RGTC1_EXT;if(r===fh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===dh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ph)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===$n?n?s.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var El=class extends Re{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Ce=class extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}},Sv={type:"move"},Zs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let g of t.hand.values()){let v=e.getJointPose(g,n),p=this._getHandJoint(c,g);v!==null&&(p.matrix.fromArray(v.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=v.radius),p.visible=v!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sv)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ce;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Tl=class extends mi{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null,g=e.getContextAttributes(),v=null,p=null,_=[],x=[],M=new at,A=null,b=new Re;b.layers.enable(1),b.viewport=new ve;let T=new Re;T.layers.enable(2),T.viewport=new ve;let I=[b,T],y=new El;y.layers.enable(1),y.layers.enable(2);let S=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let lt=_[j];return lt===void 0&&(lt=new Zs,_[j]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(j){let lt=_[j];return lt===void 0&&(lt=new Zs,_[j]=lt),lt.getGripSpace()},this.getHand=function(j){let lt=_[j];return lt===void 0&&(lt=new Zs,_[j]=lt),lt.getHandSpace()};function O(j){let lt=x.indexOf(j.inputSource);if(lt===-1)return;let St=_[lt];St!==void 0&&(St.update(j.inputSource,j.frame,c||o),St.dispatchEvent({type:j.type,data:j.inputSource}))}function W(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",D);for(let j=0;j<_.length;j++){let lt=x[j];lt!==null&&(x[j]=null,_[j].disconnect(lt))}S=null,N=null,t.setRenderTarget(v),d=null,f=null,u=null,i=null,p=null,xt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(v=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",W),i.addEventListener("inputsourceschange",D),g.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(M),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let lt={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,lt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new pe(d.framebufferWidth,d.framebufferHeight,{format:gn,type:Bn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let lt=null,St=null,Ct=null;g.depth&&(Ct=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=g.stencil?pi:Li,St=g.stencil?$n:hi);let bt={colorFormat:e.RGBA8,depthFormat:Ct,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(bt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),p=new pe(f.textureWidth,f.textureHeight,{format:gn,type:Bn,depthTexture:new vs(f.textureWidth,f.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});let Nt=t.properties.get(p);Nt.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),xt.setContext(i),xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function D(j){for(let lt=0;lt<j.removed.length;lt++){let St=j.removed[lt],Ct=x.indexOf(St);Ct>=0&&(x[Ct]=null,_[Ct].disconnect(St))}for(let lt=0;lt<j.added.length;lt++){let St=j.added[lt],Ct=x.indexOf(St);if(Ct===-1){for(let Nt=0;Nt<_.length;Nt++)if(Nt>=x.length){x.push(St),Ct=Nt;break}else if(x[Nt]===null){x[Nt]=St,Ct=Nt;break}if(Ct===-1)break}let bt=_[Ct];bt&&bt.connect(St)}}let H=new C,X=new C;function K(j,lt,St){H.setFromMatrixPosition(lt.matrixWorld),X.setFromMatrixPosition(St.matrixWorld);let Ct=H.distanceTo(X),bt=lt.projectionMatrix.elements,Nt=St.projectionMatrix.elements,Ot=bt[14]/(bt[10]-1),At=bt[14]/(bt[10]+1),zt=(bt[9]+1)/bt[5],U=(bt[9]-1)/bt[5],vt=(bt[8]-1)/bt[0],tt=(Nt[8]+1)/Nt[0],gt=Ot*vt,nt=Ot*tt,Ut=Ct/(-vt+tt),yt=Ut*-vt;lt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(yt),j.translateZ(Ut),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();let w=Ot+Ut,E=At+Ut,V=gt-yt,dt=nt+(Ct-yt),ft=zt*At/E*w,ct=U*At/E*w;j.projectionMatrix.makePerspective(V,dt,ft,ct,w,E),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function Q(j,lt){lt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(lt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;y.near=T.near=b.near=j.near,y.far=T.far=b.far=j.far,(S!==y.near||N!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),S=y.near,N=y.far);let lt=j.parent,St=y.cameras;Q(y,lt);for(let Ct=0;Ct<St.length;Ct++)Q(St[Ct],lt);St.length===2?K(y,b,T):y.projectionMatrix.copy(b.projectionMatrix),$(j,y,lt)};function $(j,lt,St){St===null?j.matrix.copy(lt.matrixWorld):(j.matrix.copy(St.matrixWorld),j.matrix.invert(),j.matrix.multiply(lt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(lt.projectionMatrix),j.projectionMatrixInverse.copy(lt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=tr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)};let ot=null;function rt(j,lt){if(h=lt.getViewerPose(c||o),m=lt,h!==null){let St=h.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let Ct=!1;St.length!==y.cameras.length&&(y.cameras.length=0,Ct=!0);for(let bt=0;bt<St.length;bt++){let Nt=St[bt],Ot=null;if(d!==null)Ot=d.getViewport(Nt);else{let zt=u.getViewSubImage(f,Nt);Ot=zt.viewport,bt===0&&(t.setRenderTargetTextures(p,zt.colorTexture,f.ignoreDepthValues?void 0:zt.depthStencilTexture),t.setRenderTarget(p))}let At=I[bt];At===void 0&&(At=new Re,At.layers.enable(bt),At.viewport=new ve,I[bt]=At),At.matrix.fromArray(Nt.transform.matrix),At.matrix.decompose(At.position,At.quaternion,At.scale),At.projectionMatrix.fromArray(Nt.projectionMatrix),At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),At.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),bt===0&&(y.matrix.copy(At.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Ct===!0&&y.cameras.push(At)}}for(let St=0;St<_.length;St++){let Ct=x[St],bt=_[St];Ct!==null&&bt!==void 0&&bt.update(Ct,lt,c||o)}ot&&ot(j,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),m=null}let xt=new Lu;xt.setAnimationLoop(rt),this.setAnimationLoop=function(j){ot=j},this.dispose=function(){}}};function bv(s,t){function e(v,p){v.matrixAutoUpdate===!0&&v.updateMatrix(),p.value.copy(v.matrix)}function n(v,p){p.color.getRGB(v.fogColor.value,Pu(s)),p.isFog?(v.fogNear.value=p.near,v.fogFar.value=p.far):p.isFogExp2&&(v.fogDensity.value=p.density)}function i(v,p,_,x,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(v,p):p.isMeshToonMaterial?(r(v,p),u(v,p)):p.isMeshPhongMaterial?(r(v,p),h(v,p)):p.isMeshStandardMaterial?(r(v,p),f(v,p),p.isMeshPhysicalMaterial&&d(v,p,M)):p.isMeshMatcapMaterial?(r(v,p),m(v,p)):p.isMeshDepthMaterial?r(v,p):p.isMeshDistanceMaterial?(r(v,p),g(v,p)):p.isMeshNormalMaterial?r(v,p):p.isLineBasicMaterial?(o(v,p),p.isLineDashedMaterial&&a(v,p)):p.isPointsMaterial?l(v,p,_,x):p.isSpriteMaterial?c(v,p):p.isShadowMaterial?(v.color.value.copy(p.color),v.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(v,p){v.opacity.value=p.opacity,p.color&&v.diffuse.value.copy(p.color),p.emissive&&v.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(v.map.value=p.map,e(p.map,v.mapTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,e(p.alphaMap,v.alphaMapTransform)),p.bumpMap&&(v.bumpMap.value=p.bumpMap,e(p.bumpMap,v.bumpMapTransform),v.bumpScale.value=p.bumpScale,p.side===Xe&&(v.bumpScale.value*=-1)),p.normalMap&&(v.normalMap.value=p.normalMap,e(p.normalMap,v.normalMapTransform),v.normalScale.value.copy(p.normalScale),p.side===Xe&&v.normalScale.value.negate()),p.displacementMap&&(v.displacementMap.value=p.displacementMap,e(p.displacementMap,v.displacementMapTransform),v.displacementScale.value=p.displacementScale,v.displacementBias.value=p.displacementBias),p.emissiveMap&&(v.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,v.emissiveMapTransform)),p.specularMap&&(v.specularMap.value=p.specularMap,e(p.specularMap,v.specularMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest);let _=t.get(p).envMap;if(_&&(v.envMap.value=_,v.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=p.reflectivity,v.ior.value=p.ior,v.refractionRatio.value=p.refractionRatio),p.lightMap){v.lightMap.value=p.lightMap;let x=s._useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=p.lightMapIntensity*x,e(p.lightMap,v.lightMapTransform)}p.aoMap&&(v.aoMap.value=p.aoMap,v.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,v.aoMapTransform))}function o(v,p){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,p.map&&(v.map.value=p.map,e(p.map,v.mapTransform))}function a(v,p){v.dashSize.value=p.dashSize,v.totalSize.value=p.dashSize+p.gapSize,v.scale.value=p.scale}function l(v,p,_,x){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,v.size.value=p.size*_,v.scale.value=x*.5,p.map&&(v.map.value=p.map,e(p.map,v.uvTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,e(p.alphaMap,v.alphaMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest)}function c(v,p){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,v.rotation.value=p.rotation,p.map&&(v.map.value=p.map,e(p.map,v.mapTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,e(p.alphaMap,v.alphaMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest)}function h(v,p){v.specular.value.copy(p.specular),v.shininess.value=Math.max(p.shininess,1e-4)}function u(v,p){p.gradientMap&&(v.gradientMap.value=p.gradientMap)}function f(v,p){v.metalness.value=p.metalness,p.metalnessMap&&(v.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,v.metalnessMapTransform)),v.roughness.value=p.roughness,p.roughnessMap&&(v.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,v.roughnessMapTransform)),t.get(p).envMap&&(v.envMapIntensity.value=p.envMapIntensity)}function d(v,p,_){v.ior.value=p.ior,p.sheen>0&&(v.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),v.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(v.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,v.sheenColorMapTransform)),p.sheenRoughnessMap&&(v.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,v.sheenRoughnessMapTransform))),p.clearcoat>0&&(v.clearcoat.value=p.clearcoat,v.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(v.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,v.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(v.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xe&&v.clearcoatNormalScale.value.negate())),p.iridescence>0&&(v.iridescence.value=p.iridescence,v.iridescenceIOR.value=p.iridescenceIOR,v.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(v.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,v.iridescenceMapTransform)),p.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),p.transmission>0&&(v.transmission.value=p.transmission,v.transmissionSamplerMap.value=_.texture,v.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(v.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,v.transmissionMapTransform)),v.thickness.value=p.thickness,p.thicknessMap&&(v.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=p.attenuationDistance,v.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(v.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(v.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=p.specularIntensity,v.specularColor.value.copy(p.specularColor),p.specularColorMap&&(v.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,v.specularColorMapTransform)),p.specularIntensityMap&&(v.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,v.specularIntensityMapTransform))}function m(v,p){p.matcap&&(v.matcap.value=p.matcap)}function g(v,p){let _=t.get(p).light;v.referencePosition.value.setFromMatrixPosition(_.matrixWorld),v.nearDistance.value=_.shadow.camera.near,v.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ev(s,t,e,n){let i={},r={},o=[],a=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,x){let M=x.program;n.uniformBlockBinding(_,M)}function c(_,x){let M=i[_.id];M===void 0&&(m(_),M=h(_),i[_.id]=M,_.addEventListener("dispose",v));let A=x.program;n.updateUBOMapping(_,A);let b=t.render.frame;r[_.id]!==b&&(f(_),r[_.id]=b)}function h(_){let x=u();_.__bindingPointIndex=x;let M=s.createBuffer(),A=_.__size,b=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,A,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,M),M}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let x=i[_.id],M=_.uniforms,A=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let b=0,T=M.length;b<T;b++){let I=Array.isArray(M[b])?M[b]:[M[b]];for(let y=0,S=I.length;y<S;y++){let N=I[y];if(d(N,b,y,A)===!0){let O=N.__offset,W=Array.isArray(N.value)?N.value:[N.value],D=0;for(let H=0;H<W.length;H++){let X=W[H],K=g(X);typeof X=="number"||typeof X=="boolean"?(N.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,O+D,N.__data)):X.isMatrix3?(N.__data[0]=X.elements[0],N.__data[1]=X.elements[1],N.__data[2]=X.elements[2],N.__data[3]=0,N.__data[4]=X.elements[3],N.__data[5]=X.elements[4],N.__data[6]=X.elements[5],N.__data[7]=0,N.__data[8]=X.elements[6],N.__data[9]=X.elements[7],N.__data[10]=X.elements[8],N.__data[11]=0):(X.toArray(N.__data,D),D+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,N.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(_,x,M,A){let b=_.value,T=x+"_"+M;if(A[T]===void 0)return typeof b=="number"||typeof b=="boolean"?A[T]=b:A[T]=b.clone(),!0;{let I=A[T];if(typeof b=="number"||typeof b=="boolean"){if(I!==b)return A[T]=b,!0}else if(I.equals(b)===!1)return I.copy(b),!0}return!1}function m(_){let x=_.uniforms,M=0,A=16;for(let T=0,I=x.length;T<I;T++){let y=Array.isArray(x[T])?x[T]:[x[T]];for(let S=0,N=y.length;S<N;S++){let O=y[S],W=Array.isArray(O.value)?O.value:[O.value];for(let D=0,H=W.length;D<H;D++){let X=W[D],K=g(X),Q=M%A;Q!==0&&A-Q<K.boundary&&(M+=A-Q),O.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=K.storage}}}let b=M%A;return b>0&&(M+=A-b),_.__size=M,_.__cache={},this}function g(_){let x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function v(_){let x=_.target;x.removeEventListener("dispose",v);let M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(let _ in i)s.deleteBuffer(i[_]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}var nr=class{constructor(t={}){let{canvas:e=Ud(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let d=new Uint32Array(4),m=new Int32Array(4),g=null,v=null,p=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=oe,this._useLegacyLights=!1,this.toneMapping=fi,this.toneMappingExposure=1;let x=this,M=!1,A=0,b=0,T=null,I=-1,y=null,S=new ve,N=new ve,O=null,W=new Lt(0),D=0,H=e.width,X=e.height,K=1,Q=null,$=null,ot=new ve(0,0,H,X),rt=new ve(0,0,H,X),xt=!1,j=new er,lt=!1,St=!1,Ct=null,bt=new qt,Nt=new at,Ot=new C,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function zt(){return T===null?K:1}let U=n;function vt(R,G){for(let Z=0;Z<R.length;Z++){let J=R[Z],Y=e.getContext(J,G);if(Y!==null)return Y}return null}try{let R={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Kl}`),e.addEventListener("webglcontextlost",mt,!1),e.addEventListener("webglcontextrestored",F,!1),e.addEventListener("webglcontextcreationerror",Et,!1),U===null){let G=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&G.shift(),U=vt(G,R),U===null)throw vt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let tt,gt,nt,Ut,yt,w,E,V,dt,ft,ct,P,L,z,k,q,B,it,st,et,ht,ut,_t,wt;function Dt(){tt=new G0(U),gt=new F0(U,tt,t),tt.init(gt),ut=new Mv(U,tt,gt),nt=new _v(U,tt,gt),Ut=new q0(U),yt=new av,w=new yv(U,tt,nt,yt,gt,ut,Ut),E=new B0(x),V=new V0(x),dt=new tp(U,gt),_t=new N0(U,tt,dt,gt),ft=new W0(U,dt,Ut,_t),ct=new K0(U,ft,dt,Ut),st=new $0(U,gt,w),q=new z0(yt),P=new ov(x,E,V,tt,gt,_t,q),L=new bv(x,yt),z=new cv,k=new mv(tt,gt),it=new U0(x,E,V,nt,ct,f,l),B=new xv(x,ct,gt),wt=new Ev(U,Ut,gt,nt),et=new O0(U,tt,Ut,gt),ht=new X0(U,tt,Ut,gt),Ut.programs=P.programs,x.capabilities=gt,x.extensions=tt,x.properties=yt,x.renderLists=z,x.shadowMap=B,x.state=nt,x.info=Ut}Dt();let Pt=new Tl(x,U);this.xr=Pt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let R=tt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=tt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(R){R!==void 0&&(K=R,this.setSize(H,X,!1))},this.getSize=function(R){return R.set(H,X)},this.setSize=function(R,G,Z=!0){if(Pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=R,X=G,e.width=Math.floor(R*K),e.height=Math.floor(G*K),Z===!0&&(e.style.width=R+"px",e.style.height=G+"px"),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(H*K,X*K).floor()},this.setDrawingBufferSize=function(R,G,Z){H=R,X=G,K=Z,e.width=Math.floor(R*Z),e.height=Math.floor(G*Z),this.setViewport(0,0,R,G)},this.getCurrentViewport=function(R){return R.copy(S)},this.getViewport=function(R){return R.copy(ot)},this.setViewport=function(R,G,Z,J){R.isVector4?ot.set(R.x,R.y,R.z,R.w):ot.set(R,G,Z,J),nt.viewport(S.copy(ot).multiplyScalar(K).floor())},this.getScissor=function(R){return R.copy(rt)},this.setScissor=function(R,G,Z,J){R.isVector4?rt.set(R.x,R.y,R.z,R.w):rt.set(R,G,Z,J),nt.scissor(N.copy(rt).multiplyScalar(K).floor())},this.getScissorTest=function(){return xt},this.setScissorTest=function(R){nt.setScissorTest(xt=R)},this.setOpaqueSort=function(R){Q=R},this.setTransparentSort=function(R){$=R},this.getClearColor=function(R){return R.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor.apply(it,arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha.apply(it,arguments)},this.clear=function(R=!0,G=!0,Z=!0){let J=0;if(R){let Y=!1;if(T!==null){let Rt=T.texture.format;Y=Rt===Eu||Rt===bu||Rt===Su}if(Y){let Rt=T.texture.type,Ft=Rt===Bn||Rt===hi||Rt===nc||Rt===$n||Rt===yu||Rt===Mu,Vt=it.getClearColor(),Xt=it.getClearAlpha(),jt=Vt.r,$t=Vt.g,Kt=Vt.b;Ft?(d[0]=jt,d[1]=$t,d[2]=Kt,d[3]=Xt,U.clearBufferuiv(U.COLOR,0,d)):(m[0]=jt,m[1]=$t,m[2]=Kt,m[3]=Xt,U.clearBufferiv(U.COLOR,0,m))}else J|=U.COLOR_BUFFER_BIT}G&&(J|=U.DEPTH_BUFFER_BIT),Z&&(J|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",mt,!1),e.removeEventListener("webglcontextrestored",F,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),z.dispose(),k.dispose(),yt.dispose(),E.dispose(),V.dispose(),ct.dispose(),_t.dispose(),wt.dispose(),P.dispose(),Pt.dispose(),Pt.removeEventListener("sessionstart",en),Pt.removeEventListener("sessionend",fe),Ct&&(Ct.dispose(),Ct=null),nn.stop()};function mt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let R=Ut.autoReset,G=B.enabled,Z=B.autoUpdate,J=B.needsUpdate,Y=B.type;Dt(),Ut.autoReset=R,B.enabled=G,B.autoUpdate=Z,B.needsUpdate=J,B.type=Y}function Et(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Tt(R){let G=R.target;G.removeEventListener("dispose",Tt),Gt(G)}function Gt(R){kt(R),yt.remove(R)}function kt(R){let G=yt.get(R).programs;G!==void 0&&(G.forEach(function(Z){P.releaseProgram(Z)}),R.isShaderMaterial&&P.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,Z,J,Y,Rt){G===null&&(G=At);let Ft=Y.isMesh&&Y.matrixWorld.determinant()<0,Vt=Af(R,G,Z,J,Y);nt.setMaterial(J,Ft);let Xt=Z.index,jt=1;if(J.wireframe===!0){if(Xt=ft.getWireframeAttribute(Z),Xt===void 0)return;jt=2}let $t=Z.drawRange,Kt=Z.attributes.position,Se=$t.start*jt,fn=($t.start+$t.count)*jt;Rt!==null&&(Se=Math.max(Se,Rt.start*jt),fn=Math.min(fn,(Rt.start+Rt.count)*jt)),Xt!==null?(Se=Math.max(Se,0),fn=Math.min(fn,Xt.count)):Kt!=null&&(Se=Math.max(Se,0),fn=Math.min(fn,Kt.count));let ze=fn-Se;if(ze<0||ze===1/0)return;_t.setup(Y,J,Vt,Z,Xt);let kn,xe=et;if(Xt!==null&&(kn=dt.get(Xt),xe=ht,xe.setIndex(kn)),Y.isMesh)J.wireframe===!0?(nt.setLineWidth(J.wireframeLinewidth*zt()),xe.setMode(U.LINES)):xe.setMode(U.TRIANGLES);else if(Y.isLine){let te=J.linewidth;te===void 0&&(te=1),nt.setLineWidth(te*zt()),Y.isLineSegments?xe.setMode(U.LINES):Y.isLineLoop?xe.setMode(U.LINE_LOOP):xe.setMode(U.LINE_STRIP)}else Y.isPoints?xe.setMode(U.POINTS):Y.isSprite&&xe.setMode(U.TRIANGLES);if(Y.isBatchedMesh)xe.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)xe.renderInstances(Se,ze,Y.count);else if(Z.isInstancedBufferGeometry){let te=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ea=Math.min(Z.instanceCount,te);xe.renderInstances(Se,ze,Ea)}else xe.render(Se,ze)};function he(R,G,Z){R.transparent===!0&&R.side===Je&&R.forceSinglePass===!1?(R.side=Xe,R.needsUpdate=!0,Dr(R,G,Z),R.side=di,R.needsUpdate=!0,Dr(R,G,Z),R.side=Je):Dr(R,G,Z)}this.compile=function(R,G,Z=null){Z===null&&(Z=R),v=k.get(Z),v.init(),_.push(v),Z.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),R!==Z&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),v.setupLights(x._useLegacyLights);let J=new Set;return R.traverse(function(Y){let Rt=Y.material;if(Rt)if(Array.isArray(Rt))for(let Ft=0;Ft<Rt.length;Ft++){let Vt=Rt[Ft];he(Vt,Z,Y),J.add(Vt)}else he(Rt,Z,Y),J.add(Rt)}),_.pop(),v=null,J},this.compileAsync=function(R,G,Z=null){let J=this.compile(R,G,Z);return new Promise(Y=>{function Rt(){if(J.forEach(function(Ft){yt.get(Ft).currentProgram.isReady()&&J.delete(Ft)}),J.size===0){Y(R);return}setTimeout(Rt,10)}tt.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let ue=null;function Fe(R){ue&&ue(R)}function en(){nn.stop()}function fe(){nn.start()}let nn=new Lu;nn.setAnimationLoop(Fe),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(R){ue=R,Pt.setAnimationLoop(R),R===null?nn.stop():nn.start()},Pt.addEventListener("sessionstart",en),Pt.addEventListener("sessionend",fe),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Pt.enabled===!0&&Pt.isPresenting===!0&&(Pt.cameraAutoUpdate===!0&&Pt.updateCamera(G),G=Pt.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,G,T),v=k.get(R,_.length),v.init(),_.push(v),bt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),j.setFromProjectionMatrix(bt),St=this.localClippingEnabled,lt=q.init(this.clippingPlanes,St),g=z.get(R,p.length),g.init(),p.push(g),Fn(R,G,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(Q,$),this.info.render.frame++,lt===!0&&q.beginShadows();let Z=v.state.shadowsArray;if(B.render(Z,R,G),lt===!0&&q.endShadows(),this.info.autoReset===!0&&this.info.reset(),it.render(g,R),v.setupLights(x._useLegacyLights),G.isArrayCamera){let J=G.cameras;for(let Y=0,Rt=J.length;Y<Rt;Y++){let Ft=J[Y];Ic(g,R,Ft,Ft.viewport)}}else Ic(g,R,G);T!==null&&(w.updateMultisampleRenderTarget(T),w.updateRenderTargetMipmap(T)),R.isScene===!0&&R.onAfterRender(x,R,G),_t.resetDefaultState(),I=-1,y=null,_.pop(),_.length>0?v=_[_.length-1]:v=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function Fn(R,G,Z,J){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)Z=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||j.intersectsSprite(R)){J&&Ot.setFromMatrixPosition(R.matrixWorld).applyMatrix4(bt);let Ft=ct.update(R),Vt=R.material;Vt.visible&&g.push(R,Ft,Vt,Z,Ot.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||j.intersectsObject(R))){let Ft=ct.update(R),Vt=R.material;if(J&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ot.copy(R.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),Ot.copy(Ft.boundingSphere.center)),Ot.applyMatrix4(R.matrixWorld).applyMatrix4(bt)),Array.isArray(Vt)){let Xt=Ft.groups;for(let jt=0,$t=Xt.length;jt<$t;jt++){let Kt=Xt[jt],Se=Vt[Kt.materialIndex];Se&&Se.visible&&g.push(R,Ft,Se,Z,Ot.z,Kt)}}else Vt.visible&&g.push(R,Ft,Vt,Z,Ot.z,null)}}let Rt=R.children;for(let Ft=0,Vt=Rt.length;Ft<Vt;Ft++)Fn(Rt[Ft],G,Z,J)}function Ic(R,G,Z,J){let Y=R.opaque,Rt=R.transmissive,Ft=R.transparent;v.setupLightsView(Z),lt===!0&&q.setGlobalState(x.clippingPlanes,Z),Rt.length>0&&wf(Y,Rt,G,Z),J&&nt.viewport(S.copy(J)),Y.length>0&&Ir(Y,G,Z),Rt.length>0&&Ir(Rt,G,Z),Ft.length>0&&Ir(Ft,G,Z),nt.buffers.depth.setTest(!0),nt.buffers.depth.setMask(!0),nt.buffers.color.setMask(!0),nt.setPolygonOffset(!1)}function wf(R,G,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;let Rt=gt.isWebGL2;Ct===null&&(Ct=new pe(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")?Ie:Bn,minFilter:Di,samples:Rt?4:0})),x.getDrawingBufferSize(Nt),Rt?Ct.setSize(Nt.x,Nt.y):Ct.setSize(vo(Nt.x),vo(Nt.y));let Ft=x.getRenderTarget();x.setRenderTarget(Ct),x.getClearColor(W),D=x.getClearAlpha(),D<1&&x.setClearColor(16777215,.5),x.clear();let Vt=x.toneMapping;x.toneMapping=fi,Ir(R,Z,J),w.updateMultisampleRenderTarget(Ct),w.updateRenderTargetMipmap(Ct);let Xt=!1;for(let jt=0,$t=G.length;jt<$t;jt++){let Kt=G[jt],Se=Kt.object,fn=Kt.geometry,ze=Kt.material,kn=Kt.group;if(ze.side===Je&&Se.layers.test(J.layers)){let xe=ze.side;ze.side=Xe,ze.needsUpdate=!0,Dc(Se,Z,J,fn,ze,kn),ze.side=xe,ze.needsUpdate=!0,Xt=!0}}Xt===!0&&(w.updateMultisampleRenderTarget(Ct),w.updateRenderTargetMipmap(Ct)),x.setRenderTarget(Ft),x.setClearColor(W,D),x.toneMapping=Vt}function Ir(R,G,Z){let J=G.isScene===!0?G.overrideMaterial:null;for(let Y=0,Rt=R.length;Y<Rt;Y++){let Ft=R[Y],Vt=Ft.object,Xt=Ft.geometry,jt=J===null?Ft.material:J,$t=Ft.group;Vt.layers.test(Z.layers)&&Dc(Vt,G,Z,Xt,jt,$t)}}function Dc(R,G,Z,J,Y,Rt){R.onBeforeRender(x,G,Z,J,Y,Rt),R.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(x,G,Z,J,R,Rt),Y.transparent===!0&&Y.side===Je&&Y.forceSinglePass===!1?(Y.side=Xe,Y.needsUpdate=!0,x.renderBufferDirect(Z,G,J,Y,R,Rt),Y.side=di,Y.needsUpdate=!0,x.renderBufferDirect(Z,G,J,Y,R,Rt),Y.side=Je):x.renderBufferDirect(Z,G,J,Y,R,Rt),R.onAfterRender(x,G,Z,J,Y,Rt)}function Dr(R,G,Z){G.isScene!==!0&&(G=At);let J=yt.get(R),Y=v.state.lights,Rt=v.state.shadowsArray,Ft=Y.state.version,Vt=P.getParameters(R,Y.state,Rt,G,Z),Xt=P.getProgramCacheKey(Vt),jt=J.programs;J.environment=R.isMeshStandardMaterial?G.environment:null,J.fog=G.fog,J.envMap=(R.isMeshStandardMaterial?V:E).get(R.envMap||J.environment),jt===void 0&&(R.addEventListener("dispose",Tt),jt=new Map,J.programs=jt);let $t=jt.get(Xt);if($t!==void 0){if(J.currentProgram===$t&&J.lightsStateVersion===Ft)return Nc(R,Vt),$t}else Vt.uniforms=P.getUniforms(R),R.onBuild(Z,Vt,x),R.onBeforeCompile(Vt,x),$t=P.acquireProgram(Vt,Xt),jt.set(Xt,$t),J.uniforms=Vt.uniforms;let Kt=J.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Kt.clippingPlanes=q.uniform),Nc(R,Vt),J.needsLights=Cf(R),J.lightsStateVersion=Ft,J.needsLights&&(Kt.ambientLightColor.value=Y.state.ambient,Kt.lightProbe.value=Y.state.probe,Kt.directionalLights.value=Y.state.directional,Kt.directionalLightShadows.value=Y.state.directionalShadow,Kt.spotLights.value=Y.state.spot,Kt.spotLightShadows.value=Y.state.spotShadow,Kt.rectAreaLights.value=Y.state.rectArea,Kt.ltc_1.value=Y.state.rectAreaLTC1,Kt.ltc_2.value=Y.state.rectAreaLTC2,Kt.pointLights.value=Y.state.point,Kt.pointLightShadows.value=Y.state.pointShadow,Kt.hemisphereLights.value=Y.state.hemi,Kt.directionalShadowMap.value=Y.state.directionalShadowMap,Kt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Kt.spotShadowMap.value=Y.state.spotShadowMap,Kt.spotLightMatrix.value=Y.state.spotLightMatrix,Kt.spotLightMap.value=Y.state.spotLightMap,Kt.pointShadowMap.value=Y.state.pointShadowMap,Kt.pointShadowMatrix.value=Y.state.pointShadowMatrix),J.currentProgram=$t,J.uniformsList=null,$t}function Uc(R){if(R.uniformsList===null){let G=R.currentProgram.getUniforms();R.uniformsList=hs.seqWithValue(G.seq,R.uniforms)}return R.uniformsList}function Nc(R,G){let Z=yt.get(R);Z.outputColorSpace=G.outputColorSpace,Z.batching=G.batching,Z.instancing=G.instancing,Z.instancingColor=G.instancingColor,Z.skinning=G.skinning,Z.morphTargets=G.morphTargets,Z.morphNormals=G.morphNormals,Z.morphColors=G.morphColors,Z.morphTargetsCount=G.morphTargetsCount,Z.numClippingPlanes=G.numClippingPlanes,Z.numIntersection=G.numClipIntersection,Z.vertexAlphas=G.vertexAlphas,Z.vertexTangents=G.vertexTangents,Z.toneMapping=G.toneMapping}function Af(R,G,Z,J,Y){G.isScene!==!0&&(G=At),w.resetTextureUnits();let Rt=G.fog,Ft=J.isMeshStandardMaterial?G.environment:null,Vt=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Jn,Xt=(J.isMeshStandardMaterial?V:E).get(J.envMap||Ft),jt=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,$t=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Kt=!!Z.morphAttributes.position,Se=!!Z.morphAttributes.normal,fn=!!Z.morphAttributes.color,ze=fi;J.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ze=x.toneMapping);let kn=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,xe=kn!==void 0?kn.length:0,te=yt.get(J),Ea=v.state.lights;if(lt===!0&&(St===!0||R!==y)){let yn=R===y&&J.id===I;q.setState(J,R,yn)}let ye=!1;J.version===te.__version?(te.needsLights&&te.lightsStateVersion!==Ea.state.version||te.outputColorSpace!==Vt||Y.isBatchedMesh&&te.batching===!1||!Y.isBatchedMesh&&te.batching===!0||Y.isInstancedMesh&&te.instancing===!1||!Y.isInstancedMesh&&te.instancing===!0||Y.isSkinnedMesh&&te.skinning===!1||!Y.isSkinnedMesh&&te.skinning===!0||Y.isInstancedMesh&&te.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&te.instancingColor===!1&&Y.instanceColor!==null||te.envMap!==Xt||J.fog===!0&&te.fog!==Rt||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==q.numPlanes||te.numIntersection!==q.numIntersection)||te.vertexAlphas!==jt||te.vertexTangents!==$t||te.morphTargets!==Kt||te.morphNormals!==Se||te.morphColors!==fn||te.toneMapping!==ze||gt.isWebGL2===!0&&te.morphTargetsCount!==xe)&&(ye=!0):(ye=!0,te.__version=J.version);let bi=te.currentProgram;ye===!0&&(bi=Dr(J,G,Y));let Oc=!1,Fs=!1,Ta=!1,Ze=bi.getUniforms(),Ei=te.uniforms;if(nt.useProgram(bi.program)&&(Oc=!0,Fs=!0,Ta=!0),J.id!==I&&(I=J.id,Fs=!0),Oc||y!==R){Ze.setValue(U,"projectionMatrix",R.projectionMatrix),Ze.setValue(U,"viewMatrix",R.matrixWorldInverse);let yn=Ze.map.cameraPosition;yn!==void 0&&yn.setValue(U,Ot.setFromMatrixPosition(R.matrixWorld)),gt.logarithmicDepthBuffer&&Ze.setValue(U,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ze.setValue(U,"isOrthographic",R.isOrthographicCamera===!0),y!==R&&(y=R,Fs=!0,Ta=!0)}if(Y.isSkinnedMesh){Ze.setOptional(U,Y,"bindMatrix"),Ze.setOptional(U,Y,"bindMatrixInverse");let yn=Y.skeleton;yn&&(gt.floatVertexTextures?(yn.boneTexture===null&&yn.computeBoneTexture(),Ze.setValue(U,"boneTexture",yn.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(Ze.setOptional(U,Y,"batchingTexture"),Ze.setValue(U,"batchingTexture",Y._matricesTexture,w));let wa=Z.morphAttributes;if((wa.position!==void 0||wa.normal!==void 0||wa.color!==void 0&&gt.isWebGL2===!0)&&st.update(Y,Z,bi),(Fs||te.receiveShadow!==Y.receiveShadow)&&(te.receiveShadow=Y.receiveShadow,Ze.setValue(U,"receiveShadow",Y.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Ei.envMap.value=Xt,Ei.flipEnvMap.value=Xt.isCubeTexture&&Xt.isRenderTargetTexture===!1?-1:1),Fs&&(Ze.setValue(U,"toneMappingExposure",x.toneMappingExposure),te.needsLights&&Rf(Ei,Ta),Rt&&J.fog===!0&&L.refreshFogUniforms(Ei,Rt),L.refreshMaterialUniforms(Ei,J,K,X,Ct),hs.upload(U,Uc(te),Ei,w)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(hs.upload(U,Uc(te),Ei,w),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ze.setValue(U,"center",Y.center),Ze.setValue(U,"modelViewMatrix",Y.modelViewMatrix),Ze.setValue(U,"normalMatrix",Y.normalMatrix),Ze.setValue(U,"modelMatrix",Y.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let yn=J.uniformsGroups;for(let Aa=0,Pf=yn.length;Aa<Pf;Aa++)if(gt.isWebGL2){let Fc=yn[Aa];wt.update(Fc,bi),wt.bind(Fc,bi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return bi}function Rf(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function Cf(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(R,G,Z){yt.get(R.texture).__webglTexture=G,yt.get(R.depthTexture).__webglTexture=Z;let J=yt.get(R);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=Z===void 0,J.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,G){let Z=yt.get(R);Z.__webglFramebuffer=G,Z.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(R,G=0,Z=0){T=R,A=G,b=Z;let J=!0,Y=null,Rt=!1,Ft=!1;if(R){let Xt=yt.get(R);Xt.__useDefaultFramebuffer!==void 0?(nt.bindFramebuffer(U.FRAMEBUFFER,null),J=!1):Xt.__webglFramebuffer===void 0?w.setupRenderTarget(R):Xt.__hasExternalTextures&&w.rebindTextures(R,yt.get(R.texture).__webglTexture,yt.get(R.depthTexture).__webglTexture);let jt=R.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Ft=!0);let $t=yt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray($t[G])?Y=$t[G][Z]:Y=$t[G],Rt=!0):gt.isWebGL2&&R.samples>0&&w.useMultisampledRTT(R)===!1?Y=yt.get(R).__webglMultisampledFramebuffer:Array.isArray($t)?Y=$t[Z]:Y=$t,S.copy(R.viewport),N.copy(R.scissor),O=R.scissorTest}else S.copy(ot).multiplyScalar(K).floor(),N.copy(rt).multiplyScalar(K).floor(),O=xt;if(nt.bindFramebuffer(U.FRAMEBUFFER,Y)&&gt.drawBuffers&&J&&nt.drawBuffers(R,Y),nt.viewport(S),nt.scissor(N),nt.setScissorTest(O),Rt){let Xt=yt.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+G,Xt.__webglTexture,Z)}else if(Ft){let Xt=yt.get(R.texture),jt=G||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Xt.__webglTexture,Z||0,jt)}I=-1},this.readRenderTargetPixels=function(R,G,Z,J,Y,Rt,Ft){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=yt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ft!==void 0&&(Vt=Vt[Ft]),Vt){nt.bindFramebuffer(U.FRAMEBUFFER,Vt);try{let Xt=R.texture,jt=Xt.format,$t=Xt.type;if(jt!==gn&&ut.convert(jt)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Kt=$t===Ie&&(tt.has("EXT_color_buffer_half_float")||gt.isWebGL2&&tt.has("EXT_color_buffer_float"));if($t!==Bn&&ut.convert($t)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!($t===ui&&(gt.isWebGL2||tt.has("OES_texture_float")||tt.has("WEBGL_color_buffer_float")))&&!Kt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-J&&Z>=0&&Z<=R.height-Y&&U.readPixels(G,Z,J,Y,ut.convert(jt),ut.convert($t),Rt)}finally{let Xt=T!==null?yt.get(T).__webglFramebuffer:null;nt.bindFramebuffer(U.FRAMEBUFFER,Xt)}}},this.copyFramebufferToTexture=function(R,G,Z=0){let J=Math.pow(2,-Z),Y=Math.floor(G.image.width*J),Rt=Math.floor(G.image.height*J);w.setTexture2D(G,0),U.copyTexSubImage2D(U.TEXTURE_2D,Z,0,0,R.x,R.y,Y,Rt),nt.unbindTexture()},this.copyTextureToTexture=function(R,G,Z,J=0){let Y=G.image.width,Rt=G.image.height,Ft=ut.convert(Z.format),Vt=ut.convert(Z.type);w.setTexture2D(Z,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,Z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,Z.unpackAlignment),G.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,J,R.x,R.y,Y,Rt,Ft,Vt,G.image.data):G.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,J,R.x,R.y,G.mipmaps[0].width,G.mipmaps[0].height,Ft,G.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,J,R.x,R.y,Ft,Vt,G.image),J===0&&Z.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),nt.unbindTexture()},this.copyTextureToTexture3D=function(R,G,Z,J,Y=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Rt=R.max.x-R.min.x+1,Ft=R.max.y-R.min.y+1,Vt=R.max.z-R.min.z+1,Xt=ut.convert(J.format),jt=ut.convert(J.type),$t;if(J.isData3DTexture)w.setTexture3D(J,0),$t=U.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)w.setTexture2DArray(J,0),$t=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,J.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,J.unpackAlignment);let Kt=U.getParameter(U.UNPACK_ROW_LENGTH),Se=U.getParameter(U.UNPACK_IMAGE_HEIGHT),fn=U.getParameter(U.UNPACK_SKIP_PIXELS),ze=U.getParameter(U.UNPACK_SKIP_ROWS),kn=U.getParameter(U.UNPACK_SKIP_IMAGES),xe=Z.isCompressedTexture?Z.mipmaps[Y]:Z.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,xe.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,xe.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,R.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,R.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,R.min.z),Z.isDataTexture||Z.isData3DTexture?U.texSubImage3D($t,Y,G.x,G.y,G.z,Rt,Ft,Vt,Xt,jt,xe.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D($t,Y,G.x,G.y,G.z,Rt,Ft,Vt,Xt,xe.data)):U.texSubImage3D($t,Y,G.x,G.y,G.z,Rt,Ft,Vt,Xt,jt,xe),U.pixelStorei(U.UNPACK_ROW_LENGTH,Kt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Se),U.pixelStorei(U.UNPACK_SKIP_PIXELS,fn),U.pixelStorei(U.UNPACK_SKIP_ROWS,ze),U.pixelStorei(U.UNPACK_SKIP_IMAGES,kn),Y===0&&J.generateMipmaps&&U.generateMipmap($t),nt.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?w.setTextureCube(R,0):R.isData3DTexture?w.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?w.setTexture2DArray(R,0):w.setTexture2D(R,0),nt.unbindTexture()},this.resetState=function(){A=0,b=0,T=null,nt.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===sc?"display-p3":"srgb",e.unpackColorSpace=re.workingColorSpace===Zo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===oe?Ii:wu}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ii?oe:Jn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},wl=class extends nr{};wl.prototype.isWebGL1Renderer=!0;var Ro=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Lt(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ir=class extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var xs=class extends je{constructor(t=null,e=1,n=1,i,r,o,a,l,c=we,h=we,u,f){super(null,o,a,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var sr=class extends Le{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ns=new qt,ru=new qt,no=[],ou=new jn,Tv=new qt,Vs=new Jt,Gs=new gi,En=class extends Jt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new sr(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Tv)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new jn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ns),ou.copy(t.boundingBox).applyMatrix4(ns),this.boundingBox.union(ou)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new gi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ns),Gs.copy(t.boundingSphere).applyMatrix4(ns),this.boundingSphere.union(Gs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Vs.geometry=this.geometry,Vs.material=this.material,Vs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gs.copy(this.boundingSphere),Gs.applyMatrix4(n),t.ray.intersectsSphere(Gs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ns),ru.multiplyMatrices(n,ns),Vs.matrixWorld=ru,Vs.raycast(t,no);for(let o=0,a=no.length;o<a;o++){let l=no[o];l.instanceId=r,l.object=this,e.push(l)}no.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new sr(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Al=class extends Qn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},au=new qt,Rl=new So,io=new gi,so=new C,Co=class extends be{constructor(t=new ce,e=new Al){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(i),io.radius+=r,t.ray.intersectsSphere(io)===!1)return;au.copy(i).invert(),Rl.copy(t.ray).applyMatrix4(au);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,g=d;m<g;m++){let v=c.getX(m);so.fromBufferAttribute(u,v),lu(so,v,l,i,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=f,g=d;m<g;m++)so.fromBufferAttribute(u,m),lu(so,m,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function lu(s,t,e,n,i,r,o){let a=Rl.distanceSqToPoint(s);if(a<e){let l=new C;Rl.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}var an=class extends je{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Tn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new at:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new C,i=[],r=[],o=[],a=new C,l=new qt;for(let d=0;d<=t;d++){let m=d/t;i[d]=this.getTangentAt(m,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(He(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(He(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],d*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},rr=class extends Tn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){let n=e||new at,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Cl=class extends rr{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ac(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var ro=new C,il=new ac,sl=new ac,rl=new ac,Pl=class extends Tn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new C){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(ro.subVectors(i[0],i[1]).add(i[0]),c=ro);let u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(ro.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=ro),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(h),d);g<1e-4&&(g=1),m<1e-4&&(m=g),v<1e-4&&(v=g),il.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,m,g,v),sl.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,m,g,v),rl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,m,g,v)}else this.curveType==="catmullrom"&&(il.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),sl.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),rl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(il.calc(l),sl.calc(l),rl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new C().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function cu(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function wv(s,t){let e=1-s;return e*e*t}function Av(s,t){return 2*(1-s)*s*t}function Rv(s,t){return s*s*t}function $s(s,t,e,n){return wv(s,t)+Av(s,e)+Rv(s,n)}function Cv(s,t){let e=1-s;return e*e*e*t}function Pv(s,t){let e=1-s;return 3*e*e*s*t}function Lv(s,t){return 3*(1-s)*s*s*t}function Iv(s,t){return s*s*s*t}function Ks(s,t,e,n,i){return Cv(s,t)+Pv(s,e)+Lv(s,n)+Iv(s,i)}var Po=class extends Tn{constructor(t=new at,e=new at,n=new at,i=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new at){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ks(t,i.x,r.x,o.x,a.x),Ks(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ll=class extends Tn{constructor(t=new C,e=new C,n=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new C){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ks(t,i.x,r.x,o.x,a.x),Ks(t,i.y,r.y,o.y,a.y),Ks(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Lo=class extends Tn{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Il=class extends Tn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Io=class extends Tn{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set($s(t,i.x,r.x,o.x),$s(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_s=class extends Tn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set($s(t,i.x,r.x,o.x),$s(t,i.y,r.y,o.y),$s(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Do=class extends Tn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(cu(a,l.x,c.x,h.x,u.x),cu(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new at().fromArray(i))}return this}},Uo=Object.freeze({__proto__:null,ArcCurve:Cl,CatmullRomCurve3:Pl,CubicBezierCurve:Po,CubicBezierCurve3:Ll,EllipseCurve:rr,LineCurve:Lo,LineCurve3:Il,QuadraticBezierCurve:Io,QuadraticBezierCurve3:_s,SplineCurve:Do}),Dl=class extends Tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Uo[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Uo[i.type]().fromJSON(i))}return this}},or=class extends Dl{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Lo(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Io(this.currentPoint.clone(),new at(t,e),new at(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new Po(this.currentPoint.clone(),new at(t,e),new at(n,i),new at(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Do(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){let c=new rr(t,e,n,i,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ul=class s extends ce{constructor(t=[new at(0,-.5),new at(.5,0),new at(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=He(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new C,f=new at,d=new C,m=new C,g=new C,v=0,p=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:v=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,d.x=p*1,d.y=-v,d.z=p*0,g.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(g.x,g.y,g.z);break;default:v=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,d.x=p*1,d.y=-v,d.z=p*0,m.copy(d),d.x+=g.x,d.y+=g.y,d.z+=g.z,d.normalize(),l.push(d.x,d.y,d.z),g.copy(m)}for(let _=0;_<=e;_++){let x=n+_*h*i,M=Math.sin(x),A=Math.cos(x);for(let b=0;b<=t.length-1;b++){u.x=t[b].x*M,u.y=t[b].y,u.z=t[b].x*A,o.push(u.x,u.y,u.z),f.x=_/e,f.y=b/(t.length-1),a.push(f.x,f.y);let T=l[3*b+0]*M,I=l[3*b+1],y=l[3*b+0]*A;c.push(T,I,y)}}for(let _=0;_<e;_++)for(let x=0;x<t.length-1;x++){let M=x+_*t.length,A=M,b=M+t.length,T=M+t.length+1,I=M+1;r.push(A,b,I),r.push(T,I,b)}this.setIndex(r),this.setAttribute("position",new Wt(o,3)),this.setAttribute("uv",new Wt(a,2)),this.setAttribute("normal",new Wt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},No=class s extends Ul{constructor(t=1,e=1,n=4,i=8){let r=new or;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new s(t.radius,t.length,t.capSegments,t.radialSegments)}},ys=class s extends ce{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new C,h=new at;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Wt(o,3)),this.setAttribute("normal",new Wt(a,3)),this.setAttribute("uv",new Wt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Un=class s extends ce{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],m=0,g=[],v=n/2,p=0;_(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Wt(u,3)),this.setAttribute("normal",new Wt(f,3)),this.setAttribute("uv",new Wt(d,2));function _(){let M=new C,A=new C,b=0,T=(e-t)/n;for(let I=0;I<=r;I++){let y=[],S=I/r,N=S*(e-t)+t;for(let O=0;O<=i;O++){let W=O/i,D=W*l+a,H=Math.sin(D),X=Math.cos(D);A.x=N*H,A.y=-S*n+v,A.z=N*X,u.push(A.x,A.y,A.z),M.set(H,T,X).normalize(),f.push(M.x,M.y,M.z),d.push(W,1-S),y.push(m++)}g.push(y)}for(let I=0;I<i;I++)for(let y=0;y<r;y++){let S=g[y][I],N=g[y+1][I],O=g[y+1][I+1],W=g[y][I+1];h.push(S,N,W),h.push(N,O,W),b+=6}c.addGroup(p,b,0),p+=b}function x(M){let A=m,b=new at,T=new C,I=0,y=M===!0?t:e,S=M===!0?1:-1;for(let O=1;O<=i;O++)u.push(0,v*S,0),f.push(0,S,0),d.push(.5,.5),m++;let N=m;for(let O=0;O<=i;O++){let D=O/i*l+a,H=Math.cos(D),X=Math.sin(D);T.x=y*X,T.y=v*S,T.z=y*H,u.push(T.x,T.y,T.z),f.push(0,S,0),b.x=H*.5+.5,b.y=X*.5*S+.5,d.push(b.x,b.y),m++}for(let O=0;O<i;O++){let W=A+O,D=N+O;M===!0?h.push(D,D+1,W):h.push(D+1,D,W),I+=3}c.addGroup(p,I,M===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Nl=class s extends ce{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Wt(r,3)),this.setAttribute("normal",new Wt(r.slice(),3)),this.setAttribute("uv",new Wt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let x=new C,M=new C,A=new C;for(let b=0;b<e.length;b+=3)d(e[b+0],x),d(e[b+1],M),d(e[b+2],A),l(x,M,A,_)}function l(_,x,M,A){let b=A+1,T=[];for(let I=0;I<=b;I++){T[I]=[];let y=_.clone().lerp(M,I/b),S=x.clone().lerp(M,I/b),N=b-I;for(let O=0;O<=N;O++)O===0&&I===b?T[I][O]=y:T[I][O]=y.clone().lerp(S,O/N)}for(let I=0;I<b;I++)for(let y=0;y<2*(b-I)-1;y++){let S=Math.floor(y/2);y%2===0?(f(T[I][S+1]),f(T[I+1][S]),f(T[I][S])):(f(T[I][S+1]),f(T[I+1][S+1]),f(T[I+1][S]))}}function c(_){let x=new C;for(let M=0;M<r.length;M+=3)x.x=r[M+0],x.y=r[M+1],x.z=r[M+2],x.normalize().multiplyScalar(_),r[M+0]=x.x,r[M+1]=x.y,r[M+2]=x.z}function h(){let _=new C;for(let x=0;x<r.length;x+=3){_.x=r[x+0],_.y=r[x+1],_.z=r[x+2];let M=v(_)/2/Math.PI+.5,A=p(_)/Math.PI+.5;o.push(M,1-A)}m(),u()}function u(){for(let _=0;_<o.length;_+=6){let x=o[_+0],M=o[_+2],A=o[_+4],b=Math.max(x,M,A),T=Math.min(x,M,A);b>.9&&T<.1&&(x<.2&&(o[_+0]+=1),M<.2&&(o[_+2]+=1),A<.2&&(o[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function d(_,x){let M=_*3;x.x=t[M+0],x.y=t[M+1],x.z=t[M+2]}function m(){let _=new C,x=new C,M=new C,A=new C,b=new at,T=new at,I=new at;for(let y=0,S=0;y<r.length;y+=9,S+=6){_.set(r[y+0],r[y+1],r[y+2]),x.set(r[y+3],r[y+4],r[y+5]),M.set(r[y+6],r[y+7],r[y+8]),b.set(o[S+0],o[S+1]),T.set(o[S+2],o[S+3]),I.set(o[S+4],o[S+5]),A.copy(_).add(x).add(M).divideScalar(3);let N=v(A);g(b,S+0,_,N),g(T,S+2,x,N),g(I,S+4,M,N)}}function g(_,x,M,A){A<0&&_.x===1&&(o[x]=_.x-1),M.x===0&&M.z===0&&(o[x]=A/2/Math.PI+.5)}function v(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}};var Ni=class extends or{constructor(t){super(t),this.uuid=Bi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new or().fromJSON(i))}return this}},Dv={triangulate:function(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=Fu(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,d;if(n&&(r=zv(s,t,r,e)),s.length>80*e){a=c=s[0],l=h=s[1];for(let m=e;m<i;m+=e)u=s[m],f=s[m+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return ar(r,o,e,a,l,d,0),o}};function Fu(s,t,e,n,i){let r,o;if(i===$v(s,t,e,n)>0)for(r=t;r<e;r+=n)o=hu(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=hu(r,s[r],s[r+1],o);return o&&Ko(o,o.next)&&(cr(o),o=o.next),o}function Oi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Ko(e,e.next)||_e(e.prev,e,e.next)===0)){if(cr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ar(s,t,e,n,i,r,o){if(!s)return;!o&&r&&Gv(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?Nv(s,n,i,r):Uv(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),cr(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Ov(Oi(s),t,e),ar(s,t,e,n,i,r,2)):o===2&&Fv(s,t,e,n,i,r):ar(Oi(s),t,e,n,i,r,1);break}}}function Uv(s){let t=s.prev,e=s,n=s.next;if(_e(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=i>r?i>o?i:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c,m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&as(i,a,r,l,o,c,m.x,m.y)&&_e(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Nv(s,t,e,n){let i=s.prev,r=s,o=s.next;if(_e(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,m=h<u?h<f?h:f:u<f?u:f,g=a>l?a>c?a:c:l>c?l:c,v=h>u?h>f?h:f:u>f?u:f,p=Ol(d,m,t,e,n),_=Ol(g,v,t,e,n),x=s.prevZ,M=s.nextZ;for(;x&&x.z>=p&&M&&M.z<=_;){if(x.x>=d&&x.x<=g&&x.y>=m&&x.y<=v&&x!==i&&x!==o&&as(a,h,l,u,c,f,x.x,x.y)&&_e(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=d&&M.x<=g&&M.y>=m&&M.y<=v&&M!==i&&M!==o&&as(a,h,l,u,c,f,M.x,M.y)&&_e(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=g&&x.y>=m&&x.y<=v&&x!==i&&x!==o&&as(a,h,l,u,c,f,x.x,x.y)&&_e(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=_;){if(M.x>=d&&M.x<=g&&M.y>=m&&M.y<=v&&M!==i&&M!==o&&as(a,h,l,u,c,f,M.x,M.y)&&_e(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Ov(s,t,e){let n=s;do{let i=n.prev,r=n.next.next;!Ko(i,r)&&zu(i,n,n.next,r)&&lr(i,r)&&lr(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),cr(n),cr(n.next),n=s=r),n=n.next}while(n!==s);return Oi(n)}function Fv(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&qv(o,a)){let l=Bu(o,a);o=Oi(o,o.next),l=Oi(l,l.next),ar(o,t,e,n,i,r,0),ar(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function zv(s,t,e,n){let i=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=Fu(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Xv(c));for(i.sort(Bv),r=0;r<i.length;r++)e=Hv(i[r],e);return e}function Bv(s,t){return s.x-t.x}function Hv(s,t){let e=kv(s,t);if(!e)return t;let n=Bu(e,s);return Oi(n,n.next),Oi(e,e.next)}function kv(s,t){let e=t,n=-1/0,i,r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===r))return i}e=e.next}while(e!==t);if(!i)return null;let a=i,l=i.x,c=i.y,h=1/0,u;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&as(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),lr(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&Vv(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function Vv(s,t){return _e(s.prev,s,t.prev)<0&&_e(t.next,s,s.next)<0}function Gv(s,t,e,n){let i=s;do i.z===0&&(i.z=Ol(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Wv(i)}function Wv(s){let t,e,n,i,r,o,a,l,c=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(o>1);return s}function Ol(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Xv(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function as(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function qv(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Yv(s,t)&&(lr(s,t)&&lr(t,s)&&Zv(s,t)&&(_e(s.prev,s,t.prev)||_e(s,t.prev,t))||Ko(s,t)&&_e(s.prev,s,s.next)>0&&_e(t.prev,t,t.next)>0)}function _e(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Ko(s,t){return s.x===t.x&&s.y===t.y}function zu(s,t,e,n){let i=ao(_e(s,t,e)),r=ao(_e(s,t,n)),o=ao(_e(e,n,s)),a=ao(_e(e,n,t));return!!(i!==r&&o!==a||i===0&&oo(s,e,t)||r===0&&oo(s,n,t)||o===0&&oo(e,s,n)||a===0&&oo(e,t,n))}function oo(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function ao(s){return s>0?1:s<0?-1:0}function Yv(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&zu(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function lr(s,t){return _e(s.prev,s,s.next)<0?_e(s,t,s.next)>=0&&_e(s,s.prev,t)>=0:_e(s,t,s.prev)<0||_e(s,s.next,t)<0}function Zv(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Bu(s,t){let e=new Fl(s.i,s.x,s.y),n=new Fl(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function hu(s,t,e,n){let i=new Fl(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function cr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Fl(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function $v(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Js=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];uu(t),fu(n,t);let o=t.length;e.forEach(uu);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,fu(n,e[l]);let a=Dv.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function uu(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function fu(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Ms=class s extends ce{constructor(t=new Ni([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Wt(i,3)),this.setAttribute("uv",new Wt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,v=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:Kv,x,M=!1,A,b,T,I;p&&(x=p.getSpacedPoints(h),M=!0,f=!1,A=p.computeFrenetFrames(h,!1),b=new C,T=new C,I=new C),f||(v=0,d=0,m=0,g=0);let y=a.extractPoints(c),S=y.shape,N=y.holes;if(!Js.isClockWise(S)){S=S.reverse();for(let U=0,vt=N.length;U<vt;U++){let tt=N[U];Js.isClockWise(tt)&&(N[U]=tt.reverse())}}let W=Js.triangulateShape(S,N),D=S;for(let U=0,vt=N.length;U<vt;U++){let tt=N[U];S=S.concat(tt)}function H(U,vt,tt){return vt||console.error("THREE.ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(vt,tt)}let X=S.length,K=W.length;function Q(U,vt,tt){let gt,nt,Ut,yt=U.x-vt.x,w=U.y-vt.y,E=tt.x-U.x,V=tt.y-U.y,dt=yt*yt+w*w,ft=yt*V-w*E;if(Math.abs(ft)>Number.EPSILON){let ct=Math.sqrt(dt),P=Math.sqrt(E*E+V*V),L=vt.x-w/ct,z=vt.y+yt/ct,k=tt.x-V/P,q=tt.y+E/P,B=((k-L)*V-(q-z)*E)/(yt*V-w*E);gt=L+yt*B-U.x,nt=z+w*B-U.y;let it=gt*gt+nt*nt;if(it<=2)return new at(gt,nt);Ut=Math.sqrt(it/2)}else{let ct=!1;yt>Number.EPSILON?E>Number.EPSILON&&(ct=!0):yt<-Number.EPSILON?E<-Number.EPSILON&&(ct=!0):Math.sign(w)===Math.sign(V)&&(ct=!0),ct?(gt=-w,nt=yt,Ut=Math.sqrt(dt)):(gt=yt,nt=w,Ut=Math.sqrt(dt/2))}return new at(gt/Ut,nt/Ut)}let $=[];for(let U=0,vt=D.length,tt=vt-1,gt=U+1;U<vt;U++,tt++,gt++)tt===vt&&(tt=0),gt===vt&&(gt=0),$[U]=Q(D[U],D[tt],D[gt]);let ot=[],rt,xt=$.concat();for(let U=0,vt=N.length;U<vt;U++){let tt=N[U];rt=[];for(let gt=0,nt=tt.length,Ut=nt-1,yt=gt+1;gt<nt;gt++,Ut++,yt++)Ut===nt&&(Ut=0),yt===nt&&(yt=0),rt[gt]=Q(tt[gt],tt[Ut],tt[yt]);ot.push(rt),xt=xt.concat(rt)}for(let U=0;U<v;U++){let vt=U/v,tt=d*Math.cos(vt*Math.PI/2),gt=m*Math.sin(vt*Math.PI/2)+g;for(let nt=0,Ut=D.length;nt<Ut;nt++){let yt=H(D[nt],$[nt],gt);bt(yt.x,yt.y,-tt)}for(let nt=0,Ut=N.length;nt<Ut;nt++){let yt=N[nt];rt=ot[nt];for(let w=0,E=yt.length;w<E;w++){let V=H(yt[w],rt[w],gt);bt(V.x,V.y,-tt)}}}let j=m+g;for(let U=0;U<X;U++){let vt=f?H(S[U],xt[U],j):S[U];M?(T.copy(A.normals[0]).multiplyScalar(vt.x),b.copy(A.binormals[0]).multiplyScalar(vt.y),I.copy(x[0]).add(T).add(b),bt(I.x,I.y,I.z)):bt(vt.x,vt.y,0)}for(let U=1;U<=h;U++)for(let vt=0;vt<X;vt++){let tt=f?H(S[vt],xt[vt],j):S[vt];M?(T.copy(A.normals[U]).multiplyScalar(tt.x),b.copy(A.binormals[U]).multiplyScalar(tt.y),I.copy(x[U]).add(T).add(b),bt(I.x,I.y,I.z)):bt(tt.x,tt.y,u/h*U)}for(let U=v-1;U>=0;U--){let vt=U/v,tt=d*Math.cos(vt*Math.PI/2),gt=m*Math.sin(vt*Math.PI/2)+g;for(let nt=0,Ut=D.length;nt<Ut;nt++){let yt=H(D[nt],$[nt],gt);bt(yt.x,yt.y,u+tt)}for(let nt=0,Ut=N.length;nt<Ut;nt++){let yt=N[nt];rt=ot[nt];for(let w=0,E=yt.length;w<E;w++){let V=H(yt[w],rt[w],gt);M?bt(V.x,V.y+x[h-1].y,x[h-1].x+tt):bt(V.x,V.y,u+tt)}}}lt(),St();function lt(){let U=i.length/3;if(f){let vt=0,tt=X*vt;for(let gt=0;gt<K;gt++){let nt=W[gt];Nt(nt[2]+tt,nt[1]+tt,nt[0]+tt)}vt=h+v*2,tt=X*vt;for(let gt=0;gt<K;gt++){let nt=W[gt];Nt(nt[0]+tt,nt[1]+tt,nt[2]+tt)}}else{for(let vt=0;vt<K;vt++){let tt=W[vt];Nt(tt[2],tt[1],tt[0])}for(let vt=0;vt<K;vt++){let tt=W[vt];Nt(tt[0]+X*h,tt[1]+X*h,tt[2]+X*h)}}n.addGroup(U,i.length/3-U,0)}function St(){let U=i.length/3,vt=0;Ct(D,vt),vt+=D.length;for(let tt=0,gt=N.length;tt<gt;tt++){let nt=N[tt];Ct(nt,vt),vt+=nt.length}n.addGroup(U,i.length/3-U,1)}function Ct(U,vt){let tt=U.length;for(;--tt>=0;){let gt=tt,nt=tt-1;nt<0&&(nt=U.length-1);for(let Ut=0,yt=h+v*2;Ut<yt;Ut++){let w=X*Ut,E=X*(Ut+1),V=vt+gt+w,dt=vt+nt+w,ft=vt+nt+E,ct=vt+gt+E;Ot(V,dt,ft,ct)}}}function bt(U,vt,tt){l.push(U),l.push(vt),l.push(tt)}function Nt(U,vt,tt){At(U),At(vt),At(tt);let gt=i.length/3,nt=_.generateTopUV(n,i,gt-3,gt-2,gt-1);zt(nt[0]),zt(nt[1]),zt(nt[2])}function Ot(U,vt,tt,gt){At(U),At(vt),At(gt),At(vt),At(tt),At(gt);let nt=i.length/3,Ut=_.generateSideWallUV(n,i,nt-6,nt-3,nt-2,nt-1);zt(Ut[0]),zt(Ut[1]),zt(Ut[3]),zt(Ut[1]),zt(Ut[2]),zt(Ut[3])}function At(U){i.push(l[U*3+0]),i.push(l[U*3+1]),i.push(l[U*3+2])}function zt(U){r.push(U.x),r.push(U.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Jv(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Uo[i.type]().fromJSON(i)),new s(n,t.options)}},Kv={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new at(r,o),new at(a,l),new at(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[i*3],d=t[i*3+1],m=t[i*3+2],g=t[r*3],v=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new at(o,1-l),new at(c,1-u),new at(f,1-m),new at(g,1-p)]:[new at(a,1-l),new at(h,1-u),new at(d,1-m),new at(v,1-p)]}};function Jv(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ss=class s extends Nl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var Oo=class s extends ce{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/i,d=new C,m=new at;for(let g=0;g<=i;g++){for(let v=0;v<=n;v++){let p=r+v/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,h.push(m.x,m.y)}u+=f}for(let g=0;g<i;g++){let v=g*(n+1);for(let p=0;p<n;p++){let _=p+v,x=_,M=_+n+1,A=_+n+2,b=_+1;a.push(x,M,b),a.push(M,A,b)}}this.setIndex(a),this.setAttribute("position",new Wt(l,3)),this.setAttribute("normal",new Wt(c,3)),this.setAttribute("uv",new Wt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var bs=class s extends ce{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new C,f=new C,d=[],m=[],g=[],v=[];for(let p=0;p<=n;p++){let _=[],x=p/n,M=0;p===0&&o===0?M=.5/e:p===n&&l===Math.PI&&(M=-.5/e);for(let A=0;A<=e;A++){let b=A/e;u.x=-t*Math.cos(i+b*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(i+b*r)*Math.sin(o+x*a),m.push(u.x,u.y,u.z),f.copy(u).normalize(),g.push(f.x,f.y,f.z),v.push(b+M,1-x),_.push(c++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){let x=h[p][_+1],M=h[p][_],A=h[p+1][_],b=h[p+1][_+1];(p!==0||o>0)&&d.push(x,M,b),(p!==n-1||l<Math.PI)&&d.push(M,A,b)}this.setIndex(d),this.setAttribute("position",new Wt(m,3)),this.setAttribute("normal",new Wt(g,3)),this.setAttribute("uv",new Wt(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Fo=class s extends ce{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new C,u=new C,f=new C;for(let d=0;d<=n;d++)for(let m=0;m<=i;m++){let g=m/i*r,v=d/n*Math.PI*2;u.x=(t+e*Math.cos(v))*Math.cos(g),u.y=(t+e*Math.cos(v))*Math.sin(g),u.z=e*Math.sin(v),a.push(u.x,u.y,u.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(m/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=i;m++){let g=(i+1)*d+m-1,v=(i+1)*(d-1)+m-1,p=(i+1)*(d-1)+m,_=(i+1)*d+m;o.push(g,v,_),o.push(v,p,_)}this.setIndex(o),this.setAttribute("position",new Wt(a,3)),this.setAttribute("normal",new Wt(l,3)),this.setAttribute("uv",new Wt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var zo=class s extends ce{constructor(t=new _s(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new C,l=new C,c=new at,h=new C,u=[],f=[],d=[],m=[];g(),this.setIndex(m),this.setAttribute("position",new Wt(u,3)),this.setAttribute("normal",new Wt(f,3)),this.setAttribute("uv",new Wt(d,2));function g(){for(let x=0;x<e;x++)v(x);v(r===!1?e:0),_(),p()}function v(x){h=t.getPointAt(x/e,h);let M=o.normals[x],A=o.binormals[x];for(let b=0;b<=i;b++){let T=b/i*Math.PI*2,I=Math.sin(T),y=-Math.cos(T);l.x=y*M.x+I*A.x,l.y=y*M.y+I*A.y,l.z=y*M.z+I*A.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let x=1;x<=e;x++)for(let M=1;M<=i;M++){let A=(i+1)*(x-1)+(M-1),b=(i+1)*x+(M-1),T=(i+1)*x+M,I=(i+1)*(x-1)+M;m.push(A,b,I),m.push(b,T,I)}}function _(){for(let x=0;x<=e;x++)for(let M=0;M<=i;M++)c.x=x/e,c.y=M/i,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new Uo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Bo=class extends ne{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ae=class extends Qn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ic,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ho=class extends Qn{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ic,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};function lo(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function jv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Es=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},zl=class extends Es{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mh,endingEnd:mh}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case gh:r=t,a=2*e-n;break;case vh:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case gh:o=t,l=2*n-e;break;case vh:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-e)/(i-e),g=m*m,v=g*m,p=-f*v+2*f*g-f*m,_=(1+f)*v+(-1.5-2*f)*g+(-.5+f)*m+1,x=(-1-d)*v+(1.5+d)*g+.5*m,M=d*v-d*g;for(let A=0;A!==a;++A)r[A]=p*o[h+A]+_*o[c+A]+x*o[l+A]+M*o[u+A];return r}},Bl=class extends Es{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Hl=class extends Es{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Nn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=lo(e,this.TimeBufferType),this.values=lo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:lo(t.times,Array),values:lo(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Hl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Bl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new zl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ho:e=this.InterpolantFactoryMethodDiscrete;break;case uo:e=this.InterpolantFactoryMethodLinear;break;case Ua:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ho;case this.InterpolantFactoryMethodLinear:return uo;case this.InterpolantFactoryMethodSmooth:return Ua}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&jv(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ua,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){let g=e[u+m];if(g!==e[f+m]||g!==e[d+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=uo;var Fi=class extends Nn{};Fi.prototype.ValueTypeName="bool";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=ho;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var kl=class extends Nn{};kl.prototype.ValueTypeName="color";var Vl=class extends Nn{};Vl.prototype.ValueTypeName="number";var Gl=class extends Es{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)hn.slerpFlat(r,0,o,c-a,o,c,l);return r}},hr=class extends Nn{InterpolantFactoryMethodLinear(t){return new Gl(this.times,this.values,this.getValueSize(),t)}};hr.prototype.ValueTypeName="quaternion";hr.prototype.DefaultInterpolation=uo;hr.prototype.InterpolantFactoryMethodSmooth=void 0;var zi=class extends Nn{};zi.prototype.ValueTypeName="string";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=ho;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Wl=class extends Nn{};Wl.prototype.ValueTypeName="vector";var Xl=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null}}},Qv=new Xl,ql=class{constructor(t){this.manager=t!==void 0?t:Qv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ql.DEFAULT_MATERIAL_NAME="__DEFAULT";var ur=class extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},ko=class extends ur{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ol=new qt,du=new C,pu=new C,Vo=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new er,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;du.setFromMatrixPosition(t.matrixWorld),e.position.copy(du),pu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(pu),e.updateMatrixWorld(),ol.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ol),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ol)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var mu=new qt,Ws=new C,al=new C,Yl=class extends Vo{constructor(){super(new Re(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new at(4,2),this._viewportCount=6,this._viewports=[new ve(2,1,1,1),new ve(0,1,1,1),new ve(3,1,1,1),new ve(1,1,1,1),new ve(3,0,1,1),new ve(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ws.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ws),al.copy(n.position),al.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(al),n.updateMatrixWorld(),i.makeTranslation(-Ws.x,-Ws.y,-Ws.z),mu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mu)}},ti=class extends ur{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Yl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Zl=class extends Vo{constructor(){super(new ms(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Go=class extends ur{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new Zl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Ts=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=gu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=gu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function gu(){return(typeof performance>"u"?Date:performance).now()}var lc="\\[\\]\\.:\\/",tx=new RegExp("["+lc+"]","g"),cc="[^"+lc+"]",ex="[^"+lc.replace("\\.","")+"]",nx=/((?:WC+[\/:])*)/.source.replace("WC",cc),ix=/(WCOD+)?/.source.replace("WCOD",ex),sx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cc),rx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cc),ox=new RegExp("^"+nx+ix+sx+rx+"$"),ax=["material","materials","bones","map"],$l=class{constructor(t,e,n){let i=n||ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ge=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(tx,"")}static parseTrackName(t){let e=ox.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);ax.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ge.Composite=$l;ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ge.prototype.GetterByBindingType=[ge.prototype._getValue_direct,ge.prototype._getValue_array,ge.prototype._getValue_arrayElement,ge.prototype._getValue_toArray];ge.prototype.SetterByBindingTypeAndVersioning=[[ge.prototype._setValue_direct,ge.prototype._setValue_direct_setNeedsUpdate,ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_array,ge.prototype._setValue_array_setNeedsUpdate,ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_arrayElement,ge.prototype._setValue_arrayElement_setNeedsUpdate,ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_fromArray,ge.prototype._setValue_fromArray_setNeedsUpdate,ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var jx=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kl);var qe=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},lx=new ms(-1,1,1,-1,0,1),hc=class extends ce{constructor(){super(),this.setAttribute("position",new Wt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Wt([0,2,0,0,2,0],2))}},cx=new hc,ln=class{constructor(t){this._mesh=new Jt(cx,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,lx)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var hx=["paving","plaster","brick","rooftile","wood","bark","foliage","manchu","facadeA","facadeB","facadeC","shopA","shopB","shopC","sky","container","sandbags","crate","concrete","rustmetal","apartment","teahouse","lacquer","manhole","balustrade"],ux=["gunHip","gunAds","leafcard","kapoktree","streettree","scooters","plants","stools","bins","pole","leaves","paifang","skylineEast","skylineCity"],fx={lacquer:"#7a2a22",shopC:"#77706a",manhole:"#4a4744",container:"#8a8f92",sandbags:"#6f6650",crate:"#8a6a48",concrete:"#8c8a86",rustmetal:"#5a5f58",apartment:"#b5ab9c",teahouse:"#c9b58c",paving:"#8d8676",plaster:"#d8d2c4",brick:"#75838a",rooftile:"#2f7f62",wood:"#6b4127",bark:"#6a5a4a",foliage:"#3c7a3a",manchu:"#7a3b22",facadeA:"#d9c58f",facadeB:"#a8c4b2",facadeC:"#d3a393",shopA:"#5a3a26",shopB:"#77706a",sky:"#f0b27a",balustrade:"#8f8b82"};async function ku(s={},t){let e={},n=[...hx,...ux],i=`./assets/web/${s.lite?"m/":""}`,r=0;return await Promise.all(n.map(o=>new Promise(a=>{let l=new Image;l.decoding="async",l.onload=()=>{e[o]=l,r++,t&&t(r,n.length),a()},l.onerror=()=>{e[o]=null,r++,t&&t(r,n.length),a()},l.src=i+o+".webp"}))),new fc(e,s)}var Vu=new ne({depthTest:!1,depthWrite:!1,uniforms:{map:{value:null},px:{value:new at},s:{value:2},r0:{value:.85},rk:{value:.5},mode:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform sampler2D map; uniform vec2 px; uniform float s, r0, rk; uniform int mode; varying vec2 vUv;
    float L(vec2 o){ vec3 c=texture2D(map,vUv+o*px).rgb; return pow(max(dot(c,vec3(.299,.587,.114)),0.),.4545); }
    void main(){
      if(mode==0){ float dx=(L(vec2(1.,0.))-L(vec2(-1.,0.)))+.5*(L(vec2(2.,0.))-L(vec2(-2.,0.))); float dy=(L(vec2(0.,-1.))-L(vec2(0.,1.)))+.5*(L(vec2(0.,-2.))-L(vec2(0.,2.)));
        vec3 n=normalize(vec3(-dx*s,dy*s,1.)); gl_FragColor=vec4(n*.5+.5,1.); }
      else { float r=clamp(r0+(.5-L(vec2(0.)))*rk,.04,1.); gl_FragColor=vec4(r,r,r,1.); }
    }`}),Hu=new ln(Vu);function uc(s,t){let e=document.createElement("canvas");return e.width=s,e.height=t,e}var fc=class{constructor(t,e={}){this.img=t,this.cache=new Map,this.cuts=new Map,this.lite=!!e.lite,this.renderer=e.renderer}has(t){return!!this.img[t]}canvas(t,e,n){let i=uc(e,n),r=i.getContext("2d"),o=this.img[t];if(o)r.drawImage(o,0,0,e,n);else{r.fillStyle=fx[t]||"#888",r.fillRect(0,0,e,n);for(let a=0;a<4e3;a++)r.fillStyle=`rgba(${Math.random()<.5?0:255},${Math.random()<.5?0:255},${Math.random()<.5?0:255},0.05)`,r.fillRect(Math.random()*e,Math.random()*n,3,3)}return i}cutout(t){let e=this.img[t];if(!e)return null;if(this.cuts.has(t))return this.cuts.get(t);let n=new je(e);n.colorSpace=oe,n.anisotropy=8,n.needsUpdate=!0;let i={tex:n,aspect:e.width/e.height,get canvas(){let r=uc(e.width,e.height);return r.getContext("2d").drawImage(e,0,0),r}};return this.cuts.set(t,i),i}pbr(t,e={}){let n=t+JSON.stringify(e);if(this.cache.has(n))return this.cache.get(n);let i=this.img[t],r=e.repeat!==!1?cn:mn,o;if(i&&!e.gain&&!e.desat)o=new je(i);else{let _=i?i.width:256,x=i?i.height:Math.round(256*(e.aspect||1)),M=this.canvas(t,_,x);if(e.gain||e.desat){let A=M.getContext("2d"),b=A.getImageData(0,0,_,x),T=b.data,I=e.desat||0,y=e.gain||1;for(let S=0;S<T.length;S+=4){let N=T[S]*.299+T[S+1]*.587+T[S+2]*.114;for(let O=0;O<3;O++)T[S+O]=Math.min(255,(T[S+O]*(1-I)+N*I)*y)}A.putImageData(b,0,0)}o=new an(M)}o.colorSpace=oe,o.wrapS=o.wrapT=r,o.anisotropy=8,o.needsUpdate=!0;let a=o.image.width,l=o.image.height,c=Math.min(e.size||a,a),h=Math.max(2,Math.round(c*l/a)),u=()=>{let _=new pe(c,h,{depthBuffer:!1,generateMipmaps:!0,minFilter:Di,magFilter:on,wrapS:r,wrapT:r});return _.texture.anisotropy=8,_},f=u(),d=u(),m=Vu.uniforms,g=this.renderer,v=g.getRenderTarget();m.map.value=o,m.px.value.set(1/c,1/h),m.s.value=e.normal??2,m.r0.value=e.rough??.85,m.rk.value=e.roughK??.5,m.mode.value=0,g.setRenderTarget(f),Hu.render(g),m.mode.value=1,g.setRenderTarget(d),Hu.render(g),g.setRenderTarget(v);let p={map:o,normalMap:f.texture,roughnessMap:d.texture};return this.cache.set(n,p),p}sky(t,e=14){let r=uc(2048,1024),o=r.getContext("2d"),a=this.canvas("sky",2048,1024/2),l=a.getContext("2d");if(!this.img.sky){let O=l.createLinearGradient(0,0,0,512);O.addColorStop(0,"#2c4f8f"),O.addColorStop(.6,"#c9a184"),O.addColorStop(1,"#ffcf8f"),l.fillStyle=O,l.fillRect(0,0,2048,1024/2);let W=l.createRadialGradient(2048*.3,1024/2-60,0,2048*.3,1024/2-60,420);W.addColorStop(0,"rgba(255,240,200,1)"),W.addColorStop(1,"rgba(255,200,120,0)"),l.fillStyle=W,l.fillRect(0,0,2048,1024/2)}let c=l.getImageData(0,0,2048,1024/2),h=c.data,u=160,f=1024/2;for(let O=0;O<f;O++)for(let W=0;W<u;W++){let D=W/u,H=(O*2048+W)*4,X=(O*2048+(2047-W))*4;for(let K=0;K<3;K++)h[H+K]=h[X+K]*(1-D)*.5+h[H+K]*(.5+D*.5)}for(let O=0;O<f;O++)for(let W=0;W<u;W++){let D=W/u,H=(O*2048+(2047-W))*4,X=(O*2048+W)*4;for(let K=0;K<3;K++)h[H+K]=h[X+K]*(1-D)*.5+h[H+K]*(.5+D*.5)}let d=-1,m=.3,g=.9;for(let O=0;O<16;O++)for(let W=0;W<64;W++){let D=0;for(let H=0;H<24;H++){let X=W*32+H*7%32,K=O*32+H*13%32,Q=(K*2048+X)*4;D+=h[Q]+h[Q+1]*.8+h[Q+2]*.4}D*=.6+.4*(O/16),D>d&&(d=D,m=(W+.5)/64,g=(O+.5)/16)}l.putImageData(c,0,0);let v=Math.atan2(t.z,t.x)/(2*Math.PI)+.5,p=Math.round(((v-m)%1+1)%1*2048),_=Math.round(f*(e/90)),x=f-_;for(let O of[p,p-2048])o.drawImage(a,0,0,2048,f,O,0,2048,x),o.drawImage(a,0,f-2,2048,2,O,x,2048,_+1);let M=o.createLinearGradient(0,x,0,f);M.addColorStop(0,"rgba(255,170,90,0)"),M.addColorStop(1,"rgba(214,150,110,0.55)"),o.fillStyle=M,o.fillRect(0,x,2048,_);let A=o.getImageData(0,f-3,2048,1).data,b=0,T=0,I=0;for(let O=0;O<2048;O+=16)b+=A[O*4],T+=A[O*4+1],I+=A[O*4+2];let y=2048/16;b/=y,T/=y,I/=y;let S=o.createLinearGradient(0,f,0,1024);S.addColorStop(0,`rgb(${b|0},${T|0},${I|0})`),S.addColorStop(.12,`rgb(${b*.5|0},${T*.45|0},${I*.42|0})`),S.addColorStop(1,"rgb(46,40,36)"),o.fillStyle=S,o.fillRect(0,f,2048,f);let N=new an(r);return N.colorSpace=oe,N.mapping=js,N.wrapS=cn,N.minFilter=on,N.generateMipmaps=!1,{tex:N,horizon:new Lt().setRGB(b/255,T/255,I/255,oe),sunElev:g}}};var wn={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var vi=class extends qe{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof ne?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ke.clone(t.uniforms),this.material=new ne({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new ln(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var pr=class extends qe{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},Jo=class extends qe{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var jo=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new at);this._width=n.width,this._height=n.height,e=new pe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ie}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new vi(wn),this.copyPass.material.blending=Pe,this.clock=new Ts}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}pr!==void 0&&(o instanceof pr?n=!0:o instanceof Jo&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new at);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Gu={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Lt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Rs=class s extends qe{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new at(t.x,t.y):new at(256,256),this.clearColor=new Lt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new pe(r,o,{type:Ie}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new pe(r,o,{type:Ie});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new pe(r,o,{type:Ie});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=Gu;this.highPassUniforms=ke.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ne({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new at(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=wn;this.copyUniforms=ke.clone(h.uniforms),this.blendMaterial=new ne({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Kn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Lt,this.oldClearAlpha=1,this.basic=new Ae,this.fsQuad=new ln(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new at(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new ne({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new at(.5,.5)},direction:{value:new at(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new ne({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Rs.BlurDirectionX=new at(1,0);Rs.BlurDirectionY=new at(0,1);var Wu={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Qo=class extends qe{constructor(){super();let t=Wu;this.uniforms=ke.clone(t.uniforms),this.material=new Bo({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new ln(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},re.getTransfer(this._outputColorSpace)===le&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===jl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ql?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===tc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===fr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ec&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var mr={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new at},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new qt},cameraProjectionMatrixInverse:{value:new qt},cameraWorldMatrix:{value:new qt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new C(-1,-1,-1)},sceneBoxMax:{value:new C(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0, totalWeight = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},gr={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},ta={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Xu(s=5){let t=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),e=dx(t),n=e.length,i=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=e[o],l=2*Math.PI*a/n,c=new C(Math.cos(l),Math.sin(l),0).normalize();i[o*4]=(c.x*.5+.5)*255,i[o*4+1]=(c.y*.5+.5)*255,i[o*4+2]=127,i[o*4+3]=255}let r=new xs(i,t,t);return r.wrapS=cn,r.wrapT=cn,r.needsUpdate=!0,r}function dx(s){let t=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),e=t*t,n=Array(e).fill(0),i=Math.floor(t/2),r=t-1;for(let o=1;o<=e;){if(i===-1&&r===t?(r=t-2,i=0):(r===t&&(r=0),i<0&&(i=t-1)),n[i*t+r]!==0){r-=2,i++;continue}else n[i*t+r]=o++;r++,i--}return n}var vr={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:dc(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new at},cameraProjectionMatrixInverse:{value:new qt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function dc(s,t,e){let n=px(s,t,e),i="vec3[SAMPLES](";for(let r=0;r<s;r++){let o=n[r];i+=`vec3(${o.x}, ${o.y}, ${o.z})${r<s-1?",":")"}`}return i}function px(s,t,e){let n=[];for(let i=0;i<s;i++){let r=2*Math.PI*t*i/s,o=Math.pow(i/(s-1),e);n.push(new C(Math.cos(r),Math.sin(r),o))}return n}var ea=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,n){return t[0]*e+t[1]*n}dot3(t,e,n,i){return t[0]*e+t[1]*n+t[2]*i}dot4(t,e,n,i,r){return t[0]*e+t[1]*n+t[2]*i+t[3]*r}noise(t,e){let n,i,r,o=.5*(Math.sqrt(3)-1),a=(t+e)*o,l=Math.floor(t+a),c=Math.floor(e+a),h=(3-Math.sqrt(3))/6,u=(l+c)*h,f=l-u,d=c-u,m=t-f,g=e-d,v,p;m>g?(v=1,p=0):(v=0,p=1);let _=m-v+h,x=g-p+h,M=m-1+2*h,A=g-1+2*h,b=l&255,T=c&255,I=this.perm[b+this.perm[T]]%12,y=this.perm[b+v+this.perm[T+p]]%12,S=this.perm[b+1+this.perm[T+1]]%12,N=.5-m*m-g*g;N<0?n=0:(N*=N,n=N*N*this.dot(this.grad3[I],m,g));let O=.5-_*_-x*x;O<0?i=0:(O*=O,i=O*O*this.dot(this.grad3[y],_,x));let W=.5-M*M-A*A;return W<0?r=0:(W*=W,r=W*W*this.dot(this.grad3[S],M,A)),70*(n+i+r)}noise3d(t,e,n){let i,r,o,a,c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),u=Math.floor(e+c),f=Math.floor(n+c),d=1/6,m=(h+u+f)*d,g=h-m,v=u-m,p=f-m,_=t-g,x=e-v,M=n-p,A,b,T,I,y,S;_>=x?x>=M?(A=1,b=0,T=0,I=1,y=1,S=0):_>=M?(A=1,b=0,T=0,I=1,y=0,S=1):(A=0,b=0,T=1,I=1,y=0,S=1):x<M?(A=0,b=0,T=1,I=0,y=1,S=1):_<M?(A=0,b=1,T=0,I=0,y=1,S=1):(A=0,b=1,T=0,I=1,y=1,S=0);let N=_-A+d,O=x-b+d,W=M-T+d,D=_-I+2*d,H=x-y+2*d,X=M-S+2*d,K=_-1+3*d,Q=x-1+3*d,$=M-1+3*d,ot=h&255,rt=u&255,xt=f&255,j=this.perm[ot+this.perm[rt+this.perm[xt]]]%12,lt=this.perm[ot+A+this.perm[rt+b+this.perm[xt+T]]]%12,St=this.perm[ot+I+this.perm[rt+y+this.perm[xt+S]]]%12,Ct=this.perm[ot+1+this.perm[rt+1+this.perm[xt+1]]]%12,bt=.6-_*_-x*x-M*M;bt<0?i=0:(bt*=bt,i=bt*bt*this.dot3(this.grad3[j],_,x,M));let Nt=.6-N*N-O*O-W*W;Nt<0?r=0:(Nt*=Nt,r=Nt*Nt*this.dot3(this.grad3[lt],N,O,W));let Ot=.6-D*D-H*H-X*X;Ot<0?o=0:(Ot*=Ot,o=Ot*Ot*this.dot3(this.grad3[St],D,H,X));let At=.6-K*K-Q*Q-$*$;return At<0?a=0:(At*=At,a=At*At*this.dot3(this.grad3[Ct],K,Q,$)),32*(i+r+o+a)}noise4d(t,e,n,i){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,f,d,m,g=(t+e+n+i)*l,v=Math.floor(t+g),p=Math.floor(e+g),_=Math.floor(n+g),x=Math.floor(i+g),M=(v+p+_+x)*c,A=v-M,b=p-M,T=_-M,I=x-M,y=t-A,S=e-b,N=n-T,O=i-I,W=y>S?32:0,D=y>N?16:0,H=S>N?8:0,X=y>O?4:0,K=S>O?2:0,Q=N>O?1:0,$=W+D+H+X+K+Q,ot=o[$][0]>=3?1:0,rt=o[$][1]>=3?1:0,xt=o[$][2]>=3?1:0,j=o[$][3]>=3?1:0,lt=o[$][0]>=2?1:0,St=o[$][1]>=2?1:0,Ct=o[$][2]>=2?1:0,bt=o[$][3]>=2?1:0,Nt=o[$][0]>=1?1:0,Ot=o[$][1]>=1?1:0,At=o[$][2]>=1?1:0,zt=o[$][3]>=1?1:0,U=y-ot+c,vt=S-rt+c,tt=N-xt+c,gt=O-j+c,nt=y-lt+2*c,Ut=S-St+2*c,yt=N-Ct+2*c,w=O-bt+2*c,E=y-Nt+3*c,V=S-Ot+3*c,dt=N-At+3*c,ft=O-zt+3*c,ct=y-1+4*c,P=S-1+4*c,L=N-1+4*c,z=O-1+4*c,k=v&255,q=p&255,B=_&255,it=x&255,st=a[k+a[q+a[B+a[it]]]]%32,et=a[k+ot+a[q+rt+a[B+xt+a[it+j]]]]%32,ht=a[k+lt+a[q+St+a[B+Ct+a[it+bt]]]]%32,ut=a[k+Nt+a[q+Ot+a[B+At+a[it+zt]]]]%32,_t=a[k+1+a[q+1+a[B+1+a[it+1]]]]%32,wt=.6-y*y-S*S-N*N-O*O;wt<0?h=0:(wt*=wt,h=wt*wt*this.dot4(r[st],y,S,N,O));let Dt=.6-U*U-vt*vt-tt*tt-gt*gt;Dt<0?u=0:(Dt*=Dt,u=Dt*Dt*this.dot4(r[et],U,vt,tt,gt));let Pt=.6-nt*nt-Ut*Ut-yt*yt-w*w;Pt<0?f=0:(Pt*=Pt,f=Pt*Pt*this.dot4(r[ht],nt,Ut,yt,w));let mt=.6-E*E-V*V-dt*dt-ft*ft;mt<0?d=0:(mt*=mt,d=mt*mt*this.dot4(r[ut],E,V,dt,ft));let F=.6-ct*ct-P*P-L*L-z*z;return F<0?m=0:(F*=F,m=F*F*this.dot4(r[_t],ct,P,L,z)),27*(h+u+f+d+m)}};var xr=class s extends qe{constructor(t,e,n,i,r,o,a){super(),this.width=n!==void 0?n:512,this.height=i!==void 0?i:512,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Xu(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new pe(this.width,this.height,{type:Ie}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new ne({defines:Object.assign({},mr.defines),uniforms:ke.clone(mr.uniforms),vertexShader:mr.vertexShader,fragmentShader:mr.fragmentShader,blending:Pe,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.definesPERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Ho,this.normalMaterial.blending=Pe,this.pdMaterial=new ne({defines:Object.assign({},vr.defines),uniforms:ke.clone(vr.uniforms),vertexShader:vr.vertexShader,fragmentShader:vr.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new ne({defines:Object.assign({},gr.defines),uniforms:ke.clone(gr.uniforms),vertexShader:gr.vertexShader,fragmentShader:gr.fragmentShader,blending:Pe}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new ne({uniforms:ke.clone(wn.uniforms),vertexShader:wn.vertexShader,fragmentShader:wn.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:qo,blendDst:ws,blendEquation:Sn,blendSrcAlpha:Xo,blendDstAlpha:ws,blendEquationAlpha:Sn}),this.blendMaterial=new ne({uniforms:ke.clone(ta.uniforms),vertexShader:ta.vertexShader,fragmentShader:ta.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Jl,blendSrc:qo,blendDst:ws,blendEquation:Sn,blendSrcAlpha:Xo,blendDstAlpha:ws,blendEquationAlpha:Sn}),this.fsQuad=new ln(null),this.originalClearColor=new Lt,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new vs,this.depthTexture.format=pi,this.depthTexture.type=$n,this.normalRenderTarget=new pe(this.width,this.height,{minFilter:we,magFilter:we,type:Ie,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=dc(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case s.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Pe,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Pe,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Pe,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Pe,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case s.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Pe,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(t,e,n,i,r){t.getClearColor(this.originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i!=null&&(t.setClearColor(i),t.setClearAlpha(r||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=a,t.setClearColor(this.originalClearColor),t.setClearAlpha(o)}renderOverride(t,e,n,i,r){t.getClearColor(this.originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i=e.clearColor||i,r=e.clearAlpha||r,i!=null&&(t.setClearColor(i),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this.originalClearColor),t.setClearAlpha(o)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){e.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){let i=e.get(n);n.visible=i}),e.clear()}generateNoise(t=64){let e=new ea,n=t*t*4,i=new Uint8Array(n);for(let o=0;o<t;o++)for(let a=0;a<t;a++){let l=o,c=a;i[(o*t+a)*4]=(e.noise(l,c)*.5+.5)*255,i[(o*t+a)*4+1]=(e.noise(l+t,c)*.5+.5)*255,i[(o*t+a)*4+2]=(e.noise(l,c+t)*.5+.5)*255,i[(o*t+a)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}let r=new xs(i,t,t,gn,Bn);return r.wrapS=cn,r.wrapT=cn,r.needsUpdate=!0,r}};xr.OUTPUT={Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};function Zu(){let s=`
  const vec2 PD[16] = vec2[16]( vec2(-0.94201624,-0.39906216), vec2(0.94558609,-0.76890725), vec2(-0.094184101,-0.92938870), vec2(0.34495938,0.29387760),
    vec2(-0.91588581,0.45771432), vec2(-0.81544232,-0.87912464), vec2(-0.38277543,0.27676845), vec2(0.97484398,0.75648379),
    vec2(0.44323325,-0.97511554), vec2(0.53742981,-0.47373420), vec2(-0.26496911,-0.41893023), vec2(0.79197514,0.19090188),
    vec2(-0.24188840,0.99706507), vec2(-0.81409955,0.91437590), vec2(0.19984126,0.78641367), vec2(0.14383161,-0.14100790) );
  float pcssRand( vec2 co ) { return fract( sin( dot( co, vec2( 12.9898, 78.233 ) ) ) * 43758.5453 ); }
  float PCSS( sampler2D sm, vec3 c ) {
    float ang = pcssRand( gl_FragCoord.xy ) * 6.2831853, sa = sin( ang ), ca = cos( ang ); mat2 R = mat2( ca, sa, -sa, ca );
    float zR = c.z, sum = 0.0, n = 0.0;
    for ( int i = 0; i < 16; i ++ ) { float d = unpackRGBAToDepth( texture2D( sm, c.xy + R * PD[ i ] * 0.0042 ) ); if ( d < zR ) { sum += d; n += 1.0; } }
    if ( n < 0.5 ) return 1.0;
    float pen = clamp( ( zR - sum / n ) * 0.075, 0.0004, 0.0065 ), s = 0.0;
    for ( int i = 0; i < 16; i ++ ) s += step( zR, unpackRGBAToDepth( texture2D( sm, c.xy + R * PD[ i ] * pen ) ) );
    return s / 16.0;
  }
  `,t=Zt.shadowmap_pars_fragment;t=t.replace("#ifdef USE_SHADOWMAP",`#ifdef USE_SHADOWMAP
`+s),t=t.replace("if ( frustumTest ) {",`if ( frustumTest ) {
			return PCSS( shadowMap, shadowCoord.xyz );`),Zt.shadowmap_pars_fragment=t}var pc=class extends qe{constructor(t,e,n){super(),this.scene=t,this.camera=e,this.needsSwap=!1,this.rt=new pe(4,4,{type:Ie,samples:n}),this.fsq=new ln(new ne({uniforms:ke.clone(wn.uniforms),vertexShader:wn.vertexShader,fragmentShader:wn.fragmentShader,depthTest:!1,depthWrite:!1}))}setSize(t,e){this.rt.setSize(t,e)}render(t,e,n){t.shadowMap.needsUpdate=!0,t.setRenderTarget(this.rt),t.clear(),t.render(this.scene,this.camera),this.fsq.material.uniforms.tDiffuse.value=this.rt.texture,t.setRenderTarget(n),this.fsq.render(t)}},mc=class extends qe{constructor(t,e){super(),this.scene=t,this.camera=e,this.needsSwap=!1}render(t,e,n){let i=t.autoClear;t.autoClear=!1,t.setRenderTarget(n),t.render(this.scene,this.camera),t.autoClear=i}},qu={uniforms:{tDepth:{value:null},tShadow:{value:null},shadowMatrix:{value:new qt},projInv:{value:new qt},camWorld:{value:new qt},camPos:{value:new C},sunDir:{value:new C},sunCol:{value:new Lt(1,.72,.42)},time:{value:0},strength:{value:.8},maxDist:{value:75}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform sampler2D tDepth, tShadow; uniform mat4 shadowMatrix, projInv, camWorld; uniform vec3 camPos, sunDir, sunCol; uniform float time, strength, maxDist; varying vec2 vUv;
    float unpackD(vec4 v){ return dot(v, vec4(1./16777216., 1./65536., 1./256., 1.)*(255./256.)); }
    float ign(vec2 p){ return fract(52.9829189*fract(dot(p, vec2(0.06711056,0.00583715)))); }
    float hg(float c, float g){ float g2=g*g; return (1.-g2)/pow(1.+g2-2.*g*c, 1.5); }
    void main(){
      float d=texture2D(tDepth,vUv).x;
      vec4 v=projInv*vec4(vUv*2.-1., d*2.-1., 1.); v/=v.w; vec3 wp=(camWorld*v).xyz;
      vec3 rd=wp-camPos; float dist=length(rd); rd/=dist; float tMax=min(dist, maxDist);
      const int N=28; float j=ign(gl_FragCoord.xy+fract(time)*37.), acc=0.;
      for(int i=0;i<N;i++){
        float t=(float(i)+j)/float(N); t=t*t*tMax; // \u8FD1\u5904\u91C7\u6837\u66F4\u5BC6\uFF1A\u773C\u524D\u7684\u5149\u67F1\u6700\u6E05\u695A
        vec3 p=camPos+rd*t; vec4 sc=shadowMatrix*vec4(p,1.); sc.xyz/=sc.w;
        float lit=1.;
        if(sc.x>0.&&sc.x<1.&&sc.y>0.&&sc.y<1.&&sc.z<1.) lit=step(sc.z-0.0015, unpackD(texture2D(tShadow,sc.xy)));
        float w=(2.*(float(i)+.5)/float(N))*exp(-max(p.y,0.)*0.045)*exp(-t*0.012);
        acc+=lit*w;
      }
      acc/=float(N);
      float c=dot(rd,sunDir); float ph=min(mix(hg(c,.18), hg(c,.66), .42)*.5, 1.5);
      float amt=1.-exp(-tMax*0.022);
      gl_FragColor=vec4(sunCol*acc*ph*amt*strength, 1.);
    }`},Yu={uniforms:{tDiffuse:{value:null},tVol:{value:null},px:{value:new at(1,1)}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform sampler2D tDiffuse, tVol; uniform vec2 px; varying vec2 vUv;
    void main(){ vec3 v=vec3(0.); float w=0.;
      for(int x=-2;x<=2;x++) for(int y=-2;y<=2;y++){ float k=exp(-float(x*x+y*y)*.28); v+=texture2D(tVol,vUv+vec2(float(x),float(y))*px*1.5).rgb*k; w+=k; }
      gl_FragColor=vec4(texture2D(tDiffuse,vUv).rgb+v/w,1.); }`},gc=class extends qe{constructor(t,e,n){super(),this.camera=t,this.sun=e,this.getDepth=n,this.rt=new pe(4,4,{type:Ie}),this.mat=new ne({...qu,uniforms:ke.clone(qu.uniforms),depthTest:!1,depthWrite:!1}),this.comp=new ne({...Yu,uniforms:ke.clone(Yu.uniforms),depthTest:!1,depthWrite:!1}),this.fsq=new ln(this.mat)}setSize(t,e){this.rt.setSize(Math.max(2,t>>1),Math.max(2,e>>1)),this.comp.uniforms.px.value.set(2/t,2/e)}render(t,e,n){let i=this.mat.uniforms,r=this.sun.shadow.map,o=this.getDepth();(!r||!o)&&(this.fsq.material=this.comp,this.comp.uniforms.tDiffuse.value=n.texture,this.comp.uniforms.tVol.value=null),i.tDepth.value=o,i.tShadow.value=r?r.texture:null,i.shadowMatrix.value.copy(this.sun.shadow.matrix),i.projInv.value.copy(this.camera.projectionMatrixInverse),i.camWorld.value.copy(this.camera.matrixWorld),this.camera.getWorldPosition(i.camPos.value),r&&o&&(this.fsq.material=this.mat,t.setRenderTarget(this.rt),this.fsq.render(t)),this.fsq.material=this.comp,this.comp.uniforms.tDiffuse.value=n.texture,this.comp.uniforms.tVol.value=r&&o?this.rt.texture:null,t.setRenderTarget(this.renderToScreen?null:e),this.fsq.render(t)}},mx={uniforms:{tDiffuse:{value:null},sunPos:{value:new at(.5,.5)},strength:{value:0},time:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 sunPos; uniform float strength, time; varying vec2 vUv;
    float hash(vec2 p){ return fract(sin(dot(p,vec2(12.9898,78.233))+time)*43758.5453); }
    void main(){
      vec4 base=texture2D(tDiffuse,vUv);
      if(strength<=0.001){ gl_FragColor=base; return; }
      const int N=24; vec2 stp=(sunPos-vUv)/float(N)*0.92; vec2 uv=vUv+stp*hash(vUv*913.); vec3 acc=vec3(0.); float w=1.;
      for(int i=0;i<N;i++){ uv+=stp; vec3 s=texture2D(tDiffuse,clamp(uv,0.001,0.999)).rgb; float l=max(s.r,max(s.g,s.b)); acc+=min(s,vec3(8.))*smoothstep(1.6,3.2,l)*w; w*=0.95; }
      gl_FragColor=vec4(base.rgb+acc/float(N)*strength,1.);
    }`},gx={uniforms:{tDiffuse:{value:null},vel:{value:new at(0,0)}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 vel; varying vec2 vUv;
    void main(){ vec3 c=vec3(0.); float w=0.; vec2 c0=vUv-.5; float edge=.35+dot(c0,c0)*2.6;
      for(int i=0;i<9;i++){ float t=float(i)/8.-.5; float k=1.-abs(t)*.8; c+=texture2D(tDiffuse,clamp(vUv+vel*t*edge,0.001,0.999)).rgb*k; w+=k; }
      gl_FragColor=vec4(c/w,1.); }`},vx={uniforms:{tDiffuse:{value:null},time:{value:0},hurt:{value:0},lowHp:{value:0},res:{value:new at(1,1)},sharp:{value:.35}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float time, hurt, lowHp, sharp; uniform vec2 res; varying vec2 vUv;
    float hash(vec2 p){ return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453); }
    void main(){
      vec2 c=vUv-.5; float r2=dot(c,c);
      vec3 col; col.r=texture2D(tDiffuse,vUv+c*r2*0.010).r; col.g=texture2D(tDiffuse,vUv).g; col.b=texture2D(tDiffuse,vUv-c*r2*0.010).b;
      // \u8F7B\u5EA6\u9510\u5316\uFF08\u53CD\u906E\u7F69\uFF09
      vec2 px=1./res; vec3 bl=(texture2D(tDiffuse,vUv+vec2(px.x,0.)).rgb+texture2D(tDiffuse,vUv-vec2(px.x,0.)).rgb+texture2D(tDiffuse,vUv+vec2(0.,px.y)).rgb+texture2D(tDiffuse,vUv-vec2(0.,px.y)).rgb)*.25;
      col+=clamp(col-bl,-.08,.08)*sharp;
      float l=dot(col,vec3(.299,.587,.114));
      col=mix(vec3(l),col,0.86-lowHp*.5);
      col=clamp(col,0.,1.); col=col*col*(3.-2.*col)*.55+col*.45;
      col=(col-.5)*1.06+.5;
      col+=mix(vec3(-.012,.006,.02),vec3(.022,.01,-.018),smoothstep(.15,.85,l));
      col*=1.-smoothstep(.16,.95,r2*2.1)*.5;
      col=mix(col,vec3(.55,.0,.0)+col*.35,clamp(hurt,0.,1.)*smoothstep(.05,.5,r2*1.8));
      col+=(hash(vUv*res+fract(time)*61.)-.5)*.05;
      gl_FragColor=vec4(col,1.);
    }`};function $u(s,t,e){let n=new pe(4,4,{type:Ie}),i=new Re,r=new qt,o=new Dn(new C(0,1,0),-.03),a=new C,l=new qt,c=new C,h=new C,u=new C(0,1,0);return{texture:n.texture,matrix:r,enabled:!0,setSize(f,d){n.setSize(Math.max(2,f>>1),Math.max(2,d>>1))},render(f=[]){if(!this.enabled||(a.setFromMatrixPosition(e.matrixWorld),a.y<.05))return;l.extractRotation(e.matrixWorld),c.set(0,0,-1).applyMatrix4(l).add(a),c.y=-c.y,h.set(0,1,0).applyMatrix4(l).reflect(u),i.position.set(a.x,-a.y,a.z),i.up.copy(h),i.lookAt(c),i.near=e.near,i.far=e.far,i.updateMatrixWorld(),i.projectionMatrix.copy(e.projectionMatrix),i.projectionMatrixInverse.copy(e.projectionMatrixInverse),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1).multiply(i.projectionMatrix).multiply(i.matrixWorldInverse);let d=f.map(v=>v.visible);f.forEach(v=>{v.visible=!1});let m=s.clippingPlanes,g=s.getRenderTarget();s.clippingPlanes=[o],s.setRenderTarget(n),s.clear(),s.render(t,i),s.clippingPlanes=m,s.setRenderTarget(g),f.forEach((v,p)=>{v.visible=d[p]})}}}function Ku(s,t,e,n,i,r={}){let o=new jo(s,new pe(4,4,{type:Ie})),a=new pc(t,e,r.samples??4),l=new xr(t,e,4,4);l.updateGtaoMaterial({radius:.55,distanceExponent:1.4,thickness:1.2,scale:1.25,samples:12}),l.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),l.blendIntensity=1,l.overrideVisibility=function(){let v=this._visibilityCache;this.scene.traverse(p=>{v.set(p,p.visible),(p.isPoints||p.isLine||p.isSprite||p.userData.noAO||p.material&&p.material.transparent)&&(p.visible=!1)})};let c=new gc(e,n,()=>l.enabled?l.depthTexture:null),h=new vi(mx),u=new vi(gx),f=new mc(i.scene,i.camera),d=new Rs(new at(4,4),.5,.8,1.05),m=new vi(vx);for(let v of[a,l,c,h,u,f,d,new Qo,m])o.addPass(v);let g=new C;return{composer:o,gtao:l,vol:c,rays:h,bloom:d,grade:m,over:f,setSize(v,p){o.setSize(v,p),m.uniforms.res.value.set(v,p)},setQuality(v){l.enabled=v>=2,c.enabled=v>=2,h.enabled=v===1,u.enabled=v>=1,d.enabled=!0,m.uniforms.sharp.value=v>=1?.35:0},setMotion(v,p,_,x){let M=un.degToRad(_.fov),A=.011,b=x?un.clamp(v*A/(M*_.aspect),-.05,.05):0,T=x?un.clamp(-p*A/M,-.05,.05):0;u.uniforms.vel.value.set(b,T)},update(v,p){m.uniforms.time.value=v,h.uniforms.time.value=v%10,c.mat.uniforms.time.value=v%10,c.mat.uniforms.sunDir.value.copy(p),g.copy(p).transformDirection(e.matrixWorldInverse);let _=g.z<-.05?1:0;g.copy(e.position).addScaledVector(p,1e3).project(e);let x=g.x*.5+.5,M=g.y*.5+.5,A=Math.max(Math.abs(x-.5),Math.abs(M-.5));h.uniforms.sunPos.value.set(x,M),h.uniforms.strength.value=_*un.clamp(1.7-A*1.7,0,1)*.7},render(){o.render()}}}function ju(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new ce,c=0;for(let h=0;h<s.length;++h){let u=s[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,u=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let m=0;m<d.count;++m)u.push(d.getX(m)+h);h+=s[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Ju(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let g=0;g<o[h].length;++g)d.push(o[h][g][f]);let m=Ju(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function Ju(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let o=new t(r),a=0;for(let c=0;c<s.length;++c)o.set(s[c].array,a),a+=s[c].array.length;let l=new Le(o,e,n);return i!==void 0&&(l.gpuType=i),l}var Qu=new C(0,1,0),xx=new C(1,1,1),tf=new qt,_x=new hn,yx=new ds,na=new C;function Mx(s,t,e,n,i){let r=s.attributes.uv,o=[[n,e],[n,e],[t,n],[t,n],[t,e],[t,e]];for(let a=0;a<6;a++)for(let l=0;l<4;l++){let c=a*4+l;r.setXY(c,r.getX(c)*o[a][0]/i,r.getY(c)*o[a][1]/i)}}function ei(s,t,e=t){let n=s.attributes.uv;for(let i=0;i<n.count;i++)n.setXY(i,n.getX(i)*t,n.getY(i)*e)}var _r=class{constructor(t){this.scene=t,this.batches=new Map,this.colliders=[],this.M=new qt,this.stack=[]}push(t,e,n,i=0){this.stack.push(this.M.clone()),this.M.multiply(new qt().compose(new C(t,e,n),new hn().setFromAxisAngle(Qu,i),xx))}pop(){this.M=this.stack.pop()}add(t,e,n=0,i=0,r=0,o=0,a=0,l=0,c=1,h=1,u=1){let f=e.index?e.toNonIndexed():e;for(let d of Object.keys(f.attributes))d!=="position"&&d!=="normal"&&d!=="uv"&&f.deleteAttribute(d);tf.compose(na.set(n,i,r),_x.setFromEuler(yx.set(o,a,l,"YXZ")),new C(c,h,u)),f.applyMatrix4(new qt().multiplyMatrices(this.M,tf)),this.batches.has(t)||this.batches.set(t,[]),this.batches.get(t).push(f)}box(t,e,n,i,r,o,a,l={}){let c=new Qe(e,n,i),h=l.uv??t.userData.uv;h&&Mx(c,e,n,i,h),this.add(t,c,r,o+n/2,a,0,l.ry||0,0)}cbox(t,e,n,i,r,o,a,l={}){return this.box(t,e,n,i,r,o,a,l),this.col(e,n,i,r,o,a,l)}col(t,e,n,i,r,o,a={}){let l=new C(1/0,1/0,1/0),c=new C(-1/0,-1/0,-1/0);for(let u=0;u<8;u++)na.set(i+(u&1?t/2:-t/2),r+(u&2?e:0),o+(u&4?n/2:-n/2)).applyMatrix4(this.M),l.min(na),c.max(na);let h={min:l,max:c};for(let u of["bounce","tag","safe"])a[u]!==void 0&&(h[u]=a[u]);return this.colliders.push(h),h}cyl(t,e,n,i,r,o,a,l=10,c={}){let h=new Un(e,n,i,l,1,!!c.open);t.userData.uv&&ei(h,6.283*Math.max(e,n)/t.userData.uv,i/t.userData.uv),this.add(t,h,r,o+i/2,a,c.rx||0,c.ry||0,c.rz||0)}sph(t,e,n,i,r,o=1,a=1,l=1,c=1){let h=new Ss(e,c);t.userData.uv&&ei(h,6.283*e*Math.max(o,l)/t.userData.uv,3.1416*e*a/t.userData.uv),this.add(t,h,n,i,r,0,0,0,o,a,l)}plane(t,e,n,i,r,o,a=0,l=0,c=!1){let h=new Ee(e,n);if(c){let u=h.attributes.uv;for(let f=0;f<u.count;f++)u.setX(f,1-u.getX(f))}this.add(t,h,i,r,o,l,a,0)}blob(t,e,n,i,r,o=1,a=1,l=1,c=.2,h=0){let u=new bs(e,22,14),f=u.attributes.position;for(let d=0;d<f.count;d++){let m=f.getX(d),g=f.getY(d),v=f.getZ(d),p=Math.sin(m*1.7+h)*Math.sin(g*2.1+h*1.3)*Math.sin(v*1.9-h)+.5*Math.sin(m*3.9-h)*Math.sin(v*4.3+g*3.1),_=1+c*p;f.setXYZ(d,m*_,g*_,v*_)}u.computeVertexNormals(),t.userData.uv&&ei(u,6.283*e*Math.max(o,l)/t.userData.uv,3.1416*e*a/t.userData.uv),this.add(t,u,n,i,r,0,h,0,o,a,l)}rod(t,e,n,i,r=6){let o=new C().subVectors(i,n),a=o.length(),l=new Un(e,e,a,r),c=new hn().setFromUnitVectors(Qu,o.normalize());l.applyQuaternion(c),this.add(t,l,(n.x+i.x)/2,(n.y+i.y)/2,(n.z+i.z)/2)}finish(){for(let[t,e]of this.batches){let n=ju(e,!1),i=new Jt(n,t);i.castShadow=!t.userData.noCast,i.receiveShadow=!t.userData.noRecv,i.matrixAutoUpdate=!1,this.scene.add(i),e.forEach(r=>r.dispose())}this.batches.clear()}};var ia=20261111;function ef(s){ia=s>>>0}function Ne(){return ia=ia*1664525+1013904223>>>0,ia/4294967296}var It=(s,t)=>s+(t-s)*Ne(),vc=s=>s[Math.floor(Ne()*s.length)],xc='"KaiTi","STKaiti","\u6977\u4F53","Microsoft YaHei","PingFang SC",serif';function sa(s,t){let e=document.createElement("canvas");return e.width=Math.max(2,Math.round(s)),e.height=Math.max(2,Math.round(t)),e}function ra(s,t=!1){let e=new an(s);return e.colorSpace=oe,t&&(e.wrapS=e.wrapT=cn),e.anisotropy=8,e}function Sx(s,t,e,n,i){for(let r=0;r<n;r++)s.fillStyle=Ne()<.5?`rgba(0,0,0,${i*Ne()})`:`rgba(255,255,255,${i*Ne()})`,s.fillRect(Ne()*t,Ne()*e,1+Ne()*2,1+Ne()*2)}function yr(s,t={}){let e=t.vertical,n=[...s].length,i=e?128:128*n+60,r=e?128*n+40:168,o=sa(i,r),a=o.getContext("2d");if(a.fillStyle=t.bg||"#8a1f1a",a.fillRect(0,0,i,r),a.strokeStyle=t.border||"#f0c14b",a.lineWidth=8,a.strokeRect(8,8,i-16,r-16),a.fillStyle=t.fg||"#ffd866",a.font=`bold 104px ${xc}`,a.textAlign="center",a.textBaseline="middle",[...s].forEach((l,c)=>{e?a.fillText(l,i/2,84+c*128):a.fillText(l,94+c*128,r/2+4)}),t.worn){for(let c=0;c<60;c++)a.fillStyle=`rgba(20,14,10,${It(.04,.16)})`,a.beginPath(),a.ellipse(It(0,i),It(0,r),It(6,46),It(4,26),Ne()*3,0,7),a.fill();for(let c=0;c<40;c++)a.fillStyle=`rgba(200,190,170,${It(.03,.1)})`,a.fillRect(It(0,i),It(0,r),It(1,3),It(10,60));let l=a.createLinearGradient(0,0,0,r);l.addColorStop(0,"rgba(0,0,0,0.28)"),l.addColorStop(.3,"rgba(0,0,0,0)"),l.addColorStop(1,"rgba(0,0,0,0.18)"),a.fillStyle=l,a.fillRect(0,0,i,r),Sx(a,i,r,900,.12)}return ra(o)}function nf(){let s=sa(256,256),t=s.getContext("2d");for(let n=0;n<46;n++){let i=It(40,216),r=It(40,216),o=Ne()*6.28,a=It(26,44),l=a*It(.36,.5);t.save(),t.translate(i,r),t.rotate(o);let c=t.createLinearGradient(-a,0,a,0),h=It(22,40),u=It(88,118);c.addColorStop(0,`hsl(${u},${It(40,60)}%,${h}%)`),c.addColorStop(1,`hsl(${u-12},${It(45,65)}%,${h+12}%)`),t.fillStyle=c,t.beginPath(),t.ellipse(0,0,a,l,0,0,7),t.fill(),t.strokeStyle="rgba(210,230,150,0.35)",t.lineWidth=1.5,t.beginPath(),t.moveTo(-a,0),t.lineTo(a,0),t.stroke(),t.restore()}return ra(s)}function sf(s,t="#2a130c"){let e=[...s].length,n=sa(140*e+40,180),i=n.getContext("2d");i.fillStyle=t,i.font=`bold 128px ${xc}`,i.textAlign="center",i.textBaseline="middle",i.shadowColor="rgba(255,255,255,0.25)",i.shadowOffsetY=2,i.shadowBlur=1,[...s].forEach((r,o)=>i.fillText(r,90+o*140,94)),i.globalCompositeOperation="destination-out";for(let r=0;r<260;r++)i.fillStyle=`rgba(0,0,0,${It(.2,.7)})`,i.fillRect(It(0,n.width),It(0,180),It(1,5),It(1,5));return ra(n)}function rf(s,t="#ff5a3c",e=!0){let n=[...s].length,i=e?128:120*n+40,r=e?120*n+40:150,o=sa(i,r),a=o.getContext("2d");return a.fillStyle="#14100e",a.fillRect(0,0,i,r),a.strokeStyle=t,a.lineWidth=5,a.shadowColor=t,a.shadowBlur=16,a.strokeRect(9,9,i-18,r-18),a.fillStyle="#fff4e8",a.font=`bold 96px ${xc}`,a.textAlign="center",a.textBaseline="middle",a.shadowBlur=22,[...s].forEach((l,c)=>{e?a.fillText(l,i/2,80+c*120):a.fillText(l,80+c*120,r/2+4)}),ra(o)}var Yt=(s,t,e)=>new C(s,t,e),de=Math.PI,xi=Yt(-.8,.3,-.42).normalize();function of(s,t,e,n,i){let r=[[-s/2,0,-t/2],[s/2,0,-t/2],[s/2,0,t/2],[-s/2,0,t/2]],o=[[-n/2,e,-i/2],[n/2,e,-i/2],[n/2,e,i/2],[-n/2,e,i/2]],a=[],l=[],c=2.5;for(let u=0;u<4;u++){let f=(u+1)%4,d=(u%2?t:s)/c,m=Math.hypot(e,(u%2?s-n:t-i)/2)/c;a.push(...r[f],...r[u],...o[u],...r[f],...o[u],...o[f]),l.push(0,0,d,0,d,m,0,0,d,m,0,m)}a.push(...o[0],...o[3],...o[2],...o[0],...o[2],...o[1]),l.push(0,0,0,1,1,1,0,0,1,1,1,0);let h=new ce;return h.setAttribute("position",new Wt(a,3)),h.setAttribute("uv",new Wt(l,2)),h.computeVertexNormals(),h}var oa=(s,t,e)=>e.map(([n,i,r,o,a])=>[n/s,i/t,r/s,o/t,a]),af={A:oa(1448,1086,[[197,78,409,398,.24],[618,78,832,398,.24],[1042,78,1256,398,.24],[197,645,411,1e3,.24],[618,645,834,1e3,.24],[1042,645,1256,1e3,.24],[0,538,1448,600,-.24],[460,245,578,340,-.34],[880,845,998,935,-.34],[8,0,94,1086,-.1],[1354,0,1440,1086,-.1]]),B:oa(1448,1086,[[128,150,344,440,.2],[455,150,668,440,.2],[792,150,1006,440,.2],[1118,150,1334,440,.2],[128,660,344,950,.2],[455,660,668,950,.2],[792,660,1006,950,.2],[1118,660,1334,950,.2],[60,516,1400,550,-.3],[112,440,1350,462,-.1],[112,950,1350,972,-.1]]),C:oa(1448,1086,[[203,125,437,384,.22],[622,125,853,384,.22],[1030,125,1262,384,.22],[198,660,432,914,.22],[618,660,850,914,.22],[1030,660,1264,914,.22],[137,384,497,532,-.5],[552,384,912,532,-.5],[968,384,1330,532,-.5],[137,914,497,1037,-.5],[552,914,912,1037,-.5],[968,914,1330,1037,-.5]]),tea:oa(1536,614,[[68,55,375,190,.18],[412,55,748,190,.18],[790,55,1130,190,.18],[1168,55,1468,190,.18],[72,335,328,495,.18],[362,335,592,495,.18],[945,335,1175,495,.18],[1212,335,1468,495,.18],[630,335,905,605,.3]])};function Ex(s,t,e,n){let i=new Set([0,1]),r=new Set([0,1]),o=e.filter(_=>_[4]>0),a=e.filter(_=>_[4]<0);for(let _ of o)i.add(_[0]),i.add(_[2]),r.add(_[1]),r.add(_[3]);let l=[...i].sort((_,x)=>_-x),c=[...r].sort((_,x)=>_-x),h={wall:{p:[],t:[]},win:{p:[],t:[]},side:{p:[],t:[]}},u=_=>(_-.5)*s*(n?-1:1),f=_=>(1-_)*t,d=(_,x,M,A,b,T,I,y,S)=>{let N=n?[x,A,M,x,b,A]:[x,M,A,x,A,b],O=n?[T,y,I,T,S,y]:[T,I,y,T,y,S];for(let W=0;W<6;W++)_.p.push(...N[W]),_.t.push(...O[W])},m=(_,x,M,A,b,T)=>d(_,[u(x),f(b),T],[u(A),f(b),T],[u(A),f(M),T],[u(x),f(M),T],[x,1-b],[A,1-b],[A,1-M],[x,1-M]);for(let _=0;_<l.length-1;_++)for(let x=0;x<c.length-1;x++){let M=(l[_]+l[_+1])/2,A=(c[x]+c[x+1])/2;o.some(b=>M>b[0]&&M<b[2]&&A>b[1]&&A<b[3])||m(h.wall,l[_],c[x],l[_+1],c[x+1],0)}let g=3,v=(_,x,M,A,b,T,I)=>{let y=u(_),S=u(M),N=f(A),O=f(x),W=Math.abs(T-b)/g,D=(O-N)/g,H=Math.abs(S-y)/g,X=(K,Q,$,ot,rt,xt)=>I?d(h.side,ot,$,Q,K,[0,xt],[rt,xt],[rt,0],[0,0]):d(h.side,K,Q,$,ot,[0,0],[rt,0],[rt,xt],[0,xt]);X([y,N,b],[y,N,T],[y,O,T],[y,O,b],W,D),X([S,N,T],[S,N,b],[S,O,b],[S,O,T],W,D),X([y,O,T],[S,O,T],[S,O,b],[y,O,b],H,W),X([y,N,b],[S,N,b],[S,N,T],[y,N,T],H,W)};for(let[_,x,M,A,b]of o)m(h.win,_,x,M,A,-b),v(_,x,M,A,0,-b,!1);for(let[_,x,M,A,b]of a)m(h.wall,_,x,M,A,-b),v(_,x,M,A,0,-b,!1);let p=_=>{let x=new ce;return x.setAttribute("position",new Wt(_.p,3)),x.setAttribute("uv",new Wt(_.t,2)),x.computeVertexNormals(),x};return{wall:p(h.wall),win:h.win.p.length?p(h.win):null,side:h.side.p.length?p(h.side):null}}function Tx(s,t,e,n,i){let r=Math.round(i*e/t),o=document.createElement("canvas");o.width=i,o.height=r;let a=o.getContext("2d");a.drawImage(s,0,0,i,r);let l=a.getImageData(0,0,i,r).data,c=(x,M)=>x>=0&&M>=0&&x<i&&M<r&&l[(M*i+x)*4+3]>70,h={p:[],t:[]},u={p:[],t:[]},f=t/i,d=e/r,m=n/2,g=x=>-t/2+x*f,v=x=>e-x*d,p=(x,M,A,b,T,I,y,S,N)=>{x.p.push(...M,...A,...b,...M,...b,...T),x.t.push(...I,...y,...S,...I,...S,...N)};for(let x=0;x<r;x++){let M=0;for(;M<i;){if(!c(M,x)){M++;continue}let A=M;for(;A<i&&c(A,x);)A++;let b=g(M),T=g(A),I=v(x+1),y=v(x),S=M/i,N=A/i,O=1-(x+1)/r,W=1-x/r;p(h,[b,I,m],[T,I,m],[T,y,m],[b,y,m],[S,O],[N,O],[N,W],[S,W]),p(h,[T,I,-m],[b,I,-m],[b,y,-m],[T,y,-m],[N,O],[S,O],[S,W],[N,W]),M=A}}for(let x=0;x<r;x++)for(let M=0;M<i;M++){if(!c(M,x))continue;let A=g(M),b=g(M+1),T=v(x+1),I=v(x),y=[(M+.5)/i,1-(x+.5)/r];c(M-1,x)||p(u,[A,T,-m],[A,T,m],[A,I,m],[A,I,-m],y,y,y,y),c(M+1,x)||p(u,[b,T,m],[b,T,-m],[b,I,-m],[b,I,m],y,y,y,y),c(M,x-1)||p(u,[A,I,m],[b,I,m],[b,I,-m],[A,I,-m],y,y,y,y),c(M,x+1)||p(u,[A,T,-m],[b,T,-m],[b,T,m],[A,T,m],y,y,y,y)}let _=x=>{let M=new ce;return M.setAttribute("position",new Wt(x.p,3)),M.setAttribute("uv",new Wt(x.t,2)),M.computeVertexNormals(),M};return{face:_(h),side:_(u)}}function lf(s,t,e,n={}){ef(4242);let i=new _r(s),r=e.horizon,o=(P,L={})=>new ae({color:P,roughness:.8,metalness:0,...L}),a=(P,L,z={},k={})=>{let q=new ae({...t.pbr(P,z),roughness:1,metalness:0,...k});return q.userData.uv=L,q},l=t.pbr("plaster",{normal:1.6,rough:.9,roughK:.3}),c=new Map,h=P=>{if(!c.has(P)){let L=new ae({...l,color:P,roughness:1});L.userData.uv=4,c.set(P,L)}return c.get(P)},u=(P,L={})=>new ae({map:P,roughness:.8,...L}),f=(P,L=1.4,z={})=>new ae({map:P,emissiveMap:P,emissive:"#ffffff",emissiveIntensity:L,roughness:.6,...z}),d=t.has("lacquer")?"lacquer":"wood",m=(P,L={})=>a("rustmetal",1.5,{normal:2,rough:.5,roughK:.5},{color:P,metalness:.6,...L}),g={paving:a("paving",3.2,{normal:2.4,rough:.78,roughK:.5}),stone:h("#a39a8a"),stoneDark:h("#756f65"),trim:h("#c9c1b2"),concrete:a("concrete",3,{normal:2.4,rough:.9,roughK:.3}),arcade:a("concrete",2.2,{normal:2,rough:.7,roughK:.4},{color:"#b5aea2"}),wood:a("wood",2,{normal:2.2,rough:.6,roughK:.4,desat:.35},{color:"#cfc2b4"}),woodDark:a("wood",2,{normal:2.2,rough:.6,roughK:.4},{color:"#7d6a60"}),red:a(d,1.6,{normal:2.2,rough:.45,roughK:.5},t.has("lacquer")?{}:{color:"#a8483c"}),redDark:a(d,1.6,{normal:2.2,rough:.5,roughK:.5},{color:t.has("lacquer")?"#9a8a84":"#7a3a30"}),gold:m("#c9a24a",{metalness:.85}),tileGreen:a("rooftile",2.4,{normal:3,rough:.34,roughK:.5}),tileGray:a("rooftile",2.4,{normal:3,rough:.7,roughK:.4,desat:1,gain:.85},{color:"#9aa3a6"}),brick:a("brick",2.6,{normal:2.2,rough:.9,roughK:.3}),roofFloor:h("#6a5a52"),bark:a("bark",2.2,{normal:3,rough:.95,roughK:.3}),foliage:a("foliage",5,{normal:2.4,rough:.6,roughK:.5},{color:"#8f9c80"}),lantern:o("#a8281a",{emissive:"#ff4a1c",emissiveIntensity:.9,roughness:.6}),bulb:o("#fff0cf",{emissive:"#ffd9a0",emissiveIntensity:1.5}),rope:o("#1c1a18"),iron:m("#4a4d50"),steel:m("#b0b4b6",{metalness:.75}),land:h("#6f705f"),sandbag:a("sandbags",1.7,{normal:3.2,rough:.92,roughK:.3}),drumRed:a("container",1.6,{normal:1.2,rough:.55,roughK:.5},{color:"#b05a4a",metalness:.3}),drumBlue:a("container",1.6,{normal:1.2,rough:.55,roughK:.5},{color:"#5f7f9c",metalness:.3}),crate:new ae({...t.pbr("crate",{repeat:!1,size:512,normal:2.6,rough:.82,roughK:.3}),roughness:1}),balu:t.has("balustrade")?(()=>{let P=a("balustrade",.85,{repeat:!0,size:1024,normal:2.6,rough:.85,roughK:.3});for(let L of["map","normalMap","roughnessMap"])P[L].repeat.set(.5,1);return P})():null,cont:["#c9cdd0","#a8665a","#6a86a0","#84987e"].map(P=>a("container",2.6,{normal:1.6,rough:.62,roughK:.5},{color:P,metalness:.25}))};g.rope.userData.noRecv=!0,g.balu||(g.balu=g.stoneDark);let v={tRefl:{value:null},reflMatrix:{value:new qt},reflOn:{value:0}};g.paving.onBeforeCompile=P=>{Object.assign(P.uniforms,v),P.vertexShader=P.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWp;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWp=(modelMatrix*vec4(transformed,1.)).xyz;`),P.fragmentShader=P.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vWp; float pud; uniform sampler2D tRefl; uniform mat4 reflMatrix; uniform float reflOn;
        float hsh(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }
        float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f); return mix(mix(hsh(i),hsh(i+vec2(1,0)),f.x),mix(hsh(i+vec2(0,1)),hsh(i+vec2(1,1)),f.x),f.y); }`).replace("#include <color_fragment>",`#include <color_fragment>
        pud=smoothstep(.56,.68, vn(vWp.xz*.16)*.65+vn(vWp.xz*.45+7.)*.35) * step(vWp.y, 0.05) * step(-0.05, vWp.y);
        float dirt=vn(vWp.xz*.07+3.)*.6+vn(vWp.xz*.31)*.4;
        diffuseColor.rgb*=mix(1.,.42,pud)*mix(.72,1.08,smoothstep(.25,.75,dirt));`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor=mix(roughnessFactor,.035,pud);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
normal=normalize(mix(normal,normalize(vNormal),pud*.96));`).replace("#include <opaque_fragment>",`if(reflOn>.5 && pud>.01){ vec4 rc=reflMatrix*vec4(vWp.x,0.,vWp.z,1.); vec2 ruv=clamp(rc.xy/rc.w,.002,.998);
          vec3 rcol=texture2D(tRefl,ruv).rgb; float fr=.3+.7*pow(1.-clamp(dot(normalize(vViewPosition),normal),0.,1.),3.); outgoingLight=mix(outgoingLight,rcol,pud*fr*.88); }
        #include <opaque_fragment>`)};let p=(P,L,z,k)=>i.cbox(g.paving,P,3,L,z,-3,k);p(48,29.5,-16,19.25),p(32,20,24,24),p(48,29.5,-16,-19.25),p(32,20,24,-24);for(let P of[1,-1]){i.box(g.stone,48,.12,.6,-16,0,P*4.8),i.box(g.stone,.6,.12,9.5,8.3,0,P*9.25),i.box(g.stone,32,.12,.6,24,0,P*14.3);for(let L=-38;L<8;L+=5)i.cbox(g.stoneDark,.4,.75,.4,L,0,P*4.8),i.box(g.stone,.48,.1,.48,L,.75,P*4.8);for(let L=10;L<40;L+=5)i.cbox(g.stoneDark,.4,.75,.4,L,0,P*14.3),i.box(g.stone,.48,.1,.48,L,.75,P*14.3)}i.col(1,70,72,-40.5,-5,0),i.col(1,70,72,40.5,-5,0),i.col(84,70,1,0,-5,-34.5),i.col(84,70,1,0,-5,34.5);for(let P of[1,-1])i.box(g.balu,.3,.95,20,39.6,0,P*24),i.box(g.stoneDark,.44,.1,20,39.6,.95,P*24);i.box(g.land,560,3,1200,-320.2,-3.05,0),i.box(g.land,80.4,3,566,-.2,-3.05,317.2),i.box(g.land,80.4,3,566,-.2,-3.05,-317.2),i.box(g.land,700,3,1600,760,-3.2,0),i.box(g.brick,1.2,4.5,9.6,-40.2,-1.5,0),i.box(g.balu,.3,.9,9.6,-39.8,3,0),i.cbox(g.brick,.6,4,13.5,-39.7,0,-11.25),i.cbox(g.brick,2.4,5,.6,11,0,-33.7),i.cbox(g.brick,10,3,.6,35,0,33.7);{let P=[.35,.7,1,1.25,1.4,1.4,1.25,1,.7,.35];for(let L=0;L<10;L++){let z=-5.4+L*1.2,k=P[L],B=L<2||L>7?-2.6:k-.55-(L===2||L===7?.5:0);i.cbox(g.concrete,4,k-B,1.2,-13,B,z),i.box(g.paving,3.4,.04,1.2,-13,k,z);for(let it of[-1.85,1.85])i.cbox(g.balu,.26,.85,1.2,-13+it,k,z)}for(let L of[-1.85,1.85])for(let z of[-6.2,6.2])i.cbox(g.stone,.45,1.3,.45,-13+L,0,z),i.box(g.stoneDark,.55,.12,.55,-13+L,1.3,z)}let _={},x={};for(let P of["A","B","C"])_[P]=t.pbr("facade"+P,{repeat:!1,size:1024,normal:1.8,rough:.82,roughK:.3});for(let P of["A","B","C"])x[P]=t.pbr("shop"+(P==="C"&&!t.has("shopC")?"B":P),{repeat:!1,size:1024,normal:1.6,rough:.7,roughK:.4});let M=h("#8f887c");function A(P,L,z,k,q,B,it,st,et={}){let ht=Ex(z,k,L,!!et.flip),ut=et.tint||"#ffffff";i.add(new ae({...P,color:ut,roughness:1,...et.emis?{emissiveMap:P.map,emissive:"#ffffff",emissiveIntensity:et.emis*.35}:{}}),ht.wall,q,B,it,0,st,0),ht.win&&i.add(new ae({map:P.map,normalMap:P.normalMap,color:ut,roughness:et.glass??.32,...et.emis?{emissiveMap:P.map,emissive:"#ffffff",emissiveIntensity:et.emis}:{}}),ht.win,q,B,it,0,st,0),ht.side&&i.add(M,ht.side,q,B,it,0,st,0)}function b(P,L,z,k,q,B){i.push(P,0,L,z);let it=q-4,st=10,et=h(B.color);i.cbox(et,k,it,st-.9,0,4,st/2+.45),i.col(k,it,.9,0,4,.45);for(let _t of[-1,1])i.box(g.trim,.14,it,.92,_t*(k/2-.07),4,.46);A(_[B.f],af[B.f],k-.1,it-.1,0,4.05,.3,de,{flip:B.flip,tint:B.tint}),i.cbox(h("#6f675c"),k,4,st-3,0,0,3+(st-3)/2);let ht=x[B.s];i.plane(new ae({...ht,emissiveMap:ht.map,emissive:"#ffffff",emissiveIntensity:B.s==="C"?.04:.28,roughness:1}),k-.9,3.5,0,1.75,2.955,de,0,!!B.flip),i.plane(u(yr(B.shop,{bg:B.signBg||"#3a1512",fg:"#c9aa62",border:"#8a6c2f",worn:!0}),{roughness:.6}),Math.min(k*.5,[...B.shop].length*.95+.5),.62,0,3.27,2.94,de),i.box(g.arcade,k,.02,3.2,0,0,1.4);for(let _t of[-1,1]){let wt=_t*(k/2-.4);i.cbox(g.trim,.7,3.5,.7,wt,0,.4),i.box(g.stoneDark,.9,.55,.9,wt,0,.4),i.box(g.trim,.94,.22,.94,wt,3.3,.4)}i.box(g.trim,k,.5,.75,0,3.5,.4),i.box(h("#7d766c"),k,.06,3,0,3.94,1.5),i.box(g.roofFloor,k-.05,.05,st-.05,0,q,st/2),i.cbox(g.trim,k,.55,.3,0,q,.15),i.cbox(et,k,.55,.3,0,q,st-.15);let ut=k*.4;if(i.box(g.trim,ut,.85,.3,0,q+.55,.15),i.box(g.trim,ut*.55,.45,.3,0,q+1.4,.15),i.box(g.trim,k+.24,.22,.6,0,q-.22,.05),i.box(g.trim,k+.12,.2,.5,0,3.96,.1),B.neon){let _t=[...B.neon].length,wt=(B.vside||1)*(k/2-.95);i.box(f(rf(B.neon,B.neonC||"#ff5a3c"),1.5),.16,.74*_t+.3,.8,wt,4.6,-.6),i.box(g.iron,.06,.06,.6,wt,4.6+.74*_t+.3,-.05),i.box(g.iron,.06,.06,.6,wt,4.62,-.05)}i.cyl(g.iron,.05,.05,it,(B.vside||1)*-(k/2-.5),4,.18,6),i.pop()}let T=["#b9ad8a","#93a696","#b89388","#96a5b2","#b9a166","#b99a80","#a094aa","#9ea888"],I=[[-32,-24,10.4,{color:T[3],f:"B",s:"B",shop:"\u8001\u58EB\u591A",neon:"\u58EB\u591A",neonC:"#4ac8ff"}],[-24,-15,11.2,{color:T[0],f:"A",s:"A",shop:"\u51C9\u8336\u94FA"}],[-15,-7,10.6,{color:T[2],f:"C",s:"C",shop:"\u4E91\u541E\u9762",flip:!0}],[-7,2,11.6,{color:T[1],f:"B",s:"A",shop:"\u53CC\u76AE\u5976",neon:"\u7CD6\u6C34",neonC:"#ff4f7a",vside:-1,tint:"#e9f0e0",flip:!0}],[2,10,10.4,{color:T[4],f:"A",s:"B",shop:"\u80A0\u7C89\u738B",tint:"#f3e6c8",flip:!0}],[10,19,11.4,{color:T[6],f:"C",s:"A",shop:"\u70E7\u814A\u6863",tint:"#e6dcf0"}],[19,30,10.8,{color:T[5],f:"B",s:"C",shop:"\u7172\u4ED4\u996D",tint:"#f0dcc6"}]];for(let[P,L,z,k]of I)b((P+L)/2,24,0,L-P,z,k);b(-32,10.5,-de/2,9,11.2,{color:T[7],f:"C",s:"A",shop:"\u94B5\u4ED4\u7CD5",tint:"#e2e8cf"}),b(-32,19.5,-de/2,9,10.4,{color:T[2],f:"A",s:"C",shop:"\u725B\u6742\u6863",tint:"#eed6cc"}),b(16.5,-24,de,9,10.8,{color:T[4],f:"A",s:"C",shop:"\u4E94\u91D1\u884C",tint:"#e8e0cf"}),b(25.5,-24,de,9,11.4,{color:T[2],f:"C",s:"B",shop:"\u6D77\u5473\u94FA",flip:!0,neon:"\u6D77\u5473",neonC:"#ffb23c"}),b(35,-24,de,10,10.4,{color:T[1],f:"B",s:"A",shop:"\u836F\u6750\u884C",tint:"#dfe6d8"}),i.cbox(h(T[0]),8,11.6,10,-36,0,29),i.cbox(g.brick,8,9,1.5,-36,0,5.25),i.box(g.tileGray,8.4,.3,1.9,-36,9,5.25);for(let[P,L]of[[-2.5,11.6],[14.5,11.4],[-19.5,11.2],[24,10.8]]){i.cyl(g.steel,.9,.9,1.5,P+2.4,L+.5,30.5,14);for(let z of[0,2.1,4.2])i.box(g.iron,.08,.5,.08,P+2.4+Math.cos(z)*.7,L,30.5+Math.sin(z)*.7)}let y=(P,L,z,k=1.1)=>{i.cbox(g.crate,k,k,k,P,L,z)},S=(P,L,z=g.drumRed)=>{i.cyl(z,.3,.3,.9,P,0,L,16),i.cyl(g.iron,.31,.31,.03,P,.3,L,16),i.cyl(g.iron,.31,.31,.03,P,.6,L,16),i.col(.56,.9,.56,P,0,L)};function N(P,L,z,k=!0,q=3){let B=q*.3;i.cbox(g.sandbag,k?z:.62,B,k?.62:z,P,0,L),i.box(g.sandbag,k?z-.5:.46,.15,k?.46:z-.5,P,B,L)}function O(P,L,z,k,q=0){let et=z?6.06:2.44,ht=z?2.44:6.06;i.cbox(g.cont[k],et,2.59,ht,P,q,L);for(let wt of[-1,1])for(let Dt of[-1,1])i.box(g.iron,.14,2.59,.14,P+wt*(et/2-.05),q,L+Dt*(ht/2-.05));i.box(g.iron,et+.04,.12,ht+.04,P,q,L),i.box(g.iron,et+.04,.1,ht+.04,P,q+2.59-.08,L);let ut=z?P+6.06/2+.03:P,_t=z?L:L+6.06/2+.03;for(let wt of[-.6,-.2,.2,.6])i.cyl(g.steel,.022,.022,2.59-.3,z?ut:P+wt,q+.15,z?L+wt:_t,6)}function W(P,L,z=!0){let k=z?2.2:.55,q=z?.55:2.2;i.cbox(g.concrete,k,.45,q,P,0,L),i.cbox(g.concrete,z?2.2:.3,.5,z?.3:2.2,P,.45,L)}y(9.2,0,20.6),y(10.3,0,20.9,.8),y(-23.8,0,9.2),y(11.8,0,-20),y(-19,0,18),y(-19,1.1,18,.9),y(-17.8,0,18.3,.9),y(21,0,17),y(22.1,0,17.2,.8),y(-24,0,-8),y(-24,1.1,-8,.8),y(-22.9,0,-7.6),y(5,0,-10),y(6.1,0,-10.2,.9),y(37.5,0,22.5),y(28.6,0,-15.6,.9),O(35.4,27,!1,1),O(35.4,27.3,!1,2,2.59),O(33.2,31.6,!0,0),O(33,-17.6,!0,3),O(-33,-9,!1,2),O(-26,13.2,!0,1),S(-10.5,20.5),S(-9.8,21.1,g.drumBlue),S(18,21.5,g.drumBlue),S(-29.6,-13.2),S(-28.9,-12.7,g.drumBlue),S(9.5,-17),S(29.2,-19.8,g.drumBlue),S(36,17),N(-13,9.5,4.4),N(-13,-9.6,4.4),N(-1,-13.5,5,!0),N(-21,13,3.6,!1),N(14,20,3.6,!1),N(28,17.5,4.2),N(22,-17.5,4.2),N(-6,-9,3.6,!1),W(-26,21),W(-3,19,!1),W(12,16.6),W(30,20,!1),W(-12,-15),W(17,-20.5),W(36,-20.5);let D=[],H=[],X=(P,L,z,k)=>{H.push([P,L,z,k]),i.col(.8,z*.6,.8,P,0,L)},K={x:-6,z:13};{let{x:P,z:L}=K;i.push(P,0,L),i.cyl(g.bark,1.15,1.75,5,0,0,0,14),i.cyl(g.bark,.95,1.15,5.5,0,5,0,14);for(let z=0;z<9;z++){let k=z*.7+.3,q=1.45;i.cyl(g.bark,.2,.6,3.8,Math.cos(k)*q,0,Math.sin(k)*q,8,{rz:Math.cos(k)*.25,rx:-Math.sin(k)*.25})}for(let z=0;z<7;z++){let k=z*.9,q=3.6;i.rod(g.bark,.3,Yt(0,9,0),Yt(Math.cos(k)*q,10.6+z%2,Math.sin(k)*q),8)}for(let z=0;z<26;z++){let k=z*2.4,q=z<8?It(0,2.5):It(3.5,7.4),B=z<8?It(12.6,14.8):It(10.8,13),it=It(2,3.1),st=Math.cos(k)*q,et=Math.sin(k)*q;i.blob(g.foliage,it,st,B,et,1.15,.72,1.15,.22,z*1.7);for(let ht=0;ht<26;ht++){let ut=Ne()*6.28,_t=It(-.5,1),wt=Math.sqrt(1-_t*_t);D.push([P+st+Math.cos(ut)*wt*it*1.16,B+_t*it*.76,L+et+Math.sin(ut)*wt*it*1.16,It(.9,1.7)])}}for(let z=0;z<26;z++){let k=Ne()*6.28,q=It(3.4,7.2),B=It(2.5,6.5);i.cyl(g.rope,.03,.015,B,Math.cos(k)*q,10.8-B,Math.sin(k)*q,4)}i.col(2.7,10,2.7,0,0,0),i.pop(),i.cyl(g.concrete,3,3.1,.45,P,0,L,24),i.col(1.6,.45,6,P-2.2,0,L),i.col(1.6,.45,6,P+2.2,0,L),i.col(6,.45,1.6,P,0,L-2.2),i.col(6,.45,1.6,P,0,L+2.2)}for(let[P,L,z]of[[-22,7.5,12],[3,8,11],[29,17,10],[-36.5,-14.5,11],[-21,-9,11],[10,-8,10]])X(P,L,z,"streettree");for(let[P,L,z]of[[15,-16.5,10.5],[37.5,-15.6,10],[38,19.5,9.5],[-36,7,10]])X(P,L,z,"kapoktree");let Q=(P,L,z=.6)=>{let k=P.clone().lerp(L,.5);k.y-=z*2,i.add(g.rope,new zo(new _s(P,k,L),14,.018,3))};for(let P=0;P<7;P++)Q(Yt(-30+P*9,9+P%2*.5,23.7),Yt(-21+P*9,8.7,23.7),.35),Q(Yt(-30+P*9,8.4,23.75),Yt(-21+P*9,8.2+P%2*.4,23.75),.5);Q(Yt(-31.8,9,8),Yt(-10,9.5,23.8),1.2),Q(Yt(-31.8,8.4,16),Yt(-22,9.3,23.8),.6),Q(Yt(2,9.3,23.8),Yt(12,6.2,14.5),.5),Q(Yt(-31.7,8.2,14),Yt(-31.7,8.6,22),.4);for(let P=0;P<3;P++)Q(Yt(12.5+P*9,8.8,-23.7),Yt(21+P*9,8.5,-23.7),.4);Q(Yt(10,8.2,-22),Yt(21,8.8,-23.7),.5),Q(Yt(-11,8,-21.8),Yt(-16,5.2,-18),.5);let $=[[-18,15.5],[12,15.5],[-2,-13],[22,-19],[-27,-12],[33,21]],ot=[];for(let[P,L]of $)i.cyl(g.iron,.07,.1,5.2,P,0,L,8),i.cyl(g.iron,.16,.2,.5,P,0,L,8),i.box(g.iron,.9,.06,.06,P+.4,5.1,L),i.cyl(g.iron,.24,.1,.22,P+.8,4.92,L,10),i.sph(g.bulb,.13,P+.8,4.88,L,1,1,1,1),i.col(.3,5.2,.3,P,0,L),ot.push(Yt(P+.8,4.7,L));for(let P of[-16.45,-9.6])i.col(1.35,6.4,1.2,P,0,-7.6);i.cbox(g.stoneDark,.7,2,.4,-17.2,0,6.4),i.plane(u(yr("\u8354\u679D\u6E7E",{vertical:!0,bg:"#6a655a",fg:"#8a2a1c",border:"#6a655a",worn:!0}),{roughness:.9}),.6,1.8,-17.2,1.05,6.61,0);let rt=t.pbr("manchu",{size:512,normal:2,rough:.3,roughK:.3}),xt=new ae({...rt,color:"#b9b0a4",emissiveMap:rt.map,emissive:"#ffe2b0",emissiveIntensity:.22,roughness:1}),j=(P,L,z,k,q,B=0)=>{let it=new Ee(P,L);ei(it,Math.max(1,Math.round(P/L)),1),i.add(xt,it,z,k,q,0,B,0)};{let z=h("#b3a27e");i.cbox(z,22,8.4,11.1,-1,0,-28.45),i.col(22,8.4,.6,-1,0,-22.6);for(let q of[-1,1])i.box(z,.3,8.4,.62,-1+q*10.86,0,-22.6);let k=t.pbr("teahouse",{repeat:!1,size:1536,normal:1.7,rough:.72,roughK:.3});A(k,af.tea,21.9,8.35,-1,.02,-22-.3,0,{emis:.9,glass:.4}),i.plane(u(yr("\u5F97\u95F2\u8336\u697C",{bg:"#12382b",fg:"#c9aa62",border:"#8a6c2f",worn:!0}),{roughness:.5}),5.2,1.45,-1,3.75,-22+2.72,0);for(let q of[-11.4,-6.4,-3.4,1.4,4.4,9.4])i.cbox(g.red,.5,4.2,.5,q,0,-22+2.3),i.box(g.stoneDark,.8,.5,.8,q,0,-22+2.3);i.cbox(g.wood,22,.3,2.7,-1,4.2,-22+1.35),i.box(g.redDark,22,.35,.3,-1,3.85,-22+2.55);for(let q=-11.8;q<=9.81;q+=.6)i.box(g.redDark,.07,.9,.07,q,4.5,-22+2.6);i.cbox(g.redDark,22,.12,.16,-1,5.4,-22+2.6),i.col(22,.9,.16,-1,4.5,-22+2.6),i.cbox(g.redDark,.16,1,2.6,-11.9,4.5,-22+1.3),i.cbox(g.redDark,.16,1,2.6,9.9,4.5,-22+1.3);for(let q of[-11.4,-3.4,4.4,9.4])i.box(g.red,.3,3.9,.3,q,4.5,-22+2.3);i.add(g.tileGreen,of(25.5,16.5,1.3,16,8.4),-1,8.4,-28.6),i.col(24,.5,15,-1,8.4,-28.6),i.col(18,.5,10,-1,8.9,-28.6),i.cbox(z,13,2.4,7.6,-1,9.4,-28.6),i.add(g.tileGreen,of(16.5,11,2,7,.5),-1,11.8,-28.6),i.col(15,.7,10,-1,11.8,-28.6),i.col(9,.7,5,-1,12.5,-28.6),i.box(g.tileGreen,7.4,.3,.5,-1,13.75,-28.6)}function lt(P,L,z,k){let q=new Ni;q.moveTo(-P/2,0),q.lineTo(-P/2,L),q.quadraticCurveTo(-P*.42,L+z*.55,-P*.2,L+z*.8),q.bezierCurveTo(-P*.24,L+z*1.55,P*.24,L+z*1.55,P*.2,L+z*.8),q.quadraticCurveTo(P*.42,L+z*.55,P/2,L),q.lineTo(P/2,0),q.closePath();let B=new Ms(q,{depth:k,bevelEnabled:!1,curveSegments:12});return B.translate(0,0,-k/2),B.rotateY(de/2),ei(B,.3),B}{i.cbox(g.brick,10.5,5,.6,-34.75,0,-18),i.cbox(g.brick,10.5,5,.6,-21.25,0,-18),i.cbox(g.brick,3,1.8,.6,-28,3.2,-18),i.cbox(g.brick,.6,5,16.6,-16,0,-26),i.box(g.tileGray,24.6,.25,1,-28,5,-18),i.box(g.tileGray,1,.25,16.6,-16,5,-26),i.box(g.concrete,3.6,.3,.9,-28,3.05,-18),i.box(g.concrete,.35,3.1,.8,-29.7,0,-18),i.box(g.concrete,.35,3.1,.8,-26.3,0,-18),i.plane(u(yr("\u897F\u5173\u5927\u5C4B",{bg:"#2a1810",fg:"#c9aa62",border:"#8a6c2f",worn:!0})),2.6,.75,-28,4,-17.68,0),i.cbox(g.brick,20,5.2,6,-28,0,-31);let P=new Ni;P.moveTo(-3.6,0),P.lineTo(3.6,0),P.lineTo(0,2.4),P.closePath();let L=new Ms(P,{depth:20,bevelEnabled:!1});L.translate(0,0,-10),L.rotateY(de/2),ei(L,.4),i.add(g.tileGray,L,-28,5.2,-31);for(let z of[-38.2,-17.8])i.add(g.brick,lt(7,5.2,2.6,.5),z,0,-31);for(let z of[-34,-28,-22])j(2,2.6,z,2.2,-27.97),i.box(g.woodDark,2.3,.14,.14,z,3.52,-27.95),i.box(g.woodDark,2.3,.14,.14,z,.88,-27.95);for(let z=0;z<9;z++)i.cyl(g.woodDark,.09,.09,3,-31.1,.3+z*.33,-17.6,8,{rz:de/2})}i.finish();let St=i.colliders,Ct=(P,L={})=>new ae({map:P.tex,alphaTest:.5,alphaToCoverage:!0,roughness:.9,...L}),bt=P=>{let L=P.attributes.normal;for(let q=0;q<L.count;q++)L.setXYZ(q,0,1,0);let z=Array.from(P.index.array),k=[];for(let q=0;q<z.length;q+=3)k.push(z[q],z[q+2],z[q+1]);return P.setIndex(z.concat(k)),P};{let P=t.cutout("leafcard","b",{width:512,bleed:[40,70,30]}),L=P?P.tex:nf(),z=new ae({map:L,alphaTest:.5,side:Je,roughness:.6,color:P?"#a9b498":"#6f8658"}),k=new En(new Ee(1,1),z,D.length),q=new be;D.forEach(([B,it,st,et],ht)=>{q.position.set(B,it,st),q.rotation.set(It(-.7,.7),Ne()*6.28,It(-.5,.5)),q.scale.setScalar(et*(P?1.5:1)),q.updateMatrix(),k.setMatrixAt(ht,q.matrix)}),k.castShadow=!0,k.receiveShadow=!1,k.userData.noAO=!0,k.customDepthMaterial=new Ui({depthPacking:dr,map:L,alphaTest:.5}),s.add(k)}{let P={kapoktree:t.cutout("kapoktree","b",{width:1024,bleed:[70,40,30]}),streettree:t.cutout("streettree","b",{width:1254,bleed:[40,60,30]})},L=[...H];P.streettree&&L.push([K.x,K.z,14.5,"streettree"]);for(let[z,k,q,B]of L){let it=P[B];if(!it)continue;let st=q*1.25,et=st*it.aspect,ht=bt(new Ee(et,st));ht.translate(0,st/2-st*.02,0);let ut=Ct(it,{color:B==="kapoktree"?"#cfc2bc":"#c9c9bc",emissiveMap:it.tex,emissive:"#ffffff",emissiveIntensity:.06}),_t=new Ui({depthPacking:dr,map:it.tex,alphaTest:.5}),wt=Ne()*3;for(let Dt=0;Dt<3;Dt++){let Pt=new Jt(ht,ut);Pt.position.set(z,0,k),Pt.rotation.y=wt+Dt*1.047,Pt.castShadow=Dt===0,Pt.customDepthMaterial=_t,Pt.userData.noAO=!0,s.add(Pt)}}}{let P=t.cutout("paifang","m",{width:1448,bleed:[118,116,108]});if(P){let z=10.28/P.aspect,k=Tx(P.canvas,10.28,z,.9,220),q=new Jt(k.face,new ae({map:P.tex,alphaTest:.5,alphaToCoverage:!0,roughness:.95})),B=new Jt(k.side,new ae({map:P.tex,roughness:.95,color:"#b9b6ae"}));for(let st of[q,B])st.position.set(-13,0,-7.6),st.castShadow=st.receiveShadow=!0,s.add(st);let it=sf("\u897F\u5173","#2a130c");for(let st of[1,-1]){let et=new Jt(new Ee(2.5,.74),new ae({map:it,transparent:!0,depthWrite:!1,roughness:.9,polygonOffset:!0,polygonOffsetFactor:-2}));et.position.set(-13,5.78,-7.6+st*.455),et.rotation.y=st>0?0:de,s.add(et)}}}let Nt=(()=>{let P=document.createElement("canvas");P.width=P.height=128;let L=P.getContext("2d"),z=L.createRadialGradient(64,64,4,64,64,62);z.addColorStop(0,"rgba(0,0,0,0.75)"),z.addColorStop(.6,"rgba(0,0,0,0.35)"),z.addColorStop(1,"rgba(0,0,0,0)"),L.fillStyle=z,L.fillRect(0,0,128,128);for(let k=0;k<14;k++)L.globalCompositeOperation="destination-out",L.fillStyle=`rgba(0,0,0,${It(.2,.6)})`,L.beginPath(),L.arc(It(10,118),It(10,118),It(4,16),0,7),L.fill();return new an(P)})(),Ot=[],At=(P,L,z,k=z,q=.012)=>Ot.push([P,q,L,z,k]);function zt(P,L,z,k,q,B=0){if(!P)return;let it=k*P.aspect,st=bt(new Ee(it,k));st.translate(0,k/2,0);let et=new Jt(st,Ct(P));et.position.set(L,B,z),et.rotation.y=q,et.castShadow=!0,et.receiveShadow=!0,et.userData.noAO=!0,et.customDepthMaterial=new Ui({depthPacking:dr,map:P.tex,alphaTest:.5}),s.add(et),At(L,z,it*1.1,1.2)}let U=[];function vt(P,L,z,k,q=0,B=0){if(!P)return;let it=k*P.aspect,st=bt(new Ee(it,k));st.translate(0,k/2,0);let et=new Jt(st,Ct(P));et.position.set(L,q,z),et.receiveShadow=!0,et.userData.noAO=!0,s.add(et),U.push(et),At(L,z,Math.max(1,it*.9)),B&&St.push({min:Yt(L-B,q,z-B),max:Yt(L+B,q+k*.8,z+B)})}{let P=(it,st,et)=>t.cutout(it,"b",{width:st,bleed:et}),L=P("scooters",1024,[40,40,44]),z=P("plants",768,[50,70,40]),k=P("stools",768,[90,50,45]),q=P("bins",768,[50,60,50]),B=P("pole",512,[50,50,50]);for(let it of[-28,-19.5,-3,6,14.5,24.5])zt(L,it,23.15,1.25,de);zt(L,-31.2,10.5,1.25,-de/2),zt(L,-31.2,19.5,1.25,-de/2);for(let it of[16.5,34])zt(L,it,-23.15,1.25,0);for(let[it,st]of[[-23.4,23.3],[-7.6,23.3],[10.6,23.3],[19.6,23.3],[-31.3,15],[12.6,-23.3],[30.6,-23.3],[-10.6,-19.2],[9,-19.2],[-17,-18.9]])vt(z,it,st,1.5);for(let[it,st]of[[-7,-16.5],[5.5,-16.8],[-21,20.5],[14,18],[26,-20.5]])vt(k,it,st,1.15,0,.5);for(let[it,st]of[[-31,6.2],[1.2,23.2],[29.2,23.4],[10.8,-24.5],[-17.2,-19.4],[38.6,-22.6],[-38.6,16]])vt(q,it,st,1.35,0,.45);for(let[it,st]of[[-24,22.6],[2,22.6],[19,22.6],[21,-22.6],[-31.4,5.8],[8.8,-20.8]])vt(B,it,st,9.5,0,.22)}{let P=(it,st={})=>new ae({map:it,transparent:!0,depthWrite:!1,roughness:.85,polygonOffset:!0,polygonOffsetFactor:-2,...st}),L=(it,st,et,ht,ut=ht,_t=.012,wt=Ne()*6.28)=>{let Dt=new Jt(new Ee(ht,ut),it);Dt.rotation.set(-de/2,0,wt),Dt.position.set(st,_t,et),Dt.receiveShadow=!0,s.add(Dt)};if(t.has("manhole")){let it=t.canvas("manhole",256,256),st=it.getContext("2d");st.globalCompositeOperation="destination-in";let et=st.createRadialGradient(128,128,96,128,128,127);et.addColorStop(0,"rgba(0,0,0,1)"),et.addColorStop(1,"rgba(0,0,0,0)"),st.fillStyle=et,st.fillRect(0,0,256,256);let ht=new an(it);ht.colorSpace=oe;let ut=P(ht,{metalness:.3,roughness:.6});for(let[_t,wt]of[[-24,17],[-9,19],[8,19.5],[22,19],[-20,-12],[2,-11],[20,-20],[32,22]])L(ut,_t,wt,1.1,1.1,.013,vc([0,de/2]))}let z=t.cutout("leaves","b",{width:512,bleed:[90,70,40]});if(z){let it=P(z.tex,{alphaTest:.3,transparent:!1,depthWrite:!0,color:"#8f8676"});for(let[st,et]of[[K.x,K.z],...H.map(ht=>[ht[0],ht[1]])])for(let ht=0;ht<5;ht++){let ut=Ne()*6.28,_t=It(1.5,6.5),wt=st+Math.cos(ut)*_t,Dt=et+Math.sin(ut)*_t;Math.abs(wt)<39&&Math.abs(Dt)<33&&!(Math.abs(Dt)<4.6&&wt<8)&&!(Math.abs(Dt)<14.2&&wt>8)&&L(it,wt,Dt,It(.9,1.5),void 0,.014)}}for(let it=-31;it<30;it+=It(2.2,4.5))At(it,23.6+It(-.2,.3),It(1.6,3.2),It(.8,1.4));for(let it=13;it<39;it+=It(2.2,4.5))At(it,-23.6+It(-.3,.2),It(1.6,3.2),It(.8,1.4));for(let it=7;it<23;it+=It(2.2,4))At(-31.6,it,It(.8,1.4),It(1.6,3));for(let it=0;it<36;it++){let st=It(-38,38),et=It(-32,32);Math.abs(et)<5.2&&st<8.6||Math.abs(et)<14.8&&st>7.6||At(st,et,It(.8,2.6))}let k=new Ae({map:Nt,color:"#0c0a08",transparent:!0,opacity:.42,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}),q=new En(new Ee(1,1),k,Ot.length),B=new be;Ot.forEach(([it,st,et,ht,ut],_t)=>{B.position.set(it,st,et),B.rotation.set(-de/2,0,Ne()*6.28),B.scale.set(ht,ut,1),B.updateMatrix(),q.setMatrixAt(_t,B.matrix)}),q.userData.noAO=!0,s.add(q)}if(!n.lite){for(let L of ot){let z=new ti("#ffc98a",40,20,2);z.position.copy(L),s.add(z)}let P=new ti("#ff9a5c",34,16,2);P.position.set(-1,3,-18.4),s.add(P)}let tt=new ne({uniforms:{t:{value:0},camPos:{value:Yt(0,0,0)},fogC:{value:r.clone()},sunDir:{value:xi},fogD:{value:.003},skyMap:{value:e.tex}},vertexShader:"varying vec3 vW; void main(){ vec4 w=modelMatrix*vec4(position,1.); vW=w.xyz; gl_Position=projectionMatrix*viewMatrix*w; }",fragmentShader:`
      uniform float t, fogD; uniform vec3 camPos, fogC, sunDir; uniform sampler2D skyMap; varying vec3 vW;
      vec3 skyAt(vec3 d){ vec2 uv=vec2(atan(d.z,d.x)/6.2831853+.5, asin(clamp(d.y,-1.,1.))/3.14159265+.5); vec3 c=texture2D(skyMap,uv).rgb; float lm=dot(c,vec3(.3,.55,.15)); c=mix(vec3(lm),c,.85); return pow(c,vec3(1.12))*1.9; }
      float h(vec2 p){ return sin(p.x*1.3+t*1.1)*.33+sin(p.y*1.7-t*.9)*.33+sin((p.x+p.y)*.7+t*.6)*.33; }
      float hh(vec2 p){ return h(p*.9)+.5*h(p*2.3+7.)+.2*h(p*6.1-2.); }
      void main(){
        vec2 p=vW.xz; float d=length(camPos-vW);
        float fw=fwidth(p.x)+fwidth(p.y); float lod=clamp(1.-fw*1.6,0.,1.)*clamp(1.-d/140.,0.,1.);
        float e=.1, n0=hh(p);
        float wind=smoothstep(-.25,.45,h(p*.045+t*.02)); float amp=mix(.35,1.5,wind)*lod;
        vec3 N=normalize(vec3((n0-hh(p+vec2(e,0.)))*amp,1.,(n0-hh(p+vec2(0.,e)))*amp));
        vec3 V=normalize(camPos-vW); vec3 R=reflect(-V,N);
        float fres=.03+.97*pow(clamp(1.-dot(V,N),0.0001,1.),5.);
        vec3 col=mix(vec3(.018,.03,.022),vec3(.05,.07,.045),.5+.5*n0*lod);
        float sd=max(dot(normalize(vec3(R.x,max(R.y,.02),R.z)),sunDir),0.0001);
        vec3 skyc=mix(skyAt(normalize(vec3(R.x,max(R.y,.04),R.z))), fogC, .2)*mix(1.,.72,wind) + vec3(1.,.6,.3)*pow(sd,6.)*.35;
        col=mix(col,skyc,fres);
        col+=vec3(1.,.72,.38)*pow(sd,420.)*10.*lod + vec3(1.,.6,.3)*pow(sd,60.)*.6*fres;
        float f=1.-exp(-pow(d*fogD,2.)); col=mix(col,fogC,f);
        gl_FragColor=vec4(col,1.);
      }`}),gt=new Jt(new Ee(3e3,3e3),tt);gt.rotation.x=-de/2,gt.position.set(300,-1,0),s.add(gt);let nt=new ne({side:Xe,depthWrite:!1,fog:!1,uniforms:{map:{value:e.tex},sunDir:{value:xi},hor:{value:r.clone()}},vertexShader:"varying vec3 vD; void main(){ vD=normalize(position); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform sampler2D map; uniform vec3 sunDir, hor; varying vec3 vD;
      void main(){ vec3 d=normalize(vD);
        vec2 uv=vec2(atan(d.z,d.x)/6.2831853+.5, asin(clamp(d.y,-1.,1.))/3.14159265+.5);
        vec3 col=texture2D(map,uv).rgb; float lm=dot(col,vec3(.3,.55,.15)); col=mix(vec3(lm),col,.85); col=pow(col,vec3(1.12))*1.9;
        float s=max(dot(d,sunDir),0.0001); col+=vec3(1.,.62,.3)*pow(s,24.)*.8 + vec3(1.,.8,.5)*pow(s,90.)*2.2;
        col=mix(col,hor,smoothstep(.09,-.01,d.y)*.92);
        gl_FragColor=vec4(col,1.); }`}),Ut=new Jt(new bs(2200,48,24),nt);Ut.userData.noAO=!0,s.add(Ut);{let L=new Qe(1,1,1);ei(L,1.5,1.5);let z=t.pbr("apartment",{size:512,normal:1.4,rough:.85,roughK:.2}),k=new En(L,new ae({...z,emissiveMap:z.map,emissive:"#ffffff",emissiveIntensity:.22,roughness:1}),170),q=new En(new Qe(1,1,1),g.roofFloor,170),B=new qt,it=new hn,st=new Lt,et=0;for(;et<170;){let ut=It(-125,36),_t=It(-120,120);if(ut>-47&&Math.abs(_t)<41)continue;let wt=!1,Dt=It(8,16),Pt=It(8,16),mt=wt?It(24,60):It(7,14);B.compose(Yt(ut,mt/2,_t),it,Yt(Dt,mt,Pt)),k.setMatrixAt(et,B),st.set(vc(["#d8cfc0","#c9c2b6","#b9bcbf","#d2c4b0","#c6b9aa","#aeb6b8"])),k.setColorAt(et,st),B.compose(Yt(ut,mt+.3,_t),it,Yt(Dt+.8,.6,Pt+.8)),q.setMatrixAt(et,B),et++}k.instanceColor.needsUpdate=!0,s.add(k,q);let ht=new _r(s);for(let ut=0;ut<60;ut++){let _t,wt;do _t=It(-120,39),wt=It(-110,110);while(_t>-44&&Math.abs(wt)<38);let Dt=It(3.5,6.5);ht.blob(g.foliage,Dt,_t,Dt*.9,wt,1,.85,1,.25,ut)}for(let[ut,_t,wt]of[[-10,-42,0],[-46,-12,de/2],[34,42,0],[-48,20,de/2]]){ht.push(ut,0,_t,wt),ht.box(g.brick,14,6,7,0,0,0);let Dt=new Ni;Dt.moveTo(-4,0),Dt.lineTo(4,0),Dt.lineTo(0,2.6),Dt.closePath();let Pt=new Ms(Dt,{depth:14,bevelEnabled:!1});Pt.translate(0,0,-7),Pt.rotateY(de/2),ei(Pt,.4),ht.add(g.tileGray,Pt,0,6,0),ht.add(g.brick,lt(7.6,6,2.8,.5),-7.1,0,0),ht.add(g.brick,lt(7.6,6,2.8,.5),7.1,0,0),ht.pop()}ht.finish()}let yt={glow:null};{let P=(st,et,ht,ut)=>new ne({side:Xe,fog:!1,uniforms:{map:{value:st},fogC:{value:r.clone()},haze:{value:et},gain:{value:ht},rep:{value:ut}},vertexShader:"uniform float rep; varying vec2 vUv; void main(){ vUv=vec2((1.-uv.x)*rep,uv.y); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"uniform sampler2D map; uniform vec3 fogC; uniform float haze, gain; varying vec2 vUv; void main(){ vec4 t=texture2D(map,vUv); if(t.a<0.5) discard; float h=haze*(1.-.3*vUv.y); gl_FragColor=vec4(mix(t.rgb*gain,fogC,h),1.); }"}),L=(st,et,ht,ut,_t,wt,Dt,Pt,mt,F)=>{if(!st)return 0;st.tex.wrapS=Qs,st.tex.needsUpdate=!0;let Et=et*wt/Dt/st.aspect,Tt=new Jt(new Un(et,et,Et,72,1,!0,_t-wt/2,wt),P(st.tex,Pt,mt,Dt));return Tt.position.set(ht,F+Et/2,ut),Tt.userData.noAO=!0,s.add(Tt),Et},z=t.cutout("skylineEast","m",{width:1774,bleed:[150,140,130]}),k=t.cutout("skylineCity","m",{width:1774,bleed:[140,135,128]}),q=520,B=1.745,it=L(z,q,0,0,de/2,B,1,.5,1,-3);if(L(k,175,-5,0,de*1.5,4.363,6,.3,.9,-1),it){let st=document.createElement("canvas");st.width=32,st.height=256;let et=st.getContext("2d"),ht=et.createLinearGradient(0,256,0,0);for(let F=0;F<=10;F++)ht.addColorStop(F/10,`hsl(${330-F*30},100%,60%)`);et.fillStyle=ht,et.fillRect(0,0,32,256);let ut=et.createLinearGradient(0,0,32,0);ut.addColorStop(0,"rgba(0,0,0,1)"),ut.addColorStop(.5,"rgba(0,0,0,0)"),ut.addColorStop(1,"rgba(0,0,0,1)"),et.globalCompositeOperation="destination-out",et.fillStyle=ut,et.fillRect(0,0,32,256);let _t=de/2+B/2-.595*B,wt=.03*B*q,Dt=it*.41,Pt=new an(st);Pt.colorSpace=oe;let mt=new Jt(new Ee(wt,Dt),new Ae({map:Pt,transparent:!0,blending:Kn,depthWrite:!1,fog:!1,color:new Lt(2.2,2.2,2.2),toneMapped:!1}));mt.position.set(Math.sin(_t)*(q-4),-3+Dt/2,Math.cos(_t)*(q-4)),mt.lookAt(0,mt.position.y,0),mt.visible=!1,mt.userData.noAO=!0,s.add(mt),yt.glow=mt}}let w={party:!1};function E(P,L,z){tt.uniforms.t.value=L,tt.uniforms.camPos.value.copy(z),Ut.position.set(z.x,0,z.z);for(let k of U)k.rotation.y=Math.atan2(z.x-k.position.x,z.z-k.position.z);w.party&&yt.glow&&(yt.glow.material.opacity=.75+Math.sin(L*2.2)*.2)}function V(){w.party=!0,yt.glow&&(yt.glow.visible=!0)}function dt(P){tt.uniforms.fogD.value=P}let ft=[Yt(-37,0,15),Yt(-36,0,-8),Yt(-28,0,-24),Yt(37.5,0,22),Yt(37,0,-20),Yt(14.5,0,-26),Yt(-37,0,22),Yt(30,0,22),Yt(26,0,-26)],ct=[Yt(60,26,0),Yt(-10,30,50),Yt(-60,28,-10),Yt(20,30,-55),Yt(70,22,30)];return{refl:v,colliders:St,movers:[],update:E,party:V,setFog:dt,spawns:ft,airSpawns:ct,spawn:{pos:Yt(-1,.01,-15.5),yaw:de},tree:K,horizon:r}}var Cs=.32,cf=1.7,wx=1.56,Ax=.46,Rx=27,_c=6.3,yc=9.6,Cx=9.2,Px=8.8,hf=21,Lx=.19,Ix=(s,t,e)=>Math.max(t,Math.min(e,s)),aa=class{constructor(t,e,n){this.cam=t,this.world=e,this.emit=n,this.pos=new C,this.vel=new C,this.safe=new C,this.safeYaw=0,this.reset(e.spawn)}reset(t){this.pos.copy(t.pos),this.vel.set(0,0,0),this.yaw=t.yaw,this.pitch=0,this.onGround=!1,this.ground=null,this.coyote=0,this.jumpBuf=0,this.airJumps=1,this.airDash=!0,this.dashT=0,this.dashCd=0,this.dashDir=new C,this.pounding=0,this.zip=null,this.bob=0,this.dip=0,this.roll=0,this.fov=76,this.speed=0,this.groundT=0,this.bounced=!1,this.safe.copy(t.pos),this.safeYaw=t.yaw,this.kick=0,this.hp=100}overlaps(t){let e=this.pos;return e.x+Cs>t.min.x&&e.x-Cs<t.max.x&&e.z+Cs>t.min.z&&e.z-Cs<t.max.z&&e.y<t.max.y&&e.y+cf>t.min.y}moveAxis(t,e){if(e===0)return null;let n=this.pos,i=this.world.colliders,r=null;n[t]+=e;for(let o=0;o<i.length;o++){let a=i[o];if(!(a.off||!this.overlaps(a)))if(t==="y")e<0?(n.y=a.max.y,r=a):(n.y=a.min.y-cf-.001,this.vel.y>0&&(this.vel.y=0));else{let l=a.max.y-n.y;if(l>0&&l<=Ax&&(this.onGround||this.coyote>0)){n.y=a.max.y+5e-4;continue}e>0?n[t]=a.min[t]-Cs-5e-4:n[t]=a.max[t]+Cs+5e-4,this.vel[t]=0}}return r}startZip(t){this.zip={a:t.a,b:t.b,t:.02,v:7,len:t.a.distanceTo(t.b)},this.vel.set(0,0,0),this.onGround=!1,this.ground=null,this.pounding=0,this.dashT=0,this.emit("zipStart")}respawn(){this.pos.copy(this.safe),this.pos.y+=.05,this.vel.set(0,0,0),this.pounding=0,this.dashT=0,this.zip=null}update(t,e){this.yaw-=e.lookX,this.pitch=Ix(this.pitch-e.lookY,-1.5,1.5);let n=-Math.sin(this.yaw),i=-Math.cos(this.yaw),r=Math.cos(this.yaw),o=-Math.sin(this.yaw),a=n*e.fwd+r*e.right,l=i*e.fwd+o*e.right,c=Math.hypot(a,l);c>1&&(a/=c,l/=c);let h=c>.1;if(this.dashCd-=t,this.jumpBuf-=t,this.coyote-=t,e.jump&&(this.jumpBuf=.13),this.zip){let _=this.zip;_.v=Math.min(15,_.v+6*t),_.t+=_.v*t/_.len,this.pos.lerpVectors(_.a,_.b,Math.min(1,_.t)),this.pos.y-=2.4;let x=_.b.clone().sub(_.a).normalize();(_.t>=1||e.jump)&&(this.vel.copy(x).multiplyScalar(_.t>=1?4:_.v),_.t<1&&(this.vel.y=5),this.zip=null,this.airJumps=1,this.airDash=!0,this.jumpBuf=0,this.emit("zipEnd")),this.speed=_.v,this.applyCamera(t,e,0,!0);return}if(e.dash&&this.dashCd<=0&&!this.pounding&&(this.onGround||this.airDash)&&(h?this.dashDir.set(a/c,0,l/c):this.dashDir.set(n,0,i),this.dashT=Lx,this.dashCd=.55,this.onGround||(this.airDash=!1),this.emit("dash")),e.pound&&!this.onGround&&!this.pounding&&this.coyote<=0&&(this.pounding=1,this.poundHang=.13,this.vel.set(0,0,0),this.dashT=0,this.emit("poundStart")),this.pounding)this.poundHang-=t,this.vel.x=this.vel.z=0,this.vel.y=this.poundHang>0?0:-38;else if(this.dashT>0)this.dashT-=t,this.vel.x=this.dashDir.x*hf,this.vel.z=this.dashDir.z*hf,this.vel.y=0,this.dashT<=0&&(this.vel.x=this.dashDir.x*yc,this.vel.z=this.dashDir.z*yc);else{let _=e.sprint&&h?yc:_c,x=this.onGround?13:h?4.5:.8,M=Math.min(1,x*t);this.vel.x+=(a*_-this.vel.x)*M,this.vel.z+=(l*_-this.vel.z)*M,this.jumpBuf>0&&(this.onGround||this.coyote>0?(this.vel.y=Cx,this.jumpBuf=0,this.coyote=0,this.onGround=!1,this.bounced=!1,this.emit("jump")):this.airJumps>0&&(this.vel.y=Px,this.airJumps--,this.jumpBuf=0,this.bounced=!1,this.emit("jump2"))),!e.jumpHeld&&this.vel.y>3&&!this.bounced&&(this.vel.y-=34*t),this.vel.y-=Rx*(this.vel.y<0?1.25:1)*t,this.vel.y<-42&&(this.vel.y=-42)}let u=this.onGround,f=this.vel.y,d=this.vel.x*t,m=this.vel.y*t,g=this.vel.z*t,v=Math.max(1,Math.ceil(Math.max(Math.abs(d),Math.abs(m),Math.abs(g))/.18)),p=null;for(let _=0;_<v;_++)if(this.moveAxis("x",d/v),this.moveAxis("z",g/v),!p){let x=this.moveAxis("y",m/v);x&&(p=x)}if(p){let _=-f;this.pounding?(this.pounding=0,this.emit("pound",p),p.bounce?(this.vel.y=p.bounce*1.28,this.bounceOff(),this.emit("bounce")):p.tag==="drum"?(this.vel.y=12,this.bounceOff()):(this.vel.y=0,this.dip=.3,this.setGround(p))):p.bounce&&_>3.5?(this.vel.y=p.bounce,this.bounceOff(),this.emit("bounce")):(!u&&_>5&&(this.emit("land",_),this.dip=Math.min(.3,_*.012)),this.vel.y=0,this.setGround(p))}else this.onGround=!1,this.ground=null,this.groundT=0;if(this.onGround){this.groundT+=t;let _=this.ground;this.groundT>.25&&_&&_.safe!==!1&&!_.moving&&(this.safe.copy(this.pos),this.safeYaw=this.yaw)}this.pos.y<-1.35&&(this.emit("splash",this.pos.clone()),this.respawn()),this.speed=Math.hypot(this.vel.x,this.vel.z),this.applyCamera(t,e,e.right,!1)}setGround(t){this.onGround=!0,this.ground=t,this.coyote=.1,this.airJumps=1,this.airDash=!0}bounceOff(){this.onGround=!1,this.ground=null,this.airJumps=1,this.airDash=!0,this.bounced=!0,this.coyote=0}applyCamera(t,e,n,i){let r=this.onGround?this.speed:0;this.bob+=r*t*1.55,this.dip+=(0-this.dip)*Math.min(1,t*9);let o=-n*.02+(i?Math.sin(this.bob*0+performance.now()*.002)*.03:0);this.roll+=(o-this.roll)*Math.min(1,t*8);let a=this.speed>_c+1,l=(76+(this.dashT>0?14:a?7:0)+(i?10:0)+(this.pounding?8:0))*(1-(this.adsK||0)*.3);this.fov+=(l-this.fov)*Math.min(1,t*14);let c=Math.sin(this.bob*2)*.035*Math.min(1,r/_c);this.cam.position.set(this.pos.x,this.pos.y+wx+c-this.dip,this.pos.z),this.kick*=Math.exp(-t*7.5),this.cam.rotation.set(Math.min(1.55,this.pitch+this.kick),this.yaw,this.roll,"YXZ"),Math.abs(this.cam.fov-this.fov)>.05&&(this.cam.fov=this.fov,this.cam.updateProjectionMatrix())}get center(){return this._c=(this._c||new C).set(this.pos.x,this.pos.y+.9,this.pos.z)}};function _i(s,t,e,n){let i=0,r=n,o=-1,a=0;for(let l=0;l<3;l++){let c=l===0?"x":l===1?"y":"z",h=s[c],u=t[c],f=e.min[c],d=e.max[c];if(Math.abs(u)<1e-8){if(h<f||h>d)return-1;continue}let m=(f-h)/u,g=(d-h)/u,v=-1;if(m>g){let p=m;m=g,g=p,v=1}if(m>i&&(i=m,o=l,a=v),g<r&&(r=g),i>r)return-1}return o<0?-1:(_i.n.set(o===0?a:0,o===1?a:0,o===2?a:0),i)}_i.n=new C;var la=class{constructor(t,e){this.scene=t,this.world=e;let n=this.N=1600;this.p={pos:new Float32Array(n*3),vel:new Float32Array(n*3),col:new Float32Array(n*4),size:new Float32Array(n),life:new Float32Array(n),max:new Float32Array(n),grav:new Float32Array(n),drag:new Float32Array(n),base:new Float32Array(n),grow:new Float32Array(n)};let i=new ce;i.setAttribute("position",new Le(this.p.pos,3)),i.setAttribute("acol",new Le(this.p.col,4)),i.setAttribute("size",new Le(this.p.size,1)),this.pmat=new ne({transparent:!0,depthWrite:!1,uniforms:{scale:{value:600}},vertexShader:"attribute float size; attribute vec4 acol; varying vec4 vC; uniform float scale; void main(){ vC=acol; vec4 mv=modelViewMatrix*vec4(position,1.); gl_PointSize=min(400.,size*scale/max(.1,-mv.z)); gl_Position=projectionMatrix*mv; }",fragmentShader:"varying vec4 vC; void main(){ float r=length(gl_PointCoord-.5); if(r>.5) discard; gl_FragColor=vec4(vC.rgb, vC.a*smoothstep(.5,.1,r)); }"}),this.points=new Co(i,this.pmat),this.points.frustumCulled=!1,t.add(this.points),this.pi=0;let r=this.BN=80;this.bolts=[];for(let m=0;m<r;m++)this.bolts.push({pos:new C,vel:new C,life:0,dmg:0});let o=new No(.05,.7,3,8);o.rotateX(Math.PI/2),this.boltMesh=new En(o,new Ae({color:new Lt(6,1.2,.5),toneMapped:!1}),r),this.boltMesh.frustumCulled=!1,this.boltMesh.userData.noAO=!0,t.add(this.boltMesh),this.bi=0,this.tracers=[];let a=new Qe(.018,.018,1);a.translate(0,0,.5);for(let m=0;m<14;m++){let g=new Jt(a,new Ae({color:new Lt(5,3.6,1.6),transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}));g.visible=!1,g.userData.noAO=!0,t.add(g),this.tracers.push({m:g,t:1})}this.ti=0;let l=this.DN=90,c=document.createElement("canvas");c.width=c.height=64;let h=c.getContext("2d"),u=h.createRadialGradient(32,32,2,32,32,30);u.addColorStop(0,"rgba(0,0,0,1)"),u.addColorStop(.25,"rgba(10,8,6,0.95)"),u.addColorStop(.55,"rgba(40,34,28,0.5)"),u.addColorStop(1,"rgba(60,50,40,0)"),h.fillStyle=u,h.fillRect(0,0,64,64),this.decalMesh=new En(new Ee(.22,.22),new Ae({map:new an(c),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4}),l),this.decalMesh.frustumCulled=!1,this.decalMesh.userData.noAO=!0,t.add(this.decalMesh),this.di=0,this.dummy=new be,this.dummy.position.set(0,-99,0),this.dummy.updateMatrix();for(let m=0;m<l;m++)this.decalMesh.setMatrixAt(m,this.dummy.matrix);let f=this.CN=24;this.casings=[];for(let m=0;m<f;m++)this.casings.push({pos:new C,vel:new C,rot:new C,life:0});this.casingMesh=new En(new Un(.009,.009,.04,6),new ae({color:"#c9a04a",metalness:.9,roughness:.3}),f),this.casingMesh.frustumCulled=!1,t.add(this.casingMesh),this.ci=0;let d=this.FN=36;this.petals=[],this.petalMesh=new En(new Ee(.2,.14),new ae({color:"#c93a22",side:Je,roughness:.7}),d);for(let m=0;m<d;m++)this.petals.push({x:-40+Math.random()*80,y:Math.random()*14,z:-34+Math.random()*68,ph:Math.random()*6,s:.6+Math.random()*.8});this.petalMesh.userData.noAO=!0,this.petalMesh.visible=!1,t.add(this.petalMesh),this.rings=[];for(let m=0;m<4;m++){let g=new Jt(new Oo(.78,1,48),new Ae({color:"#ffd9a0",transparent:!0,opacity:0,depthWrite:!1,side:Je}));g.rotation.x=-Math.PI/2,g.visible=!1,t.add(g),this.rings.push({m:g,t:1})}this.flash=new ti("#ffb060",0,22,2),t.add(this.flash),this.flashT=0,this.fireworks=!1,this.fwT=0}spawn(t,e,n,i,r,o,a,l,c,h,u,f=9,d=.5,m=0){let g=this.pi,v=this.p;this.pi=(g+1)%this.N,v.pos[g*3]=t,v.pos[g*3+1]=e,v.pos[g*3+2]=n,v.vel[g*3]=i,v.vel[g*3+1]=r,v.vel[g*3+2]=o,v.life[g]=v.max[g]=a,v.base[g]=l,v.col[g*4]=c,v.col[g*4+1]=h,v.col[g*4+2]=u,v.grav[g]=f,v.drag[g]=d,v.grow[g]=m}burst(t,e,n,i,r={}){let o=i.isColor?i:new Lt(i),a=r.hdr||1;for(let l=0;l<e;l++){let c=Math.random()*6.283,h=Math.random()*2-1,u=n*(.35+Math.random()*.65),f=Math.sqrt(1-h*h);this.spawn(t.x,t.y,t.z,Math.cos(c)*f*u+(r.dir?r.dir.x*n:0),(r.up||0)+h*u+(r.dir?r.dir.y*n:0),Math.sin(c)*f*u+(r.dir?r.dir.z*n:0),(r.life||.6)*(.6+Math.random()*.6),(r.size||.12)*(.6+Math.random()*.8),o.r*a,o.g*a,o.b*a,r.grav??9,r.drag??.6,r.grow||0)}}ring(t,e="#ffd9a0",n=5){let i=this.rings.find(r=>r.t>=1)||this.rings[0];i.t=0,i.size=n,i.m.position.set(t.x,t.y+.06,t.z),i.m.material.color.set(e),i.m.visible=!0}tracer(t,e){let n=this.tracers[this.ti];this.ti=(this.ti+1)%this.tracers.length,n.m.position.copy(t),n.m.lookAt(e),n.m.scale.set(1,1,t.distanceTo(e)),n.t=0,n.m.visible=!0,n.m.material.opacity=.9}decal(t,e){let n=this.dummy;n.position.copy(t).addScaledVector(e,.012),n.lookAt(t.x+e.x,t.y+e.y,t.z+e.z),n.rotateZ(Math.random()*6.28),n.scale.setScalar(.7+Math.random()*.7),n.updateMatrix(),this.decalMesh.setMatrixAt(this.di,n.matrix),this.di=(this.di+1)%this.DN,this.decalMesh.instanceMatrix.needsUpdate=!0}impact(t,e){this.decal(t,e),this.burst(t,7,4.5,"#ffd9a0",{life:.22,size:.05,dir:e,grav:12,hdr:4}),this.burst(t,5,1.1,"#9a8f80",{life:.7,size:.28,dir:e.clone().multiplyScalar(.5),grav:-.4,drag:2.5,grow:1.6})}sparks(t,e=12,n="#ffb060"){this.burst(t,e,6,n,{life:.3,size:.06,grav:14,hdr:5})}explode(t,e=1){this.burst(t,26*e,9*e,"#ffb050",{life:.5,size:.3*e,grav:2,drag:2.2,hdr:4}),this.burst(t,18*e,4*e,"#3a3632",{life:1.5,size:.9*e,grav:-1.2,drag:1.6,grow:2}),this.burst(t,22,11,"#ffe0a0",{life:.6,size:.05,grav:16,hdr:5}),this.flash.position.copy(t),this.flash.intensity=160*e,this.flashT=.16}casing(t,e){let n=this.casings[this.ci];this.ci=(this.ci+1)%this.CN,n.pos.copy(t),n.vel.copy(e),n.rot.set(Math.random()*6,Math.random()*6,Math.random()*6),n.life=1.4}bolt(t,e,n,i){let r=this.bolts[this.bi];this.bi=(this.bi+1)%this.BN,r.pos.copy(t),r.vel.copy(e).multiplyScalar(n),r.life=2.6,r.dmg=i}update(t,e,n){let i=this.p;for(let l=0;l<this.N;l++){if(i.life[l]<=0){i.size[l]!==0&&(i.size[l]=0);continue}i.life[l]-=t;let c=Math.exp(-i.drag[l]*t),h=l*3;i.vel[h]*=c,i.vel[h+1]=i.vel[h+1]*c-i.grav[l]*t,i.vel[h+2]*=c,i.pos[h]+=i.vel[h]*t,i.pos[h+1]+=i.vel[h+1]*t,i.pos[h+2]+=i.vel[h+2]*t;let u=Math.max(0,i.life[l]/i.max[l]);i.col[l*4+3]=Math.min(1,u*1.6)*(i.grow[l]?.5:1),i.size[l]=i.base[l]*(i.grow[l]?1+(1-u)*i.grow[l]:.5+.5*u)}let r=this.points.geometry.attributes;r.position.needsUpdate=r.acol.needsUpdate=r.size.needsUpdate=!0;let o=this.world.colliders,a=this.dummy;for(let l=0;l<this.BN;l++){let c=this.bolts[l];if(c.life<=0){a.position.set(0,-99,0),a.scale.setScalar(.001),a.rotation.set(0,0,0),a.updateMatrix(),this.boltMesh.setMatrixAt(l,a.matrix);continue}c.life-=t;let h=!1;for(let u=0;u<3&&!h;u++){if(c.pos.addScaledVector(c.vel,t/3),n.boltHit(c)){h=!0;break}if(c.pos.y<-1){h=!0;break}for(let f=0;f<o.length;f++){let d=o[f];if(!d.off&&c.pos.x>d.min.x&&c.pos.x<d.max.x&&c.pos.y>d.min.y&&c.pos.y<d.max.y&&c.pos.z>d.min.z&&c.pos.z<d.max.z){h=!0;break}}}if(h||c.life<=0){c.life=0,this.burst(c.pos,6,3,"#ff7040",{life:.25,size:.07,hdr:4});continue}a.position.copy(c.pos),a.scale.setScalar(1),a.lookAt(c.pos.x+c.vel.x,c.pos.y+c.vel.y,c.pos.z+c.vel.z),a.updateMatrix(),this.boltMesh.setMatrixAt(l,a.matrix)}this.boltMesh.instanceMatrix.needsUpdate=!0;for(let l of this.tracers)l.t>=1||(l.t+=t/.07,l.m.material.opacity=Math.max(0,.9*(1-l.t)),l.t>=1&&(l.m.visible=!1));for(let l=0;l<this.CN;l++){let c=this.casings[l];if(c.life<=0){a.position.set(0,-99,0),a.scale.setScalar(.001),a.updateMatrix(),this.casingMesh.setMatrixAt(l,a.matrix);continue}c.life-=t,c.vel.y-=14*t,c.pos.addScaledVector(c.vel,t),c.pos.y<n.groundY+.02&&c.vel.y<0&&(c.pos.y=n.groundY+.02,c.vel.y*=-.35,c.vel.x*=.5,c.vel.z*=.5),a.position.copy(c.pos),a.rotation.set(c.rot.x+e*14,c.rot.y,c.rot.z+e*9),a.scale.setScalar(1),a.updateMatrix(),this.casingMesh.setMatrixAt(l,a.matrix)}this.casingMesh.instanceMatrix.needsUpdate=!0;for(let l=0;l<this.FN;l++){let c=this.petals[l];c.y-=t*.9*c.s,c.x+=Math.sin(e*.8+c.ph)*t*.6,c.z+=Math.cos(e*.6+c.ph)*t*.4,c.y<.02&&(c.y=10+Math.random()*5,c.x=-40+Math.random()*80,c.z=-34+Math.random()*68),a.position.set(c.x,c.y,c.z),a.rotation.set(e*c.s+c.ph,e*.7+c.ph,c.ph),a.scale.setScalar(c.s),a.updateMatrix(),this.petalMesh.setMatrixAt(l,a.matrix)}this.petalMesh.instanceMatrix.needsUpdate=!0;for(let l of this.rings){if(l.t>=1){l.m.visible=!1;continue}l.t+=t*2.2;let c=1-Math.pow(1-Math.min(1,l.t),3);l.m.scale.setScalar(.3+c*l.size),l.m.material.opacity=(1-l.t)*.8}if(this.flashT>0&&(this.flashT-=t,this.flashT<=0?this.flash.intensity=0:this.flash.intensity*=.8),this.fireworks&&(this.fwT-=t,this.fwT<=0)){this.fwT=.22+Math.random()*.4;let l=Math.random()<.5,c=l?new C(-1+(Math.random()-.5)*30,18+Math.random()*10,-24+(Math.random()-.5)*12):new C(90+Math.random()*120,40+Math.random()*50,(Math.random()-.5)*220),h=new Lt().setHSL(Math.random(),1,.6);this.burst(c,l?70:90,l?9:34,h,{life:l?1.3:2,size:l?.3:2.6,grav:l?3:6,drag:1.3,hdr:5}),n.boom&&n.boom(l)}}};var ca=class{constructor(t){this.muted=t,this.ctx=null,this.musicOn=!1}init(){if(!this.ctx)try{let t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:.55,this.master.connect(this.ctx.destination);let e=this.ctx.sampleRate*1,n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let r=0;r<e;r++)i[r]=Math.random()*2-1;this.noiseBuf=n}catch{this.ctx=null}}setMuted(t){this.muted=t,this.master&&(this.master.gain.value=t?0:.55)}tone(t,e,{type:n="sine",vol:i=.2,slide:r=0,delay:o=0,attack:a=.005}={}){if(!this.ctx||this.muted)return;let l=this.ctx.currentTime+o,c=this.ctx.createOscillator(),h=this.ctx.createGain();c.type=n,c.frequency.setValueAtTime(t,l),r&&c.frequency.exponentialRampToValueAtTime(Math.max(20,t*r),l+e),h.gain.setValueAtTime(0,l),h.gain.linearRampToValueAtTime(i,l+a),h.gain.exponentialRampToValueAtTime(1e-4,l+e),c.connect(h),h.connect(this.master),c.start(l),c.stop(l+e+.02)}noise(t,{vol:e=.2,f:n=1200,q:i=1,type:r="bandpass",slide:o=1,delay:a=0}={}){if(!this.ctx||this.muted)return;let l=this.ctx.currentTime+a,c=this.ctx.createBufferSource(),h=this.ctx.createBiquadFilter(),u=this.ctx.createGain();c.buffer=this.noiseBuf,c.loop=!0,h.type=r,h.Q.value=i,h.frequency.setValueAtTime(n,l),h.frequency.exponentialRampToValueAtTime(Math.max(40,n*o),l+t),u.gain.setValueAtTime(e,l),u.gain.exponentialRampToValueAtTime(1e-4,l+t),c.connect(h),h.connect(u),u.connect(this.master),c.start(l),c.stop(l+t+.02)}jump(){this.tone(330,.16,{type:"triangle",slide:1.7,vol:.14})}jump2(){this.tone(494,.18,{type:"triangle",slide:1.8,vol:.14}),this.noise(.12,{vol:.05,f:2500})}dash(){this.noise(.28,{vol:.22,f:700,slide:4,q:.7})}land(){this.noise(.1,{vol:.14,f:180,type:"lowpass"})}pound(){this.tone(90,.35,{slide:.4,vol:.4}),this.noise(.25,{vol:.25,f:300,type:"lowpass"})}bounce(){this.tone(180,.3,{type:"sine",slide:3.2,vol:.25})}squirt(){this.noise(.07,{vol:.06,f:2600,slide:.5,q:2})}splash(){this.noise(.5,{vol:.3,f:900,slide:.3,q:.5})}flower(){this.tone(1047,.12,{vol:.1}),this.tone(1319,.16,{vol:.1,delay:.06})}gong(){for(let[t,e]of[[196,.3],[293,.16],[415,.1],[622,.06]])this.tone(t,1.6,{vol:e,slide:.97});this.noise(.2,{vol:.1,f:3e3})}drum(){this.tone(70,.7,{slide:.5,vol:.55}),this.noise(.12,{vol:.2,f:220,type:"lowpass"})}gate(){this.noise(1.2,{vol:.1,f:260,q:3,slide:1.4})}pickup(){[523,659,784,1047,1319].forEach((t,e)=>this.tone(t,.35,{type:"triangle",vol:.16,delay:e*.07}))}zip(){this.noise(2.4,{vol:.12,f:500,slide:3,q:1.2})}boom(t){this.noise(.5,{vol:t?.22:.1,f:400,type:"lowpass",slide:.3}),this.noise(.6,{vol:.06,f:5e3,delay:.15})}win(){[523,587,659,784,880,1047,1175,1319,1568].forEach((t,e)=>this.tone(t,.5,{type:"triangle",vol:.18,delay:e*.09}))}shot(){this.noise(.11,{vol:.5,f:1900,slide:.25,q:.6}),this.noise(.2,{vol:.3,f:300,type:"lowpass",slide:.4}),this.tone(150,.09,{type:"square",slide:.4,vol:.16})}dry(){this.tone(900,.03,{type:"square",vol:.08})}reload(){this.noise(.05,{vol:.16,f:2400,q:3,delay:.3}),this.tone(520,.04,{type:"square",vol:.07,delay:.32}),this.noise(.06,{vol:.2,f:1600,q:3,delay:1.15}),this.tone(380,.05,{type:"square",vol:.09,delay:1.17}),this.noise(.05,{vol:.2,f:3e3,q:4,delay:1.6}),this.tone(700,.04,{type:"square",vol:.08,delay:1.62})}eshot(t=1){this.tone(880,.16,{type:"sawtooth",slide:.3,vol:.07*t}),this.noise(.08,{vol:.06*t,f:3200,slide:.5})}explode(t){this.noise(t?.9:.55,{vol:t?.6:.4,f:500,type:"lowpass",slide:.15}),this.tone(t?55:80,.5,{slide:.4,vol:.4})}hurt(){this.tone(140,.14,{type:"sawtooth",slide:.6,vol:.2}),this.noise(.08,{vol:.15,f:700})}hitmark(t){this.tone(t?1400:2100,.05,{type:"square",vol:.06}),t&&this.tone(900,.12,{type:"triangle",vol:.12,delay:.04})}wave(){[220,220,330].forEach((t,e)=>this.tone(t,.4,{type:"sawtooth",vol:.12,delay:e*.22}))}ammo(){this.tone(660,.08,{type:"square",vol:.08}),this.tone(990,.1,{type:"square",vol:.08,delay:.07})}music(){if(!this.ctx||this.musicOn)return;this.musicOn=!0;let t=[196,220,261.6,293.7,329.6,392,440,523.25],e=[0,2,4,3,2,4,5,4,2,1,0,2,3,1,0,-1,4,5,7,5,4,3,2,4,3,2,1,0,1,2,0,-1],n=0,i=()=>{if(!this.ctx)return;let r=e[n%e.length];if(n++,r>=0&&!this.muted){let o=t[r];this.tone(o,1.2,{type:"triangle",vol:.035}),this.tone(o*2,.6,{vol:.012}),n%4===1&&this.tone(o/2,1.4,{vol:.045})}setTimeout(i,420)};i()}};var Ps=(s,t,e)=>new C(s,t,e),yi=un.lerp,Dx=un.smoothstep,Mr=.5,Sr={scale:.9,padX:.04,padY:.05,muzzle:[.505,.506],optic:[.663,.44]},Mc={scale:1.12,window:[.5,.405]};function ha(s,t={}){return new Ae({map:s,transparent:!0,depthTest:!1,depthWrite:!1,fog:!1,...t})}var ua=class{constructor(t,e,n,i,r,o){this.cam=t,this.world=e,this.fx=n,this.sfx=i,this.holder=new Ce,(o||t).add(this.holder);let a=new Ee(1,1),l=r.cutout("gunHip","g",{bleed:[34,30,26]}),c=r.cutout("gunAds","g",{bleed:[30,28,26]});this.hipAspect=l?l.aspect:16/9,this.adsAspect=c?c.aspect:16/9,this.hasAds=!!c,this.hipPivot=new Ce,this.hipMesh=new Jt(a,ha(l?l.tex:null,l?{}:{opacity:0})),this.hipMesh.renderOrder=1e3,this.hipPivot.add(this.hipMesh),this.holder.add(this.hipPivot),this.adsPivot=new Ce,this.adsMesh=new Jt(a,ha(c?c.tex:null,{opacity:0})),this.adsMesh.renderOrder=1001,this.adsPivot.add(this.adsMesh),this.holder.add(this.adsPivot);let h=document.createElement("canvas");h.width=h.height=128;let u=h.getContext("2d");u.translate(64,64);let f=u.createRadialGradient(0,0,2,0,0,60);f.addColorStop(0,"rgba(255,255,255,1)"),f.addColorStop(.22,"rgba(255,225,150,0.95)"),f.addColorStop(.55,"rgba(255,140,40,0.4)"),f.addColorStop(1,"rgba(255,90,0,0)"),u.fillStyle=f;for(let m=0;m<7;m++)u.rotate(.9+m%2*.3),u.beginPath(),u.moveTo(0,-8),u.lineTo(m%2?62:42,0),u.lineTo(0,8),u.closePath(),u.fill();u.beginPath(),u.arc(0,0,24,0,7),u.fill();let d=new an(h);d.colorSpace=oe,this.flash=new Jt(a,ha(d,{color:new Lt(5,4,2.6),blending:Kn,toneMapped:!1})),this.flash.renderOrder=1002,this.flash.visible=!1,this.holder.add(this.flash),this.dot=new Jt(new ys(.5,16),ha(null,{color:new Lt(10,.5,.25),toneMapped:!1,blending:Kn})),this.dot.renderOrder=1003,this.dot.visible=!1,this.holder.add(this.dot),this.holder.traverse(m=>{m.userData.noAO=!0,m.frustumCulled=!1}),this.light=new ti("#ffb060",0,14,2),this.light.position.set(0,0,-1.2),t.add(this.light),this.ammo=30,this.magSize=30,this.reserve=150,this.cd=0,this.reloadT=0,this.ads=0,this.kickZ=0,this.kickR=0,this.bloom=0,this.swayX=0,this.swayY=0,this.flashT=0,this.sprintK=0,this.shots=0,this.hitsN=0,this.sunK=.5,this.sunT=0,this.sunWant=.5,this.spread=.006,this._muzzle=Ps(0,0,0)}get reloading(){return this.reloadT>0}startReload(){this.reloadT>0||this.ammo>=this.magSize||this.reserve<=0||(this.reloadT=1.9,this.sfx.reload())}addAmmo(t){this.reserve=Math.min(240,this.reserve+t)}update(t,e,n,i,r){let o=this.cam,a=e.ads&&this.reloadT<=0&&!(n.speed>8&&n.onGround&&!e.shoot);this.ads+=((a?1:0)-this.ads)*Math.min(1,t*14);let l=n.speed>8&&n.onGround&&!e.shoot&&!a;if(this.sprintK+=((l?1:0)-this.sprintK)*Math.min(1,t*8),this.cd-=t,this.bloom=Math.max(0,this.bloom-t*.05),e.reload&&this.startReload(),this.reloadT>0&&(this.reloadT-=t,this.reloadT<=0)){let O=Math.min(this.magSize-this.ammo,this.reserve);this.ammo+=O,this.reserve-=O}if(this.sunT-=t,this.sunT<=0){this.sunT=.12;let O=o.position,W=this.world.colliders,D=1;for(let H=0;H<W.length;H++){let X=W[H];if(X.off||X.max.y-X.min.y>60)continue;if(_i(O,xi,X,140)>=0){D=0;break}}this.sunWant=D}this.sunK+=(this.sunWant-this.sunK)*Math.min(1,t*5),this.kickZ*=Math.exp(-t*16),this.kickR*=Math.exp(-t*12),this.swayX+=(-e.lookX*2.4-this.swayX)*Math.min(1,t*8),this.swayY+=(e.lookY*2.4-this.swayY)*Math.min(1,t*8);let c=this.ads,h=n.onGround?Math.min(1,n.speed/6.3):0,u=n.bob,f=(1-c*.85)*h,d=this.sprintK*(1-c),m=this.swayX*.5+Math.sin(u)*.012*f+this.kickZ*.011+d*.05-c*.22,g=this.swayY*.5-Math.abs(Math.cos(u))*.016*f-this.kickZ*.012-n.dip*.35-un.clamp(n.vel.y,-10,10)*.004*(1-c)-d*.13-c*.1,v=-this.kickR*.012+this.swayX*.12+d*.2+Math.sin(u)*.006*f,p=1+this.kickZ*.03;if(this.reloadT>0){let O=1-this.reloadT/1.9,W=Math.sin(Math.min(1,O/.2)*1.57)*(O>.78?Math.cos((O-.78)/.22*1.57):1);g-=W*.72,v+=W*.4,m+=W*.08}n.pounding&&(g-=.3);let _=2*Mr*Math.tan(un.degToRad(o.fov/2)),x=_*o.aspect,M=_*Sr.scale,A=M*this.hipAspect;this.hipPivot.position.set(x/2+Sr.padX*_+m*_,-_/2-Sr.padY*_+g*_,-Mr),this.hipPivot.rotation.z=v,this.hipPivot.scale.setScalar(p),this.hipMesh.scale.set(A,M,1),this.hipMesh.position.set(-A/2,M/2,0);let b=this.hasAds?Dx(c,.35,.8):0,T=this.flashT>0?1:0,I=this.sunK,y=1.18+T*.9;if(this.hipMesh.material.color.setRGB(yi(.5,1.12,I)*y,yi(.54,1,I)*y,yi(.64,.86,I)*y),this.hipMesh.material.opacity=this.hipMesh.material.map?1-b:0,this.hipMesh.visible=b<.99,this.hasAds){let O=_*Mc.scale*(1+this.kickZ*.02),W=O*this.adsAspect;this.adsPivot.position.set(this.swayX*.15*_,(-(1-c)*.4-this.kickZ*.006+this.swayY*.15)*_,-Mr),this.adsPivot.rotation.z=-this.kickR*.004,this.adsMesh.scale.set(W,O,1),this.adsMesh.position.set(-(Mc.window[0]-.5)*W,-(.5-Mc.window[1])*O,0),this.adsMesh.material.color.copy(this.hipMesh.material.color),this.adsMesh.material.opacity=b,this.adsMesh.visible=b>.01}this.dot.visible=c>.75,this.dot.scale.setScalar(_*.007),this.dot.position.set(this.adsPivot.position.x,this.adsPivot.position.y,-Mr+.001);let S=this.hipPivot.position.x+(-A/2+(Sr.muzzle[0]-.5)*A)*p,N=this.hipPivot.position.y+(M/2+(.5-Sr.muzzle[1])*M)*p;this._muzzle.set(yi(S,0,c),yi(N,-.02*_,c),-Mr),this.flashT>0&&(this.flashT-=t,this.flash.position.copy(this._muzzle),this.flashT<=0&&(this.flash.visible=!1,this.light.intensity=0)),this.spread=(.0045+(n.onGround?Math.min(1,n.speed/9)*.012:.02))*(1-c*.92)+this.bloom,e.shoot&&this.cd<=0&&this.reloadT<=0&&(this.ammo<=0?(this.cd=.25,this.sfx.dry(),this.startReload()):this.fire(n,i,r,_))}fire(t,e,n,i){let r=this.fx,o=this.cam;this.ammo--,this.cd=.088,this.shots++;let a=o.getWorldPosition(new C),l=o.getWorldDirection(new C),c=Ps(1,0,0).applyQuaternion(o.quaternion),h=Ps(0,1,0).applyQuaternion(o.quaternion),u=Math.random()*6.283,f=Math.sqrt(Math.random())*this.spread;l.addScaledVector(c,Math.cos(u)*f).addScaledVector(h,Math.sin(u)*f).normalize();let d=220,m=Ps(0,1,0),g=!1,v=!1,p=this.world.colliders;for(let I=0;I<p.length;I++){let y=p[I];if(y.off)continue;let S=_i(a,l,y,d);S>=0&&S<d&&(d=S,m.copy(_i.n),g=!0)}if(l.y<0){let I=(-1-a.y)/l.y;I>0&&I<d&&(d=I,g=!1,v=!0)}let _=null,x=!1;for(let I of e.list){if(I.dead)continue;let y=I.hitTest(a,l,d);y&&(d=y.t,_=I,x=y.head,g=!1,v=!1)}let M=a.clone().addScaledVector(l,d);_?(this.hitsN++,n.enemyHit(_,x?46:22,x,M,l)):g?r.impact(M,m):v&&r.burst(M,8,3,"#cfe8ff",{up:3,life:.4,size:.1}),this.flash.visible=!0,this.flash.position.copy(this._muzzle),this.flash.rotation.z=Math.random()*6.28,this.flash.scale.setScalar(i*(.2+Math.random()*.12)*(1-this.ads*.35)),this.flashT=.05,this.light.intensity=30;let A=o.localToWorld(this._muzzle.clone().multiplyScalar(1.9));r.tracer(A,M),r.spawn(A.x,A.y,A.z,l.x*1.5,.5,l.z*1.5,.55,.12,.55,.55,.55,-.5,2,2.6);let b=o.localToWorld(Ps(.16,-.11,-.5));r.casing(b,c.clone().multiplyScalar(2.2+Math.random()).add(h.clone().multiplyScalar(1.6+Math.random())).add(Ps(t.vel.x,0,t.vel.z)));let T=this.ads;this.kickZ=Math.min(1.7,this.kickZ+1),this.kickR=Math.min(1.6,this.kickR+1),t.kick+=yi(.0125,.008,T),t.yaw+=(Math.random()-.5)*yi(.009,.005,T),this.bloom=Math.min(.03,this.bloom+yi(.0045,.0012,T)),this.sfx.shot(),this.ammo<=0&&this.startReload()}};var br=new C;function An(s,t,e,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;br.copy(t),br[n]=0,br.normalize();let c=.5*o/(o+a),h=1-br.angleTo(s)/l;return Math.sign(br[e])===1?h*c:a/(o+a)+c+c*(1-h)}var fa=class extends Qe{constructor(t=1,e=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,i,i,i),i===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new C,l=new C,c=new C(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,d=h.length/6,m=new C,g=.5/i;for(let v=0,p=0;v<h.length;v+=3,p+=2)switch(a.fromArray(h,v),l.copy(a),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),h[v+0]=c.x*Math.sign(a.x)+l.x*r,h[v+1]=c.y*Math.sign(a.y)+l.y*r,h[v+2]=c.z*Math.sign(a.z)+l.z*r,u[v+0]=l.x,u[v+1]=l.y,u[v+2]=l.z,Math.floor(v/d)){case 0:m.set(1,0,0),f[p+0]=An(m,l,"z","y",r,n),f[p+1]=1-An(m,l,"y","z",r,e);break;case 1:m.set(-1,0,0),f[p+0]=1-An(m,l,"z","y",r,n),f[p+1]=1-An(m,l,"y","z",r,e);break;case 2:m.set(0,1,0),f[p+0]=1-An(m,l,"x","z",r,t),f[p+1]=An(m,l,"z","x",r,n);break;case 3:m.set(0,-1,0),f[p+0]=1-An(m,l,"x","z",r,t),f[p+1]=1-An(m,l,"z","x",r,n);break;case 4:m.set(0,0,1),f[p+0]=1-An(m,l,"x","y",r,t),f[p+1]=1-An(m,l,"y","x",r,e);break;case 5:m.set(0,0,-1),f[p+0]=An(m,l,"x","y",r,t),f[p+1]=1-An(m,l,"y","x",r,e);break}}};var Ux=(s,t,e)=>new C(s,t,e),Ls=un.clamp,Sc=class{constructor(t){this.cell=.5,this.x0=-40,this.z0=-34,this.nx=160,this.nz=136;let e=this.nx*this.nz;this.ground=new Float32Array(e),this.walk=new Uint8Array(e),this.dist=new Float32Array(e).fill(1e9),this.queue=new Int32Array(e);let n=t.colliders.filter(r=>!r.moving),i=.38;for(let r=0;r<this.nz;r++)for(let o=0;o<this.nx;o++){let a=this.x0+(o+.5)*this.cell,l=this.z0+(r+.5)*this.cell,c=r*this.nx+o,h=-99;for(let f of n)a>f.min.x&&a<f.max.x&&l>f.min.z&&l<f.max.z&&f.max.y<=2&&f.max.y>h&&(h=f.max.y);if(h<-.3){this.walk[c]=0,this.ground[c]=-99;continue}let u=1;for(let f of n)if(a>f.min.x-i&&a<f.max.x+i&&l>f.min.z-i&&l<f.max.z+i&&f.min.y<h+1.7&&f.max.y>h+.45){u=0;break}this.walk[c]=u,this.ground[c]=h}this.target=-1}idx(t,e){let n=Math.floor((t-this.x0)/this.cell),i=Math.floor((e-this.z0)/this.cell);return n<0||i<0||n>=this.nx||i>=this.nz?-1:i*this.nx+n}walkable(t,e){let n=this.idx(t,e);return n>=0&&this.walk[n]===1}groundAt(t,e){let n=this.idx(t,e);return n>=0&&this.walk[n]?this.ground[n]:null}nearest(t,e,n,i=!1){let r=-1,o=1e9,a=Math.floor((t-this.x0)/this.cell),l=Math.floor((e-this.z0)/this.cell);for(let c=0;c<=(i?40:14)&&r<0;c++)for(let h=-c;h<=c;h++)for(let u=-c;u<=c;u++){if(Math.max(Math.abs(u),Math.abs(h))!==c)continue;let f=a+u,d=l+h;if(f<0||d<0||f>=this.nx||d>=this.nz)continue;let m=d*this.nx+f;if(!this.walk[m]||i&&this.dist[m]>1e8)continue;let g=u*u+h*h+(n!==void 0?Math.abs(this.ground[m]-n)*4:0);g<o&&(o=g,r=m)}return r}flow(t,e,n){let i=this.nearest(t,e,n);if(i<0)return;this.target=i;let{dist:r,queue:o,nx:a,nz:l,walk:c,ground:h}=this;r.fill(1e9);let u=0,f=0;for(o[f++]=i,r[i]=0;u<f;){let d=o[u++],m=r[d]+1,g=d%a,v=d/a|0,p=h[d];if(g>0){let _=d-1;c[_]&&r[_]>m&&Math.abs(h[_]-p)<=.5&&(r[_]=m,o[f++]=_)}if(g<a-1){let _=d+1;c[_]&&r[_]>m&&Math.abs(h[_]-p)<=.5&&(r[_]=m,o[f++]=_)}if(v>0){let _=d-a;c[_]&&r[_]>m&&Math.abs(h[_]-p)<=.5&&(r[_]=m,o[f++]=_)}if(v<l-1){let _=d+a;c[_]&&r[_]>m&&Math.abs(h[_]-p)<=.5&&(r[_]=m,o[f++]=_)}}}dir(t,e,n){let i=this.idx(t,e);if(n.set(0,0,0),i<0)return!1;let{dist:r,nx:o,nz:a,walk:l,ground:c,cell:h}=this,u=i%o,f=i/o|0,d=l[i]?c[i]:null,m=l[i]?r[i]:1e9,g=0,v=0;for(let M=-1;M<=1;M++)for(let A=-1;A<=1;A++){if(!A&&!M)continue;let b=u+A,T=f+M;if(b<0||T<0||b>=o||T>=a)continue;let I=T*o+b;if(!l[I]||d!==null&&Math.abs(c[I]-d)>.5||A&&M&&(!l[f*o+b]||!l[T*o+u]))continue;let y=r[I]+(A&&M?.41:0);y<m&&(m=y,g=A,v=M)}if(!g&&!v)return!1;let p=this.x0+(u+g+.5)*h-t,_=this.z0+(f+v+.5)*h-e,x=Math.hypot(p,_)||1;return n.set(p/x,0,_/x),!0}};function Nx(s,t,e){let n=e.clone().sub(t),i=n.length();n.multiplyScalar(1/i);let r=s.colliders;for(let o=0;o<r.length;o++){let a=r[o];if(a.off)continue;let l=_i(t,n,a,i);if(l>=0&&l<i-.05)return!1}return!0}var Is=(s,t={})=>new ae({color:s,roughness:.5,metalness:.75,...t}),se={armor:Is("#4a5058"),armorHeavy:Is("#5a5348"),joint:Is("#15171a",{roughness:.7,metalness:.4}),gun:Is("#1c1d1f",{roughness:.4}),stripe:Is("#c8451f",{roughness:.6,metalness:.2}),hazard:Is("#d9a21f",{roughness:.6,metalness:.2}),eye:new Ae({color:new Lt(8,.7,.3),toneMapped:!1}),eyeBlue:new Ae({color:new Lt(.6,3.5,8),toneMapped:!1}),rotor:new Ae({color:"#20242a",transparent:!0,opacity:.35,depthWrite:!1,side:Je})},xn={box:new fa(1,1,1,3,.16),sph:new Ss(1,2),cyl:new Un(1,1,1,14),disc:new ys(1,20),torus:new Fo(1,.07,6,22)};function Qt(s,t,e,n,i,r,o,a,l,c=0,h=0,u=0){let f=new Jt(t,e);return f.position.set(n,i,r),f.scale.set(o,a,l),f.rotation.set(c,h,u),f.castShadow=!0,f.receiveShadow=!0,s.add(f),f}function Ox(s){let t=new Ce,e=s?se.armorHeavy:se.armor,n=s?se.hazard:se.stripe,i=xn.box,r=new Ce;r.position.y=.95,t.add(r),Qt(r,i,se.joint,0,0,0,.34,.16,.22);let o=new Ce;o.position.y=.1,r.add(o),Qt(o,i,se.joint,0,.08,0,.26,.2,.18),Qt(o,i,e,0,.36,0,.5,.4,.3),Qt(o,i,e,0,.4,.13,.4,.26,.1,-.15),Qt(o,i,n,0,.47,.19,.26,.05,.02,-.15),Qt(o,i,n,.17,.33,.185,.05,.12,.02,-.15),Qt(o,i,se.joint,0,.36,-.2,.34,.36,.14),Qt(o,xn.cyl,se.gun,.1,.62,-.22,.012,.3,.012);for(let u of[-1,1])Qt(o,xn.sph,e,u*.31,.5,0,.12,.11,.13),Qt(o,i,n,u*.34,.56,0,.1,.02,.14);let a=new Ce;a.position.y=.68,o.add(a),Qt(a,i,e,0,0,0,.22,.2,.25),Qt(a,i,se.joint,0,-.08,.04,.16,.08,.2),Qt(a,i,e,0,.1,-.02,.18,.04,.2);let l=Qt(a,i,se.eye,0,.02,.127,.17,.035,.01);l.castShadow=!1;let c=new Ce;if(c.position.set(0,.5,0),o.add(c),Qt(c,i,se.gun,.14,-.14,.42,.07,.1,.62),Qt(c,xn.cyl,se.gun,.14,-.12,.83,.02,.24,.02,Math.PI/2),Qt(c,i,se.gun,.14,-.24,.36,.05,.14,.08),s){for(let[u,f]of[[.03,.03],[-.03,.03],[0,-.03]])Qt(c,xn.cyl,se.gun,.14+u,-.12+f,.9,.016,.36,.016,Math.PI/2);Qt(c,i,se.hazard,.14,-.06,.3,.09,.03,.2)}Qt(c,i,e,.33,-.12,.08,.11,.11,.32,.5),Qt(c,i,se.joint,.26,-.2,.26,.09,.09,.26,0,-.5),Qt(c,i,e,-.33,-.1,.1,.11,.11,.34,.35),Qt(c,i,se.joint,-.2,-.16,.36,.09,.09,.42,0,.75);let h=[];for(let u of[-1,1]){let f=new Ce;f.position.set(u*.12,.95,0),t.add(f),Qt(f,i,e,0,-.22,0,.16,.44,.18),Qt(f,i,n,u*.085,-.2,0,.012,.2,.1);let d=new Ce;d.position.y=-.44,f.add(d),Qt(d,xn.sph,se.joint,0,0,0,.08,.08,.09),Qt(d,i,e,0,-.24,.01,.13,.44,.15),Qt(d,i,se.joint,0,-.47,.06,.15,.08,.3),h.push({hip:f,knee:d})}return{root:t,torso:o,head:a,arms:c,legs:h,eye:l}}function Fx(){let s=new Ce,t=xn.box,e=[];Qt(s,t,se.armor,0,0,0,.42,.14,.62),Qt(s,xn.sph,se.joint,0,.06,-.05,.2,.1,.26),Qt(s,t,se.stripe,0,.075,.2,.3,.01,.12);let n=Qt(s,xn.sph,se.eye,0,-.02,.32,.06,.06,.03);n.castShadow=!1,Qt(s,xn.cyl,se.gun,0,-.12,.2,.03,.4,.03,Math.PI/2),Qt(s,t,se.gun,0,-.1,.02,.08,.08,.2);for(let[i,r]of[[-1,-1],[1,-1],[-1,1],[1,1]]){Qt(s,t,se.joint,i*.3,.02,r*.3,.5,.035,.05,0,i*r*.785),Qt(s,xn.cyl,se.joint,i*.47,.05,r*.47,.035,.08,.035),Qt(s,xn.torus,se.armor,i*.47,.09,r*.47,.25,.25,.25,Math.PI/2);let o=Qt(s,xn.disc,se.rotor,i*.47,.1,r*.47,.24,.24,.24,-Math.PI/2);o.castShadow=!1,o.userData.noAO=!0,e.push(o)}for(let i of[-1,1])Qt(s,t,se.joint,i*.16,-.15,0,.02,.12,.4);return{root:s,rotors:e,eye:n}}var zx={trooper:{hp:80,speed:3.5,scale:1,range:17,burst:3,gap:2.1,dmg:5,score:100},heavy:{hp:420,speed:2.1,scale:1.5,range:15,burst:6,gap:2.6,dmg:5,score:400},drone:{hp:38,speed:7.5,scale:1,range:20,burst:1,gap:1.4,dmg:5,score:80}},Ve=new C,vn=new C,Ds=new C,Bx=new C,bc=class{constructor(t,e,n){this.type=t,this.cfg=zx[t],this.hp=this.cfg.hp,this.pos=e.clone(),this.yaw=0,this.dead=!1,this.remove=!1,this.vel=Ux(0,0,0),this.walkPh=Math.random()*6,this.fireT=1+Math.random()*1.5,this.burstLeft=0,this.burstT=0,this.losT=Math.random()*.3,this.los=!1,this.strafe=Math.random()<.5?1:-1,this.strafeT=2+Math.random()*2,this.deadT=0,this.hitK=0,this.spawnT=.6,this.aimPitch=0,this.orbit=Math.random()*6.28,this.height=4+Math.random()*3,this.ph=Math.random()*6,this.m=t==="drone"?Fx():Ox(t==="heavy"),this.m.root.rotation.order="YXZ",this.m.root.scale.setScalar(this.cfg.scale*.01),this.m.root.position.copy(this.pos),n.add(this.m.root),this.scene=n}get center(){return Bx.set(this.pos.x,this.pos.y+(this.type==="drone"?0:1.1*this.cfg.scale),this.pos.z)}hitTest(t,e,n){let i=this.cfg.scale,r=null,o=(l,c,h,u,f)=>{Ve.set(l-t.x,c-t.y,h-t.z);let d=Ve.dot(e);if(d<0)return;let m=Ve.lengthSq()-d*d;if(m>u*u)return;let g=d-Math.sqrt(u*u-m);g>0&&g<n&&(!r||g<r.t)&&(r={t:g,head:f})},a=this.pos;return this.type==="drone"?o(a.x,a.y,a.z,.6,!1):(o(a.x,a.y+1.78*i,a.z,.2*i,!0),o(a.x,a.y+1.28*i,a.z,.4*i,!1),o(a.x,a.y+.82*i,a.z,.33*i,!1),o(a.x,a.y+.36*i,a.z,.28*i,!1)),r}damage(t,e,n){return this.dead?!1:(this.hp-=t,this.hitK=1,this.fireT=Math.max(this.fireT,.25),n&&this.type!=="heavy"&&(this.vel.x+=n.x*1.5,this.vel.z+=n.z*1.5),this.hp<=0?(this.die(e),!0):!1)}die(t){this.dead=!0,this.deadT=0,this.m.eye.visible=!1,t.fx.explode(this.center.clone(),this.type==="heavy"?1.7:this.type==="drone"?.8:1),t.sfx.explode(this.type==="heavy")}fire(t){let e=this.cfg.scale,n=t.player,i=Math.sin(this.yaw),r=Math.cos(this.yaw);this.type==="drone"?Ve.set(this.pos.x+i*.4,this.pos.y-.12,this.pos.z+r*.4):Ve.set(this.pos.x+i*.9*e+r*.14*e,this.pos.y+1.42*e,this.pos.z+r*.9*e-i*.14*e);let o=42,a=Ve.distanceTo(n.center),l=a/o*.55;vn.set(n.pos.x+n.vel.x*l,n.pos.y+1,n.pos.z+n.vel.z*l).sub(Ve).normalize();let c=this.type==="heavy"?.075:.055;vn.x+=(Math.random()-.5)*c,vn.y+=(Math.random()-.5)*c,vn.z+=(Math.random()-.5)*c,vn.normalize(),t.fx.bolt(Ve,vn,o,this.cfg.dmg),t.fx.burst(Ve,3,1.5,"#ff7040",{life:.12,size:.14,hdr:5}),t.sfx.eshot(Math.min(1,14/Math.max(6,a)))}update(t,e){let{player:n,nav:i,world:r}=e,o=this.cfg,a=o.scale,l=this.m;if(this.spawnT>0){this.spawnT-=t;let m=1-Math.max(0,this.spawnT)/.6;l.root.scale.setScalar(a*(.2+.8*m))}if(this.hitK*=Math.exp(-t*10),this.dead)return this.updateDead(t,e);let c=n.pos.x-this.pos.x,h=n.pos.z-this.pos.z,u=Math.hypot(c,h)||.001;this.losT-=t,this.losT<=0&&(this.losT=.22+Math.random()*.1,Ve.copy(this.center),this.type!=="drone"&&(Ve.y+=.5*a),this.los=u<60&&Nx(r,Ve.clone(),n.center.clone())),this.type==="drone"?this.moveDrone(t,e,c,h,u):this.moveGround(t,e,c,h,u);let d=(this.los||this.type==="drone"?Math.atan2(c,h):Math.hypot(this.vel.x,this.vel.z)>.3?Math.atan2(this.vel.x,this.vel.z):this.yaw)-this.yaw;for(;d>Math.PI;)d-=6.2832;for(;d<-Math.PI;)d+=6.2832;if(this.yaw+=d*Math.min(1,t*(this.type==="heavy"?3:6)),this.spawnT<=0&&(this.burstLeft>0?(this.burstT-=t,this.burstT<=0&&(this.burstT=this.type==="heavy"?.09:.13,this.burstLeft--,this.los&&this.fire(e))):(this.fireT-=t,this.fireT<=0&&this.los&&u<o.range+6&&Math.abs(d)<.5&&(this.burstLeft=o.burst,this.burstT=0,this.fireT=o.gap*(.8+Math.random()*.5))),this.type==="heavy"&&u<3.2&&Math.abs(n.pos.y-this.pos.y)<2&&this.fireT>.2&&(this.stompT=(this.stompT||0)-t,this.stompT<=0&&(this.stompT=1.4,e.hurt(22,this.pos),e.fx.ring(this.pos,"#ff6a3a",7),e.sfx.pound()))),l.root.position.copy(this.pos),l.root.rotation.y=this.yaw,this.type==="drone"){for(let m of l.rotors)m.rotation.z+=t*60;l.root.rotation.z=Ls(-this.vel.x*Math.cos(this.yaw)*.04+this.vel.z*Math.sin(this.yaw)*.04,-.4,.4)+this.hitK*.3,l.root.rotation.x=Ls((this.vel.x*Math.sin(this.yaw)+this.vel.z*Math.cos(this.yaw))*.04,-.35,.35)}else{let m=Math.hypot(this.vel.x,this.vel.z);this.walkPh+=m*t*(3.3/a);let g=Math.min(1,m/2)*.62;l.legs.forEach((p,_)=>{let x=this.walkPh+_*Math.PI;p.hip.rotation.x=-Math.sin(x)*g,p.knee.rotation.x=Math.max(0,Math.cos(x))*g*1.5}),l.torso.position.y=.1+Math.abs(Math.sin(this.walkPh))*.03*Math.min(1,m);let v=n.pos.y+1-(this.pos.y+1.45*a);this.aimPitch+=((this.los?Math.atan2(v,u):0)-this.aimPitch)*Math.min(1,t*6),l.arms.rotation.x=-Ls(this.aimPitch,-.9,.9),l.torso.rotation.x=this.hitK*-.18,l.head.rotation.x=-Ls(this.aimPitch,-.5,.5)*.6}}moveGround(t,e,n,i,r){let{nav:o}=e,a=this.cfg,l=0,c=0;{let p=o.idx(this.pos.x,this.pos.z);if(p<0||!o.walk[p]||o.dist[p]>1e8){if(this.stuckT=(this.stuckT||0)+t,this.stuckT>1.5){let _=o.nearest(this.pos.x,this.pos.z,void 0,!0);_>=0&&(this.pos.set(o.x0+(_%o.nx+.5)*o.cell,o.ground[_],o.z0+((_/o.nx|0)+.5)*o.cell),this.stuckT=0)}}else this.stuckT=0}this.strafeT-=t,this.strafeT<=0&&(this.strafeT=1.5+Math.random()*2.5,this.strafe=-this.strafe),this.los&&r<a.range&&r>4?r<a.range*.55?(l=-i/r*this.strafe*.7-n/r*.25,c=n/r*this.strafe*.7-i/r*.25):r>a.range*.8?(l=n/r*.5-i/r*this.strafe*.5,c=i/r*.5+n/r*this.strafe*.5):(l=-i/r*this.strafe*.6,c=n/r*this.strafe*.6):o.dir(this.pos.x,this.pos.z,Ds)&&(l=Ds.x,c=Ds.z);for(let p of e.list){if(p===this||p.dead||p.type==="drone")continue;let _=this.pos.x-p.pos.x,x=this.pos.z-p.pos.z,M=_*_+x*x,A=1.3*Math.max(a.scale,p.cfg.scale);if(M<A*A&&M>1e-4){let b=Math.sqrt(M),T=(A-b)/A;l+=_/b*T*1.6,c+=x/b*T*1.6}}let u=a.speed*(this.burstLeft>0?.35:1);this.vel.x+=(l*u-this.vel.x)*Math.min(1,t*7),this.vel.z+=(c*u-this.vel.z)*Math.min(1,t*7);let f=this.pos.x+this.vel.x*t,d=this.pos.z+this.vel.z*t,m=o.groundAt(this.pos.x,this.pos.z),g=(p,_)=>{let x=o.groundAt(p,_);return x!==null&&(m===null||Math.abs(x-m)<=.55)};if(g(f,d))this.pos.x=f,this.pos.z=d;else if(g(f,this.pos.z))this.pos.x=f,this.vel.z=0;else if(g(this.pos.x,d))this.pos.z=d,this.vel.x=0;else if(this.vel.x=this.vel.z=0,m===null){let p=o.nearest(this.pos.x,this.pos.z);p>=0&&(this.pos.x=o.x0+(p%o.nx+.5)*o.cell,this.pos.z=o.z0+((p/o.nx|0)+.5)*o.cell)}let v=o.groundAt(this.pos.x,this.pos.z);v!==null&&(this.pos.y+=(v-this.pos.y)*Math.min(1,t*12))}moveDrone(t,e,n,i,r){let{player:o,world:a,t:l}=e;this.orbit+=t*.35*this.strafe;let c=10+Math.sin(l*.5+this.ph)*3;Ve.set(o.pos.x+Math.cos(this.orbit)*c,Math.max(o.pos.y+this.height,3.2)+Math.sin(l*1.3+this.ph)*.6,o.pos.z+Math.sin(this.orbit)*c),Ve.x=Ls(Ve.x,-44,44),Ve.z=Ls(Ve.z,-38,38),vn.copy(Ve).sub(this.pos);let h=vn.length()||1;vn.multiplyScalar(Math.min(this.cfg.speed,h*1.6)/h);let u=a.colliders,f=this.pos;for(let d=0;d<u.length;d++){let m=u[d];if(!(m.max.y-m.min.y>50)&&f.x>m.min.x-1&&f.x<m.max.x+1&&f.z>m.min.z-1&&f.z<m.max.z+1&&f.y>m.min.y-1&&f.y<m.max.y+1.2){vn.y=Math.max(vn.y,5);break}}for(let d of e.list){if(d===this||d.dead||d.type!=="drone")continue;Ds.copy(f).sub(d.pos);let m=Ds.length();m<2.4&&m>.01&&vn.addScaledVector(Ds,(2.4-m)/m*2)}this.vel.lerp(vn,Math.min(1,t*2.2)),this.pos.addScaledVector(this.vel,t)}updateDead(t,e){this.deadT+=t;let n=this.m;if(this.type==="drone"){this.vel.y-=16*t,this.pos.addScaledVector(this.vel,t),n.root.rotation.z+=t*7,n.root.rotation.x+=t*4,n.root.position.copy(this.pos),Math.random()<.5&&e.fx.spawn(this.pos.x,this.pos.y,this.pos.z,0,.5,0,.8,.5,.15,.14,.13,-.8,1.5,2);let i=e.nav.groundAt(this.pos.x,this.pos.z);(this.pos.y<(i??-1)+.2||this.deadT>2.5)&&(e.fx.explode(this.pos.clone(),.7),this.dispose())}else{let i=Math.min(1,this.deadT/.5);n.root.rotation.x=-i*i*1.5,n.root.position.y=this.pos.y+Math.sin(i*1.57)*.15*(1-i)+i*.28*this.cfg.scale,n.arms.rotation.x=i*1.1,n.legs.forEach((r,o)=>{r.hip.rotation.x=i*(o?.5:-.3),r.knee.rotation.x=i*.8}),this.deadT<1.2&&Math.random()<.35&&e.fx.spawn(this.pos.x,this.pos.y+.4,this.pos.z,Math.random()-.5,1,Math.random()-.5,1,.5,.12,.11,.1,-.9,1.5,2),this.deadT>4&&(n.root.position.y-=(this.deadT-4)*.6,this.deadT>5.2&&this.dispose())}}dispose(){this.remove=!0,this.scene.remove(this.m.root)}},da=class{constructor(t,e,n){if(this.scene=t,this.world=e,this.list=[],this.nav=new Sc(e),this.flowT=0,n&&n.has("rustmetal")){let i=n.pbr("rustmetal",{size:512,normal:2.2,rough:.5,roughK:.5});for(let[r,o]of[["armor","#b9c0c0"],["armorHeavy","#c8b99a"]])Object.assign(se[r],{map:i.map,normalMap:i.normalMap,roughnessMap:i.roughnessMap,roughness:1,metalness:.55}),se[r].color.set(o),se[r].needsUpdate=!0}}spawn(t,e){let n=new bc(t,e,this.scene);return this.list.push(n),n}get alive(){let t=0;for(let e of this.list)e.dead||t++;return t}clear(){for(let t of this.list)this.scene.remove(t.m.root);this.list.length=0}update(t,e){this.flowT-=t;let n=e.player;this.flowT<=0&&(this.flowT=.4,this.nav.flow(n.pos.x,n.pos.z,n.onGround?n.pos.y:void 0)),e.nav=this.nav,e.list=this.list;for(let i of this.list)i.update(t,e);for(let i=this.list.length-1;i>=0;i--)this.list[i].remove&&this.list.splice(i,1)}};var wr=new URLSearchParams(location.search),Oe=wr.has("mobile")||matchMedia("(pointer: coarse)").matches&&"ontouchstart"in window,Ma=wr.has("nolock")||Oe,Ht=s=>document.getElementById(s);document.body.classList.toggle("mobile",Oe);var Us=Ht("c"),Cn=new nr({canvas:Us,antialias:!1,powerPreference:"high-performance"});Oe||Zu();Cn.shadowMap.enabled=!0;Cn.shadowMap.type=Wo;Cn.shadowMap.autoUpdate=!1;Cn.toneMapping=fr;Cn.toneMappingExposure=1.05;var _n=new ir,Ge=new Re(76,1,.04,3e3);_n.add(Ge);var Pr=await ku({lite:Oe,renderer:Cn},(s,t)=>{let e=Math.round(s/t*100);Ht("loadTxt").textContent=`\u8F7D\u5165\u897F\u5173 ${e}%`,Ht("loadBar").style.width=e+"%"});Ht("loadTxt").textContent="\u642D\u5EFA\u8857\u9053 \u2026";await new Promise(s=>setTimeout(s,30));var Ns=Pr.sky(xi,14);{let s=Ns.horizon,t=s.r*.3+s.g*.55+s.b*.15,e=n=>Math.pow(t+(n-t)*.85,1.12)*1.9*.9;Ns.horizon=new Lt(e(s.r),e(s.g),e(s.b))}var _f=.0058;_n.fog=new Ro(Ns.horizon,_f);Cn.setClearColor(Ns.horizon);{let s=new gs(Cn);_n.environment=s.fromEquirectangular(Ns.tex).texture,s.dispose()}_n.add(new ko("#aab6cc","#8f7a66",.42));var si=new Go("#ffd0a0",5.6);si.position.copy(xi).multiplyScalar(110);si.castShadow=!0;si.shadow.mapSize.set(Oe?2048:4096,Oe?2048:4096);Object.assign(si.shadow.camera,{left:-66,right:66,top:50,bottom:-50,near:1,far:260});si.shadow.bias=-5e-4;si.shadow.normalBias=.05;_n.add(si,si.target);var We=lf(_n,Pr,Ns,{lite:Oe});We.setFog(_f);var tn=new la(_n,We),Me=new ca(wr.has("mute")),yf=new ir,Mi=new Re(76,1,.04,10);yf.add(Mi);var ii=Ku(Cn,_n,Ge,si,{scene:yf,camera:Mi},{samples:Oe?0:4}),Lr=$u(Cn,_n,Ge);We.refl.tRefl.value=Lr.texture;We.refl.reflMatrix.value=Lr.matrix;var ni=wr.has("q")?+wr.get("q"):Oe?0:2;ii.setQuality(ni);function Ac(){let s=innerWidth,t=innerHeight,e=Math.min(devicePixelRatio||1,Oe||ni>=2?1.5:ni===1?1.25:1);Cn.setPixelRatio(1),Cn.setSize(s*e,t*e,!1),ii.setSize(Math.round(s*e),Math.round(t*e)),Lr.setSize(Math.round(s*e),Math.round(t*e)),Ge.aspect=Mi.aspect=s/t,Ge.updateProjectionMatrix(),Mi.updateProjectionMatrix(),Ht("rotate").style.display=Oe&&t>s?"flex":"none",tn.pmat.uniforms.scale.value=t*e*.75}addEventListener("resize",Ac);Ac();var ma=[{trooper:3},{trooper:4,drone:2},{trooper:5,drone:3,heavy:1},{trooper:6,drone:4,heavy:1},{trooper:8,drone:5,heavy:2}],Hx=Oe?5:7,pt={mode:"load",t:0,time:0,wave:0,phase:"idle",phaseT:0,queue:[],spawnT:0,total:0,killed:0,score:0,kills:0,heads:0,hurtK:0,regenT:0,won:!1,over:!1},ga=0;function Os(s,t="",e=2.4){let n=Ht("toast");n.innerHTML=s+(t?`<small>${t}</small>`:""),n.classList.add("on"),ga=e}function kx(){let s=Ht("fade");s.style.opacity=.85,setTimeout(()=>{s.style.opacity=0},220)}function Tc(s,t){let e=document.createElement("div");for(e.textContent=s,t&&(e.className="hs"),Ht("feed").prepend(e),setTimeout(()=>e.remove(),2400);Ht("feed").children.length>5;)Ht("feed").lastChild.remove()}var va=0,xa=0;function Rc(s){let t=Ht("hit");t.className=s?"kill":"",va=s?.28:.14,Me.hitmark(s)}var Vx=(s,t)=>{if(s==="jump")Me.jump();else if(s==="jump2")Me.jump2(),tn.burst(Bt.pos,8,2,"#d8d0c0",{life:.3,size:.14,grav:0,up:-.5});else if(s==="dash")Me.dash();else if(s==="land")Me.land(),tn.burst(Bt.pos,6,1.4,"#9a8f80",{life:.5,size:.3,grav:-.5,drag:2,grow:1.5});else if(s==="bounce")Me.bounce(),tn.ring(Bt.pos,"#ffffff",3);else if(s==="pound"){tn.ring(Bt.pos,"#ffd9a0",8),tn.burst(Bt.pos,26,5,"#9a8f80",{life:.8,size:.4,up:2,grav:1,drag:2,grow:1.6}),t.tag==="drum"?Me.drum():Me.pound();for(let e of On.list){if(e.dead)continue;let n=e.pos.distanceTo(Bt.pos);if(n<4.6){let i=e.pos.clone().sub(Bt.pos).setY(0).normalize();e.damage(75*(1-n/7),_a,i.multiplyScalar(4))?Mf(e,!1):Rc(!1)}}}else s==="splash"?(Me.splash(),tn.burst(t.setY(-.9),40,5,"#d8ecf5",{up:5,life:.7,size:.2}),kx(),Cc(10,null)):s==="zipStart"&&Me.zip()},Bt=new aa(Ge,We,Vx),me=new ua(Ge,We,tn,Me,Pr,Mi);me.holder.visible=!1;var On=new da(_n,We,Pr),Er=[],Gx=new Qe(.42,.26,.3),uf=Pr.pbr("rustmetal",{size:256,normal:2,rough:.55,roughK:.4}),Wx={ammo:new ae({...uf,color:"#b9b48a",roughness:1,metalness:.4,emissive:"#ffb23c",emissiveIntensity:.22}),med:new ae({...uf,color:"#e6e6e6",roughness:1,metalness:.1,emissive:"#3cff8a",emissiveIntensity:.22})};function pa(s,t){let e=new Jt(Gx,Wx[s]);e.position.copy(t),e.castShadow=!0,_n.add(e),Er.push({kind:s,m:e,t:0,y:t.y})}function Cc(s,t){if(!(pt.over||pt.mode!=="play")){if(Bt.hp=Math.max(0,Bt.hp-s*(Oe?.6:.85)),pt.hurtK=Math.min(1,pt.hurtK+.35+s*.02),pt.regenT=4.5,Me.hurt(),t){let e=-Math.sin(Bt.yaw),n=-Math.cos(Bt.yaw),i=Math.cos(Bt.yaw),r=-Math.sin(Bt.yaw),o=t.x-Bt.pos.x,a=t.z-Bt.pos.z;Ht("dmg").style.transform=`rotate(${Math.atan2(o*i+a*r,o*e+a*n)}rad)`,xa=.9}Bt.hp<=0&&Pc(!1)}}var _a={player:Bt,world:We,fx:tn,sfx:Me,hurt:Cc,t:0,nav:null,list:null};function Mf(s,t){pt.kills++,pt.killed++,t&&pt.heads++;let e=s.cfg.score+(t?50:0);pt.score+=e,Tc(`${t?"\u7206\u5934 ":""}${s.type==="drone"?"\u65E0\u4EBA\u673A":s.type==="heavy"?"\u91CD\u88C5\u673A\u7532":"\u673A\u68B0\u6B65\u5175"}  +${e}`,t),Rc(!0);let n=Math.random(),i=s.pos.clone();i.y=(On.nav.groundAt(i.x,i.z)??i.y)+.35,s.type==="heavy"?(pa("ammo",i),pa("med",i.clone().add(new C(.7,0,.3)))):n<.34?pa("ammo",i):n<.48&&pa("med",i)}var Xx={enemyHit(s,t,e,n,i){tn.sparks(n,e?16:9),tn.burst(n,3,1.2,"#2a2826",{life:.5,size:.25,grav:-.6,drag:2,grow:1.5}),s.damage(t,_a,i)?Mf(s,e):Rc(!1)}},Sf={groundY:0,boltHit(s){let t=Bt.pos;return s.pos.x>t.x-.36&&s.pos.x<t.x+.36&&s.pos.z>t.z-.36&&s.pos.z<t.z+.36&&s.pos.y>t.y&&s.pos.y<t.y+1.75?Bt.dashT>0?!1:(ya.copy(s.pos).addScaledVector(s.vel,-.5),Cc(s.dmg,ya),!0):!1},boom(s){Me.boom(s)}},ya=new C,Ec=new C;function bf(s){pt.wave=s;let t=ma[s-1];pt.queue=[];for(let e of["trooper","drone","heavy"])for(let n=0;n<(t[e]||0);n++)pt.queue.push(e);for(let e=pt.queue.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[pt.queue[e],pt.queue[n]]=[pt.queue[n],pt.queue[e]]}pt.total=pt.queue.length,pt.killed=0,pt.phase="fight",pt.spawnT=.5,Os(`\u7B2C ${s} \u6CE2`,s===ma.length?"\u6700\u540E\u4E00\u6CE2 \xB7 \u5168\u90E8\u51FA\u52A8":"\u654C\u88AD \xB7 \u5B88\u4F4F\u8336\u697C"),Me.wave(),Ht("waveN").textContent=`\u7B2C ${s} / ${ma.length} \u6CE2`}function qx(){let s=pt.queue.pop(),t;if(s==="drone")t=We.airSpawns[Math.floor(Math.random()*We.airSpawns.length)].clone().add(new C((Math.random()-.5)*10,0,(Math.random()-.5)*10));else{let e=We.spawns.filter(a=>Math.hypot(a.x-Bt.pos.x,a.z-Bt.pos.z)>17),n=e.length?e:We.spawns,i=n[Math.floor(Math.random()*n.length)],r=On.nav,o=r.nearest(i.x+(Math.random()-.5)*3,i.z+(Math.random()-.5)*3,void 0,!0);t=o>=0?new C(r.x0+(o%r.nx+.5)*r.cell,r.ground[o],r.z0+((o/r.nx|0)+.5)*r.cell):i.clone(),tn.ring(t,"#6ac8ff",4),tn.burst(t.clone().setY(t.y+1),20,3,"#6ac8ff",{life:.5,size:.12,grav:-3,hdr:4})}On.spawn(s,t)}function Yx(s){if(!pt.over){if(pt.phase==="idle"){pt.phaseT-=s,pt.phaseT<=0?bf(pt.wave+1):Ht("waveS").textContent=`\u4E0B\u4E00\u6CE2 ${Math.ceil(pt.phaseT)} \u79D2`;return}if(pt.phase==="fight"){pt.spawnT-=s,pt.queue.length&&pt.spawnT<=0&&On.alive<Hx&&(qx(),pt.spawnT=1.4+Math.random()*1.4);let t=pt.queue.length+On.alive;if(Ht("waveS").textContent=`\u5269\u4F59\u654C\u4EBA ${t}`,Ht("waveBar").style.width=`${(1-t/pt.total)*100}%`,t===0){if(pt.wave>=ma.length)return Pc(!0);pt.phase="idle",pt.phaseT=8,me.addAmmo(90),Bt.hp=Math.min(100,Bt.hp+40),Os(`\u7B2C ${pt.wave} \u6CE2\u6E05\u9664`,"\u5F39\u836F\u5DF2\u8865\u7ED9"),Me.pickup(),pt.score+=250*pt.wave}}}}function Pc(s){if(pt.over=!0,pt.won=s,pt.endAt=pt.t,s)We.party(),tn.fireworks=!0,Me.win(),Os("\u5B88\u4F4F\u4E86","\u5E7F\u5DDE\u5854\u4E3A\u897F\u5173\u4EAE\u706F",4),Ht("objText").textContent="\u4EFB\u52A1\u5B8C\u6210";else{Os("\u9635\u4EA1","",3);for(let t in Ye)Ye[t]=!1}}function Zx(){let s=me.shots?Math.round(me.hitsN/me.shots*100):0,t=Math.floor(pt.time);Ht("endTag").textContent=pt.won?"MISSION COMPLETE":"MISSION FAILED",Ht("endTitle").textContent=pt.won?"\u5B88\u4F4F\u4E86":"\u8336\u697C\u5931\u5B88",Ht("res").innerHTML=`\u5F97\u5206<b>${pt.score}</b><br>\u51FB\u6740<b>${pt.kills}</b>\u3000\u7206\u5934<b>${pt.heads}</b><br>\u547D\u4E2D\u7387<b>${s}%</b>\u3000\u7528\u65F6<b>${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}</b><br>${pt.won?"":`\u5012\u5728\u7B2C <b>${pt.wave}</b> \u6CE2`}`,Ht("roamBtn").style.display=pt.won?"":"none",Si("end")}var Ye={},Rn={},Ar=0,Rr=0,Sa=!1,ba=!1,Lc=!1,ff=[],wc={shoot:!1,ads:!1};addEventListener("keydown",s=>{["Space","Tab","ArrowUp","ArrowDown"].includes(s.code)&&s.preventDefault(),Ye[s.code]||(Rn[s.code]=!0),Ye[s.code]=!0,s.code==="KeyM"&&Me.setMuted(!Me.muted),s.code==="KeyH"&&(Ht("keys").style.opacity=Ht("keys").style.opacity==="0"?.7:0),s.code==="KeyG"&&(ni=(ni+2)%3,ii.setQuality(ni),Ac(),Os(["\u753B\u8D28 \xB7 \u4F4E","\u753B\u8D28 \xB7 \u4E2D","\u753B\u8D28 \xB7 \u9AD8"][ni],"",1.2))});addEventListener("keyup",s=>{Ye[s.code]=!1});addEventListener("blur",()=>{for(let s in Ye)Ye[s]=!1;Sa=ba=!1});var Cr=()=>document.pointerLockElement===Us;addEventListener("mousemove",s=>{pt.mode==="play"&&(Cr()||Ma&&Lc)&&(Ar+=s.movementX,Rr+=s.movementY)});Us.addEventListener("mousedown",s=>{if(pt.mode==="play"){if(!Cr()&&!Ma){Us.requestPointerLock();return}s.button===0&&(Sa=!0,Lc=!0),s.button===2&&(ba=!0)}});addEventListener("mouseup",s=>{s.button===0&&(Sa=!1,Lc=!1),s.button===2&&(ba=!1)});addEventListener("contextmenu",s=>s.preventDefault());document.addEventListener("pointerlockchange",()=>{!Cr()&&pt.mode==="play"&&!Ma&&Si("pause")});var ie={stick:null,look:new Map,mv:{x:0,y:0},btn:{},edge:{},adsOn:!1};if(Oe){let s=Ht("touch"),t=Ht("stick"),e=58;s.addEventListener("touchstart",i=>{if(i.preventDefault(),pt.mode==="play")for(let r of i.changedTouches){let o=r.target.closest?r.target.closest("[data-b]"):null;if(o){let a=o.dataset.b;if(a==="pause"){Si("pause");continue}a==="ads"?(ie.adsOn=!ie.adsOn,o.classList.toggle("on",ie.adsOn)):(ie.btn[a]=!0,ie.edge[a]=!0,o.classList.add("on")),ie.look.set(r.identifier,{x:r.clientX,y:r.clientY,b:a,el:o})}else r.clientX<innerWidth*.42&&!ie.stick?(ie.stick={id:r.identifier,x0:r.clientX,y0:r.clientY},t.style.display="block",t.style.left=r.clientX+"px",t.style.top=r.clientY+"px",t.firstElementChild.style.transform=""):ie.look.set(r.identifier,{x:r.clientX,y:r.clientY})}},{passive:!1}),s.addEventListener("touchmove",i=>{i.preventDefault();for(let r of i.changedTouches)if(ie.stick&&r.identifier===ie.stick.id){let o=(r.clientX-ie.stick.x0)/e,a=(r.clientY-ie.stick.y0)/e,l=Math.hypot(o,a);l>1&&(o/=l,a/=l),ie.mv.x=o,ie.mv.y=a,t.firstElementChild.style.transform=`translate(${o*e}px,${a*e}px)`}else{let o=ie.look.get(r.identifier);o&&(Ar+=(r.clientX-o.x)*2.6,Rr+=(r.clientY-o.y)*2.6,o.x=r.clientX,o.y=r.clientY)}},{passive:!1});let n=i=>{i.preventDefault();for(let r of i.changedTouches)if(ie.stick&&r.identifier===ie.stick.id)ie.stick=null,ie.mv.x=ie.mv.y=0,t.style.display="none";else{let o=ie.look.get(r.identifier);o&&(o.b&&o.b!=="ads"&&(ie.btn[o.b]=!1,o.el.classList.remove("on")),ie.look.delete(r.identifier))}};s.addEventListener("touchend",n,{passive:!1}),s.addEventListener("touchcancel",n,{passive:!1})}function Si(s){if(pt.mode=s,Ht("loading").style.display="none",Ht("title").style.display=s==="title"?"flex":"none",Ht("pause").style.display=s==="pause"?"flex":"none",Ht("end").style.display=s==="end"?"flex":"none",Ht("hud").style.display=s==="title"?"none":"block",me.holder.visible=s!=="title",Ht("touch").style.display=Oe&&s==="play"?"block":"none",s==="play"&&!Ma&&!Cr())try{let t=Us.requestPointerLock();t&&t.catch&&t.catch(()=>{})}catch{}s!=="play"&&Cr()&&document.exitPointerLock()}function Ef(){if(Oe)try{let s=document.documentElement.requestFullscreen&&document.documentElement.requestFullscreen();s&&s.then&&s.then(()=>screen.orientation&&screen.orientation.lock&&screen.orientation.lock("landscape").catch(()=>{})).catch(()=>{})}catch{}Me.init(),Me.music(),Si("play"),pt.wave===0&&pt.phase==="idle"&&pt.phaseT===0&&(pt.phaseT=4,Os("\u5B88\u4F4F\u8336\u697C","\u673A\u68B0\u5DE1\u903B\u961F\u6B63\u5728\u903C\u8FD1",3),setTimeout(()=>{Ht("keys").style.opacity=0},16e3))}Ht("startBtn").onclick=Ef;Ht("resumeBtn").onclick=()=>Si("play");Ht("roamBtn").onclick=()=>{pt.endShown=!0,Si("play")};Ht("againBtn").onclick=()=>location.reload();function $x(s){let t=.0022*(1-me.ads*.45);if(Oe){Ge.getWorldDirection(ya);let i=!1;for(let r of On.list){if(r.dead)continue;Ec.copy(r.center).sub(Ge.position);let o=Ec.length();if(o<60&&Ec.dot(ya)/o>.9975){i=!0;break}}i&&(t*=.5)}let e={fwd:(Ye.KeyW||Ye.ArrowUp?1:0)-(Ye.KeyS||Ye.ArrowDown?1:0),right:(Ye.KeyD?1:0)-(Ye.KeyA?1:0),jump:!!Rn.Space,jumpHeld:!!Ye.Space,dash:!!(Rn.ShiftLeft||Rn.ShiftRight),sprint:!!(Ye.ShiftLeft||Ye.ShiftRight),pound:!!Rn.KeyC,lookX:Ar*t,lookY:Rr*t,shoot:Sa||wc.shoot,ads:ba||wc.ads,reload:!!Rn.KeyR,interact:!!Rn.KeyE},n=navigator.getGamepads?[...navigator.getGamepads()].find(i=>i&&i.connected):null;if(n){let i=l=>Math.abs(l)<.16?0:l,r=l=>!!(n.buttons[l]&&n.buttons[l].pressed),o=l=>r(l)&&!ff[l];e.right+=i(n.axes[0]),e.fwd-=i(n.axes[1]);let a=1-me.ads*.5;e.lookX+=i(n.axes[2])*2.8*s*a,e.lookY+=i(n.axes[3])*2.2*s*a,e.jump=e.jump||o(0),e.jumpHeld=e.jumpHeld||r(0),e.dash=e.dash||o(4),e.sprint=e.sprint||r(4)||r(10),e.pound=e.pound||o(1),e.shoot=e.shoot||r(7),e.ads=e.ads||r(6),e.reload=e.reload||o(2),e.interact=e.interact||o(3),ff=n.buttons.map(l=>l.pressed)}Oe&&(e.right+=ie.mv.x,e.fwd-=ie.mv.y,e.sprint=e.sprint||ie.mv.y<-.92,e.shoot=e.shoot||!!ie.btn.fire,e.ads=e.ads||ie.adsOn,e.jump=e.jump||!!ie.edge.jump,e.jumpHeld=e.jumpHeld||!!ie.btn.jump,e.dash=e.dash||!!ie.edge.dash,e.reload=e.reload||!!ie.edge.reload,e.pound=e.pound||!!ie.edge.pound,ie.edge={}),Ar=Rr=0;for(let i in Rn)delete Rn[i];return pt.over&&!pt.won&&(e.fwd=e.right=0,e.shoot=e.ads=e.jump=e.dash=e.pound=!1),e}var df=-1,pf=-1,mf=-1,gf=-1;function Kx(s,t){pt.over||(pt.time+=s),_a.t=pt.t;for(let o of We.movers)o.update(s,pt.t),Bt.ground===o.col&&Bt.pos.add(o.delta);Bt.adsK=me.ads,Bt.update(s,t),me.update(s,t,Bt,On,Xx),On.update(s,_a),Yx(s),Sf.groundY=Bt.onGround?Bt.pos.y:0,pt.regenT-=s,pt.regenT<=0&&Bt.hp>0&&Bt.hp<100&&(Bt.hp=Math.min(100,Bt.hp+14*s)),pt.hurtK*=Math.exp(-s*2.2);for(let o=Er.length-1;o>=0;o--){let a=Er[o];a.t+=s,a.m.rotation.y+=s*1.6,a.m.position.y=a.y+Math.sin(a.t*3)*.08,a.m.position.distanceTo(Bt.center)<1.7?(a.kind==="ammo"?(me.addAmmo(30),Tc("\u5F39\u836F +30")):(Bt.hp=Math.min(100,Bt.hp+35),Tc("\u751F\u547D +35")),Me.ammo(),_n.remove(a.m),Er.splice(o,1)):a.t>30&&(_n.remove(a.m),Er.splice(o,1))}let e="";me.reloading?e="\u6362\u5F39\u4E2D":me.ammo===0&&me.reserve===0&&(e="\u5F39\u836F\u8017\u5C3D \xB7 \u7528 <kbd>C</kbd> \u4E0B\u7838\u6216\u627E\u8865\u7ED9");let n=Ht("prompt");e?(n.innerHTML!==e&&(n.innerHTML=e),n.style.display="block"):n.style.display="none",me.ammo!==df&&(df=me.ammo,Ht("ammoN").textContent=me.ammo,Ht("ammoN").className="n"+(me.ammo<=8?" low":"")),me.reserve!==pf&&(pf=me.reserve,Ht("ammoR").textContent="/ "+me.reserve);let i=Math.ceil(Bt.hp);i!==mf&&(mf=i,Ht("hpN").textContent=i,Ht("hpBar").style.width=i+"%",Ht("hpBar").style.background=i<35?"#ff5a3c":""),pt.score!==gf&&(gf=pt.score,Ht("scoreN").textContent=pt.score);let r=Ht("cross");r.style.opacity=Math.max(0,1-me.ads*2.2)*(me.reloading?.4:1),r.style.setProperty("--g",`${4+(me.spread||0)*520}px`),va>0?(va-=s,Ht("hit").style.opacity=Math.min(1,va*9)):Ht("hit").style.opacity=0,xa>0?(xa-=s,Ht("dmg").style.opacity=Math.min(1,xa*1.6)):Ht("dmg").style.opacity=0,ii.grade.uniforms.hurt.value=pt.hurtK+(pt.over&&!pt.won?.8:0),ii.grade.uniforms.lowHp.value=un.clamp(1-Bt.hp/45,0,1),pt.over&&!pt.endShown&&pt.t-pt.endAt>(pt.won?6:2.2)&&(pt.endShown=!0,Zx())}function Tr(s){if(pt.t+=s,pt.mode==="play")Kx(s,$x(s));else{for(let t in Rn)delete Rn[t];if(Ar=Rr=0,pt.mode==="title"){let t=pt.t*.045;Ge.position.set(-21+Math.sin(t)*7,6.5+Math.sin(pt.t*.2)*.6,12+Math.cos(t)*3.5),Ge.lookAt(6,4.5,-4+Math.sin(t)*6),Ge.fov=58,Ge.updateProjectionMatrix();for(let e of We.movers)e.update(s,pt.t)}}ga>0&&(ga-=s,ga<=0&&Ht("toast").classList.remove("on")),We.update(s,pt.t,Ge.position),tn.update(s,pt.t,Sf),!pt.noRender&&(Mi.fov!==Ge.fov&&(Mi.fov=Ge.fov,Mi.updateProjectionMatrix()),We.refl.reflOn.value=ni>=2?1:0,ni>=2&&Lr.render(),ii.setMotion((Bt.yaw-vf)/Math.max(s,.001),(Bt.pitch-xf)/Math.max(s,.001),Ge,pt.mode==="play"),vf=Bt.yaw,xf=Bt.pitch,ii.update(pt.t,xi),ii.render())}var vf=0,xf=0,Jx=new Ts;function Tf(){Tr(Math.min(Jx.getDelta(),.05)),requestAnimationFrame(Tf)}Si("title");requestAnimationFrame(Tf);window.__g={K:Ye,pressed:Rn,dbg:wc,TS:ie,MOBILE:Oe,refl:Lr,S:pt,player:Bt,world:We,fx:tn,camera:Ge,weapon:me,enemies:On,post:ii,start:Ef,setMode:Si,gameOver:Pc,startWave:bf,tick:Tr,step(s=1,t=1/60){for(let e=0;e<s;e++)Tr(t)},sim(s=1,t=1/60){pt.noRender=!0;for(let e=0;e<s;e++)Tr(t);pt.noRender=!1},async shot(s){Tr(1/60);let t=document.createElement("canvas");return t.width=1280,t.height=720,t.getContext("2d").drawImage(Us,0,0,1280,720),await fetch("/__shot?name="+s,{method:"POST",body:t.toDataURL("image/jpeg",.88)}),s},tp(s,t,e,n=Bt.yaw,i=0){Bt.zip=null,Bt.pos.set(s,t,e),Bt.vel.set(0,0,0),Bt.yaw=n,Bt.pitch=i},spawn(s,t,e,n){return On.spawn(s,new C(t,e,n))}};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
