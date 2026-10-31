(()=>{var Ml="160",Qi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ts={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Q4=0,g2=1,th=2;var ju=1,Br=2,jn=3,Rn=0,Fe=1,He=2;var xi=0,Ts=1,x2=2,_2=3,y2=4,eh=5,Vi=100,nh=101,ih=102,v2=103,M2=104,sh=200,rh=201,oh=202,ah=203,Pc=204,Lc=205,ch=206,lh=207,uh=208,hh=209,fh=210,dh=211,ph=212,mh=213,gh=214,xh=0,_h=1,yh=2,Io=3,vh=4,Mh=5,bh=6,Sh=7,Qu=0,Eh=1,wh=2,_i=0,Th=1,Ah=2,Rh=3,Fs=4,Ch=5,Ph=6;var t1=300,Cs=301,Ps=302,Ic=303,Dc=304,la=306,vr=1e3,Tn=1001,Uc=1002,Qe=1003,b2=1004;var Za=1005;var xn=1006,Lh=1007;var Mr=1008;var yi=1009,Ih=1010,Dh=1011,bl=1012,e1=1013,mi=1014,gi=1015,br=1016,n1=1017,i1=1018,Wi=1020,Uh=1021,An=1023,Nh=1024,Bh=1025,Xi=1026,Ls=1027,Oh=1028,s1=1029,Fh=1030,r1=1031,o1=1033,Ja=33776,Ka=33777,ja=33778,Qa=33779,S2=35840,E2=35841,w2=35842,T2=35843,a1=36196,A2=37492,R2=37496,C2=37808,P2=37809,L2=37810,I2=37811,D2=37812,U2=37813,N2=37814,B2=37815,O2=37816,F2=37817,z2=37818,k2=37819,H2=37820,V2=37821,tc=36492,G2=36494,W2=36495,zh=36283,X2=36284,q2=36285,Y2=36286;var Do=2300,Uo=2301,ec=2302,$2=2400,Z2=2401,J2=2402;var c1=3e3,qi=3001,kh=3200,Hh=3201,l1=0,Vh=1,_n="",Re="srgb",ti="srgb-linear",Sl="display-p3",ua="display-p3-linear",No="linear",pe="srgb",Bo="rec709",Oo="p3";var os=7680;var K2=519,Gh=512,Wh=513,Xh=514,u1=515,qh=516,Yh=517,$h=518,Zh=519,j2=35044;var Q2="300 es",Nc=1035,Qn=2e3,Fo=2001,On=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tu=1234567,dr=Math.PI/180,Sr=180/Math.PI;function es(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qe[i&255]+qe[i>>8&255]+qe[i>>16&255]+qe[i>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[e&63|128]+qe[e>>8&255]+"-"+qe[e>>16&255]+qe[e>>24&255]+qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]).toLowerCase()}function Ce(i,t,e){return Math.max(t,Math.min(e,i))}function El(i,t){return(i%t+t)%t}function Jh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Kh(i,t,e){return i!==t?(e-i)/(t-i):0}function pr(i,t,e){return(1-e)*i+e*t}function jh(i,t,e,n){return pr(i,t,1-Math.exp(-e*n))}function Qh(i,t=1){return t-Math.abs(El(i,t*2)-t)}function tf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ef(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function nf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function sf(i,t){return i+Math.random()*(t-i)}function rf(i){return i*(.5-Math.random())}function of(i){i!==void 0&&(tu=i);let t=tu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function af(i){return i*dr}function cf(i){return i*Sr}function Bc(i){return(i&i-1)===0&&i!==0}function lf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function zo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function uf(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*h,c*f,a*l);break;case"YZY":i.set(c*f,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*f,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function bs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ke(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var be={DEG2RAD:dr,RAD2DEG:Sr,generateUUID:es,clamp:Ce,euclideanModulo:El,mapLinear:Jh,inverseLerp:Kh,lerp:pr,damp:jh,pingpong:Qh,smoothstep:tf,smootherstep:ef,randInt:nf,randFloat:sf,randFloatSpread:rf,seededRandom:of,degToRad:af,radToDeg:cf,isPowerOfTwo:Bc,ceilPowerOfTwo:lf,floorPowerOfTwo:zo,setQuaternionFromProperEuler:uf,normalize:Ke,denormalize:bs},ct=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ne=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],y=s[1],x=s[4],v=s[7],E=s[2],w=s[5],b=s[8];return r[0]=o*_+a*y+c*E,r[3]=o*m+a*x+c*w,r[6]=o*p+a*v+c*b,r[1]=l*_+u*y+h*E,r[4]=l*m+u*x+h*w,r[7]=l*p+u*v+h*b,r[2]=f*_+d*y+g*E,r[5]=f*m+d*x+g*w,r[8]=f*p+d*v+g*b,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,f=a*c-u*r,d=l*r-o*c,g=e*h+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=h*_,t[1]=(s*l-u*n)*_,t[2]=(a*n-s*o)*_,t[3]=f*_,t[4]=(u*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(nc.makeScale(t,e)),this}rotate(t){return this.premultiply(nc.makeRotation(-t)),this}translate(t,e){return this.premultiply(nc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},nc=new ne;function h1(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ko(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function hf(){let i=ko("canvas");return i.style.display="block",i}var eu={};function mr(i){i in eu||(eu[i]=!0,console.warn(i))}var nu=new ne().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),iu=new ne().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),io={[ti]:{transfer:No,primaries:Bo,toReference:i=>i,fromReference:i=>i},[Re]:{transfer:pe,primaries:Bo,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ua]:{transfer:No,primaries:Oo,toReference:i=>i.applyMatrix3(iu),fromReference:i=>i.applyMatrix3(nu)},[Sl]:{transfer:pe,primaries:Oo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(iu),fromReference:i=>i.applyMatrix3(nu).convertLinearToSRGB()}},ff=new Set([ti,ua]),he={enabled:!0,_workingColorSpace:ti,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!ff.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=io[t].toReference,s=io[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return io[i].primaries},getTransfer:function(i){return i===_n?No:io[i].transfer}};function As(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ic(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var as,Ho=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{as===void 0&&(as=ko("canvas")),as.width=t.width,as.height=t.height;let n=as.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=as}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ko("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=As(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(As(e[n]/255)*255):e[n]=As(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},df=0,Vo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=es(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(sc(s[o].image)):r.push(sc(s[o]))}else r=sc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function sc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ho.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var pf=0,yn=class i extends On{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Tn,s=Tn,r=xn,o=Mr,a=An,c=yi,l=i.DEFAULT_ANISOTROPY,u=_n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=es(),this.name="",this.source=new Vo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===qi?Re:_n),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==t1)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vr:t.x=t.x-Math.floor(t.x);break;case Tn:t.x=t.x<0?0:1;break;case Uc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vr:t.y=t.y-Math.floor(t.y);break;case Tn:t.y=t.y<0?0:1;break;case Uc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Re?qi:c1}set encoding(t){mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===qi?Re:_n}};yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=t1;yn.DEFAULT_ANISOTROPY=1;var ge=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(l+1)/2,v=(d+1)/2,E=(p+1)/2,w=(u+f)/4,b=(h+_)/4,I=(g+m)/4;return x>v&&x>E?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=w/n,r=b/n):v>E?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=w/s,r=I/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=b/r,s=I/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-_)/y,this.z=(f-u)/y,this.w=Math.acos((l+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Oc=class extends On{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(mr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===qi?Re:_n),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new yn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Vo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ei=class extends Oc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Go=class extends yn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fc=class extends yn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var sn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3],f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(h!==_||c!==f||l!==d||u!==g){let m=1-a,p=c*f+l*d+u*g+h*_,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let E=Math.sqrt(x),w=Math.atan2(E,p*y);m=Math.sin(m*w)/E,a=Math.sin(a*w)/E}let v=a*y;if(c=c*m+f*v,l=l*m+d*v,u=u*m+g*v,h=h*m+_*v,m===1-a){let E=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=E,l*=E,u*=E,h*=E}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*h+c*d-l*f,t[e+1]=c*g+u*f+l*h-a*d,t[e+2]=l*g+u*d+a*f-c*h,t[e+3]=u*g-a*h-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(su.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(su.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return rc.copy(this).projectOnVector(t),this.sub(rc)}reflect(t){return this.sub(rc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},rc=new T,su=new sn,se=class{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Sn):Sn.fromBufferAttribute(r,o),Sn.applyMatrix4(t.matrixWorld),this.expandByPoint(Sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),so.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),so.copy(n.boundingBox)),so.applyMatrix4(t.matrixWorld),this.union(so)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(cr),ro.subVectors(this.max,cr),cs.subVectors(t.a,cr),ls.subVectors(t.b,cr),us.subVectors(t.c,cr),ui.subVectors(ls,cs),hi.subVectors(us,ls),Oi.subVectors(cs,us);let e=[0,-ui.z,ui.y,0,-hi.z,hi.y,0,-Oi.z,Oi.y,ui.z,0,-ui.x,hi.z,0,-hi.x,Oi.z,0,-Oi.x,-ui.y,ui.x,0,-hi.y,hi.x,0,-Oi.y,Oi.x,0];return!oc(e,cs,ls,us,ro)||(e=[1,0,0,0,1,0,0,0,1],!oc(e,cs,ls,us,ro))?!1:(oo.crossVectors(ui,hi),e=[oo.x,oo.y,oo.z],oc(e,cs,ls,us,ro))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Yn=[new T,new T,new T,new T,new T,new T,new T,new T],Sn=new T,so=new se,cs=new T,ls=new T,us=new T,ui=new T,hi=new T,Oi=new T,cr=new T,ro=new T,oo=new T,Fi=new T;function oc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Fi.fromArray(i,r);let a=s.x*Math.abs(Fi.x)+s.y*Math.abs(Fi.y)+s.z*Math.abs(Fi.z),c=t.dot(Fi),l=e.dot(Fi),u=n.dot(Fi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var mf=new se,lr=new T,ac=new T,vi=class{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):mf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;lr.subVectors(t,this.center);let e=lr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(lr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ac.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(lr.copy(t.center).add(ac)),this.expandByPoint(lr.copy(t.center).sub(ac))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},$n=new T,cc=new T,ao=new T,fi=new T,lc=new T,co=new T,uc=new T,ni=class{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=$n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):($n.copy(this.origin).addScaledVector(this.direction,e),$n.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){cc.copy(t).add(e).multiplyScalar(.5),ao.copy(e).sub(t).normalize(),fi.copy(this.origin).sub(cc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ao),a=fi.dot(this.direction),c=-fi.dot(ao),l=fi.lengthSq(),u=Math.abs(1-o*o),h,f,d,g;if(u>0)if(h=o*c-a,f=o*a-c,g=r*u,h>=0)if(f>=-g)if(f<=g){let _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(cc).addScaledVector(ao,f),d}intersectSphere(t,e){$n.subVectors(t.center,this.origin);let n=$n.dot(this.direction),s=$n.dot($n)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,$n)!==null}intersectTriangle(t,e,n,s,r){lc.subVectors(e,t),co.subVectors(n,t),uc.crossVectors(lc,co);let o=this.direction.dot(uc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fi.subVectors(this.origin,t);let c=a*this.direction.dot(co.crossVectors(fi,co));if(c<0)return null;let l=a*this.direction.dot(lc.cross(fi));if(l<0||c+l>o)return null;let u=-a*fi.dot(uc);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xt=class i{constructor(t,e,n,s,r,o,a,c,l,u,h,f,d,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,h,f,d,g,_,m)}set(t,e,n,s,r,o,a,c,l,u,h,f,d,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/hs.setFromMatrixColumn(t,0).length(),r=1/hs.setFromMatrixColumn(t,1).length(),o=1/hs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let f=o*u,d=o*h,g=a*u,_=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=d+g*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*u,d=c*h,g=l*u,_=l*h;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*u,d=c*h,g=l*u,_=l*h;e[0]=f-_*a,e[4]=-o*h,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*u,d=o*h,g=a*u,_=a*h;e[0]=c*u,e[4]=g*l-d,e[8]=f*l+_,e[1]=c*h,e[5]=_*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=_-f*h,e[8]=g*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*h+g,e[10]=f-_*h}else if(t.order==="XZY"){let f=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+_,e[5]=o*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=a*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gf,t,xf)}lookAt(t,e,n){let s=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),di.crossVectors(n,un),di.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),di.crossVectors(n,un)),di.normalize(),lo.crossVectors(un,di),s[0]=di.x,s[4]=lo.x,s[8]=un.x,s[1]=di.y,s[5]=lo.y,s[9]=un.y,s[2]=di.z,s[6]=lo.z,s[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],x=n[7],v=n[11],E=n[15],w=s[0],b=s[4],I=s[8],M=s[12],S=s[1],D=s[5],N=s[9],V=s[13],L=s[2],O=s[6],$=s[10],st=s[14],it=s[3],et=s[7],lt=s[11],ht=s[15];return r[0]=o*w+a*S+c*L+l*it,r[4]=o*b+a*D+c*O+l*et,r[8]=o*I+a*N+c*$+l*lt,r[12]=o*M+a*V+c*st+l*ht,r[1]=u*w+h*S+f*L+d*it,r[5]=u*b+h*D+f*O+d*et,r[9]=u*I+h*N+f*$+d*lt,r[13]=u*M+h*V+f*st+d*ht,r[2]=g*w+_*S+m*L+p*it,r[6]=g*b+_*D+m*O+p*et,r[10]=g*I+_*N+m*$+p*lt,r[14]=g*M+_*V+m*st+p*ht,r[3]=y*w+x*S+v*L+E*it,r[7]=y*b+x*D+v*O+E*et,r[11]=y*I+x*N+v*$+E*lt,r[15]=y*M+x*V+v*st+E*ht,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*h-s*l*h-r*a*f+n*l*f+s*a*d-n*c*d)+_*(+e*c*d-e*l*f+r*o*f-s*o*d+s*l*u-r*c*u)+m*(+e*l*h-e*a*d-r*o*h+n*o*d+r*a*u-n*l*u)+p*(-s*a*u-e*c*h+e*a*f+s*o*h-n*o*f+n*c*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],y=h*m*l-_*f*l+_*c*d-a*m*d-h*c*p+a*f*p,x=g*f*l-u*m*l-g*c*d+o*m*d+u*c*p-o*f*p,v=u*_*l-g*h*l+g*a*d-o*_*d-u*a*p+o*h*p,E=g*h*c-u*_*c-g*a*f+o*_*f+u*a*m-o*h*m,w=e*y+n*x+s*v+r*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/w;return t[0]=y*b,t[1]=(_*f*r-h*m*r-_*s*d+n*m*d+h*s*p-n*f*p)*b,t[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*p+n*c*p)*b,t[3]=(h*c*r-a*f*r-h*s*l+n*f*l+a*s*d-n*c*d)*b,t[4]=x*b,t[5]=(u*m*r-g*f*r+g*s*d-e*m*d-u*s*p+e*f*p)*b,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*b,t[7]=(o*f*r-u*c*r+u*s*l-e*f*l-o*s*d+e*c*d)*b,t[8]=v*b,t[9]=(g*h*r-u*_*r-g*n*d+e*_*d+u*n*p-e*h*p)*b,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*p+e*a*p)*b,t[11]=(u*a*r-o*h*r-u*n*l+e*h*l+o*n*d-e*a*d)*b,t[12]=E*b,t[13]=(u*_*s-g*h*s+g*n*f-e*_*f-u*n*m+e*h*m)*b,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*b,t[15]=(o*h*s-u*a*s+u*n*c-e*h*c-o*n*f+e*a*f)*b,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,f=r*l,d=r*u,g=r*h,_=o*u,m=o*h,p=a*h,y=c*l,x=c*u,v=c*h,E=n.x,w=n.y,b=n.z;return s[0]=(1-(_+p))*E,s[1]=(d+v)*E,s[2]=(g-x)*E,s[3]=0,s[4]=(d-v)*w,s[5]=(1-(f+p))*w,s[6]=(m+y)*w,s[7]=0,s[8]=(g+x)*b,s[9]=(m-y)*b,s[10]=(1-(f+_))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=hs.set(s[0],s[1],s[2]).length(),o=hs.set(s[4],s[5],s[6]).length(),a=hs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],En.copy(this);let l=1/r,u=1/o,h=1/a;return En.elements[0]*=l,En.elements[1]*=l,En.elements[2]*=l,En.elements[4]*=u,En.elements[5]*=u,En.elements[6]*=u,En.elements[8]*=h,En.elements[9]*=h,En.elements[10]*=h,e.setFromRotationMatrix(En),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Qn){let c=this.elements,l=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s),d,g;if(a===Qn)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Fo)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Qn){let c=this.elements,l=1/(e-t),u=1/(n-s),h=1/(o-r),f=(e+t)*l,d=(n+s)*u,g,_;if(a===Qn)g=(o+r)*h,_=-2*h;else if(a===Fo)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},hs=new T,En=new Xt,gf=new T(0,0,0),xf=new T(1,1,1),di=new T,lo=new T,un=new T,ru=new Xt,ou=new sn,Wo=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ce(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ce(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ru.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ru,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ou.setFromEuler(this),this.setFromQuaternion(ou,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wo.DEFAULT_ORDER="XYZ";var Er=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},_f=0,au=new T,fs=new sn,Zn=new Xt,uo=new T,ur=new T,yf=new T,vf=new sn,cu=new T(1,0,0),lu=new T(0,1,0),uu=new T(0,0,1),Mf={type:"added"},bf={type:"removed"},$e=class i extends On{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new T,e=new Wo,n=new sn,s=new T(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Xt},normalMatrix:{value:new ne}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Er,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.multiply(fs),this}rotateOnWorldAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.premultiply(fs),this}rotateX(t){return this.rotateOnAxis(cu,t)}rotateY(t){return this.rotateOnAxis(lu,t)}rotateZ(t){return this.rotateOnAxis(uu,t)}translateOnAxis(t,e){return au.copy(t).applyQuaternion(this.quaternion),this.position.add(au.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(cu,t)}translateY(t){return this.translateOnAxis(lu,t)}translateZ(t){return this.translateOnAxis(uu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?uo.copy(t):uo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(ur,uo,this.up):Zn.lookAt(uo,ur,this.up),this.quaternion.setFromRotationMatrix(Zn),s&&(Zn.extractRotation(s.matrixWorld),fs.setFromRotationMatrix(Zn),this.quaternion.premultiply(fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Mf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(bf)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,t,yf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,vf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};$e.DEFAULT_UP=new T(0,1,0);$e.DEFAULT_MATRIX_AUTO_UPDATE=!0;$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wn=new T,Jn=new T,hc=new T,Kn=new T,ds=new T,ps=new T,hu=new T,fc=new T,dc=new T,pc=new T,ho=!1,fn=class i{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),wn.subVectors(t,e),s.cross(wn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){wn.subVectors(s,e),Jn.subVectors(n,e),hc.subVectors(t,e);let o=wn.dot(wn),a=wn.dot(Jn),c=wn.dot(hc),l=Jn.dot(Jn),u=Jn.dot(hc),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(l*c-a*u)*f,g=(o*u-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getUV(t,e,n,s,r,o,a,c){return ho===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ho=!0),this.getInterpolation(t,e,n,s,r,o,a,c)}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Kn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Kn.x),c.addScaledVector(o,Kn.y),c.addScaledVector(a,Kn.z),c)}static isFrontFacing(t,e,n,s){return wn.subVectors(n,e),Jn.subVectors(t,e),wn.cross(Jn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),wn.cross(Jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return ho===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ho=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;ds.subVectors(s,n),ps.subVectors(r,n),fc.subVectors(t,n);let c=ds.dot(fc),l=ps.dot(fc);if(c<=0&&l<=0)return e.copy(n);dc.subVectors(t,s);let u=ds.dot(dc),h=ps.dot(dc);if(u>=0&&h<=u)return e.copy(s);let f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(ds,o);pc.subVectors(t,r);let d=ds.dot(pc),g=ps.dot(pc);if(g>=0&&d<=g)return e.copy(r);let _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ps,a);let m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return hu.subVectors(r,s),a=(h-u)/(h-u+(d-g)),e.copy(s).addScaledVector(hu,a);let p=1/(m+_+f);return o=_*p,a=f*p,e.copy(n).addScaledVector(ds,o).addScaledVector(ps,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},f1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},fo={h:0,s:0,l:0};function mc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var $t=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Re){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=he.workingColorSpace){if(t=El(t,1),e=Ce(e,0,1),n=Ce(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=mc(o,r,t+1/3),this.g=mc(o,r,t),this.b=mc(o,r,t-1/3)}return he.toWorkingColorSpace(this,s),this}setStyle(t,e=Re){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Re){let n=f1[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=As(t.r),this.g=As(t.g),this.b=As(t.b),this}copyLinearToSRGB(t){return this.r=ic(t.r),this.g=ic(t.g),this.b=ic(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Re){return he.fromWorkingColorSpace(Ye.copy(this),t),Math.round(Ce(Ye.r*255,0,255))*65536+Math.round(Ce(Ye.g*255,0,255))*256+Math.round(Ce(Ye.b*255,0,255))}getHexString(t=Re){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(Ye.copy(this),e);let n=Ye.r,s=Ye.g,r=Ye.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=Re){he.fromWorkingColorSpace(Ye.copy(this),t);let e=Ye.r,n=Ye.g,s=Ye.b;return t!==Re?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(pi),this.setHSL(pi.h+t,pi.s+e,pi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(pi),t.getHSL(fo);let n=pr(pi.h,fo.h,e),s=pr(pi.s,fo.s,e),r=pr(pi.l,fo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ye=new $t;$t.NAMES=f1;var Sf=0,ii=class extends On{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=es(),this.name="",this.type="Material",this.blending=Ts,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pc,this.blendDst=Lc,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=Io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=K2,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(n.blending=this.blending),this.side!==Rn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Pc&&(n.blendSrc=this.blendSrc),this.blendDst!==Lc&&(n.blendDst=this.blendDst),this.blendEquation!==Vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Io&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==K2&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Mi=class extends ii{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ae=new T,po=new ct,we=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=j2,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)po.fromBufferAttribute(this,e),po.applyMatrix3(t),this.setXY(e,po.x,po.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=bs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ke(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=bs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=bs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=bs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=bs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),n=Ke(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),n=Ke(n,this.array),s=Ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),n=Ke(n,this.array),s=Ke(s,this.array),r=Ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==j2&&(t.usage=this.usage),t}};var Xo=class extends we{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var qo=class extends we{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var le=class extends we{constructor(t,e,n){super(new Float32Array(t),e,n)}};var Ef=0,gn=new Xt,gc=new $e,ms=new T,hn=new se,hr=new se,Oe=new T,xe=class i extends On{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=es(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(h1(t)?qo:Xo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ne().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gn.makeRotationFromQuaternion(t),this.applyMatrix4(gn),this}rotateX(t){return gn.makeRotationX(t),this.applyMatrix4(gn),this}rotateY(t){return gn.makeRotationY(t),this.applyMatrix4(gn),this}rotateZ(t){return gn.makeRotationZ(t),this.applyMatrix4(gn),this}translate(t,e,n){return gn.makeTranslation(t,e,n),this.applyMatrix4(gn),this}scale(t,e,n){return gn.makeScale(t,e,n),this.applyMatrix4(gn),this}lookAt(t){return gc.lookAt(t),gc.updateMatrix(),this.applyMatrix4(gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new le(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new se);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new T,1/0);return}if(t){let n=this.boundingSphere.center;if(hn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];hr.setFromBufferAttribute(a),this.morphTargetsRelative?(Oe.addVectors(hn.min,hr.min),hn.expandByPoint(Oe),Oe.addVectors(hn.max,hr.max),hn.expandByPoint(Oe)):(hn.expandByPoint(hr.min),hn.expandByPoint(hr.max))}hn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Oe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Oe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Oe.fromBufferAttribute(a,l),c&&(ms.fromBufferAttribute(t,l),Oe.add(ms)),s=Math.max(s,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new we(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],u=[];for(let S=0;S<a;S++)l[S]=new T,u[S]=new T;let h=new T,f=new T,d=new T,g=new ct,_=new ct,m=new ct,p=new T,y=new T;function x(S,D,N){h.fromArray(s,S*3),f.fromArray(s,D*3),d.fromArray(s,N*3),g.fromArray(o,S*2),_.fromArray(o,D*2),m.fromArray(o,N*2),f.sub(h),d.sub(h),_.sub(g),m.sub(g);let V=1/(_.x*m.y-m.x*_.y);isFinite(V)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-_.y).multiplyScalar(V),y.copy(d).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(V),l[S].add(p),l[D].add(p),l[N].add(p),u[S].add(y),u[D].add(y),u[N].add(y))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let S=0,D=v.length;S<D;++S){let N=v[S],V=N.start,L=N.count;for(let O=V,$=V+L;O<$;O+=3)x(n[O+0],n[O+1],n[O+2])}let E=new T,w=new T,b=new T,I=new T;function M(S){b.fromArray(r,S*3),I.copy(b);let D=l[S];E.copy(D),E.sub(b.multiplyScalar(b.dot(D))).normalize(),w.crossVectors(I,D);let V=w.dot(u[S])<0?-1:1;c[S*4]=E.x,c[S*4+1]=E.y,c[S*4+2]=E.z,c[S*4+3]=V}for(let S=0,D=v.length;S<D;++S){let N=v[S],V=N.start,L=N.count;for(let O=V,$=V+L;O<$;O+=3)M(n[O+0]),M(n[O+1]),M(n[O+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new we(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new T,r=new T,o=new T,a=new T,c=new T,l=new T,u=new T,h=new T;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(a,c){let l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u),d=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*u;for(let p=0;p<u;p++)f[g++]=l[d++]}return new we(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){let f=l[u],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){let d=l[h];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},fu=new Xt,zi=new ni,mo=new vi,du=new T,gs=new T,xs=new T,_s=new T,xc=new T,go=new T,xo=new ct,_o=new ct,yo=new ct,pu=new T,mu=new T,gu=new T,vo=new T,Mo=new T,Qt=class extends $e{constructor(t=new xe,e=new Mi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){go.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],h=r[c];u!==0&&(xc.fromBufferAttribute(h,t),o?go.addScaledVector(xc,u):go.addScaledVector(xc.sub(e),u))}e.add(go)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(r),zi.copy(t.ray).recast(t.near),!(mo.containsPoint(zi.origin)===!1&&(zi.intersectSphere(mo,du)===null||zi.origin.distanceToSquared(du)>(t.far-t.near)**2))&&(fu.copy(r).invert(),zi.copy(t.ray).applyMatrix4(fu),!(n.boundingBox!==null&&zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,zi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,E=x;v<E;v+=3){let w=a.getX(v),b=a.getX(v+1),I=a.getX(v+2);s=bo(this,p,t,n,l,u,h,w,b,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let y=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);s=bo(this,o,t,n,l,u,h,y,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),x=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,E=x;v<E;v+=3){let w=v,b=v+1,I=v+2;s=bo(this,p,t,n,l,u,h,w,b,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let y=m,x=m+1,v=m+2;s=bo(this,o,t,n,l,u,h,y,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function wf(i,t,e,n,s,r,o,a){let c;if(t.side===Fe?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Rn,a),c===null)return null;Mo.copy(a),Mo.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Mo);return l<e.near||l>e.far?null:{distance:l,point:Mo.clone(),object:i}}function bo(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,gs),i.getVertexPosition(c,xs),i.getVertexPosition(l,_s);let u=wf(i,t,e,n,gs,xs,_s,vo);if(u){s&&(xo.fromBufferAttribute(s,a),_o.fromBufferAttribute(s,c),yo.fromBufferAttribute(s,l),u.uv=fn.getInterpolation(vo,gs,xs,_s,xo,_o,yo,new ct)),r&&(xo.fromBufferAttribute(r,a),_o.fromBufferAttribute(r,c),yo.fromBufferAttribute(r,l),u.uv1=fn.getInterpolation(vo,gs,xs,_s,xo,_o,yo,new ct),u.uv2=u.uv1),o&&(pu.fromBufferAttribute(o,a),mu.fromBufferAttribute(o,c),gu.fromBufferAttribute(o,l),u.normal=fn.getInterpolation(vo,gs,xs,_s,pu,mu,gu,new T),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new T,materialIndex:0};fn.getNormal(gs,xs,_s,h.normal),u.face=h}return u}var Pe=class i extends xe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],h=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new le(l,3)),this.setAttribute("normal",new le(u,3)),this.setAttribute("uv",new le(h,2));function g(_,m,p,y,x,v,E,w,b,I,M){let S=v/b,D=E/I,N=v/2,V=E/2,L=w/2,O=b+1,$=I+1,st=0,it=0,et=new T;for(let lt=0;lt<$;lt++){let ht=lt*D-V;for(let Mt=0;Mt<O;Mt++){let j=Mt*S-N;et[_]=j*y,et[m]=ht*x,et[p]=L,l.push(et.x,et.y,et.z),et[_]=0,et[m]=0,et[p]=w>0?1:-1,u.push(et.x,et.y,et.z),h.push(Mt/b),h.push(1-lt/I),st+=1}}for(let lt=0;lt<I;lt++)for(let ht=0;ht<b;ht++){let Mt=f+ht+O*lt,j=f+ht+O*(lt+1),at=f+(ht+1)+O*(lt+1),St=f+(ht+1)+O*lt;c.push(Mt,j,St),c.push(j,at,St),it+=6}a.addGroup(d,it,M),d+=it,f+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Is(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function je(i){let t={};for(let e=0;e<i.length;e++){let n=Is(i[e]);for(let s in n)t[s]=n[s]}return t}function Tf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function d1(i){return i.getRenderTarget()===null?i.outputColorSpace:he.workingColorSpace}var Af={clone:Is,merge:je},Rf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,si=class extends ii{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rf,this.fragmentShader=Cf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Is(t.uniforms),this.uniformsGroups=Tf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Yo=class extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=Qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ie=class extends Yo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Sr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(dr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Sr*2*Math.atan(Math.tan(dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(dr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ys=-90,vs=1,zc=class extends $e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ie(ys,vs,t,e);s.layers=this.layers,this.add(s);let r=new Ie(ys,vs,t,e);r.layers=this.layers,this.add(r);let o=new Ie(ys,vs,t,e);o.layers=this.layers,this.add(o);let a=new Ie(ys,vs,t,e);a.layers=this.layers,this.add(a);let c=new Ie(ys,vs,t,e);c.layers=this.layers,this.add(c);let l=new Ie(ys,vs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Fo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},$o=class extends yn{constructor(t,e,n,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Cs,super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},kc=class extends ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(mr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===qi?Re:_n),this.texture=new $o(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:xn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Pe(5,5,5),r=new si({name:"CubemapFromEquirect",uniforms:Is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:xi});r.uniforms.tEquirect.value=e;let o=new Qt(s,r),a=e.minFilter;return e.minFilter===Mr&&(e.minFilter=xn),new zc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},_c=new T,Pf=new T,Lf=new ne,tn=class{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=_c.subVectors(n,e).cross(Pf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(_c),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Lf.getNormalMatrix(t),s=this.coplanarPoint(_c).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ki=new vi,So=new T,wr=class{constructor(t=new tn,e=new tn,n=new tn,s=new tn,r=new tn,o=new tn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Qn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],f=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],y=s[13],x=s[14],v=s[15];if(n[0].setComponents(c-r,f-l,m-d,v-p).normalize(),n[1].setComponents(c+r,f+l,m+d,v+p).normalize(),n[2].setComponents(c+o,f+u,m+g,v+y).normalize(),n[3].setComponents(c-o,f-u,m-g,v-y).normalize(),n[4].setComponents(c-a,f-h,m-_,v-x).normalize(),e===Qn)n[5].setComponents(c+a,f+h,m+_,v+x).normalize();else if(e===Fo)n[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(t){return ki.center.set(0,0,0),ki.radius=.7071067811865476,ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(So.x=s.normal.x>0?t.max.x:t.min.x,So.y=s.normal.y>0?t.max.y:t.min.y,So.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(So)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function p1(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function If(i,t){let e=t.isWebGL2,n=new WeakMap;function s(l,u){let h=l.array,f=l.usage,d=h.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,h,f),l.onUploadCallback();let _;if(h instanceof Float32Array)_=i.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=i.SHORT;else if(h instanceof Uint32Array)_=i.UNSIGNED_INT;else if(h instanceof Int32Array)_=i.INT;else if(h instanceof Int8Array)_=i.BYTE;else if(h instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:d}}function r(l,u,h){let f=u.array,d=u._updateRange,g=u.updateRanges;if(i.bindBuffer(h,l),d.count===-1&&g.length===0&&i.bufferSubData(h,0,f),g.length!==0){for(let _=0,m=g.length;_<m;_++){let p=g[_];e?i.bufferSubData(h,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):i.bufferSubData(h,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}d.count!==-1&&(e?i.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):i.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){let f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);if(h===void 0)n.set(l,s(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,l,u),h.version=l.version}}return{get:o,remove:a,update:c}}var Fn=class i extends xe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=t/a,f=e/c,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){let y=p*f-o;for(let x=0;x<l;x++){let v=x*h-r;g.push(v,-y,0),_.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){let x=y+l*p,v=y+l*(p+1),E=y+1+l*(p+1),w=y+1+l*p;d.push(x,v,w),d.push(v,E,w)}this.setIndex(d),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Df=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Uf=`#ifdef USE_ALPHAHASH
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
#endif`,Nf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Of=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ff=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zf=`#ifdef USE_AOMAP
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
#endif`,kf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hf=`#ifdef USE_BATCHING
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
#endif`,Vf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Gf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qf=`#ifdef USE_IRIDESCENCE
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
#endif`,Yf=`#ifdef USE_BUMPMAP
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
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,td=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ed=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,nd=`#define PI 3.141592653589793
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
} // validated`,id=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sd=`vec3 transformedNormal = objectNormal;
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
#endif`,rd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,od=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ad=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ld="gl_FragColor = linearToOutputTexel( gl_FragColor );",ud=`
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
}`,hd=`#ifdef USE_ENVMAP
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
#endif`,fd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dd=`#ifdef USE_ENVMAP
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
#endif`,pd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,md=`#ifdef USE_ENVMAP
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
#endif`,gd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_d=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vd=`#ifdef USE_GRADIENTMAP
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
}`,Md=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,bd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ed=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wd=`uniform bool receiveShadow;
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
#endif`,Td=`#ifdef USE_ENVMAP
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
#endif`,Ad=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ld=`PhysicalMaterial material;
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
#endif`,Id=`struct PhysicalMaterial {
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
}`,Dd=`
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
#endif`,Ud=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Od=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,zd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,kd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gd=`#if defined( USE_POINTS_UV )
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
#endif`,Wd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yd=`#ifdef USE_MORPHNORMALS
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
#endif`,$d=`#ifdef USE_MORPHTARGETS
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
#endif`,Zd=`#ifdef USE_MORPHTARGETS
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
#endif`,Jd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Kd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,e0=`#ifdef USE_NORMALMAP
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
#endif`,n0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,i0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,s0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,r0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,o0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,a0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,c0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,l0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,u0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,h0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,f0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,d0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,p0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,m0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,g0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,x0=`float getShadowMask() {
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
}`,_0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,y0=`#ifdef USE_SKINNING
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
#endif`,v0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,M0=`#ifdef USE_SKINNING
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
#endif`,b0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,S0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,E0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,w0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,T0=`#ifdef USE_TRANSMISSION
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
#endif`,A0=`#ifdef USE_TRANSMISSION
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
#endif`,R0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,I0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,D0=`uniform sampler2D t2D;
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
}`,U0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,B0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F0=`#include <common>
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
}`,z0=`#if DEPTH_PACKING == 3200
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
}`,k0=`#define DISTANCE
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
}`,H0=`#define DISTANCE
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
}`,V0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,G0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W0=`uniform float scale;
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
}`,X0=`uniform vec3 diffuse;
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
}`,q0=`#include <common>
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
}`,Y0=`uniform vec3 diffuse;
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
}`,$0=`#define LAMBERT
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
}`,Z0=`#define LAMBERT
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
}`,J0=`#define MATCAP
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
}`,K0=`#define MATCAP
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
}`,j0=`#define NORMAL
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
}`,Q0=`#define NORMAL
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
}`,tp=`#define PHONG
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
}`,ep=`#define PHONG
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
}`,np=`#define STANDARD
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
}`,ip=`#define STANDARD
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
}`,sp=`#define TOON
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
}`,rp=`#define TOON
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
}`,op=`uniform float size;
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
}`,ap=`uniform vec3 diffuse;
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
}`,cp=`#include <common>
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
}`,lp=`uniform vec3 color;
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
}`,up=`uniform float rotation;
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
}`,hp=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:Df,alphahash_pars_fragment:Uf,alphamap_fragment:Nf,alphamap_pars_fragment:Bf,alphatest_fragment:Of,alphatest_pars_fragment:Ff,aomap_fragment:zf,aomap_pars_fragment:kf,batching_pars_vertex:Hf,batching_vertex:Vf,begin_vertex:Gf,beginnormal_vertex:Wf,bsdfs:Xf,iridescence_fragment:qf,bumpmap_pars_fragment:Yf,clipping_planes_fragment:$f,clipping_planes_pars_fragment:Zf,clipping_planes_pars_vertex:Jf,clipping_planes_vertex:Kf,color_fragment:jf,color_pars_fragment:Qf,color_pars_vertex:td,color_vertex:ed,common:nd,cube_uv_reflection_fragment:id,defaultnormal_vertex:sd,displacementmap_pars_vertex:rd,displacementmap_vertex:od,emissivemap_fragment:ad,emissivemap_pars_fragment:cd,colorspace_fragment:ld,colorspace_pars_fragment:ud,envmap_fragment:hd,envmap_common_pars_fragment:fd,envmap_pars_fragment:dd,envmap_pars_vertex:pd,envmap_physical_pars_fragment:Td,envmap_vertex:md,fog_vertex:gd,fog_pars_vertex:xd,fog_fragment:_d,fog_pars_fragment:yd,gradientmap_pars_fragment:vd,lightmap_fragment:Md,lightmap_pars_fragment:bd,lights_lambert_fragment:Sd,lights_lambert_pars_fragment:Ed,lights_pars_begin:wd,lights_toon_fragment:Ad,lights_toon_pars_fragment:Rd,lights_phong_fragment:Cd,lights_phong_pars_fragment:Pd,lights_physical_fragment:Ld,lights_physical_pars_fragment:Id,lights_fragment_begin:Dd,lights_fragment_maps:Ud,lights_fragment_end:Nd,logdepthbuf_fragment:Bd,logdepthbuf_pars_fragment:Od,logdepthbuf_pars_vertex:Fd,logdepthbuf_vertex:zd,map_fragment:kd,map_pars_fragment:Hd,map_particle_fragment:Vd,map_particle_pars_fragment:Gd,metalnessmap_fragment:Wd,metalnessmap_pars_fragment:Xd,morphcolor_vertex:qd,morphnormal_vertex:Yd,morphtarget_pars_vertex:$d,morphtarget_vertex:Zd,normal_fragment_begin:Jd,normal_fragment_maps:Kd,normal_pars_fragment:jd,normal_pars_vertex:Qd,normal_vertex:t0,normalmap_pars_fragment:e0,clearcoat_normal_fragment_begin:n0,clearcoat_normal_fragment_maps:i0,clearcoat_pars_fragment:s0,iridescence_pars_fragment:r0,opaque_fragment:o0,packing:a0,premultiplied_alpha_fragment:c0,project_vertex:l0,dithering_fragment:u0,dithering_pars_fragment:h0,roughnessmap_fragment:f0,roughnessmap_pars_fragment:d0,shadowmap_pars_fragment:p0,shadowmap_pars_vertex:m0,shadowmap_vertex:g0,shadowmask_pars_fragment:x0,skinbase_vertex:_0,skinning_pars_vertex:y0,skinning_vertex:v0,skinnormal_vertex:M0,specularmap_fragment:b0,specularmap_pars_fragment:S0,tonemapping_fragment:E0,tonemapping_pars_fragment:w0,transmission_fragment:T0,transmission_pars_fragment:A0,uv_pars_fragment:R0,uv_pars_vertex:C0,uv_vertex:P0,worldpos_vertex:L0,background_vert:I0,background_frag:D0,backgroundCube_vert:U0,backgroundCube_frag:N0,cube_vert:B0,cube_frag:O0,depth_vert:F0,depth_frag:z0,distanceRGBA_vert:k0,distanceRGBA_frag:H0,equirect_vert:V0,equirect_frag:G0,linedashed_vert:W0,linedashed_frag:X0,meshbasic_vert:q0,meshbasic_frag:Y0,meshlambert_vert:$0,meshlambert_frag:Z0,meshmatcap_vert:J0,meshmatcap_frag:K0,meshnormal_vert:j0,meshnormal_frag:Q0,meshphong_vert:tp,meshphong_frag:ep,meshphysical_vert:np,meshphysical_frag:ip,meshtoon_vert:sp,meshtoon_frag:rp,points_vert:op,points_frag:ap,shadow_vert:cp,shadow_frag:lp,sprite_vert:up,sprite_frag:hp},bt={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},Bn={basic:{uniforms:je([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:je([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new $t(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:je([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:je([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:je([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new $t(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:je([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:je([bt.points,bt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:je([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:je([bt.common,bt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:je([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:je([bt.sprite,bt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:je([bt.common,bt.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:je([bt.lights,bt.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Bn.physical={uniforms:je([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};var Eo={r:0,b:0,g:0};function fp(i,t,e,n,s,r,o){let a=new $t(0),c=r===!0?0:1,l,u,h=null,f=0,d=null;function g(m,p){let y=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?e:t).get(x)),x===null?_(a,c):x&&x.isColor&&(_(x,1),y=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,o):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===la)?(u===void 0&&(u=new Qt(new Pe(1,1,1),new si({name:"BackgroundCubeMaterial",uniforms:Is(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=he.getTransfer(x.colorSpace)!==pe,(h!==x||f!==x.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,d=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Qt(new Fn(2,2),new si({name:"BackgroundMaterial",uniforms:Is(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=he.getTransfer(x.colorSpace)!==pe,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,f=x.version,d=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,p){m.getRGB(Eo,d1(i)),n.buffers.color.setClear(Eo.r,Eo.g,Eo.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),c=p,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(a,c)},render:g}}function dp(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null),l=c,u=!1;function h(L,O,$,st,it){let et=!1;if(o){let lt=_(st,$,O);l!==lt&&(l=lt,d(l.object)),et=p(L,st,$,it),et&&y(L,st,$,it)}else{let lt=O.wireframe===!0;(l.geometry!==st.id||l.program!==$.id||l.wireframe!==lt)&&(l.geometry=st.id,l.program=$.id,l.wireframe=lt,et=!0)}it!==null&&e.update(it,i.ELEMENT_ARRAY_BUFFER),(et||u)&&(u=!1,I(L,O,$,st),it!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(it).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function d(L){return n.isWebGL2?i.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?i.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function _(L,O,$){let st=$.wireframe===!0,it=a[L.id];it===void 0&&(it={},a[L.id]=it);let et=it[O.id];et===void 0&&(et={},it[O.id]=et);let lt=et[st];return lt===void 0&&(lt=m(f()),et[st]=lt),lt}function m(L){let O=[],$=[],st=[];for(let it=0;it<s;it++)O[it]=0,$[it]=0,st[it]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:$,attributeDivisors:st,object:L,attributes:{},index:null}}function p(L,O,$,st){let it=l.attributes,et=O.attributes,lt=0,ht=$.getAttributes();for(let Mt in ht)if(ht[Mt].location>=0){let at=it[Mt],St=et[Mt];if(St===void 0&&(Mt==="instanceMatrix"&&L.instanceMatrix&&(St=L.instanceMatrix),Mt==="instanceColor"&&L.instanceColor&&(St=L.instanceColor)),at===void 0||at.attribute!==St||St&&at.data!==St.data)return!0;lt++}return l.attributesNum!==lt||l.index!==st}function y(L,O,$,st){let it={},et=O.attributes,lt=0,ht=$.getAttributes();for(let Mt in ht)if(ht[Mt].location>=0){let at=et[Mt];at===void 0&&(Mt==="instanceMatrix"&&L.instanceMatrix&&(at=L.instanceMatrix),Mt==="instanceColor"&&L.instanceColor&&(at=L.instanceColor));let St={};St.attribute=at,at&&at.data&&(St.data=at.data),it[Mt]=St,lt++}l.attributes=it,l.attributesNum=lt,l.index=st}function x(){let L=l.newAttributes;for(let O=0,$=L.length;O<$;O++)L[O]=0}function v(L){E(L,0)}function E(L,O){let $=l.newAttributes,st=l.enabledAttributes,it=l.attributeDivisors;$[L]=1,st[L]===0&&(i.enableVertexAttribArray(L),st[L]=1),it[L]!==O&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,O),it[L]=O)}function w(){let L=l.newAttributes,O=l.enabledAttributes;for(let $=0,st=O.length;$<st;$++)O[$]!==L[$]&&(i.disableVertexAttribArray($),O[$]=0)}function b(L,O,$,st,it,et,lt){lt===!0?i.vertexAttribIPointer(L,O,$,it,et):i.vertexAttribPointer(L,O,$,st,it,et)}function I(L,O,$,st){if(n.isWebGL2===!1&&(L.isInstancedMesh||st.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let it=st.attributes,et=$.getAttributes(),lt=O.defaultAttributeValues;for(let ht in et){let Mt=et[ht];if(Mt.location>=0){let j=it[ht];if(j===void 0&&(ht==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),ht==="instanceColor"&&L.instanceColor&&(j=L.instanceColor)),j!==void 0){let at=j.normalized,St=j.itemSize,Pt=e.get(j);if(Pt===void 0)continue;let Tt=Pt.buffer,Ot=Pt.type,Gt=Pt.bytesPerElement,Lt=n.isWebGL2===!0&&(Ot===i.INT||Ot===i.UNSIGNED_INT||j.gpuType===e1);if(j.isInterleavedBufferAttribute){let Vt=j.data,U=Vt.stride,gt=j.offset;if(Vt.isInstancedInterleavedBuffer){for(let Q=0;Q<Mt.locationSize;Q++)E(Mt.location+Q,Vt.meshPerAttribute);L.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=Vt.meshPerAttribute*Vt.count)}else for(let Q=0;Q<Mt.locationSize;Q++)v(Mt.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Tt);for(let Q=0;Q<Mt.locationSize;Q++)b(Mt.location+Q,St/Mt.locationSize,Ot,at,U*Gt,(gt+St/Mt.locationSize*Q)*Gt,Lt)}else{if(j.isInstancedBufferAttribute){for(let Vt=0;Vt<Mt.locationSize;Vt++)E(Mt.location+Vt,j.meshPerAttribute);L.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Vt=0;Vt<Mt.locationSize;Vt++)v(Mt.location+Vt);i.bindBuffer(i.ARRAY_BUFFER,Tt);for(let Vt=0;Vt<Mt.locationSize;Vt++)b(Mt.location+Vt,St/Mt.locationSize,Ot,at,St*Gt,St/Mt.locationSize*Vt*Gt,Lt)}}else if(lt!==void 0){let at=lt[ht];if(at!==void 0)switch(at.length){case 2:i.vertexAttrib2fv(Mt.location,at);break;case 3:i.vertexAttrib3fv(Mt.location,at);break;case 4:i.vertexAttrib4fv(Mt.location,at);break;default:i.vertexAttrib1fv(Mt.location,at)}}}}w()}function M(){N();for(let L in a){let O=a[L];for(let $ in O){let st=O[$];for(let it in st)g(st[it].object),delete st[it];delete O[$]}delete a[L]}}function S(L){if(a[L.id]===void 0)return;let O=a[L.id];for(let $ in O){let st=O[$];for(let it in st)g(st[it].object),delete st[it];delete O[$]}delete a[L.id]}function D(L){for(let O in a){let $=a[O];if($[L.id]===void 0)continue;let st=$[L.id];for(let it in st)g(st[it].object),delete st[it];delete $[L.id]}}function N(){V(),u=!0,l!==c&&(l=c,d(l.object))}function V(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:N,resetDefaultState:V,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:v,disableUnusedAttributes:w}}function pp(i,t,e,n){let s=n.isWebGL2,r;function o(u){r=u}function a(u,h){i.drawArrays(r,u,h),e.update(h,r,1)}function c(u,h,f){if(f===0)return;let d,g;if(s)d=i,g="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,u,h,f),e.update(h,r,f)}function l(u,h,f){if(f===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(u[g],h[g]);else{d.multiDrawArraysWEBGL(r,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function mp(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let b=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,v=o||t.has("OES_texture_float"),E=x&&v,w=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:v,floatVertexTextures:E,maxSamples:w}}function gp(i){let t=this,e=null,n=0,s=!1,r=!1,o=new tn,a=new ne,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){let g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{let y=r?0:n,x=y*4,v=p.clippingState||null;c.value=v,v=u(g,f,x,d);for(let E=0;E!==x;++E)v[E]=e[E];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,g){let _=h!==null?h.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let p=d+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=d;x!==_;++x,v+=4)o.copy(h[x]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function xp(i){let t=new WeakMap;function e(o,a){return a===Ic?o.mapping=Cs:a===Dc&&(o.mapping=Ps),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ic||a===Dc)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new kc(c.height/2);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Zo=class extends Yo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ss=4,xu=[.125,.215,.35,.446,.526,.582],Gi=20,yc=new Zo,_u=new $t,vc=null,Mc=0,bc=0,Hi=(1+Math.sqrt(5))/2,Ms=1/Hi,yu=[new T(1,1,1),new T(-1,1,1),new T(1,1,-1),new T(-1,1,-1),new T(0,Hi,Ms),new T(0,Hi,-Ms),new T(Ms,0,Hi),new T(-Ms,0,Hi),new T(Hi,Ms,0),new T(-Hi,Ms,0)],bi=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){vc=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(vc,Mc,bc),t.scissorTest=!1,wo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Cs||t.mapping===Ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vc=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:br,format:An,colorSpace:ti,depthBuffer:!1},s=vu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_p(r)),this._blurMaterial=yp(r,t,e)}return s}_compileMaterial(t){let e=new Qt(this._lodPlanes[0],t);this._renderer.compile(e,yc)}_sceneToCubeUV(t,e,n,s){let a=new Ie(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(_u),u.toneMapping=_i,u.autoClear=!1;let d=new Mi({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),g=new Qt(new Pe,d),_=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(_u),_=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):y===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let x=this._cubeSize;wo(s,y*x,p>2?x:0,x,x),u.setRenderTarget(s),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Cs||t.mapping===Ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Qt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;wo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,yc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=yu[(s-1)%yu.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Qt(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Gi-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Gi;m>Gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gi}`);let p=[],y=0;for(let b=0;b<Gi;++b){let I=b/_,M=Math.exp(-I*I/2);p.push(M),b===0?y+=M:b<m&&(y+=2*M)}for(let b=0;b<p.length;b++)p[b]=p[b]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;let v=this._sizeLods[s],E=3*v*(s>x-Ss?s-x+Ss:0),w=4*(this._cubeSize-v);wo(e,E,w,3*v,2*v),c.setRenderTarget(e),c.render(h,yc)}};function _p(i){let t=[],e=[],n=[],s=i,r=i-Ss+1+xu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Ss?c=xu[o-i+Ss-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*d),x=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let w=0;w<d;w++){let b=w%3*2/3-1,I=w>2?0:-1,M=[b,I,0,b+2/3,I,0,b+2/3,I+1,0,b,I,0,b+2/3,I+1,0,b,I+1,0];y.set(M,_*g*w),x.set(f,m*g*w);let S=[w,w,w,w,w,w];v.set(S,p*g*w)}let E=new xe;E.setAttribute("position",new we(y,_)),E.setAttribute("uv",new we(x,m)),E.setAttribute("faceIndex",new we(v,p)),t.push(E),s>Ss&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function vu(i,t,e){let n=new ei(i,t,e);return n.texture.mapping=la,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function yp(i,t,e){let n=new Float32Array(Gi),s=new T(0,1,0);return new si({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:wl(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Mu(){return new si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wl(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function bu(){return new si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function wl(){return`

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
	`}function vp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Ic||c===Dc,u=c===Cs||c===Ps;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new bi(i)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{let h=a.image;if(l&&h&&h.height>0||u&&h&&s(h)){e===null&&(e=new bi(i));let f=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Mp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function bp(i,t,e,n){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(h){let f=h.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER);let d=h.morphAttributes;for(let g in d){let _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(h){let f=[],d=h.index,g=h.attributes.position,_=0;if(d!==null){let y=d.array;_=d.version;for(let x=0,v=y.length;x<v;x+=3){let E=y[x+0],w=y[x+1],b=y[x+2];f.push(E,w,w,b,b,E)}}else if(g!==void 0){let y=g.array;_=g.version;for(let x=0,v=y.length/3-1;x<v;x+=3){let E=x+0,w=x+1,b=x+2;f.push(E,w,w,b,b,E)}}else return;let m=new(h1(f)?qo:Xo)(f,1);m.version=_;let p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){let f=r.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Sp(i,t,e,n){let s=n.isWebGL2,r;function o(d){r=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function u(d,g){i.drawElements(r,g,a,d*c),e.update(g,r,1)}function h(d,g,_){if(_===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,d*c,_),e.update(g,r,_)}function f(d,g,_){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(d[p]/c,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,d,0,_);let p=0;for(let y=0;y<_;y++)p+=g[y];e.update(p,r,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function Ep(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function wp(i,t){return i[0]-t[0]}function Tp(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Ap(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,o=new ge,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h){let f=l.morphTargetInfluences;if(t.isWebGL2===!0){let d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=d!==void 0?d.length:0,_=r.get(u);if(_===void 0||_.count!==g){let L=function(){N.dispose(),r.delete(u),u.removeEventListener("dispose",L)};_!==void 0&&_.texture.dispose();let y=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,v=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],b=u.morphAttributes.color||[],I=0;y===!0&&(I=1),x===!0&&(I=2),v===!0&&(I=3);let M=u.attributes.position.count*I,S=1;M>t.maxTextureSize&&(S=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let D=new Float32Array(M*S*4*g),N=new Go(D,M,S,g);N.type=gi,N.needsUpdate=!0;let V=I*4;for(let O=0;O<g;O++){let $=E[O],st=w[O],it=b[O],et=M*S*4*O;for(let lt=0;lt<$.count;lt++){let ht=lt*V;y===!0&&(o.fromBufferAttribute($,lt),D[et+ht+0]=o.x,D[et+ht+1]=o.y,D[et+ht+2]=o.z,D[et+ht+3]=0),x===!0&&(o.fromBufferAttribute(st,lt),D[et+ht+4]=o.x,D[et+ht+5]=o.y,D[et+ht+6]=o.z,D[et+ht+7]=0),v===!0&&(o.fromBufferAttribute(it,lt),D[et+ht+8]=o.x,D[et+ht+9]=o.y,D[et+ht+10]=o.z,D[et+ht+11]=it.itemSize===4?o.w:1)}}_={count:g,texture:N,size:new ct(M,S)},r.set(u,_),u.addEventListener("dispose",L)}let m=0;for(let y=0;y<f.length;y++)m+=f[y];let p=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(i,"morphTargetBaseInfluence",p),h.getUniforms().setValue(i,"morphTargetInfluences",f),h.getUniforms().setValue(i,"morphTargetsTexture",_.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{let d=f===void 0?0:f.length,g=n[u.id];if(g===void 0||g.length!==d){g=[];for(let x=0;x<d;x++)g[x]=[x,0];n[u.id]=g}for(let x=0;x<d;x++){let v=g[x];v[0]=x,v[1]=f[x]}g.sort(Tp);for(let x=0;x<8;x++)x<d&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(wp);let _=u.morphAttributes.position,m=u.morphAttributes.normal,p=0;for(let x=0;x<8;x++){let v=a[x],E=v[0],w=v[1];E!==Number.MAX_SAFE_INTEGER&&w?(_&&u.getAttribute("morphTarget"+x)!==_[E]&&u.setAttribute("morphTarget"+x,_[E]),m&&u.getAttribute("morphNormal"+x)!==m[E]&&u.setAttribute("morphNormal"+x,m[E]),s[x]=w,p+=w):(_&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),m&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),s[x]=0)}let y=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(i,"morphTargetBaseInfluence",y),h.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function Rp(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return h}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var Jo=class extends yn{constructor(t,e,n,s,r,o,a,c,l,u){if(u=u!==void 0?u:Xi,u!==Xi&&u!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Xi&&(n=mi),n===void 0&&u===Ls&&(n=Wi),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Qe,this.minFilter=c!==void 0?c:Qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},m1=new yn,g1=new Jo(1,1);g1.compareFunction=u1;var x1=new Go,_1=new Fc,y1=new $o,Su=[],Eu=[],wu=new Float32Array(16),Tu=new Float32Array(9),Au=new Float32Array(4);function zs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Su[s];if(r===void 0&&(r=new Float32Array(s),Su[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function De(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ha(i,t){let e=Eu[t];e===void 0&&(e=new Int32Array(t),Eu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Cp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Pp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2fv(this.addr,t),Ue(e,t)}}function Lp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;i.uniform3fv(this.addr,t),Ue(e,t)}}function Ip(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4fv(this.addr,t),Ue(e,t)}}function Dp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;Au.set(n),i.uniformMatrix2fv(this.addr,!1,Au),Ue(e,n)}}function Up(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;Tu.set(n),i.uniformMatrix3fv(this.addr,!1,Tu),Ue(e,n)}}function Np(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;wu.set(n),i.uniformMatrix4fv(this.addr,!1,wu),Ue(e,n)}}function Bp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Op(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2iv(this.addr,t),Ue(e,t)}}function Fp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3iv(this.addr,t),Ue(e,t)}}function zp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4iv(this.addr,t),Ue(e,t)}}function kp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Hp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2uiv(this.addr,t),Ue(e,t)}}function Vp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3uiv(this.addr,t),Ue(e,t)}}function Gp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4uiv(this.addr,t),Ue(e,t)}}function Wp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?g1:m1;e.setTexture2D(t||r,s)}function Xp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||_1,s)}function qp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||y1,s)}function Yp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||x1,s)}function $p(i){switch(i){case 5126:return Cp;case 35664:return Pp;case 35665:return Lp;case 35666:return Ip;case 35674:return Dp;case 35675:return Up;case 35676:return Np;case 5124:case 35670:return Bp;case 35667:case 35671:return Op;case 35668:case 35672:return Fp;case 35669:case 35673:return zp;case 5125:return kp;case 36294:return Hp;case 36295:return Vp;case 36296:return Gp;case 35678:case 36198:case 36298:case 36306:case 35682:return Wp;case 35679:case 36299:case 36307:return Xp;case 35680:case 36300:case 36308:case 36293:return qp;case 36289:case 36303:case 36311:case 36292:return Yp}}function Zp(i,t){i.uniform1fv(this.addr,t)}function Jp(i,t){let e=zs(t,this.size,2);i.uniform2fv(this.addr,e)}function Kp(i,t){let e=zs(t,this.size,3);i.uniform3fv(this.addr,e)}function jp(i,t){let e=zs(t,this.size,4);i.uniform4fv(this.addr,e)}function Qp(i,t){let e=zs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function t3(i,t){let e=zs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function e3(i,t){let e=zs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function n3(i,t){i.uniform1iv(this.addr,t)}function i3(i,t){i.uniform2iv(this.addr,t)}function s3(i,t){i.uniform3iv(this.addr,t)}function r3(i,t){i.uniform4iv(this.addr,t)}function o3(i,t){i.uniform1uiv(this.addr,t)}function a3(i,t){i.uniform2uiv(this.addr,t)}function c3(i,t){i.uniform3uiv(this.addr,t)}function l3(i,t){i.uniform4uiv(this.addr,t)}function u3(i,t,e){let n=this.cache,s=t.length,r=ha(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||m1,r[o])}function h3(i,t,e){let n=this.cache,s=t.length,r=ha(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||_1,r[o])}function f3(i,t,e){let n=this.cache,s=t.length,r=ha(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||y1,r[o])}function d3(i,t,e){let n=this.cache,s=t.length,r=ha(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||x1,r[o])}function p3(i){switch(i){case 5126:return Zp;case 35664:return Jp;case 35665:return Kp;case 35666:return jp;case 35674:return Qp;case 35675:return t3;case 35676:return e3;case 5124:case 35670:return n3;case 35667:case 35671:return i3;case 35668:case 35672:return s3;case 35669:case 35673:return r3;case 5125:return o3;case 36294:return a3;case 36295:return c3;case 36296:return l3;case 35678:case 36198:case 36298:case 36306:case 35682:return u3;case 35679:case 36299:case 36307:return h3;case 35680:case 36300:case 36308:case 36293:return f3;case 36289:case 36303:case 36311:case 36292:return d3}}var Hc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=$p(e.type)}},Vc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=p3(e.type)}},Gc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Sc=/(\w+)(\])?(\[|\.)?/g;function Ru(i,t){i.seq.push(t),i.map[t.id]=t}function m3(i,t,e){let n=i.name,s=n.length;for(Sc.lastIndex=0;;){let r=Sc.exec(n),o=Sc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Ru(e,l===void 0?new Hc(a,i,t):new Vc(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new Gc(a),Ru(e,h)),e=h}}}var Rs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);m3(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Cu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var g3=37297,x3=0;function _3(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function y3(i){let t=he.getPrimaries(he.workingColorSpace),e=he.getPrimaries(i),n;switch(t===e?n="":t===Oo&&e===Bo?n="LinearDisplayP3ToLinearSRGB":t===Bo&&e===Oo&&(n="LinearSRGBToLinearDisplayP3"),i){case ti:case ua:return[n,"LinearTransferOETF"];case Re:case Sl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Pu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+_3(i.getShaderSource(t),o)}else return s}function v3(i,t){let e=y3(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function M3(i,t){let e;switch(t){case Th:e="Linear";break;case Ah:e="Reinhard";break;case Rh:e="OptimizedCineon";break;case Fs:e="ACESFilmic";break;case Ph:e="AgX";break;case Ch:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function b3(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Es).join(`
`)}function S3(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Es).join(`
`)}function E3(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function w3(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Es(i){return i!==""}function Lu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Iu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var T3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wc(i){return i.replace(T3,R3)}var A3=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function R3(i,t){let e=Kt[t];if(e===void 0){let n=A3.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Wc(e)}var C3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Du(i){return i.replace(C3,P3)}function P3(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Uu(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function L3(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ju?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Br?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===jn&&(t="SHADOWMAP_TYPE_VSM"),t}function I3(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Cs:case Ps:t="ENVMAP_TYPE_CUBE";break;case la:t="ENVMAP_TYPE_CUBE_UV";break}return t}function D3(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ps:t="ENVMAP_MODE_REFRACTION";break}return t}function U3(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Qu:t="ENVMAP_BLENDING_MULTIPLY";break;case Eh:t="ENVMAP_BLENDING_MIX";break;case wh:t="ENVMAP_BLENDING_ADD";break}return t}function N3(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function B3(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=L3(e),l=I3(e),u=D3(e),h=U3(e),f=N3(e),d=e.isWebGL2?"":b3(e),g=S3(e),_=E3(r),m=s.createProgram(),p,y,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Es).join(`
`),p.length>0&&(p+=`
`),y=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Es).join(`
`),y.length>0&&(y+=`
`)):(p=[Uu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Es).join(`
`),y=[d,Uu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==_i?"#define TONE_MAPPING":"",e.toneMapping!==_i?Kt.tonemapping_pars_fragment:"",e.toneMapping!==_i?M3("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,v3("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Es).join(`
`)),o=Wc(o),o=Lu(o,e),o=Iu(o,e),a=Wc(a),a=Lu(a,e),a=Iu(a,e),o=Du(o),a=Du(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Q2?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Q2?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let v=x+p+o,E=x+y+a,w=Cu(s,s.VERTEX_SHADER,v),b=Cu(s,s.FRAGMENT_SHADER,E);s.attachShader(m,w),s.attachShader(m,b),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function I(N){if(i.debug.checkShaderErrors){let V=s.getProgramInfoLog(m).trim(),L=s.getShaderInfoLog(w).trim(),O=s.getShaderInfoLog(b).trim(),$=!0,st=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,w,b);else{let it=Pu(s,w,"vertex"),et=Pu(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+V+`
`+it+`
`+et)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(L===""||O==="")&&(st=!1);st&&(N.diagnostics={runnable:$,programLog:V,vertexShader:{log:L,prefix:p},fragmentShader:{log:O,prefix:y}})}s.deleteShader(w),s.deleteShader(b),M=new Rs(s,m),S=w3(s,m)}let M;this.getUniforms=function(){return M===void 0&&I(this),M};let S;this.getAttributes=function(){return S===void 0&&I(this),S};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(m,g3)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=x3++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=b,this}var O3=0,Xc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new qc(t),e.set(t,n)),n}},qc=class{constructor(t){this.id=O3++,this.code=t,this.usedTimes=0}};function F3(i,t,e,n,s,r,o){let a=new Er,c=new Xc,l=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function m(M,S,D,N,V){let L=N.fog,O=V.geometry,$=M.isMeshStandardMaterial?N.environment:null,st=(M.isMeshStandardMaterial?e:t).get(M.envMap||$),it=st&&st.mapping===la?st.image.height:null,et=g[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let lt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ht=lt!==void 0?lt.length:0,Mt=0;O.morphAttributes.position!==void 0&&(Mt=1),O.morphAttributes.normal!==void 0&&(Mt=2),O.morphAttributes.color!==void 0&&(Mt=3);let j,at,St,Pt;if(et){let ae=Bn[et];j=ae.vertexShader,at=ae.fragmentShader}else j=M.vertexShader,at=M.fragmentShader,c.update(M),St=c.getVertexShaderID(M),Pt=c.getFragmentShaderID(M);let Tt=i.getRenderTarget(),Ot=V.isInstancedMesh===!0,Gt=V.isBatchedMesh===!0,Lt=!!M.map,Vt=!!M.matcap,U=!!st,gt=!!M.aoMap,Q=!!M.lightMap,ft=!!M.bumpMap,nt=!!M.normalMap,Dt=!!M.displacementMap,Et=!!M.emissiveMap,C=!!M.metalnessMap,A=!!M.roughnessMap,q=M.anisotropy>0,ut=M.clearcoat>0,ot=M.iridescence>0,rt=M.sheen>0,F=M.transmission>0,z=q&&!!M.anisotropyMap,tt=ut&&!!M.clearcoatMap,K=ut&&!!M.clearcoatNormalMap,mt=ut&&!!M.clearcoatRoughnessMap,k=ot&&!!M.iridescenceMap,dt=ot&&!!M.iridescenceThicknessMap,R=rt&&!!M.sheenColorMap,G=rt&&!!M.sheenRoughnessMap,W=!!M.specularMap,Z=!!M.specularColorMap,_t=!!M.specularIntensityMap,At=F&&!!M.transmissionMap,Ut=F&&!!M.thicknessMap,Ht=!!M.gradientMap,xt=!!M.alphaMap,B=M.alphaTest>0,pt=!!M.alphaHash,yt=!!M.extensions,Ft=!!O.attributes.uv1,It=!!O.attributes.uv2,Jt=!!O.attributes.uv3,wt=_i;return M.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(wt=i.toneMapping),{isWebGL2:u,shaderID:et,shaderType:M.type,shaderName:M.name,vertexShader:j,fragmentShader:at,defines:M.defines,customVertexShaderID:St,customFragmentShaderID:Pt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Gt,instancing:Ot,instancingColor:Ot&&V.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Tt===null?i.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:ti,map:Lt,matcap:Vt,envMap:U,envMapMode:U&&st.mapping,envMapCubeUVHeight:it,aoMap:gt,lightMap:Q,bumpMap:ft,normalMap:nt,displacementMap:f&&Dt,emissiveMap:Et,normalMapObjectSpace:nt&&M.normalMapType===Vh,normalMapTangentSpace:nt&&M.normalMapType===l1,metalnessMap:C,roughnessMap:A,anisotropy:q,anisotropyMap:z,clearcoat:ut,clearcoatMap:tt,clearcoatNormalMap:K,clearcoatRoughnessMap:mt,iridescence:ot,iridescenceMap:k,iridescenceThicknessMap:dt,sheen:rt,sheenColorMap:R,sheenRoughnessMap:G,specularMap:W,specularColorMap:Z,specularIntensityMap:_t,transmission:F,transmissionMap:At,thicknessMap:Ut,gradientMap:Ht,opaque:M.transparent===!1&&M.blending===Ts,alphaMap:xt,alphaTest:B,alphaHash:pt,combine:M.combine,mapUv:Lt&&_(M.map.channel),aoMapUv:gt&&_(M.aoMap.channel),lightMapUv:Q&&_(M.lightMap.channel),bumpMapUv:ft&&_(M.bumpMap.channel),normalMapUv:nt&&_(M.normalMap.channel),displacementMapUv:Dt&&_(M.displacementMap.channel),emissiveMapUv:Et&&_(M.emissiveMap.channel),metalnessMapUv:C&&_(M.metalnessMap.channel),roughnessMapUv:A&&_(M.roughnessMap.channel),anisotropyMapUv:z&&_(M.anisotropyMap.channel),clearcoatMapUv:tt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:K&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:k&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:R&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:G&&_(M.sheenRoughnessMap.channel),specularMapUv:W&&_(M.specularMap.channel),specularColorMapUv:Z&&_(M.specularColorMap.channel),specularIntensityMapUv:_t&&_(M.specularIntensityMap.channel),transmissionMapUv:At&&_(M.transmissionMap.channel),thicknessMapUv:Ut&&_(M.thicknessMap.channel),alphaMapUv:xt&&_(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(nt||q),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Ft,vertexUv2s:It,vertexUv3s:Jt,pointsUvs:V.isPoints===!0&&!!O.attributes.uv&&(Lt||xt),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:V.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:Mt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:wt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Lt&&M.map.isVideoTexture===!0&&he.getTransfer(M.map.colorSpace)===pe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===He,flipSided:M.side===Fe,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:yt&&M.extensions.derivatives===!0,extensionFragDepth:yt&&M.extensions.fragDepth===!0,extensionDrawBuffers:yt&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:yt&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:yt&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let D in M.defines)S.push(D),S.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(y(S,M),x(S,M),S.push(i.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function y(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function x(M,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function v(M){let S=g[M.type],D;if(S){let N=Bn[S];D=Af.clone(N.uniforms)}else D=M.uniforms;return D}function E(M,S){let D;for(let N=0,V=l.length;N<V;N++){let L=l[N];if(L.cacheKey===S){D=L,++D.usedTimes;break}}return D===void 0&&(D=new B3(i,S,M,r),l.push(D)),D}function w(M){if(--M.usedTimes===0){let S=l.indexOf(M);l[S]=l[l.length-1],l.pop(),M.destroy()}}function b(M){c.remove(M)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:E,releaseProgram:w,releaseShaderCache:b,programs:l,dispose:I}}function z3(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function k3(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Nu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Bu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,f,d,g,_,m){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function a(h,f,d,g,_,m){let p=o(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(h,f,d,g,_,m){let p=o(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(h,f){e.length>1&&e.sort(h||k3),n.length>1&&n.sort(f||Nu),s.length>1&&s.sort(f||Nu)}function u(){for(let h=t,f=i.length;h<f;h++){let d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function H3(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Bu,i.set(n,[o])):s>=r.length?(o=new Bu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function V3(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new $t};break;case"SpotLight":e={position:new T,direction:new T,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new T,halfWidth:new T,halfHeight:new T};break}return i[t.id]=e,e}}}function G3(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var W3=0;function X3(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function q3(i,t){let e=new V3,n=G3(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new T);let r=new T,o=new Xt,a=new Xt;function c(u,h){let f=0,d=0,g=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let _=0,m=0,p=0,y=0,x=0,v=0,E=0,w=0,b=0,I=0,M=0;u.sort(X3);let S=h===!0?Math.PI:1;for(let N=0,V=u.length;N<V;N++){let L=u[N],O=L.color,$=L.intensity,st=L.distance,it=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=O.r*$*S,d+=O.g*$*S,g+=O.b*$*S;else if(L.isLightProbe){for(let et=0;et<9;et++)s.probe[et].addScaledVector(L.sh.coefficients[et],$);M++}else if(L.isDirectionalLight){let et=e.get(L);if(et.color.copy(L.color).multiplyScalar(L.intensity*S),L.castShadow){let lt=L.shadow,ht=n.get(L);ht.shadowBias=lt.bias,ht.shadowNormalBias=lt.normalBias,ht.shadowRadius=lt.radius,ht.shadowMapSize=lt.mapSize,s.directionalShadow[_]=ht,s.directionalShadowMap[_]=it,s.directionalShadowMatrix[_]=L.shadow.matrix,v++}s.directional[_]=et,_++}else if(L.isSpotLight){let et=e.get(L);et.position.setFromMatrixPosition(L.matrixWorld),et.color.copy(O).multiplyScalar($*S),et.distance=st,et.coneCos=Math.cos(L.angle),et.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),et.decay=L.decay,s.spot[p]=et;let lt=L.shadow;if(L.map&&(s.spotLightMap[b]=L.map,b++,lt.updateMatrices(L),L.castShadow&&I++),s.spotLightMatrix[p]=lt.matrix,L.castShadow){let ht=n.get(L);ht.shadowBias=lt.bias,ht.shadowNormalBias=lt.normalBias,ht.shadowRadius=lt.radius,ht.shadowMapSize=lt.mapSize,s.spotShadow[p]=ht,s.spotShadowMap[p]=it,w++}p++}else if(L.isRectAreaLight){let et=e.get(L);et.color.copy(O).multiplyScalar($),et.halfWidth.set(L.width*.5,0,0),et.halfHeight.set(0,L.height*.5,0),s.rectArea[y]=et,y++}else if(L.isPointLight){let et=e.get(L);if(et.color.copy(L.color).multiplyScalar(L.intensity*S),et.distance=L.distance,et.decay=L.decay,L.castShadow){let lt=L.shadow,ht=n.get(L);ht.shadowBias=lt.bias,ht.shadowNormalBias=lt.normalBias,ht.shadowRadius=lt.radius,ht.shadowMapSize=lt.mapSize,ht.shadowCameraNear=lt.camera.near,ht.shadowCameraFar=lt.camera.far,s.pointShadow[m]=ht,s.pointShadowMap[m]=it,s.pointShadowMatrix[m]=L.shadow.matrix,E++}s.point[m]=et,m++}else if(L.isHemisphereLight){let et=e.get(L);et.skyColor.copy(L.color).multiplyScalar($*S),et.groundColor.copy(L.groundColor).multiplyScalar($*S),s.hemi[x]=et,x++}}y>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=bt.LTC_FLOAT_1,s.rectAreaLTC2=bt.LTC_FLOAT_2):(s.rectAreaLTC1=bt.LTC_HALF_1,s.rectAreaLTC2=bt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=bt.LTC_FLOAT_1,s.rectAreaLTC2=bt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=bt.LTC_HALF_1,s.rectAreaLTC2=bt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=d,s.ambient[2]=g;let D=s.hash;(D.directionalLength!==_||D.pointLength!==m||D.spotLength!==p||D.rectAreaLength!==y||D.hemiLength!==x||D.numDirectionalShadows!==v||D.numPointShadows!==E||D.numSpotShadows!==w||D.numSpotMaps!==b||D.numLightProbes!==M)&&(s.directional.length=_,s.spot.length=p,s.rectArea.length=y,s.point.length=m,s.hemi.length=x,s.directionalShadow.length=v,s.directionalShadowMap.length=v,s.pointShadow.length=E,s.pointShadowMap.length=E,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=v,s.pointShadowMatrix.length=E,s.spotLightMatrix.length=w+b-I,s.spotLightMap.length=b,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=M,D.directionalLength=_,D.pointLength=m,D.spotLength=p,D.rectAreaLength=y,D.hemiLength=x,D.numDirectionalShadows=v,D.numPointShadows=E,D.numSpotShadows=w,D.numSpotMaps=b,D.numLightProbes=M,s.version=W3++)}function l(u,h){let f=0,d=0,g=0,_=0,m=0,p=h.matrixWorldInverse;for(let y=0,x=u.length;y<x;y++){let v=u[y];if(v.isDirectionalLight){let E=s.directional[f];E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),f++}else if(v.isSpotLight){let E=s.spot[g];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let E=s.rectArea[_];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),a.identity(),o.copy(v.matrixWorld),o.premultiply(p),a.extractRotation(o),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){let E=s.point[d];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){let E=s.hemi[m];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:s}}function Ou(i,t){let e=new q3(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(h){n.push(h)}function a(h){s.push(h)}function c(h){e.setup(n,h)}function l(h){e.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Y3(i,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),c;return a===void 0?(c=new Ou(i,t),e.set(r,[c])):o>=a.length?(c=new Ou(i,t),a.push(c)):c=a[o],c}function s(){e=new WeakMap}return{get:n,dispose:s}}var Yc=class extends ii{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},$c=class extends ii{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},$3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z3=`uniform sampler2D shadow_pass;
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
}`;function J3(i,t,e){let n=new wr,s=new ct,r=new ct,o=new ge,a=new Yc({depthPacking:Hh}),c=new $c,l={},u=e.maxTextureSize,h={[Rn]:Fe,[Fe]:Rn,[He]:He},f=new si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:$3,fragmentShader:Z3}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new xe;g.setAttribute("position",new we(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Qt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ju;let p=this.type;this.render=function(w,b,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let M=i.getRenderTarget(),S=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),N=i.state;N.setBlending(xi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let V=p!==jn&&this.type===jn,L=p===jn&&this.type!==jn;for(let O=0,$=w.length;O<$;O++){let st=w[O],it=st.shadow;if(it===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(it.autoUpdate===!1&&it.needsUpdate===!1)continue;s.copy(it.mapSize);let et=it.getFrameExtents();if(s.multiply(et),r.copy(it.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/et.x),s.x=r.x*et.x,it.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/et.y),s.y=r.y*et.y,it.mapSize.y=r.y)),it.map===null||V===!0||L===!0){let ht=this.type!==jn?{minFilter:Qe,magFilter:Qe}:{};it.map!==null&&it.map.dispose(),it.map=new ei(s.x,s.y,ht),it.map.texture.name=st.name+".shadowMap",it.camera.updateProjectionMatrix()}i.setRenderTarget(it.map),i.clear();let lt=it.getViewportCount();for(let ht=0;ht<lt;ht++){let Mt=it.getViewport(ht);o.set(r.x*Mt.x,r.y*Mt.y,r.x*Mt.z,r.y*Mt.w),N.viewport(o),it.updateMatrices(st,ht),n=it.getFrustum(),v(b,I,it.camera,st,this.type)}it.isPointLightShadow!==!0&&this.type===jn&&y(it,I),it.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,S,D)};function y(w,b){let I=t.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ei(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(b,null,I,f,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(b,null,I,d,_,null)}function x(w,b,I,M){let S=null,D=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)S=D;else if(S=I.isPointLight===!0?c:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let N=S.uuid,V=b.uuid,L=l[N];L===void 0&&(L={},l[N]=L);let O=L[V];O===void 0&&(O=S.clone(),L[V]=O,b.addEventListener("dispose",E)),S=O}if(S.visible=b.visible,S.wireframe=b.wireframe,M===jn?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:h[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let N=i.properties.get(S);N.light=I}return S}function v(w,b,I,M,S){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===jn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);let V=t.update(w),L=w.material;if(Array.isArray(L)){let O=V.groups;for(let $=0,st=O.length;$<st;$++){let it=O[$],et=L[it.materialIndex];if(et&&et.visible){let lt=x(w,et,M,S);w.onBeforeShadow(i,w,b,I,V,lt,it),i.renderBufferDirect(I,null,V,lt,w,it),w.onAfterShadow(i,w,b,I,V,lt,it)}}}else if(L.visible){let O=x(w,L,M,S);w.onBeforeShadow(i,w,b,I,V,O,null),i.renderBufferDirect(I,null,V,O,w,null),w.onAfterShadow(i,w,b,I,V,O,null)}}let N=w.children;for(let V=0,L=N.length;V<L;V++)v(N[V],b,I,M,S)}function E(w){w.target.removeEventListener("dispose",E);for(let I in l){let M=l[I],S=w.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}function K3(i,t,e){let n=e.isWebGL2;function s(){let B=!1,pt=new ge,yt=null,Ft=new ge(0,0,0,0);return{setMask:function(It){yt!==It&&!B&&(i.colorMask(It,It,It,It),yt=It)},setLocked:function(It){B=It},setClear:function(It,Jt,wt,jt,ae){ae===!0&&(It*=jt,Jt*=jt,wt*=jt),pt.set(It,Jt,wt,jt),Ft.equals(pt)===!1&&(i.clearColor(It,Jt,wt,jt),Ft.copy(pt))},reset:function(){B=!1,yt=null,Ft.set(-1,0,0,0)}}}function r(){let B=!1,pt=null,yt=null,Ft=null;return{setTest:function(It){It?Gt(i.DEPTH_TEST):Lt(i.DEPTH_TEST)},setMask:function(It){pt!==It&&!B&&(i.depthMask(It),pt=It)},setFunc:function(It){if(yt!==It){switch(It){case xh:i.depthFunc(i.NEVER);break;case _h:i.depthFunc(i.ALWAYS);break;case yh:i.depthFunc(i.LESS);break;case Io:i.depthFunc(i.LEQUAL);break;case vh:i.depthFunc(i.EQUAL);break;case Mh:i.depthFunc(i.GEQUAL);break;case bh:i.depthFunc(i.GREATER);break;case Sh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}yt=It}},setLocked:function(It){B=It},setClear:function(It){Ft!==It&&(i.clearDepth(It),Ft=It)},reset:function(){B=!1,pt=null,yt=null,Ft=null}}}function o(){let B=!1,pt=null,yt=null,Ft=null,It=null,Jt=null,wt=null,jt=null,ae=null;return{setTest:function(te){B||(te?Gt(i.STENCIL_TEST):Lt(i.STENCIL_TEST))},setMask:function(te){pt!==te&&!B&&(i.stencilMask(te),pt=te)},setFunc:function(te,fe,Ze){(yt!==te||Ft!==fe||It!==Ze)&&(i.stencilFunc(te,fe,Ze),yt=te,Ft=fe,It=Ze)},setOp:function(te,fe,Ze){(Jt!==te||wt!==fe||jt!==Ze)&&(i.stencilOp(te,fe,Ze),Jt=te,wt=fe,jt=Ze)},setLocked:function(te){B=te},setClear:function(te){ae!==te&&(i.clearStencil(te),ae=te)},reset:function(){B=!1,pt=null,yt=null,Ft=null,It=null,Jt=null,wt=null,jt=null,ae=null}}}let a=new s,c=new r,l=new o,u=new WeakMap,h=new WeakMap,f={},d={},g=new WeakMap,_=[],m=null,p=!1,y=null,x=null,v=null,E=null,w=null,b=null,I=null,M=new $t(0,0,0),S=0,D=!1,N=null,V=null,L=null,O=null,$=null,st=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),it=!1,et=0,lt=i.getParameter(i.VERSION);lt.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(lt)[1]),it=et>=1):lt.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(lt)[1]),it=et>=2);let ht=null,Mt={},j=i.getParameter(i.SCISSOR_BOX),at=i.getParameter(i.VIEWPORT),St=new ge().fromArray(j),Pt=new ge().fromArray(at);function Tt(B,pt,yt,Ft){let It=new Uint8Array(4),Jt=i.createTexture();i.bindTexture(B,Jt),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let wt=0;wt<yt;wt++)n&&(B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY)?i.texImage3D(pt,0,i.RGBA,1,1,Ft,0,i.RGBA,i.UNSIGNED_BYTE,It):i.texImage2D(pt+wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,It);return Jt}let Ot={};Ot[i.TEXTURE_2D]=Tt(i.TEXTURE_2D,i.TEXTURE_2D,1),Ot[i.TEXTURE_CUBE_MAP]=Tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ot[i.TEXTURE_2D_ARRAY]=Tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ot[i.TEXTURE_3D]=Tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Gt(i.DEPTH_TEST),c.setFunc(Io),Et(!1),C(g2),Gt(i.CULL_FACE),nt(xi);function Gt(B){f[B]!==!0&&(i.enable(B),f[B]=!0)}function Lt(B){f[B]!==!1&&(i.disable(B),f[B]=!1)}function Vt(B,pt){return d[B]!==pt?(i.bindFramebuffer(B,pt),d[B]=pt,n&&(B===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=pt),B===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=pt)),!0):!1}function U(B,pt){let yt=_,Ft=!1;if(B)if(yt=g.get(pt),yt===void 0&&(yt=[],g.set(pt,yt)),B.isWebGLMultipleRenderTargets){let It=B.texture;if(yt.length!==It.length||yt[0]!==i.COLOR_ATTACHMENT0){for(let Jt=0,wt=It.length;Jt<wt;Jt++)yt[Jt]=i.COLOR_ATTACHMENT0+Jt;yt.length=It.length,Ft=!0}}else yt[0]!==i.COLOR_ATTACHMENT0&&(yt[0]=i.COLOR_ATTACHMENT0,Ft=!0);else yt[0]!==i.BACK&&(yt[0]=i.BACK,Ft=!0);Ft&&(e.isWebGL2?i.drawBuffers(yt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(yt))}function gt(B){return m!==B?(i.useProgram(B),m=B,!0):!1}let Q={[Vi]:i.FUNC_ADD,[nh]:i.FUNC_SUBTRACT,[ih]:i.FUNC_REVERSE_SUBTRACT};if(n)Q[v2]=i.MIN,Q[M2]=i.MAX;else{let B=t.get("EXT_blend_minmax");B!==null&&(Q[v2]=B.MIN_EXT,Q[M2]=B.MAX_EXT)}let ft={[sh]:i.ZERO,[rh]:i.ONE,[oh]:i.SRC_COLOR,[Pc]:i.SRC_ALPHA,[fh]:i.SRC_ALPHA_SATURATE,[uh]:i.DST_COLOR,[ch]:i.DST_ALPHA,[ah]:i.ONE_MINUS_SRC_COLOR,[Lc]:i.ONE_MINUS_SRC_ALPHA,[hh]:i.ONE_MINUS_DST_COLOR,[lh]:i.ONE_MINUS_DST_ALPHA,[dh]:i.CONSTANT_COLOR,[ph]:i.ONE_MINUS_CONSTANT_COLOR,[mh]:i.CONSTANT_ALPHA,[gh]:i.ONE_MINUS_CONSTANT_ALPHA};function nt(B,pt,yt,Ft,It,Jt,wt,jt,ae,te){if(B===xi){p===!0&&(Lt(i.BLEND),p=!1);return}if(p===!1&&(Gt(i.BLEND),p=!0),B!==eh){if(B!==y||te!==D){if((x!==Vi||w!==Vi)&&(i.blendEquation(i.FUNC_ADD),x=Vi,w=Vi),te)switch(B){case Ts:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case x2:i.blendFunc(i.ONE,i.ONE);break;case _2:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case y2:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Ts:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case x2:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case _2:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case y2:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}v=null,E=null,b=null,I=null,M.set(0,0,0),S=0,y=B,D=te}return}It=It||pt,Jt=Jt||yt,wt=wt||Ft,(pt!==x||It!==w)&&(i.blendEquationSeparate(Q[pt],Q[It]),x=pt,w=It),(yt!==v||Ft!==E||Jt!==b||wt!==I)&&(i.blendFuncSeparate(ft[yt],ft[Ft],ft[Jt],ft[wt]),v=yt,E=Ft,b=Jt,I=wt),(jt.equals(M)===!1||ae!==S)&&(i.blendColor(jt.r,jt.g,jt.b,ae),M.copy(jt),S=ae),y=B,D=!1}function Dt(B,pt){B.side===He?Lt(i.CULL_FACE):Gt(i.CULL_FACE);let yt=B.side===Fe;pt&&(yt=!yt),Et(yt),B.blending===Ts&&B.transparent===!1?nt(xi):nt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),c.setFunc(B.depthFunc),c.setTest(B.depthTest),c.setMask(B.depthWrite),a.setMask(B.colorWrite);let Ft=B.stencilWrite;l.setTest(Ft),Ft&&(l.setMask(B.stencilWriteMask),l.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),l.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),q(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Gt(i.SAMPLE_ALPHA_TO_COVERAGE):Lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Et(B){N!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),N=B)}function C(B){B!==Q4?(Gt(i.CULL_FACE),B!==V&&(B===g2?i.cullFace(i.BACK):B===th?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Lt(i.CULL_FACE),V=B}function A(B){B!==L&&(it&&i.lineWidth(B),L=B)}function q(B,pt,yt){B?(Gt(i.POLYGON_OFFSET_FILL),(O!==pt||$!==yt)&&(i.polygonOffset(pt,yt),O=pt,$=yt)):Lt(i.POLYGON_OFFSET_FILL)}function ut(B){B?Gt(i.SCISSOR_TEST):Lt(i.SCISSOR_TEST)}function ot(B){B===void 0&&(B=i.TEXTURE0+st-1),ht!==B&&(i.activeTexture(B),ht=B)}function rt(B,pt,yt){yt===void 0&&(ht===null?yt=i.TEXTURE0+st-1:yt=ht);let Ft=Mt[yt];Ft===void 0&&(Ft={type:void 0,texture:void 0},Mt[yt]=Ft),(Ft.type!==B||Ft.texture!==pt)&&(ht!==yt&&(i.activeTexture(yt),ht=yt),i.bindTexture(B,pt||Ot[B]),Ft.type=B,Ft.texture=pt)}function F(){let B=Mt[ht];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function mt(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function k(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function dt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function R(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function G(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function W(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Z(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _t(B){St.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),St.copy(B))}function At(B){Pt.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),Pt.copy(B))}function Ut(B,pt){let yt=h.get(pt);yt===void 0&&(yt=new WeakMap,h.set(pt,yt));let Ft=yt.get(B);Ft===void 0&&(Ft=i.getUniformBlockIndex(pt,B.name),yt.set(B,Ft))}function Ht(B,pt){let Ft=h.get(pt).get(B);u.get(pt)!==Ft&&(i.uniformBlockBinding(pt,Ft,B.__bindingPointIndex),u.set(pt,Ft))}function xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},ht=null,Mt={},d={},g=new WeakMap,_=[],m=null,p=!1,y=null,x=null,v=null,E=null,w=null,b=null,I=null,M=new $t(0,0,0),S=0,D=!1,N=null,V=null,L=null,O=null,$=null,St.set(0,0,i.canvas.width,i.canvas.height),Pt.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Gt,disable:Lt,bindFramebuffer:Vt,drawBuffers:U,useProgram:gt,setBlending:nt,setMaterial:Dt,setFlipSided:Et,setCullFace:C,setLineWidth:A,setPolygonOffset:q,setScissorTest:ut,activeTexture:ot,bindTexture:rt,unbindTexture:F,compressedTexImage2D:z,compressedTexImage3D:tt,texImage2D:W,texImage3D:Z,updateUBOMapping:Ut,uniformBlockBinding:Ht,texStorage2D:R,texStorage3D:G,texSubImage2D:K,texSubImage3D:mt,compressedTexSubImage2D:k,compressedTexSubImage3D:dt,scissor:_t,viewport:At,reset:xt}}function j3(i,t,e,n,s,r,o){let a=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,h,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,A){return d?new OffscreenCanvas(C,A):ko("canvas")}function _(C,A,q,ut){let ot=1;if((C.width>ut||C.height>ut)&&(ot=ut/Math.max(C.width,C.height)),ot<1||A===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){let rt=A?zo:Math.floor,F=rt(ot*C.width),z=rt(ot*C.height);h===void 0&&(h=g(F,z));let tt=q?g(F,z):h;return tt.width=F,tt.height=z,tt.getContext("2d").drawImage(C,0,0,F,z),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+F+"x"+z+")."),tt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function m(C){return Bc(C.width)&&Bc(C.height)}function p(C){return a?!1:C.wrapS!==Tn||C.wrapT!==Tn||C.minFilter!==Qe&&C.minFilter!==xn}function y(C,A){return C.generateMipmaps&&A&&C.minFilter!==Qe&&C.minFilter!==xn}function x(C){i.generateMipmap(C)}function v(C,A,q,ut,ot=!1){if(a===!1)return A;if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let rt=A;if(A===i.RED&&(q===i.FLOAT&&(rt=i.R32F),q===i.HALF_FLOAT&&(rt=i.R16F),q===i.UNSIGNED_BYTE&&(rt=i.R8)),A===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(rt=i.R8UI),q===i.UNSIGNED_SHORT&&(rt=i.R16UI),q===i.UNSIGNED_INT&&(rt=i.R32UI),q===i.BYTE&&(rt=i.R8I),q===i.SHORT&&(rt=i.R16I),q===i.INT&&(rt=i.R32I)),A===i.RG&&(q===i.FLOAT&&(rt=i.RG32F),q===i.HALF_FLOAT&&(rt=i.RG16F),q===i.UNSIGNED_BYTE&&(rt=i.RG8)),A===i.RGBA){let F=ot?No:he.getTransfer(ut);q===i.FLOAT&&(rt=i.RGBA32F),q===i.HALF_FLOAT&&(rt=i.RGBA16F),q===i.UNSIGNED_BYTE&&(rt=F===pe?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function E(C,A,q){return y(C,q)===!0||C.isFramebufferTexture&&C.minFilter!==Qe&&C.minFilter!==xn?Math.log2(Math.max(A.width,A.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?A.mipmaps.length:1}function w(C){return C===Qe||C===b2||C===Za?i.NEAREST:i.LINEAR}function b(C){let A=C.target;A.removeEventListener("dispose",b),M(A),A.isVideoTexture&&u.delete(A)}function I(C){let A=C.target;A.removeEventListener("dispose",I),D(A)}function M(C){let A=n.get(C);if(A.__webglInit===void 0)return;let q=C.source,ut=f.get(q);if(ut){let ot=ut[A.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&S(C),Object.keys(ut).length===0&&f.delete(q)}n.remove(C)}function S(C){let A=n.get(C);i.deleteTexture(A.__webglTexture);let q=C.source,ut=f.get(q);delete ut[A.__cacheKey],o.memory.textures--}function D(C){let A=C.texture,q=n.get(C),ut=n.get(A);if(ut.__webglTexture!==void 0&&(i.deleteTexture(ut.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(q.__webglFramebuffer[ot]))for(let rt=0;rt<q.__webglFramebuffer[ot].length;rt++)i.deleteFramebuffer(q.__webglFramebuffer[ot][rt]);else i.deleteFramebuffer(q.__webglFramebuffer[ot]);q.__webglDepthbuffer&&i.deleteRenderbuffer(q.__webglDepthbuffer[ot])}else{if(Array.isArray(q.__webglFramebuffer))for(let ot=0;ot<q.__webglFramebuffer.length;ot++)i.deleteFramebuffer(q.__webglFramebuffer[ot]);else i.deleteFramebuffer(q.__webglFramebuffer);if(q.__webglDepthbuffer&&i.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&i.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let ot=0;ot<q.__webglColorRenderbuffer.length;ot++)q.__webglColorRenderbuffer[ot]&&i.deleteRenderbuffer(q.__webglColorRenderbuffer[ot]);q.__webglDepthRenderbuffer&&i.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ot=0,rt=A.length;ot<rt;ot++){let F=n.get(A[ot]);F.__webglTexture&&(i.deleteTexture(F.__webglTexture),o.memory.textures--),n.remove(A[ot])}n.remove(A),n.remove(C)}let N=0;function V(){N=0}function L(){let C=N;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),N+=1,C}function O(C){let A=[];return A.push(C.wrapS),A.push(C.wrapT),A.push(C.wrapR||0),A.push(C.magFilter),A.push(C.minFilter),A.push(C.anisotropy),A.push(C.internalFormat),A.push(C.format),A.push(C.type),A.push(C.generateMipmaps),A.push(C.premultiplyAlpha),A.push(C.flipY),A.push(C.unpackAlignment),A.push(C.colorSpace),A.join()}function $(C,A){let q=n.get(C);if(C.isVideoTexture&&Dt(C),C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){let ut=C.image;if(ut===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{St(q,C,A);return}}e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+A)}function st(C,A){let q=n.get(C);if(C.version>0&&q.__version!==C.version){St(q,C,A);return}e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+A)}function it(C,A){let q=n.get(C);if(C.version>0&&q.__version!==C.version){St(q,C,A);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+A)}function et(C,A){let q=n.get(C);if(C.version>0&&q.__version!==C.version){Pt(q,C,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+A)}let lt={[vr]:i.REPEAT,[Tn]:i.CLAMP_TO_EDGE,[Uc]:i.MIRRORED_REPEAT},ht={[Qe]:i.NEAREST,[b2]:i.NEAREST_MIPMAP_NEAREST,[Za]:i.NEAREST_MIPMAP_LINEAR,[xn]:i.LINEAR,[Lh]:i.LINEAR_MIPMAP_NEAREST,[Mr]:i.LINEAR_MIPMAP_LINEAR},Mt={[Gh]:i.NEVER,[Zh]:i.ALWAYS,[Wh]:i.LESS,[u1]:i.LEQUAL,[Xh]:i.EQUAL,[$h]:i.GEQUAL,[qh]:i.GREATER,[Yh]:i.NOTEQUAL};function j(C,A,q){if(q?(i.texParameteri(C,i.TEXTURE_WRAP_S,lt[A.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,lt[A.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,lt[A.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ht[A.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ht[A.minFilter])):(i.texParameteri(C,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(C,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(A.wrapS!==Tn||A.wrapT!==Tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(C,i.TEXTURE_MAG_FILTER,w(A.magFilter)),i.texParameteri(C,i.TEXTURE_MIN_FILTER,w(A.minFilter)),A.minFilter!==Qe&&A.minFilter!==xn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Mt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let ut=t.get("EXT_texture_filter_anisotropic");if(A.magFilter===Qe||A.minFilter!==Za&&A.minFilter!==Mr||A.type===gi&&t.has("OES_texture_float_linear")===!1||a===!1&&A.type===br&&t.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(i.texParameterf(C,ut.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function at(C,A){let q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,A.addEventListener("dispose",b));let ut=A.source,ot=f.get(ut);ot===void 0&&(ot={},f.set(ut,ot));let rt=O(A);if(rt!==C.__cacheKey){ot[rt]===void 0&&(ot[rt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ot[rt].usedTimes++;let F=ot[C.__cacheKey];F!==void 0&&(ot[C.__cacheKey].usedTimes--,F.usedTimes===0&&S(A)),C.__cacheKey=rt,C.__webglTexture=ot[rt].texture}return q}function St(C,A,q){let ut=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ut=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ut=i.TEXTURE_3D);let ot=at(C,A),rt=A.source;e.bindTexture(ut,C.__webglTexture,i.TEXTURE0+q);let F=n.get(rt);if(rt.version!==F.__version||ot===!0){e.activeTexture(i.TEXTURE0+q);let z=he.getPrimaries(he.workingColorSpace),tt=A.colorSpace===_n?null:he.getPrimaries(A.colorSpace),K=A.colorSpace===_n||z===tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let mt=p(A)&&m(A.image)===!1,k=_(A.image,mt,!1,s.maxTextureSize);k=Et(A,k);let dt=m(k)||a,R=r.convert(A.format,A.colorSpace),G=r.convert(A.type),W=v(A.internalFormat,R,G,A.colorSpace,A.isVideoTexture);j(ut,A,dt);let Z,_t=A.mipmaps,At=a&&A.isVideoTexture!==!0&&W!==a1,Ut=F.__version===void 0||ot===!0,Ht=E(A,k,dt);if(A.isDepthTexture)W=i.DEPTH_COMPONENT,a?A.type===gi?W=i.DEPTH_COMPONENT32F:A.type===mi?W=i.DEPTH_COMPONENT24:A.type===Wi?W=i.DEPTH24_STENCIL8:W=i.DEPTH_COMPONENT16:A.type===gi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Xi&&W===i.DEPTH_COMPONENT&&A.type!==bl&&A.type!==mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=mi,G=r.convert(A.type)),A.format===Ls&&W===i.DEPTH_COMPONENT&&(W=i.DEPTH_STENCIL,A.type!==Wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Wi,G=r.convert(A.type))),Ut&&(At?e.texStorage2D(i.TEXTURE_2D,1,W,k.width,k.height):e.texImage2D(i.TEXTURE_2D,0,W,k.width,k.height,0,R,G,null));else if(A.isDataTexture)if(_t.length>0&&dt){At&&Ut&&e.texStorage2D(i.TEXTURE_2D,Ht,W,_t[0].width,_t[0].height);for(let xt=0,B=_t.length;xt<B;xt++)Z=_t[xt],At?e.texSubImage2D(i.TEXTURE_2D,xt,0,0,Z.width,Z.height,R,G,Z.data):e.texImage2D(i.TEXTURE_2D,xt,W,Z.width,Z.height,0,R,G,Z.data);A.generateMipmaps=!1}else At?(Ut&&e.texStorage2D(i.TEXTURE_2D,Ht,W,k.width,k.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,k.width,k.height,R,G,k.data)):e.texImage2D(i.TEXTURE_2D,0,W,k.width,k.height,0,R,G,k.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){At&&Ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ht,W,_t[0].width,_t[0].height,k.depth);for(let xt=0,B=_t.length;xt<B;xt++)Z=_t[xt],A.format!==An?R!==null?At?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,0,Z.width,Z.height,k.depth,R,Z.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,xt,W,Z.width,Z.height,k.depth,0,Z.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):At?e.texSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,0,Z.width,Z.height,k.depth,R,G,Z.data):e.texImage3D(i.TEXTURE_2D_ARRAY,xt,W,Z.width,Z.height,k.depth,0,R,G,Z.data)}else{At&&Ut&&e.texStorage2D(i.TEXTURE_2D,Ht,W,_t[0].width,_t[0].height);for(let xt=0,B=_t.length;xt<B;xt++)Z=_t[xt],A.format!==An?R!==null?At?e.compressedTexSubImage2D(i.TEXTURE_2D,xt,0,0,Z.width,Z.height,R,Z.data):e.compressedTexImage2D(i.TEXTURE_2D,xt,W,Z.width,Z.height,0,Z.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):At?e.texSubImage2D(i.TEXTURE_2D,xt,0,0,Z.width,Z.height,R,G,Z.data):e.texImage2D(i.TEXTURE_2D,xt,W,Z.width,Z.height,0,R,G,Z.data)}else if(A.isDataArrayTexture)At?(Ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ht,W,k.width,k.height,k.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,k.width,k.height,k.depth,R,G,k.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,W,k.width,k.height,k.depth,0,R,G,k.data);else if(A.isData3DTexture)At?(Ut&&e.texStorage3D(i.TEXTURE_3D,Ht,W,k.width,k.height,k.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,k.width,k.height,k.depth,R,G,k.data)):e.texImage3D(i.TEXTURE_3D,0,W,k.width,k.height,k.depth,0,R,G,k.data);else if(A.isFramebufferTexture){if(Ut)if(At)e.texStorage2D(i.TEXTURE_2D,Ht,W,k.width,k.height);else{let xt=k.width,B=k.height;for(let pt=0;pt<Ht;pt++)e.texImage2D(i.TEXTURE_2D,pt,W,xt,B,0,R,G,null),xt>>=1,B>>=1}}else if(_t.length>0&&dt){At&&Ut&&e.texStorage2D(i.TEXTURE_2D,Ht,W,_t[0].width,_t[0].height);for(let xt=0,B=_t.length;xt<B;xt++)Z=_t[xt],At?e.texSubImage2D(i.TEXTURE_2D,xt,0,0,R,G,Z):e.texImage2D(i.TEXTURE_2D,xt,W,R,G,Z);A.generateMipmaps=!1}else At?(Ut&&e.texStorage2D(i.TEXTURE_2D,Ht,W,k.width,k.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,R,G,k)):e.texImage2D(i.TEXTURE_2D,0,W,R,G,k);y(A,dt)&&x(ut),F.__version=rt.version,A.onUpdate&&A.onUpdate(A)}C.__version=A.version}function Pt(C,A,q){if(A.image.length!==6)return;let ut=at(C,A),ot=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+q);let rt=n.get(ot);if(ot.version!==rt.__version||ut===!0){e.activeTexture(i.TEXTURE0+q);let F=he.getPrimaries(he.workingColorSpace),z=A.colorSpace===_n?null:he.getPrimaries(A.colorSpace),tt=A.colorSpace===_n||F===z?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let K=A.isCompressedTexture||A.image[0].isCompressedTexture,mt=A.image[0]&&A.image[0].isDataTexture,k=[];for(let xt=0;xt<6;xt++)!K&&!mt?k[xt]=_(A.image[xt],!1,!0,s.maxCubemapSize):k[xt]=mt?A.image[xt].image:A.image[xt],k[xt]=Et(A,k[xt]);let dt=k[0],R=m(dt)||a,G=r.convert(A.format,A.colorSpace),W=r.convert(A.type),Z=v(A.internalFormat,G,W,A.colorSpace),_t=a&&A.isVideoTexture!==!0,At=rt.__version===void 0||ut===!0,Ut=E(A,dt,R);j(i.TEXTURE_CUBE_MAP,A,R);let Ht;if(K){_t&&At&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,Z,dt.width,dt.height);for(let xt=0;xt<6;xt++){Ht=k[xt].mipmaps;for(let B=0;B<Ht.length;B++){let pt=Ht[B];A.format!==An?G!==null?_t?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,B,0,0,pt.width,pt.height,G,pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,B,Z,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_t?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,B,0,0,pt.width,pt.height,G,W,pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,B,Z,pt.width,pt.height,0,G,W,pt.data)}}}else{Ht=A.mipmaps,_t&&At&&(Ht.length>0&&Ut++,e.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,Z,k[0].width,k[0].height));for(let xt=0;xt<6;xt++)if(mt){_t?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,k[xt].width,k[xt].height,G,W,k[xt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,Z,k[xt].width,k[xt].height,0,G,W,k[xt].data);for(let B=0;B<Ht.length;B++){let yt=Ht[B].image[xt].image;_t?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,B+1,0,0,yt.width,yt.height,G,W,yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,B+1,Z,yt.width,yt.height,0,G,W,yt.data)}}else{_t?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,G,W,k[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,Z,G,W,k[xt]);for(let B=0;B<Ht.length;B++){let pt=Ht[B];_t?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,B+1,0,0,G,W,pt.image[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,B+1,Z,G,W,pt.image[xt])}}}y(A,R)&&x(i.TEXTURE_CUBE_MAP),rt.__version=ot.version,A.onUpdate&&A.onUpdate(A)}C.__version=A.version}function Tt(C,A,q,ut,ot,rt){let F=r.convert(q.format,q.colorSpace),z=r.convert(q.type),tt=v(q.internalFormat,F,z,q.colorSpace);if(!n.get(A).__hasExternalTextures){let mt=Math.max(1,A.width>>rt),k=Math.max(1,A.height>>rt);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,rt,tt,mt,k,A.depth,0,F,z,null):e.texImage2D(ot,rt,tt,mt,k,0,F,z,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),nt(A)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,ot,n.get(q).__webglTexture,0,ft(A)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ut,ot,n.get(q).__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(C,A,q){if(i.bindRenderbuffer(i.RENDERBUFFER,C),A.depthBuffer&&!A.stencilBuffer){let ut=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(q||nt(A)){let ot=A.depthTexture;ot&&ot.isDepthTexture&&(ot.type===gi?ut=i.DEPTH_COMPONENT32F:ot.type===mi&&(ut=i.DEPTH_COMPONENT24));let rt=ft(A);nt(A)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,ut,A.width,A.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,ut,A.width,A.height)}else i.renderbufferStorage(i.RENDERBUFFER,ut,A.width,A.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,C)}else if(A.depthBuffer&&A.stencilBuffer){let ut=ft(A);q&&nt(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,i.DEPTH24_STENCIL8,A.width,A.height):nt(A)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,i.DEPTH24_STENCIL8,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,C)}else{let ut=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ot=0;ot<ut.length;ot++){let rt=ut[ot],F=r.convert(rt.format,rt.colorSpace),z=r.convert(rt.type),tt=v(rt.internalFormat,F,z,rt.colorSpace),K=ft(A);q&&nt(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,K,tt,A.width,A.height):nt(A)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,K,tt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,tt,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Gt(C,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),$(A.depthTexture,0);let ut=n.get(A.depthTexture).__webglTexture,ot=ft(A);if(A.depthTexture.format===Xi)nt(A)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ut,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ut,0);else if(A.depthTexture.format===Ls)nt(A)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ut,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ut,0);else throw new Error("Unknown depthTexture format")}function Lt(C){let A=n.get(C),q=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!A.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Gt(A.__webglFramebuffer,C)}else if(q){A.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[ut]),A.__webglDepthbuffer[ut]=i.createRenderbuffer(),Ot(A.__webglDepthbuffer[ut],C,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=i.createRenderbuffer(),Ot(A.__webglDepthbuffer,C,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Vt(C,A,q){let ut=n.get(C);A!==void 0&&Tt(ut.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Lt(C)}function U(C){let A=C.texture,q=n.get(C),ut=n.get(A);C.addEventListener("dispose",I),C.isWebGLMultipleRenderTargets!==!0&&(ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture()),ut.__version=A.version,o.memory.textures++);let ot=C.isWebGLCubeRenderTarget===!0,rt=C.isWebGLMultipleRenderTargets===!0,F=m(C)||a;if(ot){q.__webglFramebuffer=[];for(let z=0;z<6;z++)if(a&&A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer[z]=[];for(let tt=0;tt<A.mipmaps.length;tt++)q.__webglFramebuffer[z][tt]=i.createFramebuffer()}else q.__webglFramebuffer[z]=i.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer=[];for(let z=0;z<A.mipmaps.length;z++)q.__webglFramebuffer[z]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(rt)if(s.drawBuffers){let z=C.texture;for(let tt=0,K=z.length;tt<K;tt++){let mt=n.get(z[tt]);mt.__webglTexture===void 0&&(mt.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&nt(C)===!1){let z=rt?A:[A];q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let tt=0;tt<z.length;tt++){let K=z[tt];q.__webglColorRenderbuffer[tt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[tt]);let mt=r.convert(K.format,K.colorSpace),k=r.convert(K.type),dt=v(K.internalFormat,mt,k,K.colorSpace,C.isXRRenderTarget===!0),R=ft(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,R,dt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+tt,i.RENDERBUFFER,q.__webglColorRenderbuffer[tt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Ot(q.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ot){e.bindTexture(i.TEXTURE_CUBE_MAP,ut.__webglTexture),j(i.TEXTURE_CUBE_MAP,A,F);for(let z=0;z<6;z++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let tt=0;tt<A.mipmaps.length;tt++)Tt(q.__webglFramebuffer[z][tt],C,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+z,tt);else Tt(q.__webglFramebuffer[z],C,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0);y(A,F)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(rt){let z=C.texture;for(let tt=0,K=z.length;tt<K;tt++){let mt=z[tt],k=n.get(mt);e.bindTexture(i.TEXTURE_2D,k.__webglTexture),j(i.TEXTURE_2D,mt,F),Tt(q.__webglFramebuffer,C,mt,i.COLOR_ATTACHMENT0+tt,i.TEXTURE_2D,0),y(mt,F)&&x(i.TEXTURE_2D)}e.unbindTexture()}else{let z=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?z=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(z,ut.__webglTexture),j(z,A,F),a&&A.mipmaps&&A.mipmaps.length>0)for(let tt=0;tt<A.mipmaps.length;tt++)Tt(q.__webglFramebuffer[tt],C,A,i.COLOR_ATTACHMENT0,z,tt);else Tt(q.__webglFramebuffer,C,A,i.COLOR_ATTACHMENT0,z,0);y(A,F)&&x(z),e.unbindTexture()}C.depthBuffer&&Lt(C)}function gt(C){let A=m(C)||a,q=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ut=0,ot=q.length;ut<ot;ut++){let rt=q[ut];if(y(rt,A)){let F=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,z=n.get(rt).__webglTexture;e.bindTexture(F,z),x(F),e.unbindTexture()}}}function Q(C){if(a&&C.samples>0&&nt(C)===!1){let A=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],q=C.width,ut=C.height,ot=i.COLOR_BUFFER_BIT,rt=[],F=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,z=n.get(C),tt=C.isWebGLMultipleRenderTargets===!0;if(tt)for(let K=0;K<A.length;K++)e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,z.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,z.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,z.__webglFramebuffer);for(let K=0;K<A.length;K++){rt.push(i.COLOR_ATTACHMENT0+K),C.depthBuffer&&rt.push(F);let mt=z.__ignoreDepthValues!==void 0?z.__ignoreDepthValues:!1;if(mt===!1&&(C.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),tt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,z.__webglColorRenderbuffer[K]),mt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[F]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[F])),tt){let k=n.get(A[K]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,k,0)}i.blitFramebuffer(0,0,q,ut,0,0,q,ut,ot,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),tt)for(let K=0;K<A.length;K++){e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,z.__webglColorRenderbuffer[K]);let mt=n.get(A[K]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,z.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.TEXTURE_2D,mt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,z.__webglMultisampledFramebuffer)}}function ft(C){return Math.min(s.maxSamples,C.samples)}function nt(C){let A=n.get(C);return a&&C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Dt(C){let A=o.render.frame;u.get(C)!==A&&(u.set(C,A),C.update())}function Et(C,A){let q=C.colorSpace,ut=C.format,ot=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Nc||q!==ti&&q!==_n&&(he.getTransfer(q)===pe?a===!1?t.has("EXT_sRGB")===!0&&ut===An?(C.format=Nc,C.minFilter=xn,C.generateMipmaps=!1):A=Ho.sRGBToLinear(A):(ut!==An||ot!==yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),A}this.allocateTextureUnit=L,this.resetTextureUnits=V,this.setTexture2D=$,this.setTexture2DArray=st,this.setTexture3D=it,this.setTextureCube=et,this.rebindTextures=Vt,this.setupRenderTarget=U,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=nt}function Q3(i,t,e){let n=e.isWebGL2;function s(r,o=_n){let a,c=he.getTransfer(o);if(r===yi)return i.UNSIGNED_BYTE;if(r===n1)return i.UNSIGNED_SHORT_4_4_4_4;if(r===i1)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Ih)return i.BYTE;if(r===Dh)return i.SHORT;if(r===bl)return i.UNSIGNED_SHORT;if(r===e1)return i.INT;if(r===mi)return i.UNSIGNED_INT;if(r===gi)return i.FLOAT;if(r===br)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Uh)return i.ALPHA;if(r===An)return i.RGBA;if(r===Nh)return i.LUMINANCE;if(r===Bh)return i.LUMINANCE_ALPHA;if(r===Xi)return i.DEPTH_COMPONENT;if(r===Ls)return i.DEPTH_STENCIL;if(r===Nc)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Oh)return i.RED;if(r===s1)return i.RED_INTEGER;if(r===Fh)return i.RG;if(r===r1)return i.RG_INTEGER;if(r===o1)return i.RGBA_INTEGER;if(r===Ja||r===Ka||r===ja||r===Qa)if(c===pe)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ja)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ka)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ja)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Qa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ja)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ka)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ja)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Qa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===S2||r===E2||r===w2||r===T2)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===S2)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===E2)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===w2)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===T2)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===a1)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===A2||r===R2)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===A2)return c===pe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===R2)return c===pe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===C2||r===P2||r===L2||r===I2||r===D2||r===U2||r===N2||r===B2||r===O2||r===F2||r===z2||r===k2||r===H2||r===V2)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===C2)return c===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===P2)return c===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===L2)return c===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===I2)return c===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===D2)return c===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===U2)return c===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===N2)return c===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===B2)return c===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===O2)return c===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===F2)return c===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===z2)return c===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===k2)return c===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===H2)return c===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===V2)return c===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===tc||r===G2||r===W2)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===tc)return c===pe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===G2)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===W2)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===zh||r===X2||r===q2||r===Y2)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===tc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===X2)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===q2)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Y2)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Wi?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Zc=class extends Ie{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},re=class extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}},t5={type:"move"},gr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(t5)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new re;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Jc=class extends On{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,g=null,_=e.getContextAttributes(),m=null,p=null,y=[],x=[],v=new ct,E=null,w=new Ie;w.layers.enable(1),w.viewport=new ge;let b=new Ie;b.layers.enable(2),b.viewport=new ge;let I=[w,b],M=new Zc;M.layers.enable(1),M.layers.enable(2);let S=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let at=y[j];return at===void 0&&(at=new gr,y[j]=at),at.getTargetRaySpace()},this.getControllerGrip=function(j){let at=y[j];return at===void 0&&(at=new gr,y[j]=at),at.getGripSpace()},this.getHand=function(j){let at=y[j];return at===void 0&&(at=new gr,y[j]=at),at.getHandSpace()};function N(j){let at=x.indexOf(j.inputSource);if(at===-1)return;let St=y[at];St!==void 0&&(St.update(j.inputSource,j.frame,l||o),St.dispatchEvent({type:j.type,data:j.inputSource}))}function V(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",L);for(let j=0;j<y.length;j++){let at=x[j];at!==null&&(x[j]=null,y[j].disconnect(at))}S=null,D=null,t.setRenderTarget(m),d=null,f=null,h=null,s=null,p=null,Mt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(v.width,v.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",V),s.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(v),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let at={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new ei(d.framebufferWidth,d.framebufferHeight,{format:An,type:yi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let at=null,St=null,Pt=null;_.depth&&(Pt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=_.stencil?Ls:Xi,St=_.stencil?Wi:mi);let Tt={colorFormat:e.RGBA8,depthFormat:Pt,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(Tt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),p=new ei(f.textureWidth,f.textureHeight,{format:An,type:yi,depthTexture:new Jo(f.textureWidth,f.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});let Ot=t.properties.get(p);Ot.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Mt.setContext(s),Mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(j){for(let at=0;at<j.removed.length;at++){let St=j.removed[at],Pt=x.indexOf(St);Pt>=0&&(x[Pt]=null,y[Pt].disconnect(St))}for(let at=0;at<j.added.length;at++){let St=j.added[at],Pt=x.indexOf(St);if(Pt===-1){for(let Ot=0;Ot<y.length;Ot++)if(Ot>=x.length){x.push(St),Pt=Ot;break}else if(x[Ot]===null){x[Ot]=St,Pt=Ot;break}if(Pt===-1)break}let Tt=y[Pt];Tt&&Tt.connect(St)}}let O=new T,$=new T;function st(j,at,St){O.setFromMatrixPosition(at.matrixWorld),$.setFromMatrixPosition(St.matrixWorld);let Pt=O.distanceTo($),Tt=at.projectionMatrix.elements,Ot=St.projectionMatrix.elements,Gt=Tt[14]/(Tt[10]-1),Lt=Tt[14]/(Tt[10]+1),Vt=(Tt[9]+1)/Tt[5],U=(Tt[9]-1)/Tt[5],gt=(Tt[8]-1)/Tt[0],Q=(Ot[8]+1)/Ot[0],ft=Gt*gt,nt=Gt*Q,Dt=Pt/(-gt+Q),Et=Dt*-gt;at.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Et),j.translateZ(Dt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();let C=Gt+Dt,A=Lt+Dt,q=ft-Et,ut=nt+(Pt-Et),ot=Vt*Lt/A*C,rt=U*Lt/A*C;j.projectionMatrix.makePerspective(q,ut,ot,rt,C,A),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function it(j,at){at===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(at.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;M.near=b.near=w.near=j.near,M.far=b.far=w.far=j.far,(S!==M.near||D!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),S=M.near,D=M.far);let at=j.parent,St=M.cameras;it(M,at);for(let Pt=0;Pt<St.length;Pt++)it(St[Pt],at);St.length===2?st(M,w,b):M.projectionMatrix.copy(w.projectionMatrix),et(j,M,at)};function et(j,at,St){St===null?j.matrix.copy(at.matrixWorld):(j.matrix.copy(St.matrixWorld),j.matrix.invert(),j.matrix.multiply(at.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(at.projectionMatrix),j.projectionMatrixInverse.copy(at.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Sr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(j){c=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)};let lt=null;function ht(j,at){if(u=at.getViewerPose(l||o),g=at,u!==null){let St=u.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let Pt=!1;St.length!==M.cameras.length&&(M.cameras.length=0,Pt=!0);for(let Tt=0;Tt<St.length;Tt++){let Ot=St[Tt],Gt=null;if(d!==null)Gt=d.getViewport(Ot);else{let Vt=h.getViewSubImage(f,Ot);Gt=Vt.viewport,Tt===0&&(t.setRenderTargetTextures(p,Vt.colorTexture,f.ignoreDepthValues?void 0:Vt.depthStencilTexture),t.setRenderTarget(p))}let Lt=I[Tt];Lt===void 0&&(Lt=new Ie,Lt.layers.enable(Tt),Lt.viewport=new ge,I[Tt]=Lt),Lt.matrix.fromArray(Ot.transform.matrix),Lt.matrix.decompose(Lt.position,Lt.quaternion,Lt.scale),Lt.projectionMatrix.fromArray(Ot.projectionMatrix),Lt.projectionMatrixInverse.copy(Lt.projectionMatrix).invert(),Lt.viewport.set(Gt.x,Gt.y,Gt.width,Gt.height),Tt===0&&(M.matrix.copy(Lt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Pt===!0&&M.cameras.push(Lt)}}for(let St=0;St<y.length;St++){let Pt=x[St],Tt=y[St];Pt!==null&&Tt!==void 0&&Tt.update(Pt,at,l||o)}lt&&lt(j,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),g=null}let Mt=new p1;Mt.setAnimationLoop(ht),this.setAnimationLoop=function(j){lt=j},this.dispose=function(){}}};function e5(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,d1(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,y,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Fe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Fe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let x=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Fe&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function n5(i,t,e,n){let s={},r={},o=[],a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,x){let v=x.program;n.uniformBlockBinding(y,v)}function l(y,x){let v=s[y.id];v===void 0&&(g(y),v=u(y),s[y.id]=v,y.addEventListener("dispose",m));let E=x.program;n.updateUBOMapping(y,E);let w=t.render.frame;r[y.id]!==w&&(f(y),r[y.id]=w)}function u(y){let x=h();y.__bindingPointIndex=x;let v=i.createBuffer(),E=y.__size,w=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,E,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let x=s[y.id],v=y.uniforms,E=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let w=0,b=v.length;w<b;w++){let I=Array.isArray(v[w])?v[w]:[v[w]];for(let M=0,S=I.length;M<S;M++){let D=I[M];if(d(D,w,M,E)===!0){let N=D.__offset,V=Array.isArray(D.value)?D.value:[D.value],L=0;for(let O=0;O<V.length;O++){let $=V[O],st=_($);typeof $=="number"||typeof $=="boolean"?(D.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,N+L,D.__data)):$.isMatrix3?(D.__data[0]=$.elements[0],D.__data[1]=$.elements[1],D.__data[2]=$.elements[2],D.__data[3]=0,D.__data[4]=$.elements[3],D.__data[5]=$.elements[4],D.__data[6]=$.elements[5],D.__data[7]=0,D.__data[8]=$.elements[6],D.__data[9]=$.elements[7],D.__data[10]=$.elements[8],D.__data[11]=0):($.toArray(D.__data,L),L+=st.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,x,v,E){let w=y.value,b=x+"_"+v;if(E[b]===void 0)return typeof w=="number"||typeof w=="boolean"?E[b]=w:E[b]=w.clone(),!0;{let I=E[b];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return E[b]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function g(y){let x=y.uniforms,v=0,E=16;for(let b=0,I=x.length;b<I;b++){let M=Array.isArray(x[b])?x[b]:[x[b]];for(let S=0,D=M.length;S<D;S++){let N=M[S],V=Array.isArray(N.value)?N.value:[N.value];for(let L=0,O=V.length;L<O;L++){let $=V[L],st=_($),it=v%E;it!==0&&E-it<st.boundary&&(v+=E-it),N.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=st.storage}}}let w=v%E;return w>0&&(v+=E-w),y.__size=v,y.__cache={},this}function _(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){let x=y.target;x.removeEventListener("dispose",m);let v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Si=class{constructor(t={}){let{canvas:e=hf(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let d=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,p=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Re,this._useLegacyLights=!1,this.toneMapping=_i,this.toneMappingExposure=1;let x=this,v=!1,E=0,w=0,b=null,I=-1,M=null,S=new ge,D=new ge,N=null,V=new $t(0),L=0,O=e.width,$=e.height,st=1,it=null,et=null,lt=new ge(0,0,O,$),ht=new ge(0,0,O,$),Mt=!1,j=new wr,at=!1,St=!1,Pt=null,Tt=new Xt,Ot=new ct,Gt=new T,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Vt(){return b===null?st:1}let U=n;function gt(P,Y){for(let J=0;J<P.length;J++){let H=P[J],X=e.getContext(H,Y);if(X!==null)return X}return null}try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ml}`),e.addEventListener("webglcontextlost",xt,!1),e.addEventListener("webglcontextrestored",B,!1),e.addEventListener("webglcontextcreationerror",pt,!1),U===null){let Y=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&Y.shift(),U=gt(Y,P),U===null)throw gt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Q,ft,nt,Dt,Et,C,A,q,ut,ot,rt,F,z,tt,K,mt,k,dt,R,G,W,Z,_t,At;function Ut(){Q=new Mp(U),ft=new mp(U,Q,t),Q.init(ft),Z=new Q3(U,Q,ft),nt=new K3(U,Q,ft),Dt=new Ep(U),Et=new z3,C=new j3(U,Q,nt,Et,ft,Z,Dt),A=new xp(x),q=new vp(x),ut=new If(U,ft),_t=new dp(U,Q,ut,ft),ot=new bp(U,ut,Dt,_t),rt=new Rp(U,ot,ut,Dt),R=new Ap(U,ft,C),mt=new gp(Et),F=new F3(x,A,q,Q,ft,_t,mt),z=new e5(x,Et),tt=new H3,K=new Y3(Q,ft),dt=new fp(x,A,q,nt,rt,f,c),k=new J3(x,rt,ft),At=new n5(U,Dt,ft,nt),G=new pp(U,Q,Dt,ft),W=new Sp(U,Q,Dt,ft),Dt.programs=F.programs,x.capabilities=ft,x.extensions=Q,x.properties=Et,x.renderLists=tt,x.shadowMap=k,x.state=nt,x.info=Dt}Ut();let Ht=new Jc(x,U);this.xr=Ht,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let P=Q.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=Q.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(P){P!==void 0&&(st=P,this.setSize(O,$,!1))},this.getSize=function(P){return P.set(O,$)},this.setSize=function(P,Y,J=!0){if(Ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=P,$=Y,e.width=Math.floor(P*st),e.height=Math.floor(Y*st),J===!0&&(e.style.width=P+"px",e.style.height=Y+"px"),this.setViewport(0,0,P,Y)},this.getDrawingBufferSize=function(P){return P.set(O*st,$*st).floor()},this.setDrawingBufferSize=function(P,Y,J){O=P,$=Y,st=J,e.width=Math.floor(P*J),e.height=Math.floor(Y*J),this.setViewport(0,0,P,Y)},this.getCurrentViewport=function(P){return P.copy(S)},this.getViewport=function(P){return P.copy(lt)},this.setViewport=function(P,Y,J,H){P.isVector4?lt.set(P.x,P.y,P.z,P.w):lt.set(P,Y,J,H),nt.viewport(S.copy(lt).multiplyScalar(st).floor())},this.getScissor=function(P){return P.copy(ht)},this.setScissor=function(P,Y,J,H){P.isVector4?ht.set(P.x,P.y,P.z,P.w):ht.set(P,Y,J,H),nt.scissor(D.copy(ht).multiplyScalar(st).floor())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(P){nt.setScissorTest(Mt=P)},this.setOpaqueSort=function(P){it=P},this.setTransparentSort=function(P){et=P},this.getClearColor=function(P){return P.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor.apply(dt,arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha.apply(dt,arguments)},this.clear=function(P=!0,Y=!0,J=!0){let H=0;if(P){let X=!1;if(b!==null){let vt=b.texture.format;X=vt===o1||vt===r1||vt===s1}if(X){let vt=b.texture.type,Rt=vt===yi||vt===mi||vt===bl||vt===Wi||vt===n1||vt===i1,Nt=dt.getClearColor(),Wt=dt.getClearAlpha(),qt=Nt.r,Yt=Nt.g,Zt=Nt.b;Rt?(d[0]=qt,d[1]=Yt,d[2]=Zt,d[3]=Wt,U.clearBufferuiv(U.COLOR,0,d)):(g[0]=qt,g[1]=Yt,g[2]=Zt,g[3]=Wt,U.clearBufferiv(U.COLOR,0,g))}else H|=U.COLOR_BUFFER_BIT}Y&&(H|=U.DEPTH_BUFFER_BIT),J&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xt,!1),e.removeEventListener("webglcontextrestored",B,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),tt.dispose(),K.dispose(),Et.dispose(),A.dispose(),q.dispose(),rt.dispose(),_t.dispose(),At.dispose(),F.dispose(),Ht.dispose(),Ht.removeEventListener("sessionstart",ae),Ht.removeEventListener("sessionend",te),Pt&&(Pt.dispose(),Pt=null),fe.stop()};function xt(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let P=Dt.autoReset,Y=k.enabled,J=k.autoUpdate,H=k.needsUpdate,X=k.type;Ut(),Dt.autoReset=P,k.enabled=Y,k.autoUpdate=J,k.needsUpdate=H,k.type=X}function pt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function yt(P){let Y=P.target;Y.removeEventListener("dispose",yt),Ft(Y)}function Ft(P){It(P),Et.remove(P)}function It(P){let Y=Et.get(P).programs;Y!==void 0&&(Y.forEach(function(J){F.releaseProgram(J)}),P.isShaderMaterial&&F.releaseShaderCache(P))}this.renderBufferDirect=function(P,Y,J,H,X,vt){Y===null&&(Y=Lt);let Rt=X.isMesh&&X.matrixWorld.determinant()<0,Nt=Xn(P,Y,J,H,X);nt.setMaterial(H,Rt);let Wt=J.index,qt=1;if(H.wireframe===!0){if(Wt=ot.getWireframeAttribute(J),Wt===void 0)return;qt=2}let Yt=J.drawRange,Zt=J.attributes.position,Ee=Yt.start*qt,ln=(Yt.start+Yt.count)*qt;vt!==null&&(Ee=Math.max(Ee,vt.start*qt),ln=Math.min(ln,(vt.start+vt.count)*qt)),Wt!==null?(Ee=Math.max(Ee,0),ln=Math.min(ln,Wt.count)):Zt!=null&&(Ee=Math.max(Ee,0),ln=Math.min(ln,Zt.count));let Be=ln-Ee;if(Be<0||Be===1/0)return;_t.setup(X,H,Nt,J,Wt);let qn,_e=G;if(Wt!==null&&(qn=ut.get(Wt),_e=W,_e.setIndex(qn)),X.isMesh)H.wireframe===!0?(nt.setLineWidth(H.wireframeLinewidth*Vt()),_e.setMode(U.LINES)):_e.setMode(U.TRIANGLES);else if(X.isLine){let ee=H.linewidth;ee===void 0&&(ee=1),nt.setLineWidth(ee*Vt()),X.isLineSegments?_e.setMode(U.LINES):X.isLineLoop?_e.setMode(U.LINE_LOOP):_e.setMode(U.LINE_STRIP)}else X.isPoints?_e.setMode(U.POINTS):X.isSprite&&_e.setMode(U.TRIANGLES);if(X.isBatchedMesh)_e.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)_e.renderInstances(Ee,Be,X.count);else if(J.isInstancedBufferGeometry){let ee=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Xa=Math.min(J.instanceCount,ee);_e.renderInstances(Ee,Be,Xa)}else _e.render(Ee,Be)};function Jt(P,Y,J){P.transparent===!0&&P.side===He&&P.forceSinglePass===!1?(P.side=Fe,P.needsUpdate=!0,We(P,Y,J),P.side=Rn,P.needsUpdate=!0,We(P,Y,J),P.side=He):We(P,Y,J)}this.compile=function(P,Y,J=null){J===null&&(J=P),m=K.get(J),m.init(),y.push(m),J.traverseVisible(function(X){X.isLight&&X.layers.test(Y.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),P!==J&&P.traverseVisible(function(X){X.isLight&&X.layers.test(Y.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights(x._useLegacyLights);let H=new Set;return P.traverse(function(X){let vt=X.material;if(vt)if(Array.isArray(vt))for(let Rt=0;Rt<vt.length;Rt++){let Nt=vt[Rt];Jt(Nt,J,X),H.add(Nt)}else Jt(vt,J,X),H.add(vt)}),y.pop(),m=null,H},this.compileAsync=function(P,Y,J=null){let H=this.compile(P,Y,J);return new Promise(X=>{function vt(){if(H.forEach(function(Rt){Et.get(Rt).currentProgram.isReady()&&H.delete(Rt)}),H.size===0){X(P);return}setTimeout(vt,10)}Q.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let wt=null;function jt(P){wt&&wt(P)}function ae(){fe.stop()}function te(){fe.start()}let fe=new p1;fe.setAnimationLoop(jt),typeof self<"u"&&fe.setContext(self),this.setAnimationLoop=function(P){wt=P,Ht.setAnimationLoop(P),P===null?fe.stop():fe.start()},Ht.addEventListener("sessionstart",ae),Ht.addEventListener("sessionend",te),this.render=function(P,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ht.enabled===!0&&Ht.isPresenting===!0&&(Ht.cameraAutoUpdate===!0&&Ht.updateCamera(Y),Y=Ht.getCamera()),P.isScene===!0&&P.onBeforeRender(x,P,Y,b),m=K.get(P,y.length),m.init(),y.push(m),Tt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),j.setFromProjectionMatrix(Tt),St=this.localClippingEnabled,at=mt.init(this.clippingPlanes,St),_=tt.get(P,p.length),_.init(),p.push(_),Ze(P,Y,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(it,et),this.info.render.frame++,at===!0&&mt.beginShadows();let J=m.state.shadowsArray;if(k.render(J,P,Y),at===!0&&mt.endShadows(),this.info.autoReset===!0&&this.info.reset(),dt.render(_,P),m.setupLights(x._useLegacyLights),Y.isArrayCamera){let H=Y.cameras;for(let X=0,vt=H.length;X<vt;X++){let Rt=H[X];Ge(_,P,Rt,Rt.viewport)}}else Ge(_,P,Y);b!==null&&(C.updateMultisampleRenderTarget(b),C.updateRenderTargetMipmap(b)),P.isScene===!0&&P.onAfterRender(x,P,Y),_t.resetDefaultState(),I=-1,M=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Ze(P,Y,J,H){if(P.visible===!1)return;if(P.layers.test(Y.layers)){if(P.isGroup)J=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Y);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||j.intersectsSprite(P)){H&&Gt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Tt);let Rt=rt.update(P),Nt=P.material;Nt.visible&&_.push(P,Rt,Nt,J,Gt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||j.intersectsObject(P))){let Rt=rt.update(P),Nt=P.material;if(H&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Gt.copy(P.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Gt.copy(Rt.boundingSphere.center)),Gt.applyMatrix4(P.matrixWorld).applyMatrix4(Tt)),Array.isArray(Nt)){let Wt=Rt.groups;for(let qt=0,Yt=Wt.length;qt<Yt;qt++){let Zt=Wt[qt],Ee=Nt[Zt.materialIndex];Ee&&Ee.visible&&_.push(P,Rt,Ee,J,Gt.z,Zt)}}else Nt.visible&&_.push(P,Rt,Nt,J,Gt.z,null)}}let vt=P.children;for(let Rt=0,Nt=vt.length;Rt<Nt;Rt++)Ze(vt[Rt],Y,J,H)}function Ge(P,Y,J,H){let X=P.opaque,vt=P.transmissive,Rt=P.transparent;m.setupLightsView(J),at===!0&&mt.setGlobalState(x.clippingPlanes,J),vt.length>0&&Je(X,vt,Y,J),H&&nt.viewport(S.copy(H)),X.length>0&&Ne(X,Y,J),vt.length>0&&Ne(vt,Y,J),Rt.length>0&&Ne(Rt,Y,J),nt.buffers.depth.setTest(!0),nt.buffers.depth.setMask(!0),nt.buffers.color.setMask(!0),nt.setPolygonOffset(!1)}function Je(P,Y,J,H){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;let vt=ft.isWebGL2;Pt===null&&(Pt=new ei(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")?br:yi,minFilter:Mr,samples:vt?4:0})),x.getDrawingBufferSize(Ot),vt?Pt.setSize(Ot.x,Ot.y):Pt.setSize(zo(Ot.x),zo(Ot.y));let Rt=x.getRenderTarget();x.setRenderTarget(Pt),x.getClearColor(V),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();let Nt=x.toneMapping;x.toneMapping=_i,Ne(P,J,H),C.updateMultisampleRenderTarget(Pt),C.updateRenderTargetMipmap(Pt);let Wt=!1;for(let qt=0,Yt=Y.length;qt<Yt;qt++){let Zt=Y[qt],Ee=Zt.object,ln=Zt.geometry,Be=Zt.material,qn=Zt.group;if(Be.side===He&&Ee.layers.test(H.layers)){let _e=Be.side;Be.side=Fe,Be.needsUpdate=!0,Vn(Ee,J,H,ln,Be,qn),Be.side=_e,Be.needsUpdate=!0,Wt=!0}}Wt===!0&&(C.updateMultisampleRenderTarget(Pt),C.updateRenderTargetMipmap(Pt)),x.setRenderTarget(Rt),x.setClearColor(V,L),x.toneMapping=Nt}function Ne(P,Y,J){let H=Y.isScene===!0?Y.overrideMaterial:null;for(let X=0,vt=P.length;X<vt;X++){let Rt=P[X],Nt=Rt.object,Wt=Rt.geometry,qt=H===null?Rt.material:H,Yt=Rt.group;Nt.layers.test(J.layers)&&Vn(Nt,Y,J,Wt,qt,Yt)}}function Vn(P,Y,J,H,X,vt){P.onBeforeRender(x,Y,J,H,X,vt),P.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),X.onBeforeRender(x,Y,J,H,P,vt),X.transparent===!0&&X.side===He&&X.forceSinglePass===!1?(X.side=Fe,X.needsUpdate=!0,x.renderBufferDirect(J,Y,H,X,P,vt),X.side=Rn,X.needsUpdate=!0,x.renderBufferDirect(J,Y,H,X,P,vt),X.side=He):x.renderBufferDirect(J,Y,H,X,P,vt),P.onAfterRender(x,Y,J,H,X,vt)}function We(P,Y,J){Y.isScene!==!0&&(Y=Lt);let H=Et.get(P),X=m.state.lights,vt=m.state.shadowsArray,Rt=X.state.version,Nt=F.getParameters(P,X.state,vt,Y,J),Wt=F.getProgramCacheKey(Nt),qt=H.programs;H.environment=P.isMeshStandardMaterial?Y.environment:null,H.fog=Y.fog,H.envMap=(P.isMeshStandardMaterial?q:A).get(P.envMap||H.environment),qt===void 0&&(P.addEventListener("dispose",yt),qt=new Map,H.programs=qt);let Yt=qt.get(Wt);if(Yt!==void 0){if(H.currentProgram===Yt&&H.lightsStateVersion===Rt)return Wn(P,Nt),Yt}else Nt.uniforms=F.getUniforms(P),P.onBuild(J,Nt,x),P.onBeforeCompile(Nt,x),Yt=F.acquireProgram(Nt,Wt),qt.set(Wt,Yt),H.uniforms=Nt.uniforms;let Zt=H.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Zt.clippingPlanes=mt.uniform),Wn(P,Nt),H.needsLights=Wa(P),H.lightsStateVersion=Rt,H.needsLights&&(Zt.ambientLightColor.value=X.state.ambient,Zt.lightProbe.value=X.state.probe,Zt.directionalLights.value=X.state.directional,Zt.directionalLightShadows.value=X.state.directionalShadow,Zt.spotLights.value=X.state.spot,Zt.spotLightShadows.value=X.state.spotShadow,Zt.rectAreaLights.value=X.state.rectArea,Zt.ltc_1.value=X.state.rectAreaLTC1,Zt.ltc_2.value=X.state.rectAreaLTC2,Zt.pointLights.value=X.state.point,Zt.pointLightShadows.value=X.state.pointShadow,Zt.hemisphereLights.value=X.state.hemi,Zt.directionalShadowMap.value=X.state.directionalShadowMap,Zt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Zt.spotShadowMap.value=X.state.spotShadowMap,Zt.spotLightMatrix.value=X.state.spotLightMatrix,Zt.spotLightMap.value=X.state.spotLightMap,Zt.pointShadowMap.value=X.state.pointShadowMap,Zt.pointShadowMatrix.value=X.state.pointShadowMatrix),H.currentProgram=Yt,H.uniformsList=null,Yt}function Gn(P){if(P.uniformsList===null){let Y=P.currentProgram.getUniforms();P.uniformsList=Rs.seqWithValue(Y.seq,P.uniforms)}return P.uniformsList}function Wn(P,Y){let J=Et.get(P);J.outputColorSpace=Y.outputColorSpace,J.batching=Y.batching,J.instancing=Y.instancing,J.instancingColor=Y.instancingColor,J.skinning=Y.skinning,J.morphTargets=Y.morphTargets,J.morphNormals=Y.morphNormals,J.morphColors=Y.morphColors,J.morphTargetsCount=Y.morphTargetsCount,J.numClippingPlanes=Y.numClippingPlanes,J.numIntersection=Y.numClipIntersection,J.vertexAlphas=Y.vertexAlphas,J.vertexTangents=Y.vertexTangents,J.toneMapping=Y.toneMapping}function Xn(P,Y,J,H,X){Y.isScene!==!0&&(Y=Lt),C.resetTextureUnits();let vt=Y.fog,Rt=H.isMeshStandardMaterial?Y.environment:null,Nt=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:ti,Wt=(H.isMeshStandardMaterial?q:A).get(H.envMap||Rt),qt=H.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Yt=!!J.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Zt=!!J.morphAttributes.position,Ee=!!J.morphAttributes.normal,ln=!!J.morphAttributes.color,Be=_i;H.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Be=x.toneMapping);let qn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,_e=qn!==void 0?qn.length:0,ee=Et.get(H),Xa=m.state.lights;if(at===!0&&(St===!0||P!==M)){let mn=P===M&&H.id===I;mt.setState(H,P,mn)}let Me=!1;H.version===ee.__version?(ee.needsLights&&ee.lightsStateVersion!==Xa.state.version||ee.outputColorSpace!==Nt||X.isBatchedMesh&&ee.batching===!1||!X.isBatchedMesh&&ee.batching===!0||X.isInstancedMesh&&ee.instancing===!1||!X.isInstancedMesh&&ee.instancing===!0||X.isSkinnedMesh&&ee.skinning===!1||!X.isSkinnedMesh&&ee.skinning===!0||X.isInstancedMesh&&ee.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&ee.instancingColor===!1&&X.instanceColor!==null||ee.envMap!==Wt||H.fog===!0&&ee.fog!==vt||ee.numClippingPlanes!==void 0&&(ee.numClippingPlanes!==mt.numPlanes||ee.numIntersection!==mt.numIntersection)||ee.vertexAlphas!==qt||ee.vertexTangents!==Yt||ee.morphTargets!==Zt||ee.morphNormals!==Ee||ee.morphColors!==ln||ee.toneMapping!==Be||ft.isWebGL2===!0&&ee.morphTargetsCount!==_e)&&(Me=!0):(Me=!0,ee.__version=H.version);let Ni=ee.currentProgram;Me===!0&&(Ni=We(H,Y,X));let p2=!1,ar=!1,qa=!1,Xe=Ni.getUniforms(),Bi=ee.uniforms;if(nt.useProgram(Ni.program)&&(p2=!0,ar=!0,qa=!0),H.id!==I&&(I=H.id,ar=!0),p2||M!==P){Xe.setValue(U,"projectionMatrix",P.projectionMatrix),Xe.setValue(U,"viewMatrix",P.matrixWorldInverse);let mn=Xe.map.cameraPosition;mn!==void 0&&mn.setValue(U,Gt.setFromMatrixPosition(P.matrixWorld)),ft.logarithmicDepthBuffer&&Xe.setValue(U,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Xe.setValue(U,"isOrthographic",P.isOrthographicCamera===!0),M!==P&&(M=P,ar=!0,qa=!0)}if(X.isSkinnedMesh){Xe.setOptional(U,X,"bindMatrix"),Xe.setOptional(U,X,"bindMatrixInverse");let mn=X.skeleton;mn&&(ft.floatVertexTextures?(mn.boneTexture===null&&mn.computeBoneTexture(),Xe.setValue(U,"boneTexture",mn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}X.isBatchedMesh&&(Xe.setOptional(U,X,"batchingTexture"),Xe.setValue(U,"batchingTexture",X._matricesTexture,C));let Ya=J.morphAttributes;if((Ya.position!==void 0||Ya.normal!==void 0||Ya.color!==void 0&&ft.isWebGL2===!0)&&R.update(X,J,Ni),(ar||ee.receiveShadow!==X.receiveShadow)&&(ee.receiveShadow=X.receiveShadow,Xe.setValue(U,"receiveShadow",X.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Bi.envMap.value=Wt,Bi.flipEnvMap.value=Wt.isCubeTexture&&Wt.isRenderTargetTexture===!1?-1:1),ar&&(Xe.setValue(U,"toneMappingExposure",x.toneMappingExposure),ee.needsLights&&li(Bi,qa),vt&&H.fog===!0&&z.refreshFogUniforms(Bi,vt),z.refreshMaterialUniforms(Bi,H,st,$,Pt),Rs.upload(U,Gn(ee),Bi,C)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Rs.upload(U,Gn(ee),Bi,C),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Xe.setValue(U,"center",X.center),Xe.setValue(U,"modelViewMatrix",X.modelViewMatrix),Xe.setValue(U,"normalMatrix",X.normalMatrix),Xe.setValue(U,"modelMatrix",X.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let mn=H.uniformsGroups;for(let $a=0,j4=mn.length;$a<j4;$a++)if(ft.isWebGL2){let m2=mn[$a];At.update(m2,Ni),At.bind(m2,Ni)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ni}function li(P,Y){P.ambientLightColor.needsUpdate=Y,P.lightProbe.needsUpdate=Y,P.directionalLights.needsUpdate=Y,P.directionalLightShadows.needsUpdate=Y,P.pointLights.needsUpdate=Y,P.pointLightShadows.needsUpdate=Y,P.spotLights.needsUpdate=Y,P.spotLightShadows.needsUpdate=Y,P.rectAreaLights.needsUpdate=Y,P.hemisphereLights.needsUpdate=Y}function Wa(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(P,Y,J){Et.get(P.texture).__webglTexture=Y,Et.get(P.depthTexture).__webglTexture=J;let H=Et.get(P);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=J===void 0,H.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,Y){let J=Et.get(P);J.__webglFramebuffer=Y,J.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(P,Y=0,J=0){b=P,E=Y,w=J;let H=!0,X=null,vt=!1,Rt=!1;if(P){let Wt=Et.get(P);Wt.__useDefaultFramebuffer!==void 0?(nt.bindFramebuffer(U.FRAMEBUFFER,null),H=!1):Wt.__webglFramebuffer===void 0?C.setupRenderTarget(P):Wt.__hasExternalTextures&&C.rebindTextures(P,Et.get(P.texture).__webglTexture,Et.get(P.depthTexture).__webglTexture);let qt=P.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Rt=!0);let Yt=Et.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Yt[Y])?X=Yt[Y][J]:X=Yt[Y],vt=!0):ft.isWebGL2&&P.samples>0&&C.useMultisampledRTT(P)===!1?X=Et.get(P).__webglMultisampledFramebuffer:Array.isArray(Yt)?X=Yt[J]:X=Yt,S.copy(P.viewport),D.copy(P.scissor),N=P.scissorTest}else S.copy(lt).multiplyScalar(st).floor(),D.copy(ht).multiplyScalar(st).floor(),N=Mt;if(nt.bindFramebuffer(U.FRAMEBUFFER,X)&&ft.drawBuffers&&H&&nt.drawBuffers(P,X),nt.viewport(S),nt.scissor(D),nt.setScissorTest(N),vt){let Wt=Et.get(P.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Wt.__webglTexture,J)}else if(Rt){let Wt=Et.get(P.texture),qt=Y||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Wt.__webglTexture,J||0,qt)}I=-1},this.readRenderTargetPixels=function(P,Y,J,H,X,vt,Rt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Et.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Rt!==void 0&&(Nt=Nt[Rt]),Nt){nt.bindFramebuffer(U.FRAMEBUFFER,Nt);try{let Wt=P.texture,qt=Wt.format,Yt=Wt.type;if(qt!==An&&Z.convert(qt)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Zt=Yt===br&&(Q.has("EXT_color_buffer_half_float")||ft.isWebGL2&&Q.has("EXT_color_buffer_float"));if(Yt!==yi&&Z.convert(Yt)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Yt===gi&&(ft.isWebGL2||Q.has("OES_texture_float")||Q.has("WEBGL_color_buffer_float")))&&!Zt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=P.width-H&&J>=0&&J<=P.height-X&&U.readPixels(Y,J,H,X,Z.convert(qt),Z.convert(Yt),vt)}finally{let Wt=b!==null?Et.get(b).__webglFramebuffer:null;nt.bindFramebuffer(U.FRAMEBUFFER,Wt)}}},this.copyFramebufferToTexture=function(P,Y,J=0){let H=Math.pow(2,-J),X=Math.floor(Y.image.width*H),vt=Math.floor(Y.image.height*H);C.setTexture2D(Y,0),U.copyTexSubImage2D(U.TEXTURE_2D,J,0,0,P.x,P.y,X,vt),nt.unbindTexture()},this.copyTextureToTexture=function(P,Y,J,H=0){let X=Y.image.width,vt=Y.image.height,Rt=Z.convert(J.format),Nt=Z.convert(J.type);C.setTexture2D(J,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,J.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,J.unpackAlignment),Y.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,H,P.x,P.y,X,vt,Rt,Nt,Y.image.data):Y.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,H,P.x,P.y,Y.mipmaps[0].width,Y.mipmaps[0].height,Rt,Y.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,H,P.x,P.y,Rt,Nt,Y.image),H===0&&J.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),nt.unbindTexture()},this.copyTextureToTexture3D=function(P,Y,J,H,X=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let vt=P.max.x-P.min.x+1,Rt=P.max.y-P.min.y+1,Nt=P.max.z-P.min.z+1,Wt=Z.convert(H.format),qt=Z.convert(H.type),Yt;if(H.isData3DTexture)C.setTexture3D(H,0),Yt=U.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)C.setTexture2DArray(H,0),Yt=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,H.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,H.unpackAlignment);let Zt=U.getParameter(U.UNPACK_ROW_LENGTH),Ee=U.getParameter(U.UNPACK_IMAGE_HEIGHT),ln=U.getParameter(U.UNPACK_SKIP_PIXELS),Be=U.getParameter(U.UNPACK_SKIP_ROWS),qn=U.getParameter(U.UNPACK_SKIP_IMAGES),_e=J.isCompressedTexture?J.mipmaps[X]:J.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,_e.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_e.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,P.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,P.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,P.min.z),J.isDataTexture||J.isData3DTexture?U.texSubImage3D(Yt,X,Y.x,Y.y,Y.z,vt,Rt,Nt,Wt,qt,_e.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Yt,X,Y.x,Y.y,Y.z,vt,Rt,Nt,Wt,_e.data)):U.texSubImage3D(Yt,X,Y.x,Y.y,Y.z,vt,Rt,Nt,Wt,qt,_e),U.pixelStorei(U.UNPACK_ROW_LENGTH,Zt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ee),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ln),U.pixelStorei(U.UNPACK_SKIP_ROWS,Be),U.pixelStorei(U.UNPACK_SKIP_IMAGES,qn),X===0&&H.generateMipmaps&&U.generateMipmap(Yt),nt.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?C.setTextureCube(P,0):P.isData3DTexture?C.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?C.setTexture2DArray(P,0):C.setTexture2D(P,0),nt.unbindTexture()},this.resetState=function(){E=0,w=0,b=null,nt.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Sl?"display-p3":"srgb",e.unpackColorSpace=he.workingColorSpace===ua?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Re?qi:c1}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===qi?Re:ti}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Kc=class extends Si{};Kc.prototype.isWebGL1Renderer=!0;var Ko=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new $t(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ri=class extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var Tr=class extends ii{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Fu=new T,zu=new T,ku=new Xt,Ec=new ni,To=new vi,Ar=class extends $e{constructor(t=new xe,e=new Tr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Fu.fromBufferAttribute(e,s-1),zu.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Fu.distanceTo(zu);t.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),To.copy(n.boundingSphere),To.applyMatrix4(s),To.radius+=r,t.ray.intersectsSphere(To)===!1)return;ku.copy(s).invert(),Ec.copy(t.ray).applyMatrix4(ku);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new T,u=new T,h=new T,f=new T,d=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let p=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let x=p,v=y-1;x<v;x+=d){let E=g.getX(x),w=g.getX(x+1);if(l.fromBufferAttribute(m,E),u.fromBufferAttribute(m,w),Ec.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);let I=t.ray.origin.distanceTo(f);I<t.near||I>t.far||e.push({distance:I,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),y=Math.min(m.count,o.start+o.count);for(let x=p,v=y-1;x<v;x+=d){if(l.fromBufferAttribute(m,x),u.fromBufferAttribute(m,x+1),Ec.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);let w=t.ray.origin.distanceTo(f);w<t.near||w>t.far||e.push({distance:w,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},Hu=new T,Vu=new T,jc=class extends Ar{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Hu.fromBufferAttribute(e,s),Vu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Hu.distanceTo(Vu);t.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Rr=class extends yn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},vn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let u=n[s],f=n[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new ct:new T);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new T,s=[],r=[],o=[],a=new T,c=new Xt;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new T)}r[0]=new T,o[0]=new T;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ce(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Ce(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Cr=class extends vn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e){let n=e||new ct,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Qc=class extends Cr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Tl(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let f=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Ao=new T,wc=new Tl,Tc=new Tl,Ac=new Tl,tl=class extends vn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new T){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Ao.subVectors(s[0],s[1]).add(s[0]),l=Ao);let h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Ao.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Ao),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),wc.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,g,_,m),Tc.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,g,_,m),Ac.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(wc.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),Tc.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),Ac.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(wc.calc(c),Tc.calc(c),Ac.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new T().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Gu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function i5(i,t){let e=1-i;return e*e*t}function s5(i,t){return 2*(1-i)*i*t}function r5(i,t){return i*i*t}function xr(i,t,e,n){return i5(i,t)+s5(i,e)+r5(i,n)}function o5(i,t){let e=1-i;return e*e*e*t}function a5(i,t){let e=1-i;return 3*e*e*i*t}function c5(i,t){return 3*(1-i)*i*i*t}function l5(i,t){return i*i*i*t}function _r(i,t,e,n,s){return o5(i,t)+a5(i,e)+c5(i,n)+l5(i,s)}var jo=class extends vn{constructor(t=new ct,e=new ct,n=new ct,s=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ct){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(_r(t,s.x,r.x,o.x,a.x),_r(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},el=class extends vn{constructor(t=new T,e=new T,n=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new T){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(_r(t,s.x,r.x,o.x,a.x),_r(t,s.y,r.y,o.y,a.y),_r(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Qo=class extends vn{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},nl=class extends vn{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ta=class extends vn{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(xr(t,s.x,r.x,o.x),xr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},il=class extends vn{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(xr(t,s.x,r.x,o.x),xr(t,s.y,r.y,o.y),xr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ea=class extends vn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(Gu(a,c.x,l.x,u.x,h.x),Gu(a,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ct().fromArray(s))}return this}},sl=Object.freeze({__proto__:null,ArcCurve:Qc,CatmullRomCurve3:tl,CubicBezierCurve:jo,CubicBezierCurve3:el,EllipseCurve:Cr,LineCurve:Qo,LineCurve3:nl,QuadraticBezierCurve:ta,QuadraticBezierCurve3:il,SplineCurve:ea}),rl=class extends vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new sl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new sl[s.type]().fromJSON(s))}return this}},Ds=class extends rl{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Qo(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new ta(this.currentPoint.clone(),new ct(t,e),new ct(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new jo(this.currentPoint.clone(),new ct(t,e),new ct(n,s),new ct(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ea(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new Cr(t,e,n,s,r,o,a,c);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},na=class i extends xe{constructor(t=[new ct(0,-.5),new ct(.5,0),new ct(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ce(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],u=1/e,h=new T,f=new ct,d=new T,g=new T,_=new T,m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(g)}for(let y=0;y<=e;y++){let x=n+y*u*s,v=Math.sin(x),E=Math.cos(x);for(let w=0;w<=t.length-1;w++){h.x=t[w].x*v,h.y=t[w].y,h.z=t[w].x*E,o.push(h.x,h.y,h.z),f.x=y/e,f.y=w/(t.length-1),a.push(f.x,f.y);let b=c[3*w+0]*v,I=c[3*w+1],M=c[3*w+0]*E;l.push(b,I,M)}}for(let y=0;y<e;y++)for(let x=0;x<t.length-1;x++){let v=x+y*t.length,E=v,w=v+t.length,b=v+t.length+1,I=v+1;r.push(E,w,I),r.push(b,I,w)}this.setIndex(r),this.setAttribute("position",new le(o,3)),this.setAttribute("uv",new le(a,2)),this.setAttribute("normal",new le(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Us=class i extends xe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],d=[],g=0,_=[],m=n/2,p=0;y(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new le(h,3)),this.setAttribute("normal",new le(f,3)),this.setAttribute("uv",new le(d,2));function y(){let v=new T,E=new T,w=0,b=(e-t)/n;for(let I=0;I<=r;I++){let M=[],S=I/r,D=S*(e-t)+t;for(let N=0;N<=s;N++){let V=N/s,L=V*c+a,O=Math.sin(L),$=Math.cos(L);E.x=D*O,E.y=-S*n+m,E.z=D*$,h.push(E.x,E.y,E.z),v.set(O,b,$).normalize(),f.push(v.x,v.y,v.z),d.push(V,1-S),M.push(g++)}_.push(M)}for(let I=0;I<s;I++)for(let M=0;M<r;M++){let S=_[M][I],D=_[M+1][I],N=_[M+1][I+1],V=_[M][I+1];u.push(S,D,V),u.push(D,N,V),w+=6}l.addGroup(p,w,0),p+=w}function x(v){let E=g,w=new ct,b=new T,I=0,M=v===!0?t:e,S=v===!0?1:-1;for(let N=1;N<=s;N++)h.push(0,m*S,0),f.push(0,S,0),d.push(.5,.5),g++;let D=g;for(let N=0;N<=s;N++){let L=N/s*c+a,O=Math.cos(L),$=Math.sin(L);b.x=M*$,b.y=m*S,b.z=M*O,h.push(b.x,b.y,b.z),f.push(0,S,0),w.x=O*.5+.5,w.y=$*.5*S+.5,d.push(w.x,w.y),g++}for(let N=0;N<s;N++){let V=E+N,L=D+N;v===!0?u.push(L,L+1,V):u.push(L+1,L,V),I+=3}l.addGroup(p,I,v===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Yi=class extends Ds{constructor(t){super(t),this.uuid=es(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Ds().fromJSON(s))}return this}},u5={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=v1(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,h,f,d;if(n&&(r=m5(i,t,r,e)),i.length>80*e){a=l=i[0],c=u=i[1];for(let g=e;g<s;g+=e)h=i[g],f=i[g+1],h<a&&(a=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);d=Math.max(l-a,u-c),d=d!==0?32767/d:0}return Pr(r,o,e,a,c,d,0),o}};function v1(i,t,e,n,s){let r,o;if(s===T5(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Wu(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Wu(r,i[r],i[r+1],o);return o&&fa(o,o.next)&&(Ir(o),o=o.next),o}function $i(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(fa(e,e.next)||ye(e.prev,e,e.next)===0)){if(Ir(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Pr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&v5(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?f5(i,n,s,r):h5(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Ir(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=d5($i(i),t,e),Pr(i,t,e,n,s,r,2)):o===2&&p5(i,t,e,n,s,r):Pr($i(i),t,e,n,s,r,1);break}}}function h5(i){let t=i.prev,e=i,n=i.next;if(ye(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&ws(s,a,r,c,o,l,g.x,g.y)&&ye(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function f5(i,t,e,n){let s=i.prev,r=i,o=i.next;if(ye(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,g=u<h?u<f?u:f:h<f?h:f,_=a>c?a>l?a:l:c>l?c:l,m=u>h?u>f?u:f:h>f?h:f,p=ol(d,g,t,e,n),y=ol(_,m,t,e,n),x=i.prevZ,v=i.nextZ;for(;x&&x.z>=p&&v&&v.z<=y;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&ws(a,u,c,h,l,f,x.x,x.y)&&ye(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&ws(a,u,c,h,l,f,v.x,v.y)&&ye(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&ws(a,u,c,h,l,f,x.x,x.y)&&ye(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=y;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&ws(a,u,c,h,l,f,v.x,v.y)&&ye(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function d5(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!fa(s,r)&&M1(s,n,n.next,r)&&Lr(s,r)&&Lr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Ir(n),Ir(n.next),n=i=r),n=n.next}while(n!==i);return $i(n)}function p5(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&S5(o,a)){let c=b1(o,a);o=$i(o,o.next),c=$i(c,c.next),Pr(o,t,e,n,s,r,0),Pr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function m5(i,t,e,n){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=v1(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(b5(l));for(s.sort(g5),r=0;r<s.length;r++)e=x5(s[r],e);return e}function g5(i,t){return i.x-t.x}function x5(i,t){let e=_5(i,t);if(!e)return t;let n=b1(e,i);return $i(n,n.next),$i(e,e.next)}function _5(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,u=1/0,h;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&ws(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),Lr(e,i)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&y5(s,e)))&&(s=e,u=h)),e=e.next;while(e!==a);return s}function y5(i,t){return ye(i.prev,i,t.prev)<0&&ye(t.next,i,i.next)<0}function v5(i,t,e,n){let s=i;do s.z===0&&(s.z=ol(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,M5(s)}function M5(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function ol(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function b5(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ws(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function S5(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!E5(i,t)&&(Lr(i,t)&&Lr(t,i)&&w5(i,t)&&(ye(i.prev,i,t.prev)||ye(i,t.prev,t))||fa(i,t)&&ye(i.prev,i,i.next)>0&&ye(t.prev,t,t.next)>0)}function ye(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function fa(i,t){return i.x===t.x&&i.y===t.y}function M1(i,t,e,n){let s=Co(ye(i,t,e)),r=Co(ye(i,t,n)),o=Co(ye(e,n,i)),a=Co(ye(e,n,t));return!!(s!==r&&o!==a||s===0&&Ro(i,e,t)||r===0&&Ro(i,n,t)||o===0&&Ro(e,i,n)||a===0&&Ro(e,t,n))}function Ro(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Co(i){return i>0?1:i<0?-1:0}function E5(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&M1(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Lr(i,t){return ye(i.prev,i,i.next)<0?ye(i,t,i.next)>=0&&ye(i,i.prev,t)>=0:ye(i,t,i.prev)<0||ye(i,i.next,t)<0}function w5(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function b1(i,t){let e=new al(i.i,i.x,i.y),n=new al(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Wu(i,t,e,n){let s=new al(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ir(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function al(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function T5(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var yr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Xu(t),qu(n,t);let o=t.length;e.forEach(Xu);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,qu(n,e[c]);let a=u5.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Xu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function qu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ns=class i extends xe{constructor(t=new Yi([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new le(s,3)),this.setAttribute("uv",new le(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:A5,x,v=!1,E,w,b,I;p&&(x=p.getSpacedPoints(u),v=!0,f=!1,E=p.computeFrenetFrames(u,!1),w=new T,b=new T,I=new T),f||(m=0,d=0,g=0,_=0);let M=a.extractPoints(l),S=M.shape,D=M.holes;if(!yr.isClockWise(S)){S=S.reverse();for(let U=0,gt=D.length;U<gt;U++){let Q=D[U];yr.isClockWise(Q)&&(D[U]=Q.reverse())}}let V=yr.triangulateShape(S,D),L=S;for(let U=0,gt=D.length;U<gt;U++){let Q=D[U];S=S.concat(Q)}function O(U,gt,Q){return gt||console.error("THREE.ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(gt,Q)}let $=S.length,st=V.length;function it(U,gt,Q){let ft,nt,Dt,Et=U.x-gt.x,C=U.y-gt.y,A=Q.x-U.x,q=Q.y-U.y,ut=Et*Et+C*C,ot=Et*q-C*A;if(Math.abs(ot)>Number.EPSILON){let rt=Math.sqrt(ut),F=Math.sqrt(A*A+q*q),z=gt.x-C/rt,tt=gt.y+Et/rt,K=Q.x-q/F,mt=Q.y+A/F,k=((K-z)*q-(mt-tt)*A)/(Et*q-C*A);ft=z+Et*k-U.x,nt=tt+C*k-U.y;let dt=ft*ft+nt*nt;if(dt<=2)return new ct(ft,nt);Dt=Math.sqrt(dt/2)}else{let rt=!1;Et>Number.EPSILON?A>Number.EPSILON&&(rt=!0):Et<-Number.EPSILON?A<-Number.EPSILON&&(rt=!0):Math.sign(C)===Math.sign(q)&&(rt=!0),rt?(ft=-C,nt=Et,Dt=Math.sqrt(ut)):(ft=Et,nt=C,Dt=Math.sqrt(ut/2))}return new ct(ft/Dt,nt/Dt)}let et=[];for(let U=0,gt=L.length,Q=gt-1,ft=U+1;U<gt;U++,Q++,ft++)Q===gt&&(Q=0),ft===gt&&(ft=0),et[U]=it(L[U],L[Q],L[ft]);let lt=[],ht,Mt=et.concat();for(let U=0,gt=D.length;U<gt;U++){let Q=D[U];ht=[];for(let ft=0,nt=Q.length,Dt=nt-1,Et=ft+1;ft<nt;ft++,Dt++,Et++)Dt===nt&&(Dt=0),Et===nt&&(Et=0),ht[ft]=it(Q[ft],Q[Dt],Q[Et]);lt.push(ht),Mt=Mt.concat(ht)}for(let U=0;U<m;U++){let gt=U/m,Q=d*Math.cos(gt*Math.PI/2),ft=g*Math.sin(gt*Math.PI/2)+_;for(let nt=0,Dt=L.length;nt<Dt;nt++){let Et=O(L[nt],et[nt],ft);Tt(Et.x,Et.y,-Q)}for(let nt=0,Dt=D.length;nt<Dt;nt++){let Et=D[nt];ht=lt[nt];for(let C=0,A=Et.length;C<A;C++){let q=O(Et[C],ht[C],ft);Tt(q.x,q.y,-Q)}}}let j=g+_;for(let U=0;U<$;U++){let gt=f?O(S[U],Mt[U],j):S[U];v?(b.copy(E.normals[0]).multiplyScalar(gt.x),w.copy(E.binormals[0]).multiplyScalar(gt.y),I.copy(x[0]).add(b).add(w),Tt(I.x,I.y,I.z)):Tt(gt.x,gt.y,0)}for(let U=1;U<=u;U++)for(let gt=0;gt<$;gt++){let Q=f?O(S[gt],Mt[gt],j):S[gt];v?(b.copy(E.normals[U]).multiplyScalar(Q.x),w.copy(E.binormals[U]).multiplyScalar(Q.y),I.copy(x[U]).add(b).add(w),Tt(I.x,I.y,I.z)):Tt(Q.x,Q.y,h/u*U)}for(let U=m-1;U>=0;U--){let gt=U/m,Q=d*Math.cos(gt*Math.PI/2),ft=g*Math.sin(gt*Math.PI/2)+_;for(let nt=0,Dt=L.length;nt<Dt;nt++){let Et=O(L[nt],et[nt],ft);Tt(Et.x,Et.y,h+Q)}for(let nt=0,Dt=D.length;nt<Dt;nt++){let Et=D[nt];ht=lt[nt];for(let C=0,A=Et.length;C<A;C++){let q=O(Et[C],ht[C],ft);v?Tt(q.x,q.y+x[u-1].y,x[u-1].x+Q):Tt(q.x,q.y,h+Q)}}}at(),St();function at(){let U=s.length/3;if(f){let gt=0,Q=$*gt;for(let ft=0;ft<st;ft++){let nt=V[ft];Ot(nt[2]+Q,nt[1]+Q,nt[0]+Q)}gt=u+m*2,Q=$*gt;for(let ft=0;ft<st;ft++){let nt=V[ft];Ot(nt[0]+Q,nt[1]+Q,nt[2]+Q)}}else{for(let gt=0;gt<st;gt++){let Q=V[gt];Ot(Q[2],Q[1],Q[0])}for(let gt=0;gt<st;gt++){let Q=V[gt];Ot(Q[0]+$*u,Q[1]+$*u,Q[2]+$*u)}}n.addGroup(U,s.length/3-U,0)}function St(){let U=s.length/3,gt=0;Pt(L,gt),gt+=L.length;for(let Q=0,ft=D.length;Q<ft;Q++){let nt=D[Q];Pt(nt,gt),gt+=nt.length}n.addGroup(U,s.length/3-U,1)}function Pt(U,gt){let Q=U.length;for(;--Q>=0;){let ft=Q,nt=Q-1;nt<0&&(nt=U.length-1);for(let Dt=0,Et=u+m*2;Dt<Et;Dt++){let C=$*Dt,A=$*(Dt+1),q=gt+ft+C,ut=gt+nt+C,ot=gt+nt+A,rt=gt+ft+A;Gt(q,ut,ot,rt)}}}function Tt(U,gt,Q){c.push(U),c.push(gt),c.push(Q)}function Ot(U,gt,Q){Lt(U),Lt(gt),Lt(Q);let ft=s.length/3,nt=y.generateTopUV(n,s,ft-3,ft-2,ft-1);Vt(nt[0]),Vt(nt[1]),Vt(nt[2])}function Gt(U,gt,Q,ft){Lt(U),Lt(gt),Lt(ft),Lt(gt),Lt(Q),Lt(ft);let nt=s.length/3,Dt=y.generateSideWallUV(n,s,nt-6,nt-3,nt-2,nt-1);Vt(Dt[0]),Vt(Dt[1]),Vt(Dt[3]),Vt(Dt[1]),Vt(Dt[2]),Vt(Dt[3])}function Lt(U){s.push(c[U*3+0]),s.push(c[U*3+1]),s.push(c[U*3+2])}function Vt(U){r.push(U.x),r.push(U.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return R5(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new sl[s.type]().fromJSON(s)),new i(n,t.options)}},A5={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new ct(r,o),new ct(a,c),new ct(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],h=t[n*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new ct(o,1-c),new ct(l,1-h),new ct(f,1-g),new ct(_,1-p)]:[new ct(a,1-c),new ct(u,1-h),new ct(d,1-g),new ct(m,1-p)]}};function R5(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ia=class i extends xe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],h=new T,f=new T,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let y=[],x=p/n,v=0;p===0&&o===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let E=0;E<=e;E++){let w=E/e;h.x=-t*Math.cos(s+w*r)*Math.sin(o+x*a),h.y=t*Math.cos(o+x*a),h.z=t*Math.sin(s+w*r)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(w+v,1-x),y.push(l++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let x=u[p][y+1],v=u[p][y],E=u[p+1][y],w=u[p+1][y+1];(p!==0||o>0)&&d.push(x,v,w),(p!==n-1||c<Math.PI)&&d.push(v,E,w)}this.setIndex(d),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var sa=class extends ii{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new $t(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};var zt=class extends ii{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new $t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=l1,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ra=class extends Tr{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function Po(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function C5(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Bs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},cl=class extends Bs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$2,endingEnd:$2}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Z2:r=t,a=2*e-n;break;case J2:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Z2:o=t,c=2*n-e;break;case J2:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,y=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,x=(-1-d)*m+(1.5+d)*_+.5*g,v=d*m-d*_;for(let E=0;E!==a;++E)r[E]=p*o[u+E]+y*o[l+E]+x*o[c+E]+v*o[h+E];return r}},ll=class extends Bs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(n-e)/(s-e),h=1-u;for(let f=0;f!==a;++f)r[f]=o[l+f]*h+o[c+f]*u;return r}},ul=class extends Bs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Cn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Po(e,this.TimeBufferType),this.values=Po(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Po(t.times,Array),values:Po(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ul(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ll(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new cl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Do:e=this.InterpolantFactoryMethodDiscrete;break;case Uo:e=this.InterpolantFactoryMethodLinear;break;case ec:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Do;case this.InterpolantFactoryMethodLinear:return Uo;case this.InterpolantFactoryMethodSmooth:return ec}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&C5(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ec,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(s)c=!0;else{let h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){let _=e[h+g];if(_!==e[f+g]||_!==e[d+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[h+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=Uo;var Zi=class extends Cn{};Zi.prototype.ValueTypeName="bool";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=Do;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var hl=class extends Cn{};hl.prototype.ValueTypeName="color";var fl=class extends Cn{};fl.prototype.ValueTypeName="number";var dl=class extends Bs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let u=l+a;l!==u;l+=4)sn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Dr=class extends Cn{InterpolantFactoryMethodLinear(t){return new dl(this.times,this.values,this.getValueSize(),t)}};Dr.prototype.ValueTypeName="quaternion";Dr.prototype.DefaultInterpolation=Uo;Dr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ji=class extends Cn{};Ji.prototype.ValueTypeName="string";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=Do;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var pl=class extends Cn{};pl.prototype.ValueTypeName="vector";var ml=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){let d=l[h],g=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}},P5=new ml,gl=class{constructor(t){this.manager=t!==void 0?t:P5,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};gl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ur=class extends $e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Ki=class extends Ur{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Rc=new Xt,Yu=new T,$u=new T,oa=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wr,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Yu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Yu),$u.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($u),e.updateMatrixWorld(),Rc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Rc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Zu=new Xt,fr=new T,Cc=new T,xl=class extends oa{constructor(){super(new Ie(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new ge(2,1,1,1),new ge(0,1,1,1),new ge(3,1,1,1),new ge(1,1,1,1),new ge(3,0,1,1),new ge(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),fr.setFromMatrixPosition(t.matrixWorld),n.position.copy(fr),Cc.copy(n.position),Cc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Cc),n.updateMatrixWorld(),s.makeTranslation(-fr.x,-fr.y,-fr.z),Zu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zu)}},aa=class extends Ur{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new xl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},_l=class extends oa{constructor(){super(new Zo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ji=class extends Ur{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.shadow=new _l}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Al="\\[\\]\\.:\\/",L5=new RegExp("["+Al+"]","g"),Rl="[^"+Al+"]",I5="[^"+Al.replace("\\.","")+"]",D5=/((?:WC+[\/:])*)/.source.replace("WC",Rl),U5=/(WCOD+)?/.source.replace("WCOD",I5),N5=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rl),B5=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rl),O5=new RegExp("^"+D5+U5+N5+B5+"$"),F5=["material","materials","bones","map"],yl=class{constructor(t,e,n){let s=n||me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},me=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(L5,"")}static parseTrackName(t){let e=O5.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);F5.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};me.Composite=yl;me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};me.prototype.GetterByBindingType=[me.prototype._getValue_direct,me.prototype._getValue_array,me.prototype._getValue_arrayElement,me.prototype._getValue_toArray];me.prototype.SetterByBindingTypeAndVersioning=[[me.prototype._setValue_direct,me.prototype._setValue_direct_setNeedsUpdate,me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[me.prototype._setValue_array,me.prototype._setValue_array_setNeedsUpdate,me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[me.prototype._setValue_arrayElement,me.prototype._setValue_arrayElement_setNeedsUpdate,me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[me.prototype._setValue_fromArray,me.prototype._setValue_fromArray_setNeedsUpdate,me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var V6=new Float32Array(1);var ca=class{constructor(t,e,n=0,s=1/0){this.ray=new ni(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Er,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return vl(t,this,n,e),n.sort(Ju),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)vl(t[s],this,n,e);return n.sort(Ju),n}};function Ju(i,t){return i.distance-t.distance}function vl(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)vl(s[r],t,e,!0)}}var Nr=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ce(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Ku=new T,Lo=new T,rn=class{constructor(t=new T,e=new T){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Ku.subVectors(t,this.start),Lo.subVectors(this.end,this.start);let n=Lo.dot(Lo),r=Lo.dot(Ku)/n;return e&&(r=Ce(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var Os=class extends jc{constructor(t=10,e=10,n=4473924,s=8947848){n=new $t(n),s=new $t(s);let r=e/2,o=t/e,a=t/2,c=[],l=[];for(let f=0,d=0,g=-a;f<=e;f++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);let _=f===r?n:s;_.toArray(l,d),d+=3,_.toArray(l,d),d+=3,_.toArray(l,d),d+=3,_.toArray(l,d),d+=3}let u=new xe;u.setAttribute("position",new le(c,3)),u.setAttribute("color",new le(l,3));let h=new Tr({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ml}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ml);var E1={type:"change"},Cl={type:"start"},w1={type:"end"},da=new ni,T1=new tn,z5=Math.cos(70*be.DEG2RAD),ks=class extends On{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new T,this.cursor=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Qi.ROTATE,MIDDLE:Qi.DOLLY,RIGHT:Qi.PAN},this.touches={ONE:ts.ROTATE,TWO:ts.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",rt),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",rt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(E1),n.update(),r=s.NONE},this.update=function(){let R=new T,G=new sn().setFromUnitVectors(t.up,new T(0,1,0)),W=G.clone().invert(),Z=new T,_t=new sn,At=new T,Ut=2*Math.PI;return function(xt=null){let B=n.object.position;R.copy(B).sub(n.target),R.applyQuaternion(G),a.setFromVector3(R),n.autoRotate&&r===s.NONE&&D(M(xt)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let pt=n.minAzimuthAngle,yt=n.maxAzimuthAngle;isFinite(pt)&&isFinite(yt)&&(pt<-Math.PI?pt+=Ut:pt>Math.PI&&(pt-=Ut),yt<-Math.PI?yt+=Ut:yt>Math.PI&&(yt-=Ut),pt<=yt?a.theta=Math.max(pt,Math.min(yt,a.theta)):a.theta=a.theta>(pt+yt)/2?Math.max(pt,a.theta):Math.min(yt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&w||n.object.isOrthographicCamera?a.radius=et(a.radius):a.radius=et(a.radius*l),R.setFromSpherical(a),R.applyQuaternion(W),B.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0));let Ft=!1;if(n.zoomToCursor&&w){let It=null;if(n.object.isPerspectiveCamera){let Jt=R.length();It=et(Jt*l);let wt=Jt-It;n.object.position.addScaledVector(v,wt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let Jt=new T(E.x,E.y,0);Jt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Ft=!0;let wt=new T(E.x,E.y,0);wt.unproject(n.object),n.object.position.sub(wt).add(Jt),n.object.updateMatrixWorld(),It=R.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;It!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(It).add(n.object.position):(da.origin.copy(n.object.position),da.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(da.direction))<z5?t.lookAt(n.target):(T1.setFromNormalAndCoplanarPoint(n.object.up,n.target),da.intersectPlane(T1,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Ft=!0);return l=1,w=!1,Ft||Z.distanceToSquared(n.object.position)>o||8*(1-_t.dot(n.object.quaternion))>o||At.distanceToSquared(n.target)>0?(n.dispatchEvent(E1),Z.copy(n.object.position),_t.copy(n.object.quaternion),At.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",tt),n.domElement.removeEventListener("pointerdown",Et),n.domElement.removeEventListener("pointercancel",A),n.domElement.removeEventListener("wheel",ot),n.domElement.removeEventListener("pointermove",C),n.domElement.removeEventListener("pointerup",A),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",rt),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,o=1e-6,a=new Nr,c=new Nr,l=1,u=new T,h=new ct,f=new ct,d=new ct,g=new ct,_=new ct,m=new ct,p=new ct,y=new ct,x=new ct,v=new T,E=new ct,w=!1,b=[],I={};function M(R){return R!==null?2*Math.PI/60*n.autoRotateSpeed*R:2*Math.PI/60/60*n.autoRotateSpeed}function S(R){let G=Math.abs(R)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*G)}function D(R){c.theta-=R}function N(R){c.phi-=R}let V=function(){let R=new T;return function(W,Z){R.setFromMatrixColumn(Z,0),R.multiplyScalar(-W),u.add(R)}}(),L=function(){let R=new T;return function(W,Z){n.screenSpacePanning===!0?R.setFromMatrixColumn(Z,1):(R.setFromMatrixColumn(Z,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(W),u.add(R)}}(),O=function(){let R=new T;return function(W,Z){let _t=n.domElement;if(n.object.isPerspectiveCamera){let At=n.object.position;R.copy(At).sub(n.target);let Ut=R.length();Ut*=Math.tan(n.object.fov/2*Math.PI/180),V(2*W*Ut/_t.clientHeight,n.object.matrix),L(2*Z*Ut/_t.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(V(W*(n.object.right-n.object.left)/n.object.zoom/_t.clientWidth,n.object.matrix),L(Z*(n.object.top-n.object.bottom)/n.object.zoom/_t.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function $(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function st(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function it(R,G){if(!n.zoomToCursor)return;w=!0;let W=n.domElement.getBoundingClientRect(),Z=R-W.left,_t=G-W.top,At=W.width,Ut=W.height;E.x=Z/At*2-1,E.y=-(_t/Ut)*2+1,v.set(E.x,E.y,1).unproject(n.object).sub(n.object.position).normalize()}function et(R){return Math.max(n.minDistance,Math.min(n.maxDistance,R))}function lt(R){h.set(R.clientX,R.clientY)}function ht(R){it(R.clientX,R.clientX),p.set(R.clientX,R.clientY)}function Mt(R){g.set(R.clientX,R.clientY)}function j(R){f.set(R.clientX,R.clientY),d.subVectors(f,h).multiplyScalar(n.rotateSpeed);let G=n.domElement;D(2*Math.PI*d.x/G.clientHeight),N(2*Math.PI*d.y/G.clientHeight),h.copy(f),n.update()}function at(R){y.set(R.clientX,R.clientY),x.subVectors(y,p),x.y>0?$(S(x.y)):x.y<0&&st(S(x.y)),p.copy(y),n.update()}function St(R){_.set(R.clientX,R.clientY),m.subVectors(_,g).multiplyScalar(n.panSpeed),O(m.x,m.y),g.copy(_),n.update()}function Pt(R){it(R.clientX,R.clientY),R.deltaY<0?st(S(R.deltaY)):R.deltaY>0&&$(S(R.deltaY)),n.update()}function Tt(R){let G=!1;switch(R.code){case n.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?N(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,n.keyPanSpeed),G=!0;break;case n.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?N(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,-n.keyPanSpeed),G=!0;break;case n.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?D(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(n.keyPanSpeed,0),G=!0;break;case n.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?D(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(-n.keyPanSpeed,0),G=!0;break}G&&(R.preventDefault(),n.update())}function Ot(R){if(b.length===1)h.set(R.pageX,R.pageY);else{let G=dt(R),W=.5*(R.pageX+G.x),Z=.5*(R.pageY+G.y);h.set(W,Z)}}function Gt(R){if(b.length===1)g.set(R.pageX,R.pageY);else{let G=dt(R),W=.5*(R.pageX+G.x),Z=.5*(R.pageY+G.y);g.set(W,Z)}}function Lt(R){let G=dt(R),W=R.pageX-G.x,Z=R.pageY-G.y,_t=Math.sqrt(W*W+Z*Z);p.set(0,_t)}function Vt(R){n.enableZoom&&Lt(R),n.enablePan&&Gt(R)}function U(R){n.enableZoom&&Lt(R),n.enableRotate&&Ot(R)}function gt(R){if(b.length==1)f.set(R.pageX,R.pageY);else{let W=dt(R),Z=.5*(R.pageX+W.x),_t=.5*(R.pageY+W.y);f.set(Z,_t)}d.subVectors(f,h).multiplyScalar(n.rotateSpeed);let G=n.domElement;D(2*Math.PI*d.x/G.clientHeight),N(2*Math.PI*d.y/G.clientHeight),h.copy(f)}function Q(R){if(b.length===1)_.set(R.pageX,R.pageY);else{let G=dt(R),W=.5*(R.pageX+G.x),Z=.5*(R.pageY+G.y);_.set(W,Z)}m.subVectors(_,g).multiplyScalar(n.panSpeed),O(m.x,m.y),g.copy(_)}function ft(R){let G=dt(R),W=R.pageX-G.x,Z=R.pageY-G.y,_t=Math.sqrt(W*W+Z*Z);y.set(0,_t),x.set(0,Math.pow(y.y/p.y,n.zoomSpeed)),$(x.y),p.copy(y);let At=(R.pageX+G.x)*.5,Ut=(R.pageY+G.y)*.5;it(At,Ut)}function nt(R){n.enableZoom&&ft(R),n.enablePan&&Q(R)}function Dt(R){n.enableZoom&&ft(R),n.enableRotate&&gt(R)}function Et(R){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",C),n.domElement.addEventListener("pointerup",A)),K(R),R.pointerType==="touch"?F(R):q(R))}function C(R){n.enabled!==!1&&(R.pointerType==="touch"?z(R):ut(R))}function A(R){mt(R),b.length===0&&(n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",C),n.domElement.removeEventListener("pointerup",A)),n.dispatchEvent(w1),r=s.NONE}function q(R){let G;switch(R.button){case 0:G=n.mouseButtons.LEFT;break;case 1:G=n.mouseButtons.MIDDLE;break;case 2:G=n.mouseButtons.RIGHT;break;default:G=-1}switch(G){case Qi.DOLLY:if(n.enableZoom===!1)return;ht(R),r=s.DOLLY;break;case Qi.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;Mt(R),r=s.PAN}else{if(n.enableRotate===!1)return;lt(R),r=s.ROTATE}break;case Qi.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;lt(R),r=s.ROTATE}else{if(n.enablePan===!1)return;Mt(R),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Cl)}function ut(R){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;j(R);break;case s.DOLLY:if(n.enableZoom===!1)return;at(R);break;case s.PAN:if(n.enablePan===!1)return;St(R);break}}function ot(R){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(R.preventDefault(),n.dispatchEvent(Cl),Pt(R),n.dispatchEvent(w1))}function rt(R){n.enabled===!1||n.enablePan===!1||Tt(R)}function F(R){switch(k(R),b.length){case 1:switch(n.touches.ONE){case ts.ROTATE:if(n.enableRotate===!1)return;Ot(R),r=s.TOUCH_ROTATE;break;case ts.PAN:if(n.enablePan===!1)return;Gt(R),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case ts.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Vt(R),r=s.TOUCH_DOLLY_PAN;break;case ts.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;U(R),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Cl)}function z(R){switch(k(R),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;gt(R),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;Q(R),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;nt(R),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Dt(R),n.update();break;default:r=s.NONE}}function tt(R){n.enabled!==!1&&R.preventDefault()}function K(R){b.push(R.pointerId)}function mt(R){delete I[R.pointerId];for(let G=0;G<b.length;G++)if(b[G]==R.pointerId){b.splice(G,1);return}}function k(R){let G=I[R.pointerId];G===void 0&&(G=new ct,I[R.pointerId]=G),G.set(R.pageX,R.pageY)}function dt(R){let G=R.pointerId===b[0]?b[1]:b[0];return I[G]}n.domElement.addEventListener("contextmenu",tt),n.domElement.addEventListener("pointerdown",Et),n.domElement.addEventListener("pointercancel",A),n.domElement.addEventListener("wheel",ot,{passive:!1}),this.update()}};var Vs=class extends ri{constructor(t=null){super();let e=new Pe;e.deleteAttribute("uv");let n=new zt({side:Fe}),s=new zt,r=5;t!==null&&t._useLegacyLights===!1&&(r=900);let o=new aa(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new Qt(e,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let c=new Qt(e,s);c.position.set(-10.906,2.009,1.846),c.rotation.set(0,-.195,0),c.scale.set(2.328,7.905,4.651),this.add(c);let l=new Qt(e,s);l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),this.add(l);let u=new Qt(e,s);u.position.set(6.167,.857,7.803),u.rotation.set(0,.561,0),u.scale.set(3.927,6.285,3.687),this.add(u);let h=new Qt(e,s);h.position.set(-2.017,.018,6.124),h.rotation.set(0,.333,0),h.scale.set(2.002,4.566,2.064),this.add(h);let f=new Qt(e,s);f.position.set(2.291,-.756,-2.621),f.rotation.set(0,-.286,0),f.scale.set(1.546,1.552,1.496),this.add(f);let d=new Qt(e,s);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);let g=new Qt(e,Hs(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);let _=new Qt(e,Hs(50));_.position.set(-16.109,18.021,-8.207),_.scale.set(.1,2.425,2.751),this.add(_);let m=new Qt(e,Hs(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let p=new Qt(e,Hs(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);let y=new Qt(e,Hs(20));y.position.set(3.235,11.486,-12.541),y.scale.set(2.5,2,.1),this.add(y);let x=new Qt(e,Hs(100));x.position.set(0,20,0),x.scale.set(1,.1,1),this.add(x)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Hs(i){let t=new Mi;return t.color.setScalar(i),t}function ns(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new xe,l=0;for(let u=0;u<i.length;++u){let h=i[u],f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in h.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(t){let d;if(e)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(e){let u=0,h=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=i[f].attributes.position.count}c.setIndex(h)}for(let u in r){let h=A1(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let _=0;_<o[u].length;++_)d.push(o[u][_][f]);let g=A1(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function A1(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let u=i[l];if(u.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.array.length}let o=new t(r),a=0;for(let l=0;l<i.length;++l)o.set(i[l].array,a),a+=i[l].array.length;let c=new we(o,e,n);return s!==void 0&&(c.gpuType=s),c}function Or(i,t=Math.PI/3){let e=Math.cos(t),n=(1+1e-10)*100,s=[new T,new T,new T],r=new T,o=new T,a=new T,c=new T;function l(_){let m=~~(_.x*n),p=~~(_.y*n),y=~~(_.z*n);return`${m},${p},${y}`}let u=i.index?i.toNonIndexed():i,h=u.attributes.position,f={};for(let _=0,m=h.count/3;_<m;_++){let p=3*_,y=s[0].fromBufferAttribute(h,p+0),x=s[1].fromBufferAttribute(h,p+1),v=s[2].fromBufferAttribute(h,p+2);r.subVectors(v,x),o.subVectors(y,x);let E=new T().crossVectors(r,o).normalize();for(let w=0;w<3;w++){let b=s[w],I=l(b);I in f||(f[I]=[]),f[I].push(E)}}let d=new Float32Array(h.count*3),g=new we(d,3,!1);for(let _=0,m=h.count/3;_<m;_++){let p=3*_,y=s[0].fromBufferAttribute(h,p+0),x=s[1].fromBufferAttribute(h,p+1),v=s[2].fromBufferAttribute(h,p+2);r.subVectors(v,x),o.subVectors(y,x),a.crossVectors(r,o).normalize();for(let E=0;E<3;E++){let w=s[E],b=l(w),I=f[b];c.set(0,0,0);for(let M=0,S=I.length;M<S;M++){let D=I[M];a.dot(D)>e&&c.add(D)}c.normalize(),g.setXYZ(p+E,c.x,c.y,c.z)}}return u.setAttribute("normal",g),u}var R1=Math.pow(2,-24),pa=Symbol("SKIP_GENERATION");function k5(i){return i.index?i.index.count:i.attributes.position.count}function zn(i){return k5(i)/3}function H5(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function C1(i,t){if(!i.index){let e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=H5(e,n);i.setIndex(new we(s,1));for(let r=0;r<e;r++)s[r]=r}}function Pl(i){let t=zn(i),e=i.drawRange,n=e.start/3,s=(e.start+e.count)/3,r=Math.max(0,n),o=Math.min(t,s)-r;return[{offset:Math.floor(r),count:Math.floor(o)}]}function Ll(i){if(!i.groups||!i.groups.length)return Pl(i);let t=[],e=new Set,n=i.drawRange,s=n.start/3,r=(n.start+n.count)/3;for(let a of i.groups){let c=a.start/3,l=(a.start+a.count)/3;e.add(Math.max(s,c)),e.add(Math.min(r,l))}let o=Array.from(e.values()).sort((a,c)=>a-c);for(let a=0;a<o.length-1;a++){let c=o[a],l=o[a+1];t.push({offset:Math.floor(c),count:Math.floor(l-c)})}return t}function P1(i){if(i.groups.length===0)return!1;let t=zn(i),e=Ll(i).sort((r,o)=>r.offset-o.offset),n=e[e.length-1];n.count=Math.min(t-n.offset,n.count);let s=0;return e.forEach(({count:r})=>s+=r),t!==s}function ma(i,t,e,n,s){let r=1/0,o=1/0,a=1/0,c=-1/0,l=-1/0,u=-1/0,h=1/0,f=1/0,d=1/0,g=-1/0,_=-1/0,m=-1/0;for(let p=t*6,y=(t+e)*6;p<y;p+=6){let x=i[p+0],v=i[p+1],E=x-v,w=x+v;E<r&&(r=E),w>c&&(c=w),x<h&&(h=x),x>g&&(g=x);let b=i[p+2],I=i[p+3],M=b-I,S=b+I;M<o&&(o=M),S>l&&(l=S),b<f&&(f=b),b>_&&(_=b);let D=i[p+4],N=i[p+5],V=D-N,L=D+N;V<a&&(a=V),L>u&&(u=L),D<d&&(d=D),D>m&&(m=D)}n[0]=r,n[1]=o,n[2]=a,n[3]=c,n[4]=l,n[5]=u,s[0]=h,s[1]=f,s[2]=d,s[3]=g,s[4]=_,s[5]=m}function L1(i,t=null,e=null,n=null){let s=i.attributes.position,r=i.index?i.index.array:null,o=zn(i),a=s.normalized,c;t===null?(c=new Float32Array(o*6*4),e=0,n=o):(c=t,e=e||0,n=n||o);let l=s.array,u=s.offset||0,h=3;s.isInterleavedBufferAttribute&&(h=s.data.stride);let f=["getX","getY","getZ"];for(let d=e;d<e+n;d++){let g=d*3,_=d*6,m=g+0,p=g+1,y=g+2;r&&(m=r[m],p=r[p],y=r[y]),a||(m=m*h+u,p=p*h+u,y=y*h+u);for(let x=0;x<3;x++){let v,E,w;a?(v=s[f[x]](m),E=s[f[x]](p),w=s[f[x]](y)):(v=l[m+x],E=l[p+x],w=l[y+x]);let b=v;E<b&&(b=E),w<b&&(b=w);let I=v;E>I&&(I=E),w>I&&(I=w);let M=(I-b)/2,S=x*2;c[_+S+0]=b+M,c[_+S+1]=M+(Math.abs(b)+M)*R1}}return c}function ue(i,t,e){return e.min.x=t[i],e.min.y=t[i+1],e.min.z=t[i+2],e.max.x=t[i+3],e.max.y=t[i+4],e.max.z=t[i+5],e}function Il(i){let t=-1,e=-1/0;for(let n=0;n<3;n++){let s=i[n+3]-i[n];s>e&&(e=s,t=n)}return t}function Dl(i,t){t.set(i)}function Ul(i,t,e){let n,s;for(let r=0;r<3;r++){let o=r+3;n=i[r],s=t[r],e[r]=n<s?n:s,n=i[o],s=t[o],e[o]=n>s?n:s}}function Fr(i,t,e){for(let n=0;n<3;n++){let s=t[i+2*n],r=t[i+2*n+1],o=s-r,a=s+r;o<e[n]&&(e[n]=o),a>e[n+3]&&(e[n+3]=a)}}function Gs(i){let t=i[3]-i[0],e=i[4]-i[1],n=i[5]-i[2];return 2*(t*e+e*n+n*t)}var oi=32,G5=(i,t)=>i.candidate-t.candidate,Ei=new Array(oi).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),ga=new Float32Array(6);function U1(i,t,e,n,s,r){let o=-1,a=0;if(r===0)o=Il(t),o!==-1&&(a=(t[o]+t[o+3])/2);else if(r===1)o=Il(i),o!==-1&&(a=W5(e,n,s,o));else if(r===2){let c=Gs(i),l=1.25*s,u=n*6,h=(n+s)*6;for(let f=0;f<3;f++){let d=t[f],m=(t[f+3]-d)/oi;if(s<oi/4){let p=[...Ei];p.length=s;let y=0;for(let v=u;v<h;v+=6,y++){let E=p[y];E.candidate=e[v+2*f],E.count=0;let{bounds:w,leftCacheBounds:b,rightCacheBounds:I}=E;for(let M=0;M<3;M++)I[M]=1/0,I[M+3]=-1/0,b[M]=1/0,b[M+3]=-1/0,w[M]=1/0,w[M+3]=-1/0;Fr(v,e,w)}p.sort(G5);let x=s;for(let v=0;v<x;v++){let E=p[v];for(;v+1<x&&p[v+1].candidate===E.candidate;)p.splice(v+1,1),x--}for(let v=u;v<h;v+=6){let E=e[v+2*f];for(let w=0;w<x;w++){let b=p[w];E>=b.candidate?Fr(v,e,b.rightCacheBounds):(Fr(v,e,b.leftCacheBounds),b.count++)}}for(let v=0;v<x;v++){let E=p[v],w=E.count,b=s-E.count,I=E.leftCacheBounds,M=E.rightCacheBounds,S=0;w!==0&&(S=Gs(I)/c);let D=0;b!==0&&(D=Gs(M)/c);let N=1+1.25*(S*w+D*b);N<l&&(o=f,l=N,a=E.candidate)}}else{for(let x=0;x<oi;x++){let v=Ei[x];v.count=0,v.candidate=d+m+x*m;let E=v.bounds;for(let w=0;w<3;w++)E[w]=1/0,E[w+3]=-1/0}for(let x=u;x<h;x+=6){let w=~~((e[x+2*f]-d)/m);w>=oi&&(w=oi-1);let b=Ei[w];b.count++,Fr(x,e,b.bounds)}let p=Ei[oi-1];Dl(p.bounds,p.rightCacheBounds);for(let x=oi-2;x>=0;x--){let v=Ei[x],E=Ei[x+1];Ul(v.bounds,E.rightCacheBounds,v.rightCacheBounds)}let y=0;for(let x=0;x<oi-1;x++){let v=Ei[x],E=v.count,w=v.bounds,I=Ei[x+1].rightCacheBounds;E!==0&&(y===0?Dl(w,ga):Ul(w,ga,ga)),y+=E;let M=0,S=0;y!==0&&(M=Gs(ga)/c);let D=s-y;D!==0&&(S=Gs(I)/c);let N=1+1.25*(M*y+S*D);N<l&&(o=f,l=N,a=v.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${r} used.`);return{axis:o,pos:a}}function W5(i,t,e,n){let s=0;for(let r=t,o=t+e;r<o;r++)s+=i[r*6+n*2];return s/e}var Ws=class{constructor(){this.boundingData=new Float32Array(6)}};function N1(i,t,e,n,s,r){let o=n,a=n+s-1,c=r.pos,l=r.axis*2;for(;;){for(;o<=a&&e[o*6+l]<c;)o++;for(;o<=a&&e[a*6+l]>=c;)a--;if(o<a){for(let u=0;u<3;u++){let h=t[o*3+u];t[o*3+u]=t[a*3+u],t[a*3+u]=h}for(let u=0;u<6;u++){let h=e[o*6+u];e[o*6+u]=e[a*6+u],e[a*6+u]=h}o++,a--}else return o}}function B1(i,t,e,n,s,r){let o=n,a=n+s-1,c=r.pos,l=r.axis*2;for(;;){for(;o<=a&&e[o*6+l]<c;)o++;for(;o<=a&&e[a*6+l]>=c;)a--;if(o<a){let u=i[o];i[o]=i[a],i[a]=u;for(let h=0;h<6;h++){let f=e[o*6+h];e[o*6+h]=e[a*6+h],e[a*6+h]=f}o++,a--}else return o}}function ve(i,t){return t[i+15]===65535}function Te(i,t){return t[i+6]}function Le(i,t){return t[i+14]}function ze(i){return i+8}function ke(i,t){return t[i+6]}function xa(i,t){return t[i+7]}var O1,zr,_a,F1,X5=Math.pow(2,32);function ya(i){return"count"in i?1:1+ya(i.left)+ya(i.right)}function z1(i,t,e){return O1=new Float32Array(e),zr=new Uint32Array(e),_a=new Uint16Array(e),F1=new Uint8Array(e),Nl(i,t)}function Nl(i,t){let e=i/4,n=i/2,s="count"in t,r=t.boundingData;for(let o=0;o<6;o++)O1[e+o]=r[o];if(s)if(t.buffer){let o=t.buffer;F1.set(new Uint8Array(o),i);for(let a=i,c=i+o.byteLength;a<c;a+=32){let l=a/2;ve(l,_a)||(zr[a/4+6]+=e)}return i+o.byteLength}else{let o=t.offset,a=t.count;return zr[e+6]=o,_a[n+14]=a,_a[n+15]=65535,i+32}else{let o=t.left,a=t.right,c=t.splitAxis,l;if(l=Nl(i+32,o),l/4>X5)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return zr[e+6]=l/4,l=Nl(l,a),zr[e+7]=c,l}}function q5(i,t){let e=(i.index?i.index.count:i.attributes.position.count)/3,n=e>2**16,s=n?4:2,r=t?new SharedArrayBuffer(e*s):new ArrayBuffer(e*s),o=n?new Uint32Array(r):new Uint16Array(r);for(let a=0,c=o.length;a<c;a++)o[a]=a;return o}function Y5(i,t,e,n,s){let{maxDepth:r,verbose:o,maxLeafTris:a,strategy:c,onProgress:l,indirect:u}=s,h=i._indirectBuffer,f=i.geometry,d=f.index?f.index.array:null,g=u?B1:N1,_=zn(f),m=new Float32Array(6),p=!1,y=new Ws;return ma(t,e,n,y.boundingData,m),v(y,e,n,m),y;function x(E){l&&l(E/_)}function v(E,w,b,I=null,M=0){if(!p&&M>=r&&(p=!0,o&&(console.warn(`MeshBVH: Max depth of ${r} reached when generating BVH. Consider increasing maxDepth.`),console.warn(f))),b<=a||M>=r)return x(w+b),E.offset=w,E.count=b,E;let S=U1(E.boundingData,I,t,w,b,c);if(S.axis===-1)return x(w+b),E.offset=w,E.count=b,E;let D=g(h,d,t,w,b,S);if(D===w||D===w+b)x(w+b),E.offset=w,E.count=b;else{E.splitAxis=S.axis;let N=new Ws,V=w,L=D-w;E.left=N,ma(t,V,L,N.boundingData,m),v(N,V,L,m,M+1);let O=new Ws,$=D,st=b-L;E.right=O,ma(t,$,st,O.boundingData,m),v(O,$,st,m,M+1)}return E}}function k1(i,t){let e=i.geometry;t.indirect&&(i._indirectBuffer=q5(e,t.useSharedArrayBuffer),P1(e)&&!t.verbose&&console.warn('MeshBVH: Provided geometry contains groups that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),i._indirectBuffer||C1(e,t);let n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=L1(e),r=t.indirect?Pl(e):Ll(e);i._roots=r.map(o=>{let a=Y5(i,s,o.offset,o.count,t),c=ya(a),l=new n(32*c);return z1(0,a,l),l})}var on=class{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,s=-1/0;for(let r=0,o=t.length;r<o;r++){let c=t[r][e];n=c<n?c:n,s=c>s?c:s}this.min=n,this.max=s}setFromPoints(t,e){let n=1/0,s=-1/0;for(let r=0,o=e.length;r<o;r++){let a=e[r],c=t.dot(a);n=c<n?c:n,s=c>s?c:s}this.min=n,this.max=s}isSeparated(t){return this.min>t.max||t.min>this.max}};on.prototype.setFromBox=function(){let i=new T;return function(e,n){let s=n.min,r=n.max,o=1/0,a=-1/0;for(let c=0;c<=1;c++)for(let l=0;l<=1;l++)for(let u=0;u<=1;u++){i.x=s.x*c+r.x*(1-c),i.y=s.y*l+r.y*(1-l),i.z=s.z*u+r.z*(1-u);let h=e.dot(i);o=Math.min(h,o),a=Math.max(h,a)}this.min=o,this.max=a}}();var Am=function(){let i=new on;return function(e,n){let s=e.points,r=e.satAxes,o=e.satBounds,a=n.points,c=n.satAxes,l=n.satBounds;for(let u=0;u<3;u++){let h=o[u],f=r[u];if(i.setFromPoints(f,a),h.isSeparated(i))return!1}for(let u=0;u<3;u++){let h=l[u],f=c[u];if(i.setFromPoints(f,s),h.isSeparated(i))return!1}}}();var $5=function(){let i=new T,t=new T,e=new T;return function(s,r,o){let a=s.start,c=i,l=r.start,u=t;e.subVectors(a,l),i.subVectors(s.end,s.start),t.subVectors(r.end,r.start);let h=e.dot(u),f=u.dot(c),d=u.dot(u),g=e.dot(c),m=c.dot(c)*d-f*f,p,y;m!==0?p=(h*f-g*d)/m:p=0,y=(h+p*f)/d,o.x=p,o.y=y}}(),Hr=function(){let i=new ct,t=new T,e=new T;return function(s,r,o,a){$5(s,r,i);let c=i.x,l=i.y;if(c>=0&&c<=1&&l>=0&&l<=1){s.at(c,o),r.at(l,a);return}else if(c>=0&&c<=1){l<0?r.at(0,a):r.at(1,a),s.closestPointToPoint(a,!0,o);return}else if(l>=0&&l<=1){c<0?s.at(0,o):s.at(1,o),r.closestPointToPoint(o,!0,a);return}else{let u;c<0?u=s.start:u=s.end;let h;l<0?h=r.start:h=r.end;let f=t,d=e;if(s.closestPointToPoint(h,!0,t),r.closestPointToPoint(u,!0,e),f.distanceToSquared(h)<=d.distanceToSquared(u)){o.copy(f),a.copy(h);return}else{o.copy(u),a.copy(d);return}}}}(),H1=function(){let i=new T,t=new T,e=new tn,n=new rn;return function(r,o){let{radius:a,center:c}=r,{a:l,b:u,c:h}=o;if(n.start=l,n.end=u,n.closestPointToPoint(c,!0,i).distanceTo(c)<=a||(n.start=l,n.end=h,n.closestPointToPoint(c,!0,i).distanceTo(c)<=a)||(n.start=u,n.end=h,n.closestPointToPoint(c,!0,i).distanceTo(c)<=a))return!0;let _=o.getPlane(e);if(Math.abs(_.distanceToPoint(c))<=a){let p=_.projectPoint(c,t);if(o.containsPoint(p))return!0}return!1}}();var Z5=1e-15;function Bl(i){return Math.abs(i)<Z5}var Ve=class extends fn{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new T),this.satBounds=new Array(4).fill().map(()=>new on),this.points=[this.a,this.b,this.c],this.sphere=new vi,this.plane=new tn,this.needsUpdate=!0}intersectsSphere(t){return H1(t,this)}update(){let t=this.a,e=this.b,n=this.c,s=this.points,r=this.satAxes,o=this.satBounds,a=r[0],c=o[0];this.getNormal(a),c.setFromPoints(a,s);let l=r[1],u=o[1];l.subVectors(t,e),u.setFromPoints(l,s);let h=r[2],f=o[2];h.subVectors(e,n),f.setFromPoints(h,s);let d=r[3],g=o[3];d.subVectors(n,t),g.setFromPoints(d,s),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}};Ve.prototype.closestPointToSegment=function(){let i=new T,t=new T,e=new rn;return function(s,r=null,o=null){let{start:a,end:c}=s,l=this.points,u,h=1/0;for(let f=0;f<3;f++){let d=(f+1)%3;e.start.copy(l[f]),e.end.copy(l[d]),Hr(e,s,i,t),u=i.distanceToSquared(t),u<h&&(h=u,r&&r.copy(i),o&&o.copy(t))}return this.closestPointToPoint(a,i),u=a.distanceToSquared(i),u<h&&(h=u,r&&r.copy(i),o&&o.copy(a)),this.closestPointToPoint(c,i),u=c.distanceToSquared(i),u<h&&(h=u,r&&r.copy(i),o&&o.copy(c)),Math.sqrt(h)}}();Ve.prototype.intersectsTriangle=function(){let i=new Ve,t=new Array(3),e=new Array(3),n=new on,s=new on,r=new T,o=new T,a=new T,c=new T,l=new T,u=new rn,h=new rn,f=new rn,d=new T;function g(_,m,p){let y=_.points,x=0,v=-1;for(let E=0;E<3;E++){let{start:w,end:b}=u;w.copy(y[E]),b.copy(y[(E+1)%3]),u.delta(o);let I=Bl(m.distanceToPoint(w));if(Bl(m.normal.dot(o))&&I){p.copy(u),x=2;break}let M=m.intersectLine(u,d);if(!M&&I&&d.copy(w),(M||I)&&!Bl(d.distanceTo(b))){if(x<=1)(x===1?p.start:p.end).copy(d),I&&(v=x);else if(x>=2){(v===1?p.start:p.end).copy(d),x=2;break}if(x++,x===2&&v===-1)break}}return x}return function(m,p=null,y=!1){this.needsUpdate&&this.update(),m.isExtendedTriangle?m.needsUpdate&&m.update():(i.copy(m),i.update(),m=i);let x=this.plane,v=m.plane;if(Math.abs(x.normal.dot(v.normal))>1-1e-10){let E=this.satBounds,w=this.satAxes;e[0]=m.a,e[1]=m.b,e[2]=m.c;for(let M=0;M<4;M++){let S=E[M],D=w[M];if(n.setFromPoints(D,e),S.isSeparated(n))return!1}let b=m.satBounds,I=m.satAxes;t[0]=this.a,t[1]=this.b,t[2]=this.c;for(let M=0;M<4;M++){let S=b[M],D=I[M];if(n.setFromPoints(D,t),S.isSeparated(n))return!1}for(let M=0;M<4;M++){let S=w[M];for(let D=0;D<4;D++){let N=I[D];if(r.crossVectors(S,N),n.setFromPoints(r,t),s.setFromPoints(r,e),n.isSeparated(s))return!1}}return p&&(y||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),p.start.set(0,0,0),p.end.set(0,0,0)),!0}else{let E=g(this,v,h);if(E===1&&m.containsPoint(h.end))return p&&(p.start.copy(h.end),p.end.copy(h.end)),!0;if(E!==2)return!1;let w=g(m,x,f);if(w===1&&this.containsPoint(f.end))return p&&(p.start.copy(f.end),p.end.copy(f.end)),!0;if(w!==2)return!1;if(h.delta(a),f.delta(c),a.dot(c)<0){let V=f.start;f.start=f.end,f.end=V}let b=h.start.dot(a),I=h.end.dot(a),M=f.start.dot(a),S=f.end.dot(a),D=I<M,N=b<S;return b!==S&&M!==I&&D===N?!1:(p&&(l.subVectors(h.start,f.start),l.dot(a)>0?p.start.copy(h.start):p.start.copy(f.start),l.subVectors(h.end,f.end),l.dot(a)<0?p.end.copy(h.end):p.end.copy(f.end)),!0)}}}();Ve.prototype.distanceToPoint=function(){let i=new T;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}}();Ve.prototype.distanceToTriangle=function(){let i=new T,t=new T,e=["a","b","c"],n=new rn,s=new rn;return function(o,a=null,c=null){let l=a||c?n:null;if(this.intersectsTriangle(o,l))return(a||c)&&(a&&l.getCenter(a),c&&l.getCenter(c)),0;let u=1/0;for(let h=0;h<3;h++){let f,d=e[h],g=o[d];this.closestPointToPoint(g,i),f=g.distanceToSquared(i),f<u&&(u=f,a&&a.copy(i),c&&c.copy(g));let _=this[d];o.closestPointToPoint(_,i),f=_.distanceToSquared(i),f<u&&(u=f,a&&a.copy(_),c&&c.copy(i))}for(let h=0;h<3;h++){let f=e[h],d=e[(h+1)%3];n.set(this[f],this[d]);for(let g=0;g<3;g++){let _=e[g],m=e[(g+1)%3];s.set(o[_],o[m]),Hr(n,s,i,t);let p=i.distanceToSquared(t);p<u&&(u=p,a&&a.copy(i),c&&c.copy(t))}}return Math.sqrt(u)}}();var Se=class{constructor(t,e,n){this.isOrientedBox=!0,this.min=new T,this.max=new T,this.matrix=new Xt,this.invMatrix=new Xt,this.points=new Array(8).fill().map(()=>new T),this.satAxes=new Array(3).fill().map(()=>new T),this.satBounds=new Array(3).fill().map(()=>new on),this.alignedSatBounds=new Array(3).fill().map(()=>new on),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}};Se.prototype.update=function(){return function(){let t=this.matrix,e=this.min,n=this.max,s=this.points;for(let l=0;l<=1;l++)for(let u=0;u<=1;u++)for(let h=0;h<=1;h++){let f=1*l|2*u|4*h,d=s[f];d.x=l?n.x:e.x,d.y=u?n.y:e.y,d.z=h?n.z:e.z,d.applyMatrix4(t)}let r=this.satBounds,o=this.satAxes,a=s[0];for(let l=0;l<3;l++){let u=o[l],h=r[l],f=1<<l,d=s[f];u.subVectors(a,d),h.setFromPoints(u,s)}let c=this.alignedSatBounds;c[0].setFromPointsField(s,"x"),c[1].setFromPointsField(s,"y"),c[2].setFromPointsField(s,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();Se.prototype.intersectsBox=function(){let i=new on;return function(e){this.needsUpdate&&this.update();let n=e.min,s=e.max,r=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(i.min=n.x,i.max=s.x,a[0].isSeparated(i)||(i.min=n.y,i.max=s.y,a[1].isSeparated(i))||(i.min=n.z,i.max=s.z,a[2].isSeparated(i)))return!1;for(let c=0;c<3;c++){let l=o[c],u=r[c];if(i.setFromBox(l,e),u.isSeparated(i))return!1}return!0}}();Se.prototype.intersectsTriangle=function(){let i=new Ve,t=new Array(3),e=new on,n=new on,s=new T;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(i.copy(o),i.update(),o=i);let a=this.satBounds,c=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let f=0;f<3;f++){let d=a[f],g=c[f];if(e.setFromPoints(g,t),d.isSeparated(e))return!1}let l=o.satBounds,u=o.satAxes,h=this.points;for(let f=0;f<3;f++){let d=l[f],g=u[f];if(e.setFromPoints(g,h),d.isSeparated(e))return!1}for(let f=0;f<3;f++){let d=c[f];for(let g=0;g<4;g++){let _=u[g];if(s.crossVectors(d,_),e.setFromPoints(s,t),n.setFromPoints(s,h),e.isSeparated(n))return!1}}return!0}}();Se.prototype.closestPointToPoint=function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}}();Se.prototype.distanceToPoint=function(){let i=new T;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}}();Se.prototype.distanceToBox=function(){let i=["x","y","z"],t=new Array(12).fill().map(()=>new rn),e=new Array(12).fill().map(()=>new rn),n=new T,s=new T;return function(o,a=0,c=null,l=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(c||l)&&(o.getCenter(s),this.closestPointToPoint(s,n),o.closestPointToPoint(n,s),c&&c.copy(n),l&&l.copy(s)),0;let u=a*a,h=o.min,f=o.max,d=this.points,g=1/0;for(let m=0;m<8;m++){let p=d[m];s.copy(p).clamp(h,f);let y=p.distanceToSquared(s);if(y<g&&(g=y,c&&c.copy(p),l&&l.copy(s),y<u))return Math.sqrt(y)}let _=0;for(let m=0;m<3;m++)for(let p=0;p<=1;p++)for(let y=0;y<=1;y++){let x=(m+1)%3,v=(m+2)%3,E=p<<x|y<<v,w=1<<m|p<<x|y<<v,b=d[E],I=d[w];t[_].set(b,I);let S=i[m],D=i[x],N=i[v],V=e[_],L=V.start,O=V.end;L[S]=h[S],L[D]=p?h[D]:f[D],L[N]=y?h[N]:f[D],O[S]=f[S],O[D]=p?h[D]:f[D],O[N]=y?h[N]:f[D],_++}for(let m=0;m<=1;m++)for(let p=0;p<=1;p++)for(let y=0;y<=1;y++){s.x=m?f.x:h.x,s.y=p?f.y:h.y,s.z=y?f.z:h.z,this.closestPointToPoint(s,n);let x=s.distanceToSquared(n);if(x<g&&(g=x,c&&c.copy(n),l&&l.copy(s),x<u))return Math.sqrt(x)}for(let m=0;m<12;m++){let p=t[m];for(let y=0;y<12;y++){let x=e[y];Hr(p,x,n,s);let v=n.distanceToSquared(s);if(v<g&&(g=v,c&&c.copy(n),l&&l.copy(s),v<u))return Math.sqrt(v)}}return Math.sqrt(g)}}();var wi=class{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){let t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}};var Ol=class extends wi{constructor(){super(()=>new Ve)}},en=new Ol;var Fl=class{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;let t=[],e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}},oe=new Fl;var Ti,qs,Xs=[],Ma=new wi(()=>new se);function V1(i,t,e,n,s,r){Ti=Ma.getPrimitive(),qs=Ma.getPrimitive(),Xs.push(Ti,qs),oe.setBuffer(i._roots[t]);let o=zl(0,i.geometry,e,n,s,r);oe.clearBuffer(),Ma.releasePrimitive(Ti),Ma.releasePrimitive(qs),Xs.pop(),Xs.pop();let a=Xs.length;return a>0&&(qs=Xs[a-1],Ti=Xs[a-2]),o}function zl(i,t,e,n,s=null,r=0,o=0){let{float32Array:a,uint16Array:c,uint32Array:l}=oe,u=i*2;if(ve(u,c)){let f=Te(i,l),d=Le(u,c);return ue(i,a,Ti),n(f,d,!1,o,r+i,Ti)}else{let S=function(N){let{uint16Array:V,uint32Array:L}=oe,O=N*2;for(;!ve(O,V);)N=ze(N),O=N*2;return Te(N,L)},D=function(N){let{uint16Array:V,uint32Array:L}=oe,O=N*2;for(;!ve(O,V);)N=ke(N,L),O=N*2;return Te(N,L)+Le(O,V)},f=ze(i),d=ke(i,l),g=f,_=d,m,p,y,x;if(s&&(y=Ti,x=qs,ue(g,a,y),ue(_,a,x),m=s(y),p=s(x),p<m)){g=d,_=f;let N=m;m=p,p=N,y=x}y||(y=Ti,ue(g,a,y));let v=ve(g*2,c),E=e(y,v,m,o+1,r+g),w;if(E===2){let N=S(g),L=D(g)-N;w=n(N,L,!0,o+1,r+g,y)}else w=E&&zl(g,t,e,n,s,r,o+1);if(w)return!0;x=qs,ue(_,a,x);let b=ve(_*2,c),I=e(x,b,p,o+1,r+_),M;if(I===2){let N=S(_),L=D(_)-N;M=n(N,L,!0,o+1,r+_,x)}else M=I&&zl(_,t,e,n,s,r,o+1);return!!M}}var Vr=new T,Hl=new T;function G1(i,t,e={},n=0,s=1/0){let r=n*n,o=s*s,a=1/0,c=null;if(i.shapecast({boundsTraverseOrder:u=>(Vr.copy(t).clamp(u.min,u.max),Vr.distanceToSquared(t)),intersectsBounds:(u,h,f)=>f<a&&f<o,intersectsTriangle:(u,h)=>{u.closestPointToPoint(t,Vr);let f=t.distanceToSquared(Vr);return f<a&&(Hl.copy(Vr),a=f,c=h),f<r}}),a===1/0)return null;let l=Math.sqrt(a);return e.point?e.point.copy(Hl):e.point=Hl.clone(),e.distance=l,e.faceIndex=c,e}var Ys=new T,$s=new T,Zs=new T,ba=new ct,Sa=new ct,Ea=new ct,W1=new T,X1=new T,q1=new T,wa=new T;function K5(i,t,e,n,s,r){let o;return r===Fe?o=i.intersectTriangle(n,e,t,!0,s):o=i.intersectTriangle(t,e,n,r!==He,s),o===null?null:{distance:i.origin.distanceTo(s),point:s.clone()}}function j5(i,t,e,n,s,r,o,a,c){Ys.fromBufferAttribute(t,r),$s.fromBufferAttribute(t,o),Zs.fromBufferAttribute(t,a);let l=K5(i,Ys,$s,Zs,wa,c);if(l){n&&(ba.fromBufferAttribute(n,r),Sa.fromBufferAttribute(n,o),Ea.fromBufferAttribute(n,a),l.uv=fn.getInterpolation(wa,Ys,$s,Zs,ba,Sa,Ea,new ct)),s&&(ba.fromBufferAttribute(s,r),Sa.fromBufferAttribute(s,o),Ea.fromBufferAttribute(s,a),l.uv1=fn.getInterpolation(wa,Ys,$s,Zs,ba,Sa,Ea,new ct)),e&&(W1.fromBufferAttribute(e,r),X1.fromBufferAttribute(e,o),q1.fromBufferAttribute(e,a),l.normal=fn.getInterpolation(wa,Ys,$s,Zs,W1,X1,q1,new T),l.normal.dot(i.direction)>0&&l.normal.multiplyScalar(-1));let u={a:r,b:o,c:a,normal:new T,materialIndex:0};fn.getNormal(Ys,$s,Zs,u.normal),l.face=u,l.faceIndex=r}return l}function Js(i,t,e,n,s){let r=n*3,o=r+0,a=r+1,c=r+2,l=i.index;i.index&&(o=l.getX(o),a=l.getX(a),c=l.getX(c));let{position:u,normal:h,uv:f,uv1:d}=i.attributes,g=j5(e,u,h,f,d,o,a,c,t);return g?(g.faceIndex=n,s&&s.push(g),g):null}function de(i,t,e,n){let s=i.a,r=i.b,o=i.c,a=t,c=t+1,l=t+2;e&&(a=e.getX(a),c=e.getX(c),l=e.getX(l)),s.x=n.getX(a),s.y=n.getY(a),s.z=n.getZ(a),r.x=n.getX(c),r.y=n.getY(c),r.z=n.getZ(c),o.x=n.getX(l),o.y=n.getY(l),o.z=n.getZ(l)}function Y1(i,t,e,n,s,r){let{geometry:o,_indirectBuffer:a}=i;for(let c=n,l=n+s;c<l;c++)Js(o,t,e,c,r)}function $1(i,t,e,n,s){let{geometry:r,_indirectBuffer:o}=i,a=1/0,c=null;for(let l=n,u=n+s;l<u;l++){let h;h=Js(r,t,e,l),h&&h.distance<a&&(c=h,a=h.distance)}return c}function Z1(i,t,e,n,s,r,o){let{geometry:a}=e,{index:c}=a,l=a.attributes.position;for(let u=i,h=t+i;u<h;u++){let f;if(f=u,de(o,f*3,c,l),o.needsUpdate=!0,n(o,f,s,r))return!0}return!1}function J1(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));let e=i.geometry,n=e.index?e.index.array:null,s=e.attributes.position,r,o,a,c,l=0,u=i._roots;for(let f=0,d=u.length;f<d;f++)r=u[f],o=new Uint32Array(r),a=new Uint16Array(r),c=new Float32Array(r),h(0,l),l+=r.byteLength;function h(f,d,g=!1){let _=f*2;if(a[_+15]===65535){let p=o[f+6],y=a[_+14],x=1/0,v=1/0,E=1/0,w=-1/0,b=-1/0,I=-1/0;for(let M=3*p,S=3*(p+y);M<S;M++){let D=n[M],N=s.getX(D),V=s.getY(D),L=s.getZ(D);N<x&&(x=N),N>w&&(w=N),V<v&&(v=V),V>b&&(b=V),L<E&&(E=L),L>I&&(I=L)}return c[f+0]!==x||c[f+1]!==v||c[f+2]!==E||c[f+3]!==w||c[f+4]!==b||c[f+5]!==I?(c[f+0]=x,c[f+1]=v,c[f+2]=E,c[f+3]=w,c[f+4]=b,c[f+5]=I,!0):!1}else{let p=f+8,y=o[f+6],x=p+d,v=y+d,E=g,w=!1,b=!1;t?E||(w=t.has(x),b=t.has(v),E=!w&&!b):(w=!0,b=!0);let I=E||w,M=E||b,S=!1;I&&(S=h(p,d,E));let D=!1;M&&(D=h(y,d,E));let N=S||D;if(N)for(let V=0;V<3;V++){let L=p+V,O=y+V,$=c[L],st=c[L+3],it=c[O],et=c[O+3];c[f+V]=$<it?$:it,c[f+V+3]=st>et?st:et}return N}}}var K1=new se;function Mn(i,t,e,n){return ue(i,t,K1),e.intersectBox(K1,n)}function j1(i,t,e,n,s,r){let{geometry:o,_indirectBuffer:a}=i;for(let c=n,l=n+s;c<l;c++){let u=a?a[c]:c;Js(o,t,e,u,r)}}function Q1(i,t,e,n,s){let{geometry:r,_indirectBuffer:o}=i,a=1/0,c=null;for(let l=n,u=n+s;l<u;l++){let h;h=Js(r,t,e,o?o[l]:l),h&&h.distance<a&&(c=h,a=h.distance)}return c}function t4(i,t,e,n,s,r,o){let{geometry:a}=e,{index:c}=a,l=a.attributes.position;for(let u=i,h=t+i;u<h;u++){let f;if(f=e.resolveTriangleIndex(u),de(o,f*3,c,l),o.needsUpdate=!0,n(o,f,s,r))return!0}return!1}var e4=new T;function n4(i,t,e,n,s){oe.setBuffer(i._roots[t]),Vl(0,i,e,n,s),oe.clearBuffer()}function Vl(i,t,e,n,s){let{float32Array:r,uint16Array:o,uint32Array:a}=oe,c=i*2;if(ve(c,o)){let u=Te(i,a),h=Le(c,o);Y1(t,e,n,u,h,s)}else{let u=ze(i);Mn(u,r,n,e4)&&Vl(u,t,e,n,s);let h=ke(i,a);Mn(h,r,n,e4)&&Vl(h,t,e,n,s)}}var i4=new T,Q5=["x","y","z"];function s4(i,t,e,n){oe.setBuffer(i._roots[t]);let s=Gl(0,i,e,n);return oe.clearBuffer(),s}function Gl(i,t,e,n){let{float32Array:s,uint16Array:r,uint32Array:o}=oe,a=i*2;if(ve(a,r)){let l=Te(i,o),u=Le(a,r);return $1(t,e,n,l,u)}else{let l=xa(i,o),u=Q5[l],f=n.direction[u]>=0,d,g;f?(d=ze(i),g=ke(i,o)):(d=ke(i,o),g=ze(i));let m=Mn(d,s,n,i4)?Gl(d,t,e,n):null;if(m){let x=m.point[u];if(f?x<=s[g+l]:x>=s[g+l+3])return m}let y=Mn(g,s,n,i4)?Gl(g,t,e,n):null;return m&&y?m.distance<=y.distance?m:y:m||y||null}}var Ta=new se,Ks=new Ve,js=new Ve,Gr=new Xt,r4=new Se,Aa=new Se;function o4(i,t,e,n){oe.setBuffer(i._roots[t]);let s=Wl(0,i,e,n);return oe.clearBuffer(),s}function Wl(i,t,e,n,s=null){let{float32Array:r,uint16Array:o,uint32Array:a}=oe,c=i*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),r4.set(e.boundingBox.min,e.boundingBox.max,n),s=r4),ve(c,o)){let u=t.geometry,h=u.index,f=u.attributes.position,d=e.index,g=e.attributes.position,_=Te(i,a),m=Le(c,o);if(Gr.copy(n).invert(),e.boundsTree)return ue(i,r,Aa),Aa.matrix.copy(Gr),Aa.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:y=>Aa.intersectsBox(y),intersectsTriangle:y=>{y.a.applyMatrix4(n),y.b.applyMatrix4(n),y.c.applyMatrix4(n),y.needsUpdate=!0;for(let x=_*3,v=(m+_)*3;x<v;x+=3)if(de(js,x,h,f),js.needsUpdate=!0,y.intersectsTriangle(js))return!0;return!1}});for(let p=_*3,y=(m+_)*3;p<y;p+=3){de(Ks,p,h,f),Ks.a.applyMatrix4(Gr),Ks.b.applyMatrix4(Gr),Ks.c.applyMatrix4(Gr),Ks.needsUpdate=!0;for(let x=0,v=d.count;x<v;x+=3)if(de(js,x,d,g),js.needsUpdate=!0,Ks.intersectsTriangle(js))return!0}}else{let u=i+8,h=a[i+6];return ue(u,r,Ta),!!(s.intersectsBox(Ta)&&Wl(u,t,e,n,s)||(ue(h,r,Ta),s.intersectsBox(Ta)&&Wl(h,t,e,n,s)))}}var Ra=new Xt,Xl=new Se,Wr=new Se,t6=new T,e6=new T,n6=new T,i6=new T;function a4(i,t,e,n={},s={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Xl.set(t.boundingBox.min,t.boundingBox.max,e),Xl.needsUpdate=!0;let a=i.geometry,c=a.attributes.position,l=a.index,u=t.attributes.position,h=t.index,f=en.getPrimitive(),d=en.getPrimitive(),g=t6,_=e6,m=null,p=null;s&&(m=n6,p=i6);let y=1/0,x=null,v=null;return Ra.copy(e).invert(),Wr.matrix.copy(Ra),i.shapecast({boundsTraverseOrder:E=>Xl.distanceToBox(E),intersectsBounds:(E,w,b)=>b<y&&b<o?(w&&(Wr.min.copy(E.min),Wr.max.copy(E.max),Wr.needsUpdate=!0),!0):!1,intersectsRange:(E,w)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:I=>Wr.distanceToBox(I),intersectsBounds:(I,M,S)=>S<y&&S<o,intersectsRange:(I,M)=>{for(let S=I,D=I+M;S<D;S++){de(d,3*S,h,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let N=E,V=E+w;N<V;N++){de(f,3*N,l,c),f.needsUpdate=!0;let L=f.distanceToTriangle(d,g,m);if(L<y&&(_.copy(g),p&&p.copy(m),y=L,x=N,v=S),L<r)return!0}}}});{let b=zn(t);for(let I=0,M=b;I<M;I++){de(d,3*I,h,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let S=E,D=E+w;S<D;S++){de(f,3*S,l,c),f.needsUpdate=!0;let N=f.distanceToTriangle(d,g,m);if(N<y&&(_.copy(g),p&&p.copy(m),y=N,x=S,v=I),N<r)return!0}}}}}),en.releasePrimitive(f),en.releasePrimitive(d),y===1/0?null:(n.point?n.point.copy(_):n.point=_.clone(),n.distance=y,n.faceIndex=x,s&&(s.point?s.point.copy(p):s.point=p.clone(),s.point.applyMatrix4(Ra),_.applyMatrix4(Ra),s.distance=_.sub(s.point).length(),s.faceIndex=v),n)}function c4(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));let e=i.geometry,n=e.index?e.index.array:null,s=e.attributes.position,r,o,a,c,l=0,u=i._roots;for(let f=0,d=u.length;f<d;f++)r=u[f],o=new Uint32Array(r),a=new Uint16Array(r),c=new Float32Array(r),h(0,l),l+=r.byteLength;function h(f,d,g=!1){let _=f*2;if(a[_+15]===65535){let p=o[f+6],y=a[_+14],x=1/0,v=1/0,E=1/0,w=-1/0,b=-1/0,I=-1/0;for(let M=p,S=p+y;M<S;M++){let D=3*i.resolveTriangleIndex(M);for(let N=0;N<3;N++){let V=D+N;V=n?n[V]:V;let L=s.getX(V),O=s.getY(V),$=s.getZ(V);L<x&&(x=L),L>w&&(w=L),O<v&&(v=O),O>b&&(b=O),$<E&&(E=$),$>I&&(I=$)}}return c[f+0]!==x||c[f+1]!==v||c[f+2]!==E||c[f+3]!==w||c[f+4]!==b||c[f+5]!==I?(c[f+0]=x,c[f+1]=v,c[f+2]=E,c[f+3]=w,c[f+4]=b,c[f+5]=I,!0):!1}else{let p=f+8,y=o[f+6],x=p+d,v=y+d,E=g,w=!1,b=!1;t?E||(w=t.has(x),b=t.has(v),E=!w&&!b):(w=!0,b=!0);let I=E||w,M=E||b,S=!1;I&&(S=h(p,d,E));let D=!1;M&&(D=h(y,d,E));let N=S||D;if(N)for(let V=0;V<3;V++){let L=p+V,O=y+V,$=c[L],st=c[L+3],it=c[O],et=c[O+3];c[f+V]=$<it?$:it,c[f+V+3]=st>et?st:et}return N}}}var l4=new T;function u4(i,t,e,n,s){oe.setBuffer(i._roots[t]),ql(0,i,e,n,s),oe.clearBuffer()}function ql(i,t,e,n,s){let{float32Array:r,uint16Array:o,uint32Array:a}=oe,c=i*2;if(ve(c,o)){let u=Te(i,a),h=Le(c,o);j1(t,e,n,u,h,s)}else{let u=ze(i);Mn(u,r,n,l4)&&ql(u,t,e,n,s);let h=ke(i,a);Mn(h,r,n,l4)&&ql(h,t,e,n,s)}}var h4=new T,s6=["x","y","z"];function f4(i,t,e,n){oe.setBuffer(i._roots[t]);let s=Yl(0,i,e,n);return oe.clearBuffer(),s}function Yl(i,t,e,n){let{float32Array:s,uint16Array:r,uint32Array:o}=oe,a=i*2;if(ve(a,r)){let l=Te(i,o),u=Le(a,r);return Q1(t,e,n,l,u)}else{let l=xa(i,o),u=s6[l],f=n.direction[u]>=0,d,g;f?(d=ze(i),g=ke(i,o)):(d=ke(i,o),g=ze(i));let m=Mn(d,s,n,h4)?Yl(d,t,e,n):null;if(m){let x=m.point[u];if(f?x<=s[g+l]:x>=s[g+l+3])return m}let y=Mn(g,s,n,h4)?Yl(g,t,e,n):null;return m&&y?m.distance<=y.distance?m:y:m||y||null}}var Ca=new se,Qs=new Ve,tr=new Ve,Xr=new Xt,d4=new Se,Pa=new Se;function p4(i,t,e,n){oe.setBuffer(i._roots[t]);let s=$l(0,i,e,n);return oe.clearBuffer(),s}function $l(i,t,e,n,s=null){let{float32Array:r,uint16Array:o,uint32Array:a}=oe,c=i*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),d4.set(e.boundingBox.min,e.boundingBox.max,n),s=d4),ve(c,o)){let u=t.geometry,h=u.index,f=u.attributes.position,d=e.index,g=e.attributes.position,_=Te(i,a),m=Le(c,o);if(Xr.copy(n).invert(),e.boundsTree)return ue(i,r,Pa),Pa.matrix.copy(Xr),Pa.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:y=>Pa.intersectsBox(y),intersectsTriangle:y=>{y.a.applyMatrix4(n),y.b.applyMatrix4(n),y.c.applyMatrix4(n),y.needsUpdate=!0;for(let x=_,v=m+_;x<v;x++)if(de(tr,3*t.resolveTriangleIndex(x),h,f),tr.needsUpdate=!0,y.intersectsTriangle(tr))return!0;return!1}});for(let p=_,y=m+_;p<y;p++){let x=t.resolveTriangleIndex(p);de(Qs,3*x,h,f),Qs.a.applyMatrix4(Xr),Qs.b.applyMatrix4(Xr),Qs.c.applyMatrix4(Xr),Qs.needsUpdate=!0;for(let v=0,E=d.count;v<E;v+=3)if(de(tr,v,d,g),tr.needsUpdate=!0,Qs.intersectsTriangle(tr))return!0}}else{let u=i+8,h=a[i+6];return ue(u,r,Ca),!!(s.intersectsBox(Ca)&&$l(u,t,e,n,s)||(ue(h,r,Ca),s.intersectsBox(Ca)&&$l(h,t,e,n,s)))}}var La=new Xt,Zl=new Se,qr=new Se,r6=new T,o6=new T,a6=new T,c6=new T;function m4(i,t,e,n={},s={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Zl.set(t.boundingBox.min,t.boundingBox.max,e),Zl.needsUpdate=!0;let a=i.geometry,c=a.attributes.position,l=a.index,u=t.attributes.position,h=t.index,f=en.getPrimitive(),d=en.getPrimitive(),g=r6,_=o6,m=null,p=null;s&&(m=a6,p=c6);let y=1/0,x=null,v=null;return La.copy(e).invert(),qr.matrix.copy(La),i.shapecast({boundsTraverseOrder:E=>Zl.distanceToBox(E),intersectsBounds:(E,w,b)=>b<y&&b<o?(w&&(qr.min.copy(E.min),qr.max.copy(E.max),qr.needsUpdate=!0),!0):!1,intersectsRange:(E,w)=>{if(t.boundsTree){let b=t.boundsTree;return b.shapecast({boundsTraverseOrder:I=>qr.distanceToBox(I),intersectsBounds:(I,M,S)=>S<y&&S<o,intersectsRange:(I,M)=>{for(let S=I,D=I+M;S<D;S++){let N=b.resolveTriangleIndex(S);de(d,3*N,h,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let V=E,L=E+w;V<L;V++){let O=i.resolveTriangleIndex(V);de(f,3*O,l,c),f.needsUpdate=!0;let $=f.distanceToTriangle(d,g,m);if($<y&&(_.copy(g),p&&p.copy(m),y=$,x=V,v=S),$<r)return!0}}}})}else{let b=zn(t);for(let I=0,M=b;I<M;I++){de(d,3*I,h,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let S=E,D=E+w;S<D;S++){let N=i.resolveTriangleIndex(S);de(f,3*N,l,c),f.needsUpdate=!0;let V=f.distanceToTriangle(d,g,m);if(V<y&&(_.copy(g),p&&p.copy(m),y=V,x=S,v=I),V<r)return!0}}}}}),en.releasePrimitive(f),en.releasePrimitive(d),y===1/0?null:(n.point?n.point.copy(_):n.point=_.clone(),n.distance=y,n.faceIndex=x,s&&(s.point?s.point.copy(p):s.point=p.clone(),s.point.applyMatrix4(La),_.applyMatrix4(La),s.distance=_.sub(s.point).length(),s.faceIndex=v),n)}function g4(){return typeof SharedArrayBuffer<"u"}var Yr=new oe.constructor,Ia=new oe.constructor,Ai=new wi(()=>new se),er=new se,nr=new se,Jl=new se,Kl=new se,jl=!1;function x4(i,t,e,n){if(jl)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");jl=!0;let s=i._roots,r=t._roots,o,a=0,c=0,l=new Xt().copy(e).invert();for(let u=0,h=s.length;u<h;u++){Yr.setBuffer(s[u]),c=0;let f=Ai.getPrimitive();ue(0,Yr.float32Array,f),f.applyMatrix4(l);for(let d=0,g=r.length;d<g&&(Ia.setBuffer(r[u]),o=Pn(0,0,e,l,n,a,c,0,0,f),Ia.clearBuffer(),c+=r[d].length,!o);d++);if(Ai.releasePrimitive(f),Yr.clearBuffer(),a+=s[u].length,o)break}return jl=!1,o}function Pn(i,t,e,n,s,r=0,o=0,a=0,c=0,l=null,u=!1){let h,f;u?(h=Ia,f=Yr):(h=Yr,f=Ia);let d=h.float32Array,g=h.uint32Array,_=h.uint16Array,m=f.float32Array,p=f.uint32Array,y=f.uint16Array,x=i*2,v=t*2,E=ve(x,_),w=ve(v,y),b=!1;if(w&&E)u?b=s(Te(t,p),Le(t*2,y),Te(i,g),Le(i*2,_),c,o+t,a,r+i):b=s(Te(i,g),Le(i*2,_),Te(t,p),Le(t*2,y),a,r+i,c,o+t);else if(w){let I=Ai.getPrimitive();ue(t,m,I),I.applyMatrix4(e);let M=ze(i),S=ke(i,g);ue(M,d,er),ue(S,d,nr);let D=I.intersectsBox(er),N=I.intersectsBox(nr);b=D&&Pn(t,M,n,e,s,o,r,c,a+1,I,!u)||N&&Pn(t,S,n,e,s,o,r,c,a+1,I,!u),Ai.releasePrimitive(I)}else{let I=ze(t),M=ke(t,p);ue(I,m,Jl),ue(M,m,Kl);let S=l.intersectsBox(Jl),D=l.intersectsBox(Kl);if(S&&D)b=Pn(i,I,e,n,s,r,o,a,c+1,l,u)||Pn(i,M,e,n,s,r,o,a,c+1,l,u);else if(S)if(E)b=Pn(i,I,e,n,s,r,o,a,c+1,l,u);else{let N=Ai.getPrimitive();N.copy(Jl).applyMatrix4(e);let V=ze(i),L=ke(i,g);ue(V,d,er),ue(L,d,nr);let O=N.intersectsBox(er),$=N.intersectsBox(nr);b=O&&Pn(I,V,n,e,s,o,r,c,a+1,N,!u)||$&&Pn(I,L,n,e,s,o,r,c,a+1,N,!u),Ai.releasePrimitive(N)}else if(D)if(E)b=Pn(i,M,e,n,s,r,o,a,c+1,l,u);else{let N=Ai.getPrimitive();N.copy(Kl).applyMatrix4(e);let V=ze(i),L=ke(i,g);ue(V,d,er),ue(L,d,nr);let O=N.intersectsBox(er),$=N.intersectsBox(nr);b=O&&Pn(M,V,n,e,s,o,r,c,a+1,N,!u)||$&&Pn(M,L,n,e,s,o,r,c,a+1,N,!u),Ai.releasePrimitive(N)}}return b}var Da=new Se,_4=new se,l6={strategy:0,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0},Ri=class i{static serialize(t,e={}){e={cloneBuffers:!0,...e};let n=t.geometry,s=t._roots,r=t._indirectBuffer,o=n.getIndex(),a;return e.cloneBuffers?a={roots:s.map(c=>c.slice()),index:o.array.slice(),indirectBuffer:r?r.slice():null}:a={roots:s,index:o.array,indirectBuffer:r},a}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};let{index:s,roots:r,indirectBuffer:o}=t,a=new i(e,{...n,[pa]:!0});if(a._roots=r,a._indirectBuffer=o||null,n.setIndex){let c=e.getIndex();if(c===null){let l=new we(t.index,1,!1);e.setIndex(l)}else c.array!==s&&(c.array.set(s),c.needsUpdate=!0)}return a}get indirect(){return!!this._indirectBuffer}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(e=Object.assign({...l6,[pa]:!1},e),e.useSharedArrayBuffer&&!g4())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=t,this._roots=null,this._indirectBuffer=null,e[pa]||(k1(this,e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new se)));let{_indirectBuffer:n}=this;this.resolveTriangleIndex=e.indirect?s=>n[s]:s=>s}refit(t=null){return(this.indirect?c4:J1)(this,t)}traverse(t,e=0){let n=this._roots[e],s=new Uint32Array(n),r=new Uint16Array(n);o(0);function o(a,c=0){let l=a*2,u=r[l+15]===65535;if(u){let h=s[a+6],f=r[l+14];t(c,u,new Float32Array(n,a*4,6),h,f)}else{let h=a+32/4,f=s[a+6],d=s[a+7];t(c,u,new Float32Array(n,a*4,6),d)||(o(h,c+1),o(f,c+1))}}}raycast(t,e=Rn){let n=this._roots,s=this.geometry,r=[],o=e.isMaterial,a=Array.isArray(e),c=s.groups,l=o?e.side:e,u=this.indirect?u4:n4;for(let h=0,f=n.length;h<f;h++){let d=a?e[c[h].materialIndex].side:l,g=r.length;if(u(this,h,d,t,r),a){let _=c[h].materialIndex;for(let m=g,p=r.length;m<p;m++)r[m].face.materialIndex=_}}return r}raycastFirst(t,e=Rn){let n=this._roots,s=this.geometry,r=e.isMaterial,o=Array.isArray(e),a=null,c=s.groups,l=r?e.side:e,u=this.indirect?f4:s4;for(let h=0,f=n.length;h<f;h++){let d=o?e[c[h].materialIndex].side:l,g=u(this,h,d,t);g!=null&&(a==null||g.distance<a.distance)&&(a=g,o&&(g.face.materialIndex=c[h].materialIndex))}return a}intersectsGeometry(t,e){let n=!1,s=this._roots,r=this.indirect?p4:o4;for(let o=0,a=s.length;o<a&&(n=r(this,o,t,e),!n);o++);return n}shapecast(t){let e=en.getPrimitive(),n=this.indirect?t4:Z1,{boundsTraverseOrder:s,intersectsBounds:r,intersectsRange:o,intersectsTriangle:a}=t;if(o&&a){let h=o;o=(f,d,g,_,m)=>h(f,d,g,_,m)?!0:n(f,d,this,a,g,_,e)}else o||(a?o=(h,f,d,g)=>n(h,f,this,a,d,g,e):o=(h,f,d)=>d);let c=!1,l=0,u=this._roots;for(let h=0,f=u.length;h<f;h++){let d=u[h];if(c=V1(this,h,r,o,s,l),c)break;l+=d.byteLength}return en.releasePrimitive(e),c}bvhcast(t,e,n){let{intersectsRanges:s,intersectsTriangles:r}=n,o=en.getPrimitive(),a=this.geometry.index,c=this.geometry.attributes.position,l=this.indirect?g=>{let _=this.resolveTriangleIndex(g);de(o,_*3,a,c)}:g=>{de(o,g*3,a,c)},u=en.getPrimitive(),h=t.geometry.index,f=t.geometry.attributes.position,d=t.indirect?g=>{let _=t.resolveTriangleIndex(g);de(u,_*3,h,f)}:g=>{de(u,g*3,h,f)};if(r){let g=(_,m,p,y,x,v,E,w)=>{for(let b=p,I=p+y;b<I;b++){d(b),u.a.applyMatrix4(e),u.b.applyMatrix4(e),u.c.applyMatrix4(e),u.needsUpdate=!0;for(let M=_,S=_+m;M<S;M++)if(l(M),o.needsUpdate=!0,r(o,u,M,b,x,v,E,w))return!0}return!1};if(s){let _=s;s=function(m,p,y,x,v,E,w,b){return _(m,p,y,x,v,E,w,b)?!0:g(m,p,y,x,v,E,w,b)}}else s=g}return x4(this,t,e,s)}intersectsBox(t,e){return Da.set(t.min,t.max,e),Da.needsUpdate=!0,this.shapecast({intersectsBounds:n=>Da.intersectsBox(n),intersectsTriangle:n=>Da.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},s={},r=0,o=1/0){return(this.indirect?m4:a4)(this,t,e,n,s,r,o)}closestPointToPoint(t,e={},n=0,s=1/0){return G1(this,t,e,n,s)}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{ue(0,new Float32Array(n),_4),t.union(_4)}),t}};var y4=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`;var v4=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( ptr > - 1 && ptr < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;

			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return found;

}
`;var q7=`
	${y4}
	${v4}
`;var Ql={pivots:{P1a:[44.75,43.2],P1b:[44.75,55.65],Ca:[46.4,46.25],Cb:[46.4,52.6],J1a:[48.65,38.8],J1b:[48.65,60.05],P2a:[46.5,45.1],P2b:[46.5,53.7],J2a:[49.6,41.2],J2b:[49.6,57.65],Sa:[44.4,46.4],Sb:[44.4,52.4]},groups:{gehaeuse:{v:[45.278,22.66,55.236,45.387,22.76,55.213,45.43,22.66,55.654,45.53,22.76,55.654,45.387,22.76,56.095,45.012,22.76,54.941,44.893,22.66,55.014,44.548,22.76,54.941,44.455,22.66,55.091,44.173,22.76,55.213,44.169,22.66,55.432,44.03,22.76,55.654,44.169,22.66,55.876,44.173,22.76,56.095,44.455,22.66,56.217,44.548,22.76,56.367,44.893,22.66,56.294,45.012,22.76,56.367,45.278,22.66,56.072,45.387,22.96,56.095,45.53,22.96,55.654,45.387,22.96,55.213,45.012,22.96,54.941,44.548,22.96,54.941,44.173,22.96,55.213,44.03,22.96,55.654,44.173,22.96,56.095,44.548,22.96,56.367,45.012,22.96,56.367,45.18,27.26,55.654,45.086,27.26,55.397,45.086,27.26,55.911,44.85,27.26,56.048,44.85,27.26,55.26,44.58,27.26,56.001,44.58,27.26,55.308,44.404,27.26,55.791,44.404,27.26,55.517,45.086,22.96,55.397,45.18,22.96,55.654,45.086,22.96,55.911,44.85,22.96,55.26,44.58,22.96,55.308,44.404,22.96,55.517,44.404,22.96,55.791,44.58,22.96,56.001,44.85,22.96,56.048,37.199,24.96,48.91,37.199,24.96,48.21,36.999,24.96,48.21,40.084,26.21,46.823,40.107,26.21,46.611,40.084,26.96,46.823,40.107,26.96,46.611,40.174,26.21,46.408,40.174,26.96,46.408,40.283,26.21,46.224,40.283,26.96,46.224,40.429,26.21,46.068,40.429,26.96,46.068,40.604,26.21,45.946,40.604,26.96,45.946,44.54,26.21,43.796,44.54,26.96,43.796,40.084,22.96,46.823,40.107,22.96,46.611,40.084,23.71,46.823,40.107,23.71,46.611,40.174,22.96,46.408,40.174,23.71,46.408,40.283,22.96,46.224,40.283,23.71,46.224,40.429,22.96,46.068,40.429,23.71,46.068,40.604,22.96,45.946,40.604,23.71,45.946,44.54,22.96,43.796,44.54,23.71,43.796,40.604,26.21,52.875,40.429,26.21,52.753,40.604,26.96,52.875,40.429,26.96,52.753,40.283,26.21,52.596,40.283,26.96,52.596,40.174,26.21,52.412,40.174,26.96,52.412,40.107,26.21,52.21,40.107,26.96,52.21,40.084,26.21,51.997,40.084,26.96,51.997,40.604,22.96,52.875,40.429,22.96,52.753,40.604,23.71,52.875,40.429,23.71,52.753,40.283,22.96,52.596,40.283,23.71,52.596,40.174,22.96,52.412,40.174,23.71,52.412,40.107,22.96,52.21,40.107,23.71,52.21,40.084,22.96,51.997,40.084,23.71,51.997,39.723,22.96,53.533,39.723,23.71,53.533,39.571,22.96,53.465,39.571,23.71,53.465,39.409,23.71,53.424,39.243,23.71,53.41,39.243,22.96,53.41,39.409,22.96,53.424,38.999,23.71,53.41,36.999,22.96,53.41,38.999,26.21,53.41,36.999,26.96,53.41,39.243,26.96,53.41,39.243,26.21,53.41,39.409,26.96,53.424,39.409,26.21,53.424,39.571,26.21,53.465,39.723,26.21,53.533,39.723,26.96,53.533,39.571,26.96,53.465,44.535,26.21,56.161,44.535,26.96,56.161,39.723,26.96,45.288,39.723,26.21,45.288,39.571,26.96,45.355,39.571,26.21,45.355,39.409,26.21,45.396,39.243,26.21,45.41,39.243,26.96,45.41,39.409,26.96,45.396,38.999,26.21,45.41,36.999,26.96,45.41,36.999,22.96,45.41,38.999,23.71,45.41,39.243,22.96,45.41,39.243,23.71,45.41,39.409,22.96,45.396,39.409,23.71,45.396,39.571,23.71,45.355,39.723,23.71,45.288,39.723,22.96,45.288,39.571,22.96,45.355,44.535,23.71,42.659,44.535,22.96,42.659,37.199,24.673,50.575,36.999,24.673,50.575,37.199,24.96,50.61,36.999,24.96,50.61,37.199,25.247,50.575,36.999,25.247,50.575,37.199,25.518,50.473,36.999,25.518,50.473,37.199,25.756,50.308,36.999,25.756,50.308,37.199,25.948,50.092,36.999,25.948,50.092,37.199,26.082,49.836,36.999,26.082,49.836,37.199,26.151,49.555,36.999,26.151,49.555,37.199,26.151,49.266,36.999,26.151,49.266,37.199,26.082,48.985,36.999,26.082,48.985,37.199,25.948,48.729,36.999,25.948,48.729,37.199,25.756,48.512,36.999,25.756,48.512,37.199,25.518,48.348,36.999,25.518,48.348,37.199,25.247,48.245,36.999,25.247,48.245,37.199,24.673,48.245,36.999,24.673,48.245,37.199,24.403,48.348,36.999,24.403,48.348,37.199,24.164,48.512,36.999,24.164,48.512,37.199,23.973,48.729,36.999,23.973,48.729,37.199,23.838,48.985,36.999,23.838,48.985,37.199,23.769,49.266,36.999,23.769,49.266,37.199,23.769,49.555,36.999,23.769,49.555,37.199,23.838,49.836,36.999,23.838,49.836,37.199,23.973,50.092,36.999,23.973,50.092,37.199,24.164,50.308,36.999,24.164,50.308,37.199,24.403,50.473,36.999,24.403,50.473,37.199,25.141,48.944,37.199,25.297,49.041,37.199,25.408,49.187,37.199,25.458,49.364,37.199,25.441,49.547,37.199,25.359,49.712,37.199,25.223,49.835,37.199,25.052,49.902,37.199,24.868,49.902,37.199,24.697,49.835,37.199,24.561,49.712,37.199,24.479,49.547,37.199,24.462,49.364,37.199,24.513,49.187,37.199,24.623,49.041,37.199,24.78,48.944,37.399,24.78,48.944,37.399,24.96,48.91,37.399,25.141,48.944,37.399,25.297,49.041,37.399,25.408,49.187,37.399,25.458,49.364,37.399,25.441,49.547,37.399,25.359,49.712,37.399,25.223,49.835,37.399,25.052,49.902,37.399,24.868,49.902,37.399,24.697,49.835,37.399,24.561,49.712,37.399,24.479,49.547,37.399,24.462,49.364,37.399,24.513,49.187,37.399,24.623,49.041,38.999,25.141,48.944,38.399,25.141,48.944,38.999,24.96,48.91,38.399,24.96,48.91,38.999,24.78,48.944,38.399,24.78,48.944,38.999,24.623,49.041,38.399,24.623,49.041,38.999,24.513,49.187,38.399,24.513,49.187,38.999,24.462,49.364,38.399,24.462,49.364,38.999,24.479,49.547,38.399,24.479,49.547,38.999,24.561,49.712,38.399,24.561,49.712,38.999,24.697,49.835,38.399,24.697,49.835,38.999,24.868,49.902,38.399,24.868,49.902,38.999,25.052,49.902,38.399,25.052,49.902,38.999,25.223,49.835,38.399,25.223,49.835,38.999,25.359,49.712,38.399,25.359,49.712,38.999,25.441,49.547,38.399,25.441,49.547,38.999,25.458,49.364,38.399,25.458,49.364,38.999,25.408,49.187,38.399,25.408,49.187,38.999,25.297,49.041,38.399,25.297,49.041,45.145,26.96,55.491,45.171,26.21,55.571,45.18,26.96,55.654,45.171,26.21,55.737,45.145,26.96,55.817,45.104,26.21,55.889,45.048,26.96,55.951,44.98,26.21,56.001,44.904,26.96,56.035,44.822,26.21,56.052,44.738,26.96,56.052,44.656,26.21,56.035,44.58,26.96,56.001,44.512,26.21,55.951,44.456,26.96,55.889,44.415,26.21,55.817,44.389,26.96,55.737,44.38,26.21,55.654,44.389,26.96,55.571,44.415,26.21,55.491,44.456,26.96,55.419,44.512,26.21,55.357,44.58,26.96,55.308,44.656,26.21,55.274,44.738,26.96,55.256,44.822,26.21,55.256,44.904,26.96,55.274,44.98,26.21,55.308,45.048,26.96,55.357,45.104,26.21,55.419,44.415,23.71,55.817,44.415,22.96,55.817,44.38,23.71,55.654,44.38,22.96,55.654,44.415,23.71,55.491,44.415,22.96,55.491,44.512,23.71,55.357,44.512,22.96,55.357,44.656,23.71,55.274,44.656,22.96,55.274,44.822,23.71,55.256,44.822,22.96,55.256,44.98,23.71,55.308,44.98,22.96,55.308,45.104,23.71,55.419,45.104,22.96,55.419,45.171,23.71,55.571,45.171,22.96,55.571,45.171,23.71,55.737,45.171,22.96,55.737,45.104,23.71,55.889,45.104,22.96,55.889,44.98,23.71,56.001,44.98,22.96,56.001,44.822,23.71,56.052,44.822,22.96,56.052,44.656,23.71,56.035,44.656,22.96,56.035,44.512,23.71,55.951,44.512,22.96,55.951,45.145,26.96,43.02,45.171,26.21,43.099,45.18,26.96,43.183,45.171,26.21,43.266,45.145,26.96,43.345,45.104,26.21,43.418,45.048,26.96,43.48,44.98,26.21,43.529,44.904,26.96,43.563,44.822,26.21,43.58,44.738,26.96,43.58,44.656,26.21,43.563,44.58,26.96,43.529,44.512,26.21,43.48,44.456,26.96,43.418,44.415,26.21,43.345,44.389,26.96,43.266,44.38,26.21,43.183,44.389,26.96,43.099,44.415,26.21,43.02,44.456,26.96,42.947,44.512,26.21,42.885,44.58,26.96,42.836,44.656,26.21,42.802,44.738,26.96,42.785,44.822,26.21,42.785,44.904,26.96,42.802,44.98,26.21,42.836,45.048,26.96,42.885,45.104,26.21,42.947,44.415,23.71,43.345,44.415,22.96,43.345,44.38,23.71,43.183,44.38,22.96,43.183,44.415,23.71,43.02,44.415,22.96,43.02,44.512,23.71,42.885,44.512,22.96,42.885,44.656,23.71,42.802,44.656,22.96,42.802,44.822,23.71,42.785,44.822,22.96,42.785,44.98,23.71,42.836,44.98,22.96,42.836,45.104,23.71,42.947,45.104,22.96,42.947,45.171,23.71,43.099,45.171,22.96,43.099,45.171,23.71,43.266,45.171,22.96,43.266,45.104,23.71,43.418,45.104,22.96,43.418,44.98,23.71,43.529,44.98,22.96,43.529,44.822,23.71,43.58,44.822,22.96,43.58,44.656,23.71,43.563,44.656,22.96,43.563,44.512,23.71,43.48,44.512,22.96,43.48,47.352,22.96,53.852,47.432,22.96,53.749,47.352,23.71,53.852,47.432,23.71,53.749,47.482,23.71,53.628,47.482,22.96,53.628,47.499,22.96,53.499,47.499,23.71,53.499,44.54,23.71,55.025,44.691,23.71,55.078,44.851,23.71,55.081,45.004,23.71,55.033,45.134,23.71,54.939,45.499,23.71,54.574,46.375,23.71,54.086,45.128,23.71,56.076,46.54,23.71,54.103,46.699,23.71,54.052,46.822,23.71,53.94,46.89,23.71,53.788,46.89,23.71,53.622,46.822,23.71,53.47,47.499,23.71,50.66,46.699,23.71,53.359,46.499,23.71,50.66,46.54,23.71,53.307,46.375,23.71,53.325,46.231,23.71,53.408,46.133,23.71,53.543,46.099,23.71,53.705,46.133,23.71,53.868,46.231,23.71,54.002,44.999,23.71,56.17,44.846,23.71,56.217,44.686,23.71,56.215,44.535,23.71,56.161,44.686,23.71,42.606,44.846,23.71,42.603,44.999,23.71,42.651,45.128,23.71,42.744,45.499,23.71,44.246,46.375,23.71,44.735,46.54,23.71,44.717,46.699,23.71,44.769,45.134,23.71,43.881,45.004,23.71,43.787,44.851,23.71,43.74,44.691,23.71,43.743,46.133,23.71,45.278,46.099,23.71,45.115,46.133,23.71,44.953,46.231,23.71,44.818,47.352,23.71,44.968,46.822,23.71,44.88,46.89,23.71,45.032,46.89,23.71,45.198,47.499,23.71,45.322,47.432,23.71,45.072,47.482,23.71,45.192,46.822,23.71,45.35,47.499,23.71,48.16,46.699,23.71,45.462,46.499,23.71,48.16,46.54,23.71,45.513,46.375,23.71,45.496,46.231,23.71,45.412,47.499,22.96,45.322,47.499,26.21,50.66,47.499,26.21,48.16,47.499,26.96,53.499,47.499,26.96,45.322,47.499,26.21,45.322,47.499,26.21,53.499,47.482,26.96,53.628,47.482,26.21,53.628,47.432,26.21,53.749,47.432,26.96,53.749,47.352,26.96,53.852,47.352,26.21,53.852,44.686,26.21,56.215,44.846,26.21,56.217,44.999,26.21,56.17,45.128,26.21,56.076,45.499,26.21,54.574,46.375,26.21,54.086,46.54,26.21,54.103,46.699,26.21,54.052,45.134,26.21,54.939,45.004,26.21,55.033,44.851,26.21,55.081,44.691,26.21,55.078,44.54,26.21,55.025,44.691,26.21,43.743,44.851,26.21,43.74,45.004,26.21,43.787,45.134,26.21,43.881,45.499,26.21,44.246,46.375,26.21,44.735,45.128,26.21,42.744,46.54,26.21,44.717,46.699,26.21,44.769,47.352,26.21,44.968,46.822,26.21,44.88,46.89,26.21,45.032,46.89,26.21,45.198,46.822,26.21,45.35,46.699,26.21,45.462,46.499,26.21,48.16,46.54,26.21,45.513,46.375,26.21,45.496,46.231,26.21,45.412,46.133,26.21,45.278,46.099,26.21,45.115,46.133,26.21,44.953,46.231,26.21,44.818,44.999,26.21,42.651,44.846,26.21,42.603,44.686,26.21,42.606,44.535,26.21,42.659,46.133,26.21,53.543,46.099,26.21,53.705,46.133,26.21,53.868,46.231,26.21,54.002,46.822,26.21,53.94,46.89,26.21,53.788,46.89,26.21,53.622,46.822,26.21,53.47,46.699,26.21,53.359,46.499,26.21,50.66,46.54,26.21,53.307,46.375,26.21,53.325,46.231,26.21,53.408,47.432,26.21,45.072,47.482,26.21,45.192,47.352,26.96,44.968,47.432,26.96,45.072,47.482,26.96,45.192,45.128,26.96,42.744,47.482,22.96,45.192,47.432,22.96,45.072,47.352,22.96,44.968,45.128,22.96,42.744,44.691,22.96,43.743,44.851,22.96,43.74,45.004,22.96,43.787,45.134,22.96,43.881,45.499,22.96,44.246,44.686,22.96,42.606,44.846,22.96,42.603,44.999,22.96,42.651,44.691,26.96,43.743,44.851,26.96,43.74,45.004,26.96,43.787,45.134,26.96,43.881,45.499,26.96,44.246,44.535,26.96,42.659,44.686,26.96,42.606,44.846,26.96,42.603,44.999,26.96,42.651,45.128,22.96,56.076,44.999,22.96,56.17,44.846,22.96,56.217,44.686,22.96,56.215,44.535,22.96,56.161,45.134,22.96,54.939,45.004,22.96,55.033,44.851,22.96,55.081,44.691,22.96,55.078,44.54,22.96,55.025,45.128,26.96,56.076,44.999,26.96,56.17,44.846,26.96,56.217,44.686,26.96,56.215,45.134,26.96,54.939,45.004,26.96,55.033,44.851,26.96,55.081,44.691,26.96,55.078,44.54,26.96,55.025,46.133,22.96,44.953,46.099,22.96,45.115,46.133,22.96,45.278,46.231,22.96,45.412,46.375,22.96,45.496,46.54,22.96,45.513,46.699,22.96,45.462,46.822,22.96,45.35,46.89,22.96,45.198,46.89,22.96,45.032,46.822,22.96,44.88,46.699,22.96,44.769,46.54,22.96,44.717,46.375,22.96,44.735,46.231,22.96,44.818,46.107,26.96,45.032,46.107,26.96,45.198,46.175,26.96,45.35,46.299,26.96,45.462,46.457,26.96,45.513,46.622,26.96,45.496,46.766,26.96,45.412,46.864,26.96,45.278,46.899,26.96,45.115,46.864,26.96,44.953,46.766,26.96,44.818,46.622,26.96,44.735,46.457,26.96,44.717,46.299,26.96,44.769,46.175,26.96,44.88,46.133,22.96,53.543,46.099,22.96,53.705,46.133,22.96,53.868,46.231,22.96,54.002,46.375,22.96,54.086,46.54,22.96,54.103,46.699,22.96,54.052,46.822,22.96,53.94,46.89,22.96,53.788,46.89,22.96,53.622,46.822,22.96,53.47,46.699,22.96,53.359,46.54,22.96,53.307,46.375,22.96,53.325,46.231,22.96,53.408,46.107,26.96,53.622,46.107,26.96,53.788,46.175,26.96,53.94,46.299,26.96,54.052,46.457,26.96,54.103,46.622,26.96,54.086,46.766,26.96,54.002,46.864,26.96,53.868,46.899,26.96,53.705,46.864,26.96,53.543,46.766,26.96,53.408,46.622,26.96,53.325,46.457,26.96,53.307,46.299,26.96,53.359,46.175,26.96,53.47,45.499,26.96,54.574,45.499,22.96,54.574,38.399,22.96,51.91,37.399,22.96,51.91,38.399,26.96,51.91,37.399,26.96,51.91,38.399,26.96,46.91,38.399,22.96,46.91,37.399,22.96,46.91,37.399,26.96,46.91,45.278,22.66,42.765,45.387,22.76,42.742,45.43,22.66,43.183,45.53,22.76,43.183,45.387,22.76,43.623,45.012,22.76,42.469,44.893,22.66,42.542,44.548,22.76,42.469,44.455,22.66,42.62,44.173,22.76,42.742,44.169,22.66,42.96,44.03,22.76,43.183,44.169,22.66,43.405,44.173,22.76,43.623,44.455,22.66,43.745,44.548,22.76,43.896,44.893,22.66,43.823,45.012,22.76,43.896,45.278,22.66,43.6,45.387,22.96,43.623,45.53,22.96,43.183,45.387,22.96,42.742,45.012,22.96,42.469,44.548,22.96,42.469,44.173,22.96,42.742,44.03,22.96,43.183,44.173,22.96,43.623,44.548,22.96,43.896,45.012,22.96,43.896,45.18,27.26,43.183,45.086,27.26,42.925,45.086,27.26,43.44,44.85,27.26,43.576,44.85,27.26,42.789,44.58,27.26,43.529,44.58,27.26,42.836,44.404,27.26,43.319,44.404,27.26,43.046,45.086,22.96,42.925,45.18,22.96,43.183,45.086,22.96,43.44,44.85,22.96,42.789,44.58,22.96,42.836,44.404,22.96,43.046,44.404,22.96,43.319,44.58,22.96,43.529,44.85,22.96,43.576,44.701,26.94,56.067,44.704,26.96,56.047,44.917,26.94,56.051,44.911,26.96,56.032,45.097,26.94,55.929,45.082,26.96,55.916,45.192,26.94,55.734,45.173,26.96,55.73,45.177,26.94,55.517,45.158,26.96,55.523,45.055,26.94,55.337,45.042,26.96,55.352,44.86,26.94,55.242,44.856,26.96,55.261,44.643,26.94,55.257,44.649,26.96,55.276,44.463,26.94,55.379,44.478,26.96,55.392,44.368,26.94,55.575,44.387,26.96,55.578,44.383,26.94,55.792,44.402,26.96,55.785,44.505,26.94,55.972,44.518,26.96,55.956,45.082,27.22,55.916,44.911,27.22,56.032,44.704,27.22,56.047,44.518,27.22,55.956,44.402,27.22,55.785,44.387,27.22,55.578,44.478,27.22,55.392,44.649,27.22,55.276,44.856,27.22,55.261,45.042,27.22,55.352,45.158,27.22,55.523,45.173,27.22,55.73,45.411,26.94,55.776,45.201,26.94,55.169,44.99,26.94,56.261,44.359,26.94,56.14,44.149,26.94,55.533,44.57,26.94,55.047,44.701,27.24,56.067,44.917,27.24,56.051,45.097,27.24,55.929,45.192,27.24,55.734,45.177,27.24,55.517,45.055,27.24,55.337,44.86,27.24,55.242,44.643,27.24,55.257,44.463,27.24,55.379,44.368,27.24,55.575,44.383,27.24,55.792,44.505,27.24,55.972,45.411,27.24,55.776,44.99,27.24,56.261,45.201,27.24,55.169,44.57,27.24,55.047,44.149,27.24,55.533,44.359,27.24,56.14,44.303,27.19,56.129,44.332,26.977,56.171,44.332,27.204,56.171,44.378,26.99,56.194,44.378,27.19,56.194,44.303,26.99,56.129,44.112,26.99,55.576,44.108,26.977,55.525,44.112,27.19,55.576,44.108,27.204,55.525,44.952,27.19,56.305,45.004,26.977,56.301,45.004,27.204,56.301,45.047,26.99,56.272,45.047,27.19,56.272,44.952,26.99,56.305,45.43,26.99,55.83,45.43,27.19,55.83,45.452,26.977,55.784,45.452,27.204,55.784,45.449,26.99,55.732,45.449,27.19,55.732,45.257,27.19,55.18,45.228,27.204,55.137,45.257,26.99,55.18,44.131,27.19,55.478,44.131,26.99,55.478,44.513,27.19,55.036,44.513,26.99,55.036,44.556,27.204,55.007,44.608,27.19,55.004,44.556,26.977,55.007,44.608,26.99,55.004,45.182,26.99,55.114,45.228,26.977,55.137,45.182,27.19,55.114,45.07,26.88,43.487,45.056,26.9,43.472,45.183,26.88,43.301,45.164,26.9,43.296,45.188,26.88,43.084,45.169,26.9,43.089,45.084,26.88,42.893,45.07,26.9,42.907,44.899,26.88,42.78,44.893,26.9,42.799,44.682,26.88,42.774,44.686,26.9,42.794,44.491,26.88,42.878,44.504,26.9,42.893,44.377,26.88,43.064,44.396,26.9,43.069,44.372,26.88,43.281,44.391,26.9,43.276,44.476,26.88,43.472,44.49,26.9,43.458,44.661,26.88,43.585,44.667,26.9,43.566,44.879,26.88,43.591,44.874,26.9,43.571,45.169,27.16,43.089,45.164,27.16,43.296,45.056,27.16,43.472,44.874,27.16,43.571,44.667,27.16,43.566,44.49,27.16,43.458,44.391,27.16,43.276,44.396,27.16,43.069,44.504,27.16,42.893,44.686,27.16,42.794,44.893,27.16,42.799,45.07,27.16,42.907,45.245,26.88,42.74,44.629,26.88,42.558,45.396,26.88,43.364,44.931,26.88,43.807,44.315,26.88,43.625,44.164,26.88,43.001,45.07,27.18,43.487,45.183,27.18,43.301,45.188,27.18,43.084,45.084,27.18,42.893,44.899,27.18,42.78,44.682,27.18,42.774,44.491,27.18,42.878,44.377,27.18,43.064,44.372,27.18,43.281,44.476,27.18,43.472,44.661,27.18,43.585,44.879,27.18,43.591,45.245,27.18,42.74,45.396,27.18,43.364,44.629,27.18,42.558,44.164,27.18,43.001,44.315,27.18,43.625,44.931,27.18,43.807,44.889,27.13,43.847,44.941,26.917,43.848,44.941,27.144,43.848,44.986,26.93,43.823,44.986,27.13,43.823,44.889,26.93,43.847,44.328,26.93,43.681,44.284,26.917,43.654,44.328,27.13,43.681,44.284,27.144,43.654,45.41,27.13,43.42,45.437,26.917,43.376,45.437,27.144,43.376,45.438,26.93,43.324,45.438,27.13,43.324,45.41,26.93,43.42,45.301,26.93,42.756,45.301,27.13,42.756,45.276,26.917,42.711,45.276,27.144,42.711,45.232,26.93,42.684,45.232,27.13,42.684,44.671,27.13,42.518,44.619,27.144,42.517,44.671,26.93,42.518,44.259,27.13,43.609,44.259,26.93,43.609,44.122,27.13,43.041,44.122,26.93,43.041,44.123,27.144,42.989,44.15,27.13,42.945,44.123,26.917,42.989,44.15,26.93,42.945,44.574,26.93,42.542,44.619,26.917,42.517,44.574,27.13,42.542,46.135,27.18,45.325,46.152,27.16,45.315,46.079,27.18,45.115,46.099,27.16,45.115,46.135,27.18,44.905,46.152,27.16,44.915,46.289,27.18,44.752,46.299,27.16,44.769,46.499,27.18,44.695,46.499,27.16,44.715,46.709,27.18,44.752,46.699,27.16,44.769,46.862,27.18,44.905,46.845,27.16,44.915,46.919,27.18,45.115,46.899,27.16,45.115,46.862,27.18,45.325,46.845,27.16,45.315,46.709,27.18,45.479,46.699,27.16,45.462,46.499,27.18,45.535,46.499,27.16,45.515,46.289,27.18,45.479,46.299,27.16,45.462,46.152,26.9,44.915,46.099,26.9,45.115,46.152,26.9,45.315,46.299,26.9,45.462,46.499,26.9,45.515,46.699,26.9,45.462,46.845,26.9,45.315,46.899,26.9,45.115,46.845,26.9,44.915,46.699,26.9,44.769,46.499,26.9,44.715,46.299,26.9,44.769,46.178,27.18,44.559,46.82,27.18,44.559,45.856,27.18,45.115,46.178,27.18,45.671,46.82,27.18,45.671,47.141,27.18,45.115,46.135,26.88,45.325,46.079,26.88,45.115,46.135,26.88,44.905,46.289,26.88,44.752,46.499,26.88,44.695,46.709,26.88,44.752,46.862,26.88,44.905,46.919,26.88,45.115,46.862,26.88,45.325,46.709,26.88,45.479,46.499,26.88,45.535,46.289,26.88,45.479,46.178,26.88,44.559,45.856,26.88,45.115,46.82,26.88,44.559,47.141,26.88,45.115,46.82,26.88,45.671,46.178,26.88,45.671,46.206,26.93,45.721,46.156,27.144,45.708,46.156,26.917,45.708,46.12,27.13,45.671,46.12,26.93,45.671,46.206,27.13,45.721,46.791,27.13,45.721,46.841,27.144,45.708,46.791,26.93,45.721,46.841,26.917,45.708,45.828,26.93,45.165,45.814,27.144,45.115,45.814,26.917,45.115,45.828,27.13,45.065,45.828,26.93,45.065,45.828,27.13,45.165,46.12,27.13,44.559,46.12,26.93,44.559,46.156,27.144,44.522,46.156,26.917,44.522,46.206,27.13,44.509,46.206,26.93,44.509,46.791,26.93,44.509,46.841,26.917,44.522,46.791,27.13,44.509,46.878,26.93,45.671,46.878,27.13,45.671,47.17,26.93,45.165,47.17,27.13,45.165,47.183,26.917,45.115,47.17,26.93,45.065,47.183,27.144,45.115,47.17,27.13,45.065,46.878,27.13,44.559,46.841,27.144,44.522,46.878,26.93,44.559,46.135,27.18,53.915,46.152,27.16,53.905,46.079,27.18,53.705,46.099,27.16,53.705,46.135,27.18,53.495,46.152,27.16,53.505,46.289,27.18,53.342,46.299,27.16,53.359,46.499,27.18,53.285,46.499,27.16,53.305,46.709,27.18,53.342,46.699,27.16,53.359,46.862,27.18,53.495,46.845,27.16,53.505,46.919,27.18,53.705,46.899,27.16,53.705,46.862,27.18,53.915,46.845,27.16,53.905,46.709,27.18,54.069,46.699,27.16,54.052,46.499,27.18,54.125,46.499,27.16,54.105,46.289,27.18,54.069,46.299,27.16,54.052,46.152,26.9,53.505,46.099,26.9,53.705,46.152,26.9,53.905,46.299,26.9,54.052,46.499,26.9,54.105,46.699,26.9,54.052,46.845,26.9,53.905,46.899,26.9,53.705,46.845,26.9,53.505,46.699,26.9,53.359,46.499,26.9,53.305,46.299,26.9,53.359,46.178,27.18,53.149,46.82,27.18,53.149,45.856,27.18,53.705,46.178,27.18,54.261,46.82,27.18,54.261,47.141,27.18,53.705,46.135,26.88,53.915,46.079,26.88,53.705,46.135,26.88,53.495,46.289,26.88,53.342,46.499,26.88,53.285,46.709,26.88,53.342,46.862,26.88,53.495,46.919,26.88,53.705,46.862,26.88,53.915,46.709,26.88,54.069,46.499,26.88,54.125,46.289,26.88,54.069,46.178,26.88,53.149,45.856,26.88,53.705,46.82,26.88,53.149,47.141,26.88,53.705,46.82,26.88,54.261,46.178,26.88,54.261,46.206,26.93,54.311,46.156,27.144,54.298,46.156,26.917,54.298,46.12,27.13,54.261,46.12,26.93,54.261,46.206,27.13,54.311,46.791,27.13,54.311,46.841,27.144,54.298,46.791,26.93,54.311,46.841,26.917,54.298,45.828,26.93,53.755,45.814,27.144,53.705,45.814,26.917,53.705,45.828,27.13,53.655,45.828,26.93,53.655,45.828,27.13,53.755,46.12,27.13,53.149,46.12,26.93,53.149,46.156,27.144,53.112,46.156,26.917,53.112,46.206,27.13,53.099,46.206,26.93,53.099,46.791,26.93,53.099,46.841,26.917,53.112,46.791,27.13,53.099,46.878,26.93,54.261,46.878,27.13,54.261,47.17,26.93,53.755,47.17,27.13,53.755,47.183,26.917,53.705,47.17,26.93,53.655,47.183,27.144,53.705,47.17,27.13,53.655,46.878,27.13,53.149,46.841,27.144,53.112,46.878,26.93,53.149,46.958,22.16,53.32,47.035,22.26,53.255,47.099,22.16,53.705,47.199,22.26,53.705,46.958,22.16,54.091,47.035,22.26,54.155,46.603,22.16,54.296,46.62,22.26,54.395,46.199,22.16,54.225,46.149,22.26,54.311,45.935,22.16,53.91,45.841,22.26,53.945,45.935,22.16,53.5,45.841,22.26,53.466,46.199,22.16,53.186,46.149,22.26,53.099,46.603,22.16,53.114,46.62,22.26,53.016,47.035,22.46,54.155,47.199,22.46,53.705,47.035,22.46,53.255,46.62,22.46,53.016,46.149,22.46,53.099,45.841,22.46,53.466,45.841,22.46,53.945,46.149,22.46,54.311,46.62,22.46,54.395,46.899,27.26,53.705,46.805,27.26,53.448,46.805,27.26,53.962,46.568,27.26,54.099,46.568,27.26,53.311,46.299,27.26,54.052,46.299,27.26,53.359,46.123,27.26,53.842,46.123,27.26,53.568,46.805,22.46,53.448,46.899,22.46,53.705,46.805,22.46,53.962,46.568,22.46,53.311,46.299,22.46,53.359,46.123,22.46,53.568,46.123,22.46,53.842,46.299,22.46,54.052,46.568,22.46,54.099,46.958,22.16,44.73,47.035,22.26,44.665,47.099,22.16,45.115,47.199,22.26,45.115,46.958,22.16,45.501,47.035,22.26,45.565,46.603,22.16,45.706,46.62,22.26,45.805,46.199,22.16,45.635,46.149,22.26,45.721,45.935,22.16,45.32,45.841,22.26,45.355,45.935,22.16,44.91,45.841,22.26,44.876,46.199,22.16,44.596,46.149,22.26,44.509,46.603,22.16,44.524,46.62,22.26,44.426,47.035,22.46,45.565,47.199,22.46,45.115,47.035,22.46,44.665,46.62,22.46,44.426,46.149,22.46,44.509,45.841,22.46,44.876,45.841,22.46,45.355,46.149,22.46,45.721,46.62,22.46,45.805,46.899,27.26,45.115,46.805,27.26,44.858,46.805,27.26,45.372,46.568,27.26,45.509,46.568,27.26,44.721,46.299,27.26,45.462,46.299,27.26,44.769,46.123,27.26,45.252,46.123,27.26,44.978,46.805,22.46,44.858,46.899,22.46,45.115,46.805,22.46,45.372,46.568,22.46,44.721,46.299,22.46,44.769,46.123,22.46,44.978,46.123,22.46,45.252,46.299,22.46,45.462,46.568,22.46,45.509],i:[5,0,6,5,6,7,7,6,8,7,8,9,9,8,10,9,10,11,11,10,12,11,12,13,13,12,14,13,14,15,15,14,16,15,16,17,17,16,18,17,18,4,4,18,2,18,12,2,2,12,10,2,10,0,0,10,8,0,8,6,16,14,18,18,14,12,19,4,20,20,4,3,20,3,21,21,3,1,21,1,22,22,1,5,22,5,23,23,5,7,23,7,24,24,7,9,24,9,25,25,9,11,25,11,26,26,11,13,26,13,27,27,13,15,27,15,28,28,15,17,28,17,19,19,17,4,29,30,31,31,30,32,32,30,33,32,33,34,34,33,35,34,35,36,36,35,37,21,38,20,20,38,39,20,39,40,38,21,41,41,21,22,41,22,23,41,23,42,42,23,24,42,24,43,43,24,25,43,25,44,44,25,26,44,26,45,45,26,27,45,27,46,46,27,28,46,28,19,46,19,40,40,19,20,38,29,39,39,29,31,39,31,40,40,31,32,40,32,46,46,32,34,46,34,45,45,34,36,45,36,44,44,36,37,44,37,43,43,37,35,43,35,42,42,35,33,42,33,41,41,33,30,41,30,38,38,30,29,0,1,2,2,1,3,2,3,4,1,0,5,365,364,366,365,366,367,367,366,368,367,368,369,369,368,370,369,370,371,371,370,372,371,372,373,373,372,374,373,374,375,375,374,376,375,376,377,377,376,378,377,378,379,379,378,380,379,380,381,381,380,382,381,382,353,353,382,354,383,384,385,385,384,386,386,384,387,387,384,388,387,388,389,389,390,387,293,295,92,92,295,297,92,297,391,391,297,299,391,299,301,391,301,392,392,301,303,392,303,393,393,303,305,393,305,394,394,305,307,394,307,395,395,307,309,395,309,396,396,309,311,396,311,397,397,311,398,397,398,399,399,398,400,400,398,385,400,385,401,401,385,402,402,385,403,403,385,390,403,390,404,404,390,405,404,405,406,406,405,407,406,407,408,408,407,409,409,407,410,410,407,411,411,407,396,411,396,412,412,396,413,413,396,414,414,396,397,311,313,398,398,313,315,398,315,415,415,315,416,416,315,317,416,317,417,417,317,319,417,319,418,418,319,321,418,321,293,353,355,75,75,355,357,75,357,144,144,357,359,144,359,361,144,361,419,419,361,363,419,363,420,420,363,365,420,365,421,421,365,422,422,365,367,422,367,369,371,423,369,369,423,424,369,424,422,422,424,425,422,425,426,423,371,427,427,371,373,427,373,428,428,373,375,428,375,429,429,375,377,429,377,430,430,377,379,430,379,77,77,379,381,77,381,353,77,353,75,431,432,423,423,432,433,423,433,434,434,424,423,422,426,435,435,426,436,435,436,437,437,438,435,435,438,439,435,439,440,440,439,441,438,442,439,439,442,443,443,442,444,443,444,445,445,444,446,445,446,447,447,448,445,445,448,431,445,431,423,385,386,390,390,386,387,407,445,396,396,445,423,144,141,75,75,141,73,73,141,71,71,141,69,69,141,67,67,141,140,67,140,66,66,140,139,66,139,137,137,135,66,66,135,110,66,110,101,101,110,107,101,107,106,106,105,101,101,105,99,99,105,103,99,103,97,97,103,95,95,103,93,93,103,92,92,103,293,103,418,293,390,389,405,405,389,449,405,449,443,443,449,439,405,443,450,450,443,451,450,451,452,452,451,453,453,451,454,452,455,450,452,456,455,455,456,457,457,456,458,458,456,459,458,459,460,460,461,458,282,280,78,78,280,278,78,278,119,119,278,122,122,278,276,122,276,274,122,274,462,462,274,272,462,272,463,463,272,270,463,270,464,464,270,465,465,270,268,465,268,266,264,466,266,266,466,467,266,467,465,465,467,468,465,468,469,466,264,470,470,264,292,470,292,471,471,292,290,471,290,472,472,290,288,472,288,473,473,288,286,473,286,474,474,286,284,474,284,282,474,282,78,342,340,60,60,340,338,60,338,62,62,338,336,62,336,334,62,334,475,475,334,332,475,332,476,476,332,330,476,330,477,477,330,328,477,328,478,478,328,326,478,326,479,479,326,324,479,324,480,480,324,481,480,481,482,482,481,483,483,481,484,483,484,485,485,484,486,486,484,487,487,484,454,487,454,488,488,454,451,488,451,489,489,451,490,489,490,491,491,490,492,492,490,493,493,490,494,494,490,479,494,479,495,495,479,496,496,479,497,497,479,480,324,352,481,481,352,350,481,350,498,498,350,499,499,350,348,499,348,500,500,348,346,500,346,501,501,346,344,501,344,342,501,342,60,502,503,466,466,503,504,466,504,505,505,467,466,465,469,461,461,469,506,461,506,507,507,508,461,461,508,455,461,455,458,458,455,457,508,509,455,455,509,450,450,509,510,450,510,511,511,510,512,511,512,513,513,514,511,511,514,502,511,502,466,501,60,125,125,60,58,125,58,56,56,54,125,125,54,51,125,51,127,127,51,50,127,50,128,128,50,129,129,50,132,132,50,112,112,50,88,112,88,115,115,88,117,117,88,118,118,88,86,118,86,119,119,86,84,119,84,82,82,79,119,119,79,78,511,466,490,490,466,479,484,515,454,454,515,516,517,518,484,484,518,515,515,518,516,516,518,519,516,519,453,453,454,516,484,481,517,517,481,520,449,521,439,439,521,441,441,521,440,440,521,522,440,522,523,523,435,440,523,524,435,435,524,422,76,525,77,77,525,430,430,525,526,430,526,429,429,526,527,429,527,428,428,527,528,428,528,427,528,529,427,427,529,423,144,419,145,145,419,530,530,419,420,530,420,531,531,420,421,531,421,532,532,421,422,532,422,524,62,475,63,63,475,533,533,475,476,533,476,534,534,476,477,534,477,535,535,477,478,535,478,536,478,479,536,536,479,537,538,539,501,501,539,500,500,539,540,500,540,499,499,540,541,499,541,498,498,541,520,498,520,481,124,538,125,125,538,501,398,415,542,542,415,543,543,415,416,543,416,544,544,416,417,544,417,545,545,417,418,545,418,546,102,546,103,103,546,418,547,548,395,395,548,394,394,548,549,394,549,393,393,549,550,393,550,392,392,550,551,392,551,391,92,391,90,90,391,551,552,553,465,465,553,464,464,553,554,464,554,463,463,554,555,463,555,462,462,555,123,462,123,122,460,552,461,461,552,465,470,471,556,556,471,557,557,471,472,557,472,558,558,472,473,558,473,559,559,473,474,559,474,560,80,560,78,78,560,474,561,433,562,562,433,432,562,432,563,563,432,431,563,431,564,564,431,448,564,448,565,565,448,447,565,447,566,566,447,446,566,446,567,567,446,444,567,444,568,568,444,442,568,442,569,569,442,438,569,438,570,570,438,437,570,437,571,571,437,436,571,436,572,572,436,426,572,426,573,573,426,425,573,425,574,574,425,424,574,424,575,575,424,434,575,434,561,561,434,433,496,576,495,495,576,577,495,577,494,494,577,578,494,578,493,493,578,579,493,579,492,492,579,580,492,580,491,491,580,581,491,581,489,489,581,582,489,582,488,488,582,583,488,583,487,487,583,584,487,584,486,486,584,585,486,585,485,485,585,586,485,586,483,483,586,587,483,587,482,482,587,588,482,588,480,480,588,589,480,589,497,497,589,590,497,590,496,496,590,576,591,411,592,592,411,412,592,412,593,593,412,413,593,413,594,594,413,414,594,414,595,595,414,397,595,397,596,596,397,399,596,399,597,597,399,400,597,400,598,598,400,401,598,401,599,599,401,402,599,402,600,600,402,403,600,403,601,601,403,404,601,404,602,602,404,406,602,406,603,603,406,408,603,408,604,604,408,409,604,409,605,605,409,410,605,410,591,591,410,411,502,606,503,503,606,607,503,607,504,504,607,608,504,608,505,505,608,609,505,609,467,467,609,610,467,610,468,468,610,611,468,611,469,469,611,612,469,612,506,506,612,613,506,613,507,507,613,614,507,614,508,508,614,615,508,615,509,509,615,616,509,616,510,510,616,617,510,617,512,512,617,618,512,618,513,513,618,619,513,619,514,514,619,620,514,620,502,502,620,606,445,490,443,443,490,451,511,407,450,450,407,405,490,445,511,511,445,407,233,135,231,231,135,132,231,132,229,229,132,261,261,132,259,259,132,257,257,132,112,257,112,255,255,112,253,253,112,251,251,112,249,249,112,110,249,110,247,247,110,245,245,110,243,243,110,241,241,110,239,239,110,135,239,135,237,237,135,235,235,135,233,385,398,383,383,398,542,556,621,470,470,621,466,395,396,547,547,396,622,479,466,537,537,466,621,396,423,622,622,423,529,623,624,625,625,624,626,230,627,232,232,627,628,232,628,234,234,628,236,236,628,238,238,628,240,240,628,623,240,623,242,242,623,244,244,623,246,246,623,248,248,623,250,250,623,625,250,625,252,252,625,254,254,625,256,256,625,258,258,625,627,258,627,260,260,627,262,262,627,230,629,628,630,630,628,627,212,629,213,213,629,630,213,630,214,214,630,215,215,630,216,216,630,217,217,630,626,217,626,218,218,626,219,219,626,220,220,626,221,221,626,624,221,624,222,222,624,223,223,624,224,224,624,225,225,624,226,226,624,629,226,629,227,227,629,228,228,629,212,147,111,149,149,111,113,149,113,151,151,113,153,153,113,155,155,113,157,157,113,159,159,113,161,161,113,133,161,133,163,163,133,165,165,133,167,167,133,169,169,133,171,171,133,173,173,133,49,49,133,134,49,134,175,175,134,177,177,134,179,179,134,181,181,134,183,183,134,185,185,134,111,185,111,187,187,111,189,189,111,191,191,111,193,193,111,195,195,111,147,267,552,265,265,552,611,265,611,610,267,269,552,552,269,553,553,269,271,553,271,554,554,271,273,554,273,555,555,273,275,555,275,123,123,275,277,123,277,279,281,80,279,279,80,120,279,120,123,80,281,560,560,281,283,560,283,285,560,285,559,559,285,287,559,287,558,558,287,289,558,289,557,557,289,291,557,291,556,556,291,263,556,263,621,621,263,265,621,265,610,327,537,325,325,537,588,325,588,587,537,327,536,536,327,329,536,329,535,535,329,331,535,331,534,534,331,333,534,333,533,533,333,335,533,335,63,63,335,337,63,337,339,63,339,61,61,339,341,61,341,124,124,341,538,538,341,343,538,343,345,538,345,539,539,345,347,539,347,540,540,347,349,540,349,541,541,349,351,541,351,520,520,351,323,520,323,325,459,615,460,460,615,614,460,614,613,459,456,615,615,456,452,615,452,616,616,452,617,617,452,453,617,453,581,581,453,582,582,453,583,583,453,519,583,519,518,518,517,583,583,517,584,584,517,585,585,517,586,586,517,587,587,517,520,587,520,325,126,55,124,124,55,57,124,57,59,126,131,55,55,131,53,53,131,130,53,130,627,627,130,133,627,133,630,630,133,113,630,113,626,626,113,625,625,113,114,625,114,87,87,114,116,87,116,85,85,116,121,85,121,120,552,460,611,611,460,612,612,460,613,617,581,618,618,581,580,618,580,619,619,580,579,619,579,620,620,579,578,620,578,621,621,578,537,537,578,577,537,577,576,576,590,537,537,590,589,537,589,588,610,609,621,621,609,608,621,608,607,607,606,621,621,606,620,80,81,120,120,81,83,120,83,85,87,89,625,625,89,52,625,52,627,627,52,53,59,61,124,294,102,296,296,102,90,296,90,298,298,90,551,298,551,300,300,551,302,302,551,550,302,550,304,304,550,549,304,549,306,306,549,548,306,548,308,308,548,547,308,547,310,310,547,622,310,622,595,595,622,594,594,622,593,593,622,592,592,622,591,591,622,529,591,529,563,563,529,562,562,529,561,561,529,575,575,529,574,574,529,372,574,372,573,573,372,370,573,370,524,524,370,368,524,368,366,102,294,546,546,294,322,546,322,320,546,320,545,545,320,318,545,318,544,544,318,543,543,318,316,543,316,542,542,316,314,542,314,312,542,312,596,596,312,310,596,310,595,354,74,356,356,74,142,356,142,358,358,142,145,358,145,360,360,145,362,362,145,530,362,530,364,364,530,531,364,531,532,74,354,76,76,354,382,76,382,380,76,380,525,525,380,378,525,378,526,526,378,376,526,376,527,527,376,374,527,374,528,528,374,372,528,372,529,524,366,532,532,366,364,388,600,389,389,600,601,389,601,602,388,384,600,600,384,383,600,383,599,599,383,598,598,383,597,597,383,542,597,542,596,104,96,102,102,96,94,102,94,91,104,109,96,96,109,98,98,109,108,98,108,623,623,108,111,623,111,624,624,111,134,624,134,629,629,134,628,628,134,136,628,136,65,65,136,138,65,138,68,68,138,143,68,143,142,573,524,572,572,524,523,572,523,571,571,523,570,570,523,569,569,523,522,569,522,521,521,449,569,569,449,568,568,449,567,567,449,389,567,389,602,591,563,605,605,563,564,605,564,604,604,564,565,604,565,603,603,565,566,603,566,602,602,566,567,74,72,142,142,72,70,142,70,68,65,64,628,628,64,100,628,100,623,623,100,98,91,90,102,50,51,52,52,51,53,53,51,54,53,54,55,55,54,56,55,56,57,57,56,58,57,58,59,59,58,60,59,60,61,60,62,61,61,62,63,64,65,66,66,65,67,67,65,68,67,68,69,69,68,70,69,70,71,71,70,72,71,72,73,73,72,74,73,74,75,74,76,75,75,76,77,78,79,80,80,79,81,81,79,82,81,82,83,83,82,84,83,84,85,85,84,86,85,86,87,87,86,88,87,88,89,52,89,50,50,89,88,90,91,92,92,91,93,93,91,94,93,94,95,95,94,96,95,96,97,97,96,98,97,98,99,99,98,100,99,100,101,66,101,64,64,101,100,102,103,104,104,103,105,104,105,106,107,108,106,106,108,109,106,109,104,107,110,108,108,110,111,111,110,112,111,112,113,113,112,114,114,112,115,114,115,116,116,115,117,116,117,118,119,120,118,118,120,121,118,121,116,119,122,120,120,122,123,124,125,126,126,125,127,126,127,128,129,130,128,128,130,131,128,131,126,129,132,130,130,132,133,133,132,134,134,132,135,134,135,136,136,135,137,136,137,138,138,137,139,138,139,140,141,142,140,140,142,143,140,143,138,141,144,142,142,144,145,146,147,148,148,147,149,148,149,150,150,149,151,150,151,152,152,151,153,152,153,154,154,153,155,154,155,156,156,155,157,156,157,158,158,157,159,158,159,160,160,159,161,160,161,162,162,161,163,162,163,164,164,163,165,164,165,166,166,165,167,166,167,168,168,167,169,168,169,170,170,169,171,170,171,172,172,171,173,172,173,48,48,173,49,48,49,174,174,49,175,174,175,176,176,175,177,176,177,178,178,177,179,178,179,180,180,179,181,180,181,182,182,181,183,182,183,184,184,183,185,184,185,186,186,185,187,186,187,188,188,187,189,188,189,190,190,189,191,190,191,192,192,191,193,192,193,194,194,193,195,194,195,146,146,195,147,196,172,47,47,172,48,47,48,174,172,196,170,170,196,197,170,197,168,168,197,166,166,197,198,166,198,164,164,198,199,164,199,162,162,199,160,160,199,200,160,200,158,158,200,201,158,201,156,156,201,154,154,201,202,154,202,152,152,202,203,152,203,150,150,203,148,148,203,204,148,204,146,146,204,194,194,204,205,194,205,192,192,205,206,192,206,190,190,206,188,188,206,207,188,207,186,186,207,208,186,208,184,184,208,182,182,208,209,182,209,180,180,209,210,180,210,178,178,210,176,176,210,211,176,211,174,174,211,47,211,212,47,47,212,213,47,213,196,196,213,214,196,214,197,197,214,215,197,215,198,198,215,216,198,216,199,199,216,217,199,217,200,200,217,218,200,218,201,201,218,219,201,219,202,202,219,220,202,220,203,203,220,221,203,221,204,204,221,222,204,222,205,205,222,223,205,223,206,206,223,224,206,224,207,207,224,225,207,225,208,208,225,226,208,226,209,209,226,227,209,227,210,210,227,228,210,228,211,211,228,212,229,230,231,231,230,232,231,232,233,233,232,234,233,234,235,235,234,236,235,236,237,237,236,238,237,238,239,239,238,240,239,240,241,241,240,242,241,242,243,243,242,244,243,244,245,245,244,246,245,246,247,247,246,248,247,248,249,249,248,250,249,250,251,251,250,252,251,252,253,253,252,254,253,254,255,255,254,256,255,256,257,257,256,258,257,258,259,259,258,260,259,260,261,261,260,262,261,262,229,229,262,230,263,264,265,265,264,266,265,266,267,267,266,268,267,268,269,269,268,270,269,270,271,271,270,272,271,272,273,273,272,274,273,274,275,275,274,276,275,276,277,277,276,278,277,278,279,279,278,280,279,280,281,281,280,282,281,282,283,283,282,284,283,284,285,285,284,286,285,286,287,287,286,288,287,288,289,289,288,290,289,290,291,291,290,292,291,292,263,263,292,264,293,294,295,295,294,296,295,296,297,297,296,298,297,298,299,299,298,300,299,300,301,301,300,302,301,302,303,303,302,304,303,304,305,305,304,306,305,306,307,307,306,308,307,308,309,309,308,310,309,310,311,311,310,312,311,312,313,313,312,314,313,314,315,315,314,316,315,316,317,317,316,318,317,318,319,319,318,320,319,320,321,321,320,322,321,322,293,293,322,294,323,324,325,325,324,326,325,326,327,327,326,328,327,328,329,329,328,330,329,330,331,331,330,332,331,332,333,333,332,334,333,334,335,335,334,336,335,336,337,337,336,338,337,338,339,339,338,340,339,340,341,341,340,342,341,342,343,343,342,344,343,344,345,345,344,346,345,346,347,347,346,348,347,348,349,349,348,350,349,350,351,351,350,352,351,352,323,323,352,324,353,354,355,355,354,356,355,356,357,357,356,358,357,358,359,359,358,360,359,360,361,361,360,362,361,362,363,363,362,364,363,364,365,631,632,633,633,632,634,633,634,635,632,631,636,636,631,637,636,637,638,638,637,639,638,639,640,640,639,641,640,641,642,642,641,643,642,643,644,644,643,645,644,645,646,646,645,647,646,647,648,648,647,649,648,649,635,635,649,633,649,643,633,633,643,641,633,641,631,631,641,639,631,639,637,647,645,649,649,645,643,650,635,651,651,635,634,651,634,652,652,634,632,652,632,653,653,632,636,653,636,654,654,636,638,654,638,655,655,638,640,655,640,656,656,640,642,656,642,657,657,642,644,657,644,658,658,644,646,658,646,659,659,646,648,659,648,650,650,648,635,660,661,662,662,661,663,663,661,664,663,664,665,665,664,666,665,666,667,667,666,668,652,669,651,651,669,670,651,670,671,669,652,672,672,652,653,672,653,654,672,654,673,673,654,655,673,655,674,674,655,656,674,656,675,675,656,657,675,657,676,676,657,658,676,658,677,677,658,659,677,659,650,677,650,671,671,650,651,669,660,670,670,660,662,670,662,671,671,662,663,671,663,677,677,663,665,677,665,676,676,665,667,676,667,675,675,667,668,675,668,674,674,668,666,674,666,673,673,666,664,673,664,672,672,664,661,672,661,669,669,661,660,678,679,680,680,679,681,680,681,682,682,681,683,682,683,684,684,683,685,684,685,686,686,685,687,686,687,688,688,687,689,688,689,690,690,689,691,690,691,692,692,691,693,692,693,694,694,693,695,694,695,696,696,695,697,696,697,698,698,697,699,698,699,700,700,699,701,700,701,678,678,701,679,702,683,703,703,683,681,703,681,704,704,681,679,704,679,705,705,679,701,705,701,706,706,701,699,706,699,707,707,699,697,707,697,708,708,697,695,708,695,709,709,695,693,709,693,710,710,693,691,710,691,711,711,691,689,711,689,712,712,689,687,712,687,713,713,687,685,713,685,702,702,685,683,714,686,715,715,686,688,715,688,690,716,682,714,714,682,684,714,684,686,717,678,716,716,678,680,716,680,682,718,698,717,717,698,700,717,700,678,719,694,718,718,694,696,718,696,698,715,690,719,719,690,692,719,692,694,704,720,703,703,720,721,703,721,702,702,721,722,702,722,713,713,722,723,713,723,712,712,723,724,712,724,711,711,724,725,711,725,710,710,725,726,710,726,709,709,726,727,709,727,708,708,727,728,708,728,707,707,728,729,707,729,706,706,729,730,706,730,705,705,730,731,705,731,704,704,731,720,732,722,733,733,722,721,733,721,720,734,724,732,732,724,723,732,723,722,735,726,734,734,726,725,734,725,724,736,728,735,735,728,727,735,727,726,737,730,736,736,730,729,736,729,728,733,720,737,737,720,731,737,731,730,738,739,740,740,739,741,740,741,742,738,743,739,739,743,717,717,743,744,717,744,718,718,744,745,738,746,743,743,746,744,740,737,738,738,737,736,738,736,746,746,736,747,748,749,750,750,749,751,750,751,752,748,753,749,751,754,752,752,754,755,749,716,751,751,716,714,751,714,754,754,714,756,739,717,741,741,717,716,741,716,753,753,716,749,755,756,757,757,756,758,757,758,759,755,754,756,750,752,733,733,752,755,733,755,732,732,755,757,757,759,732,732,759,760,732,760,734,734,760,761,758,762,759,759,762,760,763,745,747,747,745,744,747,744,746,763,764,745,763,765,764,764,765,766,747,736,763,763,736,735,763,735,765,765,735,767,768,769,767,767,769,766,767,766,765,768,770,769,745,764,718,718,764,766,718,766,719,719,766,769,769,770,719,719,770,771,719,771,715,715,771,772,760,772,761,761,772,771,761,771,773,760,762,772,767,735,768,768,735,734,768,734,773,773,734,761,756,714,758,758,714,715,758,715,762,762,715,772,741,753,742,742,753,748,740,742,737,737,742,748,737,748,733,733,748,750,768,773,770,770,773,771,774,775,776,776,775,777,776,777,778,778,777,779,778,779,780,780,779,781,780,781,782,782,781,783,782,783,784,784,783,785,784,785,786,786,785,787,786,787,788,788,787,789,788,789,790,790,789,791,790,791,792,792,791,793,792,793,794,794,793,795,794,795,796,796,795,797,796,797,774,774,797,775,798,779,799,799,779,777,799,777,800,800,777,775,800,775,801,801,775,797,801,797,802,802,797,795,802,795,803,803,795,793,803,793,804,804,793,791,804,791,805,805,791,789,805,789,806,806,789,787,806,787,807,807,787,785,807,785,808,808,785,783,808,783,809,809,783,781,809,781,798,798,781,779,810,782,811,811,782,784,811,784,786,812,778,810,810,778,780,810,780,782,813,774,812,812,774,776,812,776,778,814,794,813,813,794,796,813,796,774,815,790,814,814,790,792,814,792,794,811,786,815,815,786,788,815,788,790,800,816,799,799,816,817,799,817,798,798,817,818,798,818,809,809,818,819,809,819,808,808,819,820,808,820,807,807,820,821,807,821,806,806,821,822,806,822,805,805,822,823,805,823,804,804,823,824,804,824,803,803,824,825,803,825,802,802,825,826,802,826,801,801,826,827,801,827,800,800,827,816,828,818,829,829,818,817,829,817,816,830,820,828,828,820,819,828,819,818,831,822,830,830,822,821,830,821,820,832,824,831,831,824,823,831,823,822,833,826,832,832,826,825,832,825,824,829,816,833,833,816,827,833,827,826,834,835,836,836,835,837,836,837,838,834,839,835,835,839,813,813,839,840,813,840,814,814,840,841,834,842,839,839,842,840,836,833,834,834,833,832,834,832,842,842,832,843,844,845,846,846,845,847,846,847,848,844,849,845,847,850,848,848,850,851,845,812,847,847,812,810,847,810,850,850,810,852,835,813,837,837,813,812,837,812,849,849,812,845,851,852,853,853,852,854,853,854,855,851,850,852,846,848,829,829,848,851,829,851,828,828,851,853,853,855,828,828,855,856,828,856,830,830,856,857,854,858,855,855,858,856,859,841,843,843,841,840,843,840,842,859,860,841,859,861,860,860,861,862,843,832,859,859,832,831,859,831,861,861,831,863,864,865,863,863,865,862,863,862,861,864,866,865,841,860,814,814,860,862,814,862,815,815,862,865,865,866,815,815,866,867,815,867,811,811,867,868,856,868,857,857,868,867,857,867,869,856,858,868,863,831,864,864,831,830,864,830,869,869,830,857,852,810,854,854,810,811,854,811,858,858,811,868,837,849,838,838,849,844,836,838,833,833,838,844,833,844,829,829,844,846,864,869,866,866,869,867,902,883,903,903,883,881,903,881,904,904,881,879,904,879,905,905,879,877,905,877,894,894,877,875,906,878,907,907,878,880,907,880,882,908,874,906,906,874,876,906,876,878,909,870,908,908,870,872,908,872,874,910,890,909,909,890,892,909,892,870,911,886,910,910,886,888,910,888,890,907,882,911,911,882,884,911,884,886,896,912,895,895,912,913,895,913,894,894,913,914,894,914,905,905,914,915,905,915,904,904,915,916,904,916,903,903,916,917,903,917,902,902,917,918,902,918,901,901,918,919,901,919,900,900,919,920,900,920,899,899,920,921,899,921,898,898,921,922,898,922,897,897,922,923,897,923,896,896,923,912,924,914,925,925,914,913,925,913,912,926,916,924,924,916,915,924,915,914,927,918,926,926,918,917,926,917,916,928,920,927,927,920,919,927,919,918,929,922,928,928,922,921,928,921,920,925,912,929,929,912,923,929,923,922,930,931,932,932,931,933,932,933,934,930,935,931,931,935,909,909,935,936,909,936,910,910,936,937,930,938,935,935,938,936,932,929,930,930,929,928,930,928,938,938,928,939,940,941,942,942,941,943,942,943,944,940,945,941,943,946,944,944,946,947,941,908,943,943,908,906,943,906,946,946,906,948,931,909,933,933,909,908,933,908,945,945,908,941,947,948,949,949,948,950,949,950,951,947,946,948,942,944,925,925,944,947,925,947,924,924,947,949,949,951,924,924,951,952,924,952,926,926,952,953,950,954,951,951,954,952,955,937,939,939,937,936,939,936,938,955,956,937,955,957,956,956,957,958,939,928,955,955,928,927,955,927,957,957,927,959,960,961,959,959,961,958,959,958,957,960,962,961,937,956,910,910,956,958,910,958,911,911,958,961,961,962,911,911,962,963,911,963,907,907,963,964,952,964,953,953,964,963,953,963,965,952,954,964,959,927,960,960,927,926,960,926,965,965,926,953,948,906,950,950,906,907,950,907,954,954,907,964,933,945,934,934,945,940,932,934,929,929,934,940,929,940,925,925,940,942,960,965,962,962,965,963,870,871,872,872,871,873,872,873,874,874,873,875,874,875,876,876,875,877,876,877,878,878,877,879,878,879,880,880,879,881,880,881,882,882,881,883,882,883,884,884,883,885,884,885,886,886,885,887,886,887,888,888,887,889,888,889,890,890,889,891,890,891,892,892,891,893,892,893,870,870,893,871,894,875,895,895,875,873,895,873,896,896,873,871,896,871,897,897,871,893,897,893,898,898,893,891,898,891,899,899,891,889,899,889,900,900,889,887,900,887,901,901,887,885,901,885,902,902,885,883,966,967,968,968,967,969,968,969,970,970,969,971,970,971,972,972,971,973,972,973,974,974,973,975,974,975,976,976,975,977,976,977,978,978,977,979,978,979,980,980,979,981,980,981,982,982,981,983,982,983,984,984,983,985,984,985,986,986,985,987,986,987,988,988,987,989,988,989,966,966,989,967,990,971,991,991,971,969,991,969,992,992,969,967,992,967,993,993,967,989,993,989,994,994,989,987,994,987,995,995,987,985,995,985,996,996,985,983,996,983,997,997,983,981,997,981,998,998,981,979,998,979,999,999,979,977,999,977,1e3,1e3,977,975,1e3,975,1001,1001,975,973,1001,973,990,990,973,971,1002,974,1003,1003,974,976,1003,976,978,1004,970,1002,1002,970,972,1002,972,974,1005,966,1004,1004,966,968,1004,968,970,1006,986,1005,1005,986,988,1005,988,966,1007,982,1006,1006,982,984,1006,984,986,1003,978,1007,1007,978,980,1007,980,982,992,1008,991,991,1008,1009,991,1009,990,990,1009,1010,990,1010,1001,1001,1010,1011,1001,1011,1e3,1e3,1011,1012,1e3,1012,999,999,1012,1013,999,1013,998,998,1013,1014,998,1014,997,997,1014,1015,997,1015,996,996,1015,1016,996,1016,995,995,1016,1017,995,1017,994,994,1017,1018,994,1018,993,993,1018,1019,993,1019,992,992,1019,1008,1020,1010,1021,1021,1010,1009,1021,1009,1008,1022,1012,1020,1020,1012,1011,1020,1011,1010,1023,1014,1022,1022,1014,1013,1022,1013,1012,1024,1016,1023,1023,1016,1015,1023,1015,1014,1025,1018,1024,1024,1018,1017,1024,1017,1016,1021,1008,1025,1025,1008,1019,1025,1019,1018,1026,1027,1028,1028,1027,1029,1028,1029,1030,1026,1031,1027,1027,1031,1005,1005,1031,1032,1005,1032,1006,1006,1032,1033,1026,1034,1031,1031,1034,1032,1028,1025,1026,1026,1025,1024,1026,1024,1034,1034,1024,1035,1036,1037,1038,1038,1037,1039,1038,1039,1040,1036,1041,1037,1039,1042,1040,1040,1042,1043,1037,1004,1039,1039,1004,1002,1039,1002,1042,1042,1002,1044,1027,1005,1029,1029,1005,1004,1029,1004,1041,1041,1004,1037,1043,1044,1045,1045,1044,1046,1045,1046,1047,1043,1042,1044,1038,1040,1021,1021,1040,1043,1021,1043,1020,1020,1043,1045,1045,1047,1020,1020,1047,1048,1020,1048,1022,1022,1048,1049,1046,1050,1047,1047,1050,1048,1051,1033,1035,1035,1033,1032,1035,1032,1034,1051,1052,1033,1051,1053,1052,1052,1053,1054,1035,1024,1051,1051,1024,1023,1051,1023,1053,1053,1023,1055,1056,1057,1055,1055,1057,1054,1055,1054,1053,1056,1058,1057,1033,1052,1006,1006,1052,1054,1006,1054,1007,1007,1054,1057,1057,1058,1007,1007,1058,1059,1007,1059,1003,1003,1059,1060,1048,1060,1049,1049,1060,1059,1049,1059,1061,1048,1050,1060,1055,1023,1056,1056,1023,1022,1056,1022,1061,1061,1022,1049,1044,1002,1046,1046,1002,1003,1046,1003,1050,1050,1003,1060,1029,1041,1030,1030,1041,1036,1028,1030,1025,1025,1030,1036,1025,1036,1021,1021,1036,1038,1056,1061,1058,1058,1061,1059,1062,1063,1064,1064,1063,1065,1064,1065,1066,1066,1065,1067,1066,1067,1068,1068,1067,1069,1068,1069,1070,1070,1069,1071,1070,1071,1072,1072,1071,1073,1072,1073,1074,1074,1073,1075,1074,1075,1076,1076,1075,1077,1076,1077,1078,1078,1077,1079,1078,1079,1062,1062,1079,1063,1066,1072,1064,1064,1072,1074,1064,1074,1062,1062,1074,1076,1062,1076,1078,1068,1070,1066,1066,1070,1072,1080,1065,1081,1081,1065,1063,1081,1063,1082,1082,1063,1079,1082,1079,1083,1083,1079,1077,1083,1077,1084,1084,1077,1075,1084,1075,1085,1085,1075,1073,1085,1073,1086,1086,1073,1071,1086,1071,1087,1087,1071,1069,1087,1069,1088,1088,1069,1067,1088,1067,1080,1080,1067,1065,1089,1090,1091,1091,1090,1092,1092,1090,1093,1092,1093,1094,1094,1093,1095,1094,1095,1096,1096,1095,1097,1082,1098,1081,1081,1098,1099,1081,1099,1100,1098,1082,1101,1101,1082,1083,1101,1083,1084,1101,1084,1102,1102,1084,1085,1102,1085,1103,1103,1085,1086,1103,1086,1104,1104,1086,1105,1105,1086,1087,1105,1087,1106,1106,1087,1088,1106,1088,1080,1106,1080,1100,1100,1080,1081,1098,1089,1099,1099,1089,1091,1099,1091,1100,1100,1091,1092,1100,1092,1106,1106,1092,1094,1106,1094,1105,1105,1094,1096,1105,1096,1104,1104,1096,1097,1104,1097,1103,1103,1097,1095,1103,1095,1102,1102,1095,1093,1102,1093,1101,1101,1093,1090,1101,1090,1098,1098,1090,1089,1107,1108,1109,1109,1108,1110,1109,1110,1111,1111,1110,1112,1111,1112,1113,1113,1112,1114,1113,1114,1115,1115,1114,1116,1115,1116,1117,1117,1116,1118,1117,1118,1119,1119,1118,1120,1119,1120,1121,1121,1120,1122,1121,1122,1123,1123,1122,1124,1123,1124,1107,1107,1124,1108,1111,1117,1109,1109,1117,1119,1109,1119,1107,1107,1119,1121,1107,1121,1123,1113,1115,1111,1111,1115,1117,1125,1110,1126,1126,1110,1108,1126,1108,1127,1127,1108,1124,1127,1124,1128,1128,1124,1122,1128,1122,1129,1129,1122,1120,1129,1120,1130,1130,1120,1118,1130,1118,1131,1131,1118,1116,1131,1116,1132,1132,1116,1114,1132,1114,1133,1133,1114,1112,1133,1112,1125,1125,1112,1110,1134,1135,1136,1136,1135,1137,1137,1135,1138,1137,1138,1139,1139,1138,1140,1139,1140,1141,1141,1140,1142,1127,1143,1126,1126,1143,1144,1126,1144,1145,1143,1127,1146,1146,1127,1128,1146,1128,1129,1146,1129,1147,1147,1129,1130,1147,1130,1148,1148,1130,1131,1148,1131,1149,1149,1131,1150,1150,1131,1132,1150,1132,1151,1151,1132,1133,1151,1133,1125,1151,1125,1145,1145,1125,1126,1143,1134,1144,1144,1134,1136,1144,1136,1145,1145,1136,1137,1145,1137,1151,1151,1137,1139,1151,1139,1150,1150,1139,1141,1150,1141,1149,1149,1141,1142,1149,1142,1148,1148,1142,1140,1148,1140,1147,1147,1140,1138,1147,1138,1146,1146,1138,1135,1146,1135,1143,1143,1135,1134]},schieber:{v:[44.903,23.66,46.086,45.005,23.76,46.06,44.999,23.66,46.41,45.099,23.76,46.41,45.005,23.76,46.76,44.749,23.76,45.804,44.648,23.66,45.864,44.399,23.76,45.71,44.313,23.66,45.816,44.049,23.76,45.804,44.006,23.66,45.957,43.792,23.76,46.06,43.823,23.66,46.241,43.699,23.76,46.41,43.823,23.66,46.579,43.792,23.76,46.76,44.006,23.66,46.864,44.049,23.76,47.016,44.313,23.66,47.004,44.399,23.76,47.11,44.648,23.66,46.956,44.749,23.76,47.016,44.903,23.66,46.735,45.005,23.96,46.76,45.099,23.96,46.41,45.005,23.96,46.06,44.749,23.96,45.804,44.399,23.96,45.71,44.049,23.96,45.804,43.792,23.96,46.06,43.699,23.96,46.41,43.792,23.96,46.76,44.049,23.96,47.016,44.399,23.96,47.11,44.749,23.96,47.016,44.799,26.435,46.41,44.705,26.435,46.153,44.705,26.435,46.667,44.468,26.435,46.804,44.468,26.435,46.016,44.199,26.435,46.757,44.199,26.435,46.064,44.023,26.435,46.547,44.023,26.435,46.273,44.799,23.96,46.41,44.705,23.96,46.153,44.468,23.96,46.016,44.199,23.96,46.064,44.023,23.96,46.273,44.023,23.96,46.547,44.199,23.96,46.757,44.468,23.96,46.804,44.705,23.96,46.667,45.599,25.539,48.721,45.599,25.268,50.256,45.599,24.96,48.51,45.599,24.652,50.256,45.599,24.382,48.721,45.599,24.181,49.86,45.599,24.074,49.254,45.599,25.847,49.254,45.599,25.74,49.86,45.199,24.96,48.51,45.199,25.539,48.721,45.199,25.847,49.254,45.199,25.74,49.86,45.199,25.268,50.256,45.199,24.652,50.256,45.199,24.181,49.86,45.199,24.074,49.254,45.199,24.382,48.721,45.199,24.96,48.51,45.199,24.382,48.721,45.199,24.639,49.027,45.199,24.96,48.91,45.199,24.074,49.254,45.199,24.382,48.721,45.199,24.639,49.027,45.199,24.468,49.323,45.199,24.96,48.51,45.199,25.539,48.721,45.199,24.96,48.91,45.199,25.282,49.027,45.199,24.96,48.51,45.199,24.382,48.721,45.199,24.639,49.027,45.199,24.96,48.91,45.199,24.96,48.51,45.199,25.539,48.721,45.199,24.96,48.91,45.199,25.282,49.027,45.199,25.539,48.721,45.199,25.847,49.254,45.199,25.282,49.027,45.199,25.453,49.323,45.199,24.181,49.86,45.199,24.074,49.254,45.199,24.468,49.323,45.199,24.527,49.66,45.199,24.074,49.254,45.199,24.382,48.721,45.199,24.639,49.027,45.199,24.468,49.323,45.199,24.652,50.256,45.199,24.181,49.86,45.199,24.527,49.66,45.199,24.789,49.88,45.199,24.181,49.86,45.199,24.074,49.254,45.199,24.468,49.323,45.199,24.527,49.66,45.199,25.268,50.256,45.199,24.652,50.256,45.199,24.789,49.88,45.199,25.131,49.88,45.199,24.652,50.256,45.199,24.181,49.86,45.199,24.527,49.66,45.199,24.789,49.88,45.199,25.74,49.86,45.199,25.268,50.256,45.199,25.131,49.88,45.199,25.393,49.66,45.199,25.268,50.256,45.199,24.652,50.256,45.199,24.789,49.88,45.199,25.131,49.88,45.199,25.847,49.254,45.199,25.74,49.86,45.199,25.393,49.66,45.199,25.453,49.323,45.199,25.74,49.86,45.199,25.268,50.256,45.199,25.131,49.88,45.199,25.393,49.66,45.199,25.539,48.721,45.199,25.847,49.254,45.199,25.282,49.027,45.199,25.453,49.323,45.199,25.847,49.254,45.199,25.74,49.86,45.199,25.393,49.66,45.199,25.453,49.323,45.199,24.639,49.027,45.199,24.96,48.91,45.199,25.282,49.027,45.199,24.468,49.323,45.199,24.527,49.66,45.199,24.789,49.88,45.199,25.131,49.88,45.199,25.393,49.66,45.199,25.453,49.323,37.199,24.96,48.91,37.199,25.282,49.027,37.199,25.453,49.323,37.199,25.393,49.66,37.199,25.131,49.88,37.199,24.789,49.88,37.199,24.527,49.66,37.199,24.468,49.323,37.199,24.639,49.027,37.199,24.96,48.21,37.199,24.189,48.491,37.199,23.778,49.202,37.199,23.921,50.01,37.199,24.55,50.538,37.199,25.371,50.538,37.199,25.999,50.01,37.199,26.142,49.202,37.199,25.732,48.491,36.999,24.96,48.21,36.999,25.732,48.491,36.999,26.142,49.202,36.999,25.999,50.01,36.999,25.371,50.538,36.999,24.55,50.538,36.999,23.921,50.01,36.999,23.778,49.202,36.999,24.189,48.491,36.999,24.639,49.027,36.999,24.96,48.91,36.999,25.282,49.027,36.999,24.468,49.323,36.999,24.527,49.66,36.999,24.789,49.88,36.999,25.131,49.88,36.999,25.393,49.66,36.999,25.453,49.323,30.599,24.96,48.91,30.599,25.282,49.027,30.599,25.453,49.323,30.599,25.393,49.66,30.599,25.131,49.88,30.599,24.789,49.88,30.599,24.527,49.66,30.599,24.468,49.323,30.599,24.639,49.027,45.199,24.96,48.51,45.199,25.539,48.721,45.199,25.847,49.254,45.199,25.74,49.86,45.199,25.268,50.256,45.199,24.652,50.256,45.199,24.181,49.86,45.199,24.074,49.254,45.199,24.382,48.721,45.199,24.639,49.027,45.199,24.96,48.91,45.199,25.282,49.027,45.199,24.468,49.323,45.199,24.527,49.66,45.199,24.789,49.88,45.199,25.131,49.88,45.199,25.393,49.66,45.199,25.453,49.323,45.399,24.96,48.51,45.399,25.539,48.721,45.399,25.847,49.254,45.399,25.74,49.86,45.399,25.268,50.256,45.399,24.652,50.256,45.399,24.181,49.86,45.399,24.074,49.254,45.399,24.382,48.721,43.399,24.96,48.91,43.399,24.639,49.027,43.399,24.468,49.323,43.399,24.527,49.66,43.399,24.789,49.88,43.399,25.131,49.88,43.399,25.393,49.66,43.399,25.453,49.323,43.399,25.282,49.027,43.59,25.21,45.822,43.999,25.21,46.41,43.399,25.21,46.41,44.092,25.21,46.667,43.399,25.21,47.91,44.329,25.21,46.804,45.399,25.21,47.91,44.599,25.21,46.757,44.775,25.21,46.547,44.092,25.21,46.153,44.09,25.21,45.459,44.329,25.21,46.016,44.708,25.21,45.459,44.599,25.21,46.064,45.208,25.21,45.822,44.775,25.21,46.273,45.399,25.21,46.41,43.399,24.71,47.91,45.399,24.71,47.91,45.208,24.71,45.822,44.775,24.71,46.273,45.399,24.71,46.41,44.775,24.71,46.547,44.599,24.71,46.757,44.329,24.71,46.804,44.708,24.71,45.459,44.599,24.71,46.064,44.329,24.71,46.016,44.09,24.71,45.459,44.092,24.71,46.153,43.59,24.71,45.822,43.999,24.71,46.41,43.399,24.71,46.41,44.092,24.71,46.667,43.399,25.21,50.91,44.092,25.21,52.153,43.399,25.21,52.41,43.999,25.21,52.41,43.59,25.21,52.998,44.092,25.21,52.667,44.09,25.21,53.361,44.329,25.21,52.804,44.708,25.21,53.361,44.599,25.21,52.757,44.775,25.21,52.547,44.329,25.21,52.016,45.399,25.21,50.91,44.599,25.21,52.064,44.775,25.21,52.273,45.399,25.21,52.41,45.208,25.21,52.998,43.399,24.71,52.41,44.092,24.71,52.153,43.399,24.71,50.91,44.329,24.71,52.016,45.399,24.71,50.91,44.599,24.71,52.064,44.775,24.71,52.273,43.999,24.71,52.41,43.59,24.71,52.998,44.092,24.71,52.667,44.09,24.71,53.361,44.329,24.71,52.804,44.708,24.71,53.361,44.599,24.71,52.757,45.208,24.71,52.998,44.775,24.71,52.547,45.399,24.71,52.41,45.399,25.96,46.41,45.208,25.96,45.822,44.708,25.96,45.459,44.09,25.96,45.459,43.59,25.96,45.822,43.399,25.96,46.41,45.399,23.96,52.41,45.208,23.96,52.998,44.708,23.96,53.361,44.09,23.96,53.361,43.59,23.96,52.998,43.399,23.96,52.41,43.399,25.96,52.41,43.59,25.96,52.998,44.09,25.96,53.361,44.708,25.96,53.361,45.208,25.96,52.998,45.399,25.96,52.41,45.399,23.96,46.41,44.092,25.96,46.667,43.999,25.96,46.41,44.092,25.96,46.153,44.329,25.96,46.016,44.599,25.96,46.064,44.775,25.96,46.273,44.775,25.96,46.547,44.599,25.96,46.757,44.329,25.96,46.804,44.092,23.96,52.153,43.999,23.96,52.41,44.092,23.96,52.667,44.329,23.96,52.804,44.599,23.96,52.757,44.775,23.96,52.547,44.775,23.96,52.273,44.599,23.96,52.064,44.329,23.96,52.016,44.092,25.96,52.153,43.999,25.96,52.41,44.092,25.96,52.667,44.329,25.96,52.804,44.599,25.96,52.757,44.775,25.96,52.547,44.775,25.96,52.273,44.599,25.96,52.064,44.329,25.96,52.016,44.092,23.96,46.667,43.999,23.96,46.41,44.092,23.96,46.153,44.329,23.96,46.016,44.599,23.96,46.064,44.775,23.96,46.273,44.775,23.96,46.547,44.599,23.96,46.757,44.329,23.96,46.804,43.399,23.96,46.41,43.59,23.96,45.822,44.09,23.96,45.459,44.708,23.96,45.459,45.208,23.96,45.822,44.903,23.66,52.086,45.005,23.76,52.06,44.999,23.66,52.41,45.099,23.76,52.41,45.005,23.76,52.76,44.749,23.76,51.804,44.648,23.66,51.864,44.399,23.76,51.71,44.313,23.66,51.816,44.049,23.76,51.804,44.006,23.66,51.957,43.792,23.76,52.06,43.823,23.66,52.241,43.699,23.76,52.41,43.823,23.66,52.579,43.792,23.76,52.76,44.006,23.66,52.864,44.049,23.76,53.016,44.313,23.66,53.004,44.399,23.76,53.11,44.648,23.66,52.956,44.749,23.76,53.016,44.903,23.66,52.735,45.005,23.96,52.76,45.099,23.96,52.41,45.005,23.96,52.06,44.749,23.96,51.804,44.399,23.96,51.71,44.049,23.96,51.804,43.792,23.96,52.06,43.699,23.96,52.41,43.792,23.96,52.76,44.049,23.96,53.016,44.399,23.96,53.11,44.749,23.96,53.016,44.799,26.435,52.41,44.705,26.435,52.153,44.705,26.435,52.667,44.468,26.435,52.804,44.468,26.435,52.016,44.199,26.435,52.757,44.199,26.435,52.064,44.023,26.435,52.547,44.023,26.435,52.273,44.799,23.96,52.41,44.705,23.96,52.153,44.468,23.96,52.016,44.199,23.96,52.064,44.023,23.96,52.273,44.023,23.96,52.547,44.199,23.96,52.757,44.468,23.96,52.804,44.705,23.96,52.667,44.035,26.055,52.2,44.052,26.075,52.21,43.979,26.055,52.41,43.999,26.075,52.41,44.035,26.055,52.62,44.052,26.075,52.61,44.189,26.055,52.774,44.199,26.075,52.757,44.399,26.055,52.83,44.399,26.075,52.81,44.609,26.055,52.774,44.599,26.075,52.757,44.762,26.055,52.62,44.745,26.075,52.61,44.819,26.055,52.41,44.799,26.075,52.41,44.762,26.055,52.2,44.745,26.075,52.21,44.609,26.055,52.047,44.599,26.075,52.064,44.399,26.055,51.99,44.399,26.075,52.01,44.189,26.055,52.047,44.199,26.075,52.064,44.052,26.335,52.61,43.999,26.335,52.41,44.052,26.335,52.21,44.199,26.335,52.064,44.399,26.335,52.01,44.599,26.335,52.064,44.745,26.335,52.21,44.799,26.335,52.41,44.745,26.335,52.61,44.599,26.335,52.757,44.399,26.335,52.81,44.199,26.335,52.757,44.078,26.055,52.966,44.72,26.055,52.966,43.756,26.055,52.41,44.078,26.055,51.854,44.72,26.055,51.854,45.041,26.055,52.41,44.035,26.355,52.2,43.979,26.355,52.41,44.035,26.355,52.62,44.189,26.355,52.774,44.399,26.355,52.83,44.609,26.355,52.774,44.762,26.355,52.62,44.819,26.355,52.41,44.762,26.355,52.2,44.609,26.355,52.047,44.399,26.355,51.99,44.189,26.355,52.047,44.078,26.355,52.966,43.756,26.355,52.41,44.72,26.355,52.966,45.041,26.355,52.41,44.72,26.355,51.854,44.078,26.355,51.854,44.106,26.305,51.804,44.056,26.092,51.817,44.056,26.319,51.817,44.02,26.105,51.854,44.02,26.305,51.854,44.106,26.105,51.804,44.691,26.105,51.804,44.741,26.092,51.817,44.691,26.305,51.804,44.741,26.319,51.817,43.728,26.305,52.36,43.714,26.092,52.41,43.714,26.319,52.41,43.728,26.105,52.46,43.728,26.305,52.46,43.728,26.105,52.36,44.02,26.105,52.966,44.02,26.305,52.966,44.056,26.092,53.003,44.056,26.319,53.003,44.106,26.105,53.016,44.106,26.305,53.016,44.691,26.305,53.016,44.741,26.319,53.003,44.691,26.105,53.016,44.778,26.305,51.854,44.778,26.105,51.854,45.07,26.305,52.36,45.07,26.105,52.36,45.083,26.319,52.41,45.07,26.305,52.46,45.083,26.092,52.41,45.07,26.105,52.46,44.778,26.105,52.966,44.741,26.092,53.003,44.778,26.305,52.966,44.035,26.055,46.2,44.052,26.075,46.21,43.979,26.055,46.41,43.999,26.075,46.41,44.035,26.055,46.62,44.052,26.075,46.61,44.189,26.055,46.774,44.199,26.075,46.757,44.399,26.055,46.83,44.399,26.075,46.81,44.609,26.055,46.774,44.599,26.075,46.757,44.762,26.055,46.62,44.745,26.075,46.61,44.819,26.055,46.41,44.799,26.075,46.41,44.762,26.055,46.2,44.745,26.075,46.21,44.609,26.055,46.047,44.599,26.075,46.064,44.399,26.055,45.99,44.399,26.075,46.01,44.189,26.055,46.047,44.199,26.075,46.064,44.052,26.335,46.61,43.999,26.335,46.41,44.052,26.335,46.21,44.199,26.335,46.064,44.399,26.335,46.01,44.599,26.335,46.064,44.745,26.335,46.21,44.799,26.335,46.41,44.745,26.335,46.61,44.599,26.335,46.757,44.399,26.335,46.81,44.199,26.335,46.757,44.078,26.055,46.966,44.72,26.055,46.966,43.756,26.055,46.41,44.078,26.055,45.854,44.72,26.055,45.854,45.041,26.055,46.41,44.035,26.355,46.2,43.979,26.355,46.41,44.035,26.355,46.62,44.189,26.355,46.774,44.399,26.355,46.83,44.609,26.355,46.774,44.762,26.355,46.62,44.819,26.355,46.41,44.762,26.355,46.2,44.609,26.355,46.047,44.399,26.355,45.99,44.189,26.355,46.047,44.078,26.355,46.966,43.756,26.355,46.41,44.72,26.355,46.966,45.041,26.355,46.41,44.72,26.355,45.854,44.078,26.355,45.854,44.106,26.305,45.804,44.056,26.092,45.817,44.056,26.319,45.817,44.02,26.105,45.854,44.02,26.305,45.854,44.106,26.105,45.804,44.691,26.105,45.804,44.741,26.092,45.817,44.691,26.305,45.804,44.741,26.319,45.817,43.728,26.305,46.36,43.714,26.092,46.41,43.714,26.319,46.41,43.728,26.105,46.46,43.728,26.305,46.46,43.728,26.105,46.36,44.02,26.105,46.966,44.02,26.305,46.966,44.056,26.092,47.003,44.056,26.319,47.003,44.106,26.105,47.016,44.106,26.305,47.016,44.691,26.305,47.016,44.741,26.319,47.003,44.691,26.105,47.016,44.778,26.305,45.854,44.778,26.105,45.854,45.07,26.305,46.36,45.07,26.105,46.36,45.083,26.319,46.41,45.07,26.305,46.46,45.083,26.092,46.41,45.07,26.105,46.46,44.778,26.105,46.966,44.741,26.092,47.003,44.778,26.305,46.966],i:[0,1,2,2,1,3,2,3,4,1,0,5,5,0,6,5,6,7,7,6,8,7,8,9,9,8,10,9,10,11,11,10,12,11,12,13,13,12,14,13,14,15,15,14,16,15,16,17,17,16,18,17,18,19,19,18,20,19,20,21,21,20,22,21,22,4,4,22,2,22,14,2,2,14,12,2,12,0,0,12,10,0,10,6,6,10,8,14,22,16,16,22,20,16,20,18,23,4,24,24,4,3,24,3,25,25,3,1,25,1,26,26,1,5,26,5,27,27,5,7,27,7,28,28,7,9,28,9,29,29,9,11,29,11,30,30,11,13,30,13,31,31,13,15,31,15,32,32,15,17,32,17,33,33,17,19,33,19,34,34,19,21,34,21,23,23,21,4,35,36,37,37,36,38,38,36,39,38,39,40,40,39,41,40,41,42,42,41,43,23,24,44,44,24,25,44,25,45,45,25,26,45,26,46,46,26,27,46,27,47,47,27,28,47,28,29,47,29,48,48,29,30,48,30,49,49,30,31,49,31,50,50,31,32,50,32,33,50,33,51,51,33,34,51,34,52,52,34,23,52,23,44,45,35,44,44,35,37,44,37,52,52,37,38,52,38,51,51,38,40,51,40,50,50,40,42,50,42,49,49,42,43,49,43,48,48,43,41,48,41,47,47,41,39,47,39,46,46,39,36,46,36,45,45,36,35,53,54,55,55,54,56,55,56,57,57,56,58,57,58,59,60,61,53,53,61,54,57,62,55,55,62,63,55,63,53,53,63,64,53,64,60,60,64,65,60,65,61,61,65,66,61,66,54,54,66,67,54,67,56,56,67,68,56,68,58,58,68,69,58,69,59,59,69,70,59,70,57,57,70,62,72,73,71,71,73,74,78,75,77,77,75,76,81,79,80,81,80,82,84,83,86,85,84,86,90,88,87,87,89,90,93,91,92,93,92,94,97,96,95,97,95,98,101,100,102,102,100,99,105,104,103,105,103,106,110,108,109,110,107,108,113,112,111,113,111,114,118,115,116,118,116,117,122,119,121,121,119,120,126,123,124,126,124,125,129,127,128,130,127,129,133,132,134,134,132,131,138,136,135,138,135,137,141,140,142,142,140,139,143,152,144,144,152,153,144,153,145,145,153,154,145,154,151,151,154,155,151,155,150,150,155,156,150,156,149,149,156,157,149,157,148,148,157,158,148,158,147,147,158,159,147,159,146,146,159,160,146,160,143,143,160,152,153,152,161,161,152,160,161,160,162,162,160,159,162,159,163,163,159,164,164,159,158,164,158,165,165,158,157,165,157,156,165,156,166,166,156,155,166,155,167,167,155,154,167,154,168,168,154,169,169,154,153,169,153,161,162,170,161,161,170,171,161,171,169,169,171,172,169,172,168,168,172,173,168,173,167,167,173,174,167,174,166,166,174,175,166,175,165,165,175,176,165,176,164,164,176,177,164,177,163,163,177,178,163,178,162,162,178,170,178,179,170,170,179,180,170,180,181,179,178,182,182,178,177,182,177,176,182,176,183,183,176,175,183,175,184,184,175,174,184,174,185,185,174,186,186,174,173,186,173,187,187,173,172,187,172,171,187,171,181,181,171,170,179,188,180,180,188,189,180,189,181,181,189,190,181,190,187,187,190,191,187,191,186,186,191,192,186,192,185,185,192,193,185,193,184,184,193,194,184,194,183,183,194,195,183,195,182,182,195,196,182,196,179,179,196,188,188,196,189,189,196,190,190,196,195,190,195,191,191,195,194,191,194,192,192,194,193,205,215,197,197,215,216,197,216,198,198,216,217,198,217,199,199,217,218,199,218,200,200,218,219,200,219,201,201,219,220,201,220,202,202,220,221,202,221,203,203,221,222,203,222,204,204,222,223,204,223,205,205,223,215,208,224,207,207,224,225,207,225,206,206,225,226,206,226,209,209,226,227,209,227,210,210,227,228,210,228,211,211,228,229,211,229,212,212,229,230,212,230,213,213,230,231,213,231,214,214,231,232,214,232,208,208,232,224,233,234,235,235,234,236,235,236,237,237,236,238,237,238,239,239,238,240,239,240,241,234,233,242,242,233,243,242,243,244,244,243,245,244,245,246,246,245,247,246,247,248,248,247,249,248,249,241,241,249,239,250,237,251,251,237,239,252,253,254,254,253,255,254,255,251,251,255,256,251,256,257,252,258,253,253,258,259,259,258,260,260,258,261,260,261,262,262,261,263,262,263,264,264,263,265,264,265,266,266,265,250,266,250,257,257,250,251,267,268,269,269,268,270,269,270,271,271,270,272,271,272,273,273,272,274,273,274,275,275,274,276,275,276,277,268,267,278,278,267,279,278,279,280,280,279,281,281,279,282,281,282,277,277,282,283,277,283,275,284,285,286,286,285,287,286,287,288,288,287,289,288,289,290,285,284,291,291,284,292,291,292,293,293,292,294,293,294,295,295,294,296,295,296,297,297,296,298,297,298,299,299,298,300,299,300,290,290,300,288,267,286,279,279,286,288,249,247,301,301,247,302,302,247,245,302,245,303,303,245,243,303,243,304,304,243,233,304,233,305,305,233,306,306,233,235,307,300,308,308,300,298,308,298,296,308,296,309,309,296,294,309,294,310,310,294,292,310,292,311,311,292,284,311,284,312,269,271,313,313,271,314,314,271,273,314,273,315,315,273,275,315,275,316,316,275,283,316,283,317,317,283,318,318,283,282,223,251,215,215,251,239,215,239,216,216,239,301,216,301,217,217,301,318,217,318,218,218,318,279,218,279,219,219,279,220,220,279,288,220,288,221,221,288,307,221,307,222,222,307,319,222,319,223,223,319,251,254,251,319,239,249,301,318,282,279,288,300,307,320,236,321,321,236,234,321,234,322,322,234,242,322,242,323,323,242,244,323,244,324,324,244,246,324,246,325,325,246,248,325,248,326,326,248,241,326,241,327,327,241,240,327,240,328,328,240,238,328,238,320,320,238,236,329,285,330,330,285,291,330,291,331,331,291,293,331,293,332,332,293,295,332,295,333,333,295,297,333,297,334,334,297,299,334,299,335,335,299,290,335,290,336,336,290,289,336,289,337,337,289,287,337,287,329,329,287,285,268,338,270,270,338,339,270,339,272,272,339,340,272,340,274,274,340,341,274,341,276,276,341,342,276,342,277,277,342,343,277,343,281,281,343,344,281,344,280,280,344,345,280,345,278,278,345,346,278,346,268,268,346,338,266,347,264,264,347,348,264,348,262,262,348,349,262,349,260,260,349,350,260,350,259,259,350,351,259,351,253,253,351,352,253,352,255,255,352,353,255,353,256,256,353,354,256,354,257,257,354,355,257,355,266,266,355,347,232,237,224,224,237,250,224,250,225,225,250,226,226,250,356,226,356,312,232,231,237,237,231,306,237,306,235,306,231,313,313,231,230,313,230,267,267,230,229,267,229,286,286,229,228,286,228,227,286,227,312,312,227,226,250,265,356,312,284,286,267,269,313,356,265,357,357,265,263,357,263,261,357,261,358,358,261,258,358,258,359,359,258,252,359,252,360,360,252,254,360,254,319,302,326,301,301,326,344,301,344,318,318,344,317,317,344,343,317,343,316,316,343,342,316,342,341,326,302,325,325,302,303,325,303,324,324,303,323,323,303,304,323,304,322,322,304,321,321,304,305,321,305,306,321,306,320,320,306,313,320,313,338,338,313,339,339,313,314,339,314,315,316,341,315,315,341,340,315,340,339,344,326,345,345,326,327,345,327,346,346,327,328,346,328,338,338,328,320,357,348,356,356,348,347,356,347,329,329,347,337,337,347,355,337,355,336,336,355,354,336,354,335,335,354,353,335,353,307,307,353,319,319,353,360,360,353,352,360,352,359,359,352,351,359,351,350,357,358,348,348,358,349,349,358,350,350,358,359,307,308,335,335,308,334,334,308,309,334,309,333,333,309,332,332,309,310,332,310,331,331,310,330,330,310,311,330,311,312,330,312,329,329,312,356,361,362,363,363,362,364,363,364,365,362,361,366,366,361,367,366,367,368,368,367,369,368,369,370,370,369,371,370,371,372,372,371,373,372,373,374,374,373,375,374,375,376,376,375,377,376,377,378,378,377,379,378,379,380,380,379,381,380,381,382,382,381,383,382,383,365,365,383,363,383,375,363,363,375,373,363,373,361,361,373,371,361,371,367,367,371,369,375,383,377,377,383,381,377,381,379,384,365,385,385,365,364,385,364,386,386,364,362,386,362,387,387,362,366,387,366,388,388,366,368,388,368,389,389,368,370,389,370,390,390,370,372,390,372,391,391,372,374,391,374,392,392,374,376,392,376,393,393,376,378,393,378,394,394,378,380,394,380,395,395,380,382,395,382,384,384,382,365,396,397,398,398,397,399,399,397,400,399,400,401,401,400,402,401,402,403,403,402,404,384,385,405,405,385,386,405,386,406,406,386,387,406,387,407,407,387,388,407,388,408,408,388,389,408,389,390,408,390,409,409,390,391,409,391,410,410,391,392,410,392,411,411,392,393,411,393,394,411,394,412,412,394,395,412,395,413,413,395,384,413,384,405,406,396,405,405,396,398,405,398,413,413,398,399,413,399,412,412,399,401,412,401,411,411,401,403,411,403,410,410,403,404,410,404,409,409,404,402,409,402,408,408,402,400,408,400,407,407,400,397,407,397,406,406,397,396,472,465,464,469,456,473,473,456,467,473,467,466,474,475,476,476,475,477,476,477,478,474,479,475,475,479,453,453,479,480,453,480,454,454,480,481,474,482,479,479,482,480,476,473,474,474,473,472,474,472,482,482,472,483,484,485,486,486,485,487,486,487,488,484,489,485,487,490,488,488,490,491,485,452,487,487,452,450,487,450,490,490,450,492,475,453,477,477,453,452,477,452,489,489,452,485,491,492,493,493,492,494,493,494,495,491,490,492,486,488,469,469,488,491,469,491,468,468,491,493,493,495,468,468,495,496,468,496,470,470,496,497,494,498,495,495,498,496,499,481,483,483,481,480,483,480,482,499,500,481,499,501,500,500,501,502,483,472,499,499,472,471,499,471,501,501,471,503,504,505,503,503,505,502,503,502,501,504,506,505,481,500,454,454,500,502,454,502,455,455,502,505,505,506,455,455,506,507,455,507,451,451,507,508,496,508,497,497,508,507,497,507,509,496,498,508,503,471,504,504,471,470,504,470,509,509,470,497,492,450,494,494,450,451,494,451,498,498,451,508,477,489,478,478,489,484,476,478,473,473,478,484,473,484,469,469,484,486,504,509,506,506,509,507,414,415,416,416,415,417,416,417,418,418,417,419,418,419,420,420,419,421,420,421,422,422,421,423,422,423,424,424,423,425,424,425,426,426,425,427,426,427,428,428,427,429,428,429,430,430,429,431,430,431,432,432,431,433,432,433,434,434,433,435,434,435,436,436,435,437,436,437,414,414,437,415,438,419,439,439,419,417,439,417,440,440,417,415,440,415,441,441,415,437,441,437,442,442,437,435,442,435,443,443,435,433,443,433,444,444,433,431,444,431,445,445,431,429,445,429,446,446,429,427,446,427,447,447,427,425,447,425,448,448,425,423,448,423,449,449,423,421,449,421,438,438,421,419,450,422,451,451,422,424,451,424,426,452,418,450,450,418,420,450,420,422,453,414,452,452,414,416,452,416,418,454,434,453,453,434,436,453,436,414,455,430,454,454,430,432,454,432,434,451,426,455,455,426,428,455,428,430,440,456,439,439,456,457,439,457,438,438,457,458,438,458,449,449,458,459,449,459,448,448,459,460,448,460,447,447,460,461,447,461,446,446,461,462,446,462,445,445,462,463,445,463,444,444,463,464,444,464,443,443,464,465,443,465,442,442,465,466,442,466,441,441,466,467,441,467,440,440,467,456,468,458,469,469,458,457,469,457,456,470,460,468,468,460,459,468,459,458,471,462,470,470,462,461,470,461,460,472,464,471,471,464,463,471,463,462,473,466,472,472,466,465,601,602,551,551,602,603,551,603,547,547,603,604,592,604,593,593,604,603,593,603,605,592,594,604,599,567,600,600,567,566,600,566,605,605,566,593,588,546,590,590,546,547,590,547,594,594,547,604,573,585,574,574,585,580,572,574,569,569,574,580,569,580,565,565,580,582,600,605,602,602,605,603,510,511,512,512,511,513,512,513,514,514,513,515,514,515,516,516,515,517,516,517,518,518,517,519,518,519,520,520,519,521,520,521,522,522,521,523,522,523,524,524,523,525,524,525,526,526,525,527,526,527,528,528,527,529,528,529,530,530,529,531,530,531,532,532,531,533,532,533,510,510,533,511,534,515,535,535,515,513,535,513,536,536,513,511,536,511,537,537,511,533,537,533,538,538,533,531,538,531,539,539,531,529,539,529,540,540,529,527,540,527,541,541,527,525,541,525,542,542,525,523,542,523,543,543,523,521,543,521,544,544,521,519,544,519,545,545,519,517,545,517,534,534,517,515,546,518,547,547,518,520,547,520,522,548,514,546,546,514,516,546,516,518,549,510,548,548,510,512,548,512,514,550,530,549,549,530,532,549,532,510,551,526,550,550,526,528,550,528,530,547,522,551,551,522,524,551,524,526,536,552,535,535,552,553,535,553,534,534,553,554,534,554,545,545,554,555,545,555,544,544,555,556,544,556,543,543,556,557,543,557,542,542,557,558,542,558,541,541,558,559,541,559,540,540,559,560,540,560,539,539,560,561,539,561,538,538,561,562,538,562,537,537,562,563,537,563,536,536,563,552,564,554,565,565,554,553,565,553,552,566,556,564,564,556,555,564,555,554,567,558,566,566,558,557,566,557,556,568,560,567,567,560,559,567,559,558,569,562,568,568,562,561,568,561,560,565,552,569,569,552,563,569,563,562,570,571,572,572,571,573,572,573,574,570,575,571,571,575,549,549,575,576,549,576,550,550,576,577,570,578,575,575,578,576,572,569,570,570,569,568,570,568,578,578,568,579,580,581,582,582,581,583,582,583,584,580,585,581,583,586,584,584,586,587,581,548,583,583,548,546,583,546,586,586,546,588,571,549,573,573,549,548,573,548,585,585,548,581,587,588,589,589,588,590,589,590,591,587,586,588,582,584,565,565,584,587,565,587,564,564,587,589,589,591,564,564,591,592,564,592,566,566,592,593,590,594,591,591,594,592,595,577,579,579,577,576,579,576,578,595,596,577,595,597,596,596,597,598,579,568,595,595,568,567,595,567,597,597,567,599,600,601,599,599,601,598,599,598,597,600,602,601,577,596,550,550,596,598,550,598,551,551,598,601]},kurbel_a:{v:[46.106,26.21,42.884,45.948,26.21,43.161,46.106,23.71,42.884,45.948,23.71,43.161,45.91,23.71,43.478,45.91,26.21,43.478,45.999,26.21,43.784,45.999,23.71,43.784,47.101,23.71,45.886,46.305,24.71,44.367,46.305,25.21,44.367,47.101,26.21,45.886,47.101,25.21,45.886,47.101,24.71,45.886,48.765,26.21,38.443,48.882,23.71,38.517,48.967,26.21,38.627,49.009,23.71,38.76,49.004,26.21,38.899,48.951,23.71,39.027,48.858,26.21,39.13,48.735,23.71,39.194,48.597,26.21,39.213,48.461,23.71,39.183,48.344,26.21,39.109,48.259,23.71,38.999,48.217,26.21,38.867,48.222,23.71,38.728,48.275,26.21,38.599,48.369,23.71,38.497,48.492,26.21,38.432,48.629,23.71,38.413,44.932,26.21,42.813,45.049,23.71,42.887,45.134,26.21,42.997,45.176,23.71,43.129,45.171,26.21,43.268,45.118,23.71,43.396,45.025,26.21,43.499,44.902,23.71,43.564,44.764,26.21,43.582,44.628,23.71,43.553,44.511,26.21,43.478,44.426,23.71,43.368,44.384,26.21,43.236,44.389,23.71,43.097,44.442,26.21,42.969,44.536,23.71,42.866,44.659,26.21,42.801,44.796,23.71,42.783,46.545,26.21,45.887,46.545,25.21,45.887,46.747,26.21,46.071,46.747,25.21,46.071,46.784,26.21,46.343,46.784,25.21,46.343,46.637,26.21,46.574,46.637,25.21,46.574,46.377,26.21,46.657,46.377,25.21,46.657,46.124,26.21,46.553,46.124,25.21,46.553,45.996,26.21,46.311,45.996,25.21,46.311,46.055,26.21,46.043,46.055,25.21,46.043,46.271,26.21,45.876,46.271,25.21,45.876,46.545,24.71,45.887,46.662,23.71,45.962,46.747,24.71,46.071,46.789,23.71,46.204,46.784,24.71,46.343,46.731,23.71,46.471,46.637,24.71,46.574,46.514,23.71,46.638,46.377,24.71,46.657,46.241,23.71,46.627,46.124,24.71,46.553,46.039,23.71,46.443,45.996,24.71,46.311,46.002,23.71,46.172,46.055,24.71,46.043,46.148,23.71,45.941,46.271,24.71,45.876,46.409,23.71,45.858,44.888,24.71,45.11,44.888,25.21,45.11,47.184,24.71,46.373,45.684,24.71,46.629,46.038,24.71,46.974,46.527,24.71,47.046,46.965,24.71,46.816,47.184,25.21,46.373,46.965,25.21,46.816,46.527,25.21,47.046,46.038,25.21,46.974,45.684,25.21,46.629,45.684,23.71,46.629,44.072,23.71,43.554,44.072,26.21,43.554,45.684,26.21,46.629,47.184,23.71,46.373,46.965,23.71,46.816,46.527,23.71,47.046,46.038,23.71,46.974,46.038,26.21,46.974,46.527,26.21,47.046,46.965,26.21,46.816,47.184,26.21,46.373,49.214,23.71,39.341,49.214,26.21,39.341,48.012,26.21,38.286,48.437,26.21,38.033,48.012,23.71,38.286,48.437,23.71,38.033,48.929,26.21,38.078,48.929,23.71,38.078,49.301,26.21,38.404,49.301,23.71,38.404,49.41,26.21,38.886,49.41,23.71,38.886,44.179,26.21,42.655,44.179,23.71,42.655,43.983,26.21,43.248,43.983,23.71,43.248,44.02,23.71,42.932,44.02,26.21,42.932,46.95,23.41,46.034,47.054,23.51,46.029,46.982,23.41,46.371,47.08,23.51,46.39,46.922,23.51,46.716,46.851,23.51,45.728,46.741,23.41,45.769,46.526,23.51,45.57,46.422,23.41,45.658,46.164,23.51,45.596,46.093,23.41,45.738,45.864,23.51,45.799,45.86,23.41,45.982,45.706,23.51,46.125,45.796,23.41,46.314,45.731,23.51,46.486,45.921,23.41,46.628,45.934,23.51,46.786,46.196,23.41,46.824,46.26,23.51,46.945,46.534,23.41,46.84,46.622,23.51,46.919,46.827,23.41,46.671,46.922,23.71,46.716,47.08,23.71,46.39,47.054,23.71,46.029,46.851,23.71,45.728,46.526,23.71,45.57,46.164,23.71,45.596,45.864,23.71,45.799,45.706,23.71,46.125,45.731,23.71,46.486,45.934,23.71,46.786,46.26,23.71,46.945,46.622,23.71,46.919,46.786,26.185,46.333,46.742,26.185,46.063,46.645,26.185,46.568,46.386,26.185,46.657,46.536,26.185,45.884,46.131,26.185,46.559,46.262,26.185,45.879,45.998,26.185,46.32,46.05,26.185,46.052,46.786,23.71,46.333,46.742,23.71,46.063,46.536,23.71,45.884,46.262,23.71,45.879,46.05,23.71,46.052,45.998,23.71,46.32,46.131,23.71,46.559,46.386,23.71,46.657,46.645,23.71,46.568],i:[56,107,108,56,108,54,54,108,109,54,109,52,52,109,11,52,11,50,50,11,6,50,6,66,66,6,64,101,40,100,100,40,42,100,42,44,0,1,2,2,1,3,3,1,4,4,1,5,4,5,6,6,7,4,8,7,9,9,7,6,9,6,10,10,6,11,10,11,12,9,13,8,14,15,16,16,15,17,16,17,18,18,17,19,18,19,20,20,19,21,20,21,22,22,21,23,22,23,24,24,23,25,24,25,26,26,25,27,26,27,28,28,27,29,28,29,30,30,29,31,30,31,14,14,31,15,32,33,34,34,33,35,34,35,36,36,35,37,36,37,38,38,37,39,38,39,40,40,39,41,40,41,42,42,41,43,42,43,44,44,43,45,44,45,46,46,45,47,46,47,48,48,47,49,48,49,32,32,49,33,50,51,52,52,51,53,52,53,54,54,53,55,54,55,56,56,55,57,56,57,58,58,57,59,58,59,60,60,59,61,60,61,62,62,61,63,62,63,64,64,63,65,64,65,66,66,65,67,66,67,50,50,67,51,68,69,70,70,69,71,70,71,72,72,71,73,72,73,74,74,73,75,74,75,76,76,75,77,76,77,78,78,77,79,78,79,80,80,79,81,80,81,82,82,81,83,82,83,84,84,83,85,84,85,68,68,85,69,9,10,86,86,10,87,72,88,70,70,88,13,70,13,68,68,13,9,68,9,84,84,9,86,84,86,82,82,86,80,80,86,89,80,89,78,78,89,90,78,90,76,76,90,91,76,91,74,74,91,92,74,92,72,72,92,88,51,12,53,53,12,93,53,93,55,55,93,94,55,94,57,57,94,95,57,95,59,59,95,96,59,96,61,61,96,97,61,97,63,63,97,87,63,87,65,65,87,67,67,87,10,67,10,51,51,10,12,89,86,98,98,86,99,99,86,100,100,86,87,100,87,101,101,87,97,13,88,8,8,88,102,102,88,92,102,92,103,103,92,91,103,91,104,104,91,90,104,90,105,105,90,98,98,90,89,101,97,106,106,97,96,106,96,95,106,95,107,107,95,94,107,94,108,108,94,93,108,93,109,109,93,12,109,12,11,2,110,0,0,110,111,112,113,114,114,113,115,115,113,116,115,116,117,117,116,118,117,118,119,119,118,120,119,120,121,121,120,110,110,120,111,122,112,123,123,112,114,100,124,99,99,124,125,125,124,126,126,124,127,126,127,122,122,123,126,23,2,25,25,2,49,25,49,114,114,49,123,123,49,47,123,47,45,2,23,110,110,23,21,110,21,19,110,19,121,121,19,17,121,17,119,119,17,15,119,15,117,117,15,31,117,31,115,115,31,29,115,29,114,114,29,27,114,27,25,41,99,43,43,99,125,43,125,45,45,125,126,45,126,123,39,83,41,41,83,81,41,81,99,99,81,98,98,81,79,98,79,105,105,79,77,105,77,104,104,77,75,104,75,103,103,75,73,103,73,102,102,73,71,102,71,8,8,71,69,8,69,85,83,39,7,7,39,37,7,37,4,4,37,35,4,35,3,3,35,2,2,35,33,2,33,49,8,85,7,7,85,83,18,120,16,16,120,118,16,118,14,14,118,116,14,116,113,120,18,111,111,18,20,111,20,22,111,22,0,0,22,24,0,24,26,28,112,26,26,112,122,26,122,32,32,122,48,48,122,46,46,122,127,46,127,44,44,127,124,44,124,100,28,30,112,112,30,113,113,30,14,36,1,34,34,1,0,34,0,32,32,0,26,1,36,5,5,36,38,5,38,6,6,38,40,6,40,64,64,40,101,64,101,62,62,101,60,60,101,106,60,106,58,58,106,107,58,107,56,128,129,130,130,129,131,130,131,132,129,128,133,133,128,134,133,134,135,135,134,136,135,136,137,137,136,138,137,138,139,139,138,140,139,140,141,141,140,142,141,142,143,143,142,144,143,144,145,145,144,146,145,146,147,147,146,148,147,148,149,149,148,150,149,150,132,132,150,130,150,142,130,130,142,140,130,140,128,128,140,138,128,138,134,134,138,136,142,150,144,144,150,148,144,148,146,151,132,152,152,132,131,152,131,153,153,131,129,153,129,154,154,129,133,154,133,155,155,133,135,155,135,156,156,135,137,156,137,157,157,137,139,157,139,158,158,139,141,158,141,159,159,141,143,159,143,160,160,143,145,160,145,161,161,145,147,161,147,162,162,147,149,162,149,151,151,149,132,163,164,165,165,164,166,166,164,167,166,167,168,168,167,169,168,169,170,170,169,171,151,152,172,172,152,153,172,153,173,173,153,154,173,154,174,174,154,155,174,155,175,175,155,156,175,156,157,175,157,176,176,157,158,176,158,177,177,158,159,177,159,178,178,159,160,178,160,161,178,161,179,179,161,162,179,162,180,180,162,151,180,151,172,173,163,172,172,163,165,172,165,180,180,165,166,180,166,179,179,166,168,179,168,178,178,168,170,178,170,177,177,170,171,177,171,176,176,171,169,176,169,175,175,169,167,175,167,174,174,167,164,174,164,173,173,164,163]},kurbel_b:{v:[46.106,23.71,55.952,45.948,23.71,55.675,46.106,26.21,55.952,45.948,26.21,55.675,45.91,26.21,55.359,45.91,23.71,55.359,45.998,23.71,55.053,45.998,26.21,55.053,47.1,26.21,52.95,46.304,25.21,54.469,46.304,24.71,54.469,47.1,23.71,52.95,47.1,24.71,52.95,47.1,25.21,52.95,48.767,23.71,60.392,48.884,26.21,60.318,48.969,23.71,60.208,49.011,26.21,60.075,49.006,23.71,59.937,48.953,26.21,59.808,48.859,23.71,59.705,48.736,26.21,59.641,48.598,23.71,59.622,48.463,26.21,59.652,48.345,23.71,59.726,48.261,26.21,59.836,48.218,23.71,59.969,48.224,26.21,60.108,48.277,23.71,60.236,48.37,26.21,60.339,48.494,23.71,60.403,48.631,26.21,60.422,44.932,23.71,56.024,45.05,26.21,55.95,45.134,23.71,55.84,45.176,26.21,55.707,45.171,23.71,55.569,45.118,26.21,55.44,45.024,23.71,55.337,44.901,26.21,55.273,44.764,23.71,55.255,44.628,26.21,55.284,44.511,23.71,55.359,44.426,26.21,55.469,44.384,23.71,55.601,44.389,26.21,55.74,44.442,23.71,55.868,44.536,26.21,55.971,44.659,23.71,56.035,44.796,26.21,56.054,46.544,23.71,52.949,46.544,24.71,52.949,46.746,23.71,52.764,46.746,24.71,52.764,46.782,23.71,52.493,46.782,24.71,52.493,46.636,23.71,52.262,46.636,24.71,52.262,46.375,23.71,52.179,46.375,24.71,52.179,46.122,23.71,52.283,46.122,24.71,52.283,45.995,23.71,52.526,45.995,24.71,52.526,46.054,23.71,52.793,46.054,24.71,52.793,46.27,23.71,52.96,46.27,24.71,52.96,46.544,25.21,52.949,46.661,26.21,52.874,46.746,25.21,52.764,46.788,26.21,52.632,46.782,25.21,52.493,46.729,26.21,52.365,46.636,25.21,52.262,46.513,26.21,52.198,46.375,25.21,52.179,46.239,26.21,52.209,46.122,25.21,52.283,46.037,26.21,52.393,45.995,25.21,52.526,46.001,26.21,52.664,46.054,25.21,52.793,46.147,26.21,52.895,46.27,25.21,52.96,46.408,26.21,52.978,44.887,25.21,53.727,44.887,24.71,53.727,47.183,25.21,52.463,45.683,25.21,52.207,46.037,25.21,51.862,46.526,25.21,51.79,46.964,25.21,52.02,47.183,24.71,52.463,46.964,24.71,52.02,46.526,24.71,51.79,46.037,24.71,51.862,45.683,24.71,52.207,45.683,26.21,52.207,44.071,26.21,55.283,44.071,23.71,55.283,45.683,23.71,52.207,47.183,26.21,52.463,46.964,26.21,52.02,46.526,26.21,51.79,46.037,26.21,51.862,46.037,23.71,51.862,46.526,23.71,51.79,46.964,23.71,52.02,47.183,23.71,52.463,49.216,26.21,59.494,49.216,23.71,59.494,48.014,23.71,60.55,48.439,23.71,60.802,48.014,26.21,60.55,48.439,26.21,60.802,48.931,23.71,60.757,48.931,26.21,60.757,49.303,23.71,60.431,49.303,26.21,60.431,49.411,23.71,59.948,49.411,26.21,59.948,44.179,23.71,56.182,44.179,26.21,56.182,43.983,23.71,55.589,43.983,26.21,55.589,44.021,26.21,55.905,44.021,23.71,55.905,46.826,23.41,52.165,46.921,23.51,52.121,46.981,23.41,52.465,47.079,23.51,52.447,47.053,23.51,52.808,46.621,23.51,51.917,46.533,23.41,51.996,46.259,23.51,51.891,46.195,23.41,52.012,45.933,23.51,52.05,45.92,23.41,52.208,45.73,23.51,52.35,45.794,23.41,52.522,45.704,23.51,52.711,45.858,23.41,52.854,45.862,23.51,53.037,46.091,23.41,53.098,46.162,23.51,53.24,46.42,23.41,53.178,46.524,23.51,53.266,46.739,23.41,53.068,46.85,23.51,53.108,46.949,23.41,52.802,47.053,23.71,52.808,47.079,23.71,52.447,46.921,23.71,52.121,46.621,23.71,51.917,46.259,23.71,51.891,45.933,23.71,52.05,45.73,23.71,52.35,45.704,23.71,52.711,45.862,23.71,53.037,46.162,23.71,53.24,46.524,23.71,53.266,46.85,23.71,53.108,46.784,26.185,52.503,46.644,26.185,52.268,46.741,26.185,52.773,46.534,26.185,52.953,46.385,26.185,52.179,46.261,26.185,52.957,46.13,26.185,52.276,46.048,26.185,52.784,45.997,26.185,52.515,46.784,23.71,52.503,46.644,23.71,52.268,46.385,23.71,52.179,46.13,23.71,52.276,45.997,23.71,52.515,46.048,23.71,52.784,46.261,23.71,52.957,46.534,23.71,52.953,46.741,23.71,52.773],i:[44,124,100,28,30,112,112,30,113,113,30,14,36,1,34,34,1,0,34,0,32,32,0,26,1,36,5,5,36,38,5,38,6,6,38,40,6,40,64,64,40,101,64,101,62,62,101,60,60,101,106,60,106,58,58,106,107,58,107,56,56,107,108,56,108,54,54,108,109,54,109,52,52,109,11,52,11,50,50,11,6,50,6,66,66,6,64,101,40,100,100,40,42,100,42,44,0,1,2,2,1,3,3,1,4,4,1,5,4,5,6,6,7,4,8,7,9,9,7,6,9,6,10,10,6,11,10,11,12,9,13,8,14,15,16,16,15,17,16,17,18,18,17,19,18,19,20,20,19,21,20,21,22,22,21,23,22,23,24,24,23,25,24,25,26,26,25,27,26,27,28,28,27,29,28,29,30,30,29,31,30,31,14,14,31,15,32,33,34,34,33,35,34,35,36,36,35,37,36,37,38,38,37,39,38,39,40,40,39,41,40,41,42,42,41,43,42,43,44,44,43,45,44,45,46,46,45,47,46,47,48,48,47,49,48,49,32,32,49,33,50,51,52,52,51,53,52,53,54,54,53,55,54,55,56,56,55,57,56,57,58,58,57,59,58,59,60,60,59,61,60,61,62,62,61,63,62,63,64,64,63,65,64,65,66,66,65,67,66,67,50,50,67,51,68,69,70,70,69,71,70,71,72,72,71,73,72,73,74,74,73,75,74,75,76,76,75,77,76,77,78,78,77,79,78,79,80,80,79,81,80,81,82,82,81,83,82,83,84,84,83,85,84,85,68,68,85,69,9,10,86,86,10,87,72,88,70,70,88,13,70,13,68,68,13,9,68,9,84,84,9,86,84,86,82,82,86,80,80,86,89,80,89,78,78,89,90,78,90,76,76,90,91,76,91,74,74,91,92,74,92,72,72,92,88,51,12,53,53,12,93,53,93,55,55,93,94,55,94,57,57,94,95,57,95,59,59,95,96,59,96,61,61,96,97,61,97,63,63,97,87,63,87,65,65,87,67,67,87,10,67,10,51,51,10,12,89,86,98,98,86,99,99,86,100,100,86,87,100,87,101,101,87,97,13,88,8,8,88,102,102,88,92,102,92,103,103,92,91,103,91,104,104,91,90,104,90,105,105,90,98,98,90,89,101,97,106,106,97,96,106,96,95,106,95,107,107,95,94,107,94,108,108,94,93,108,93,109,109,93,12,109,12,11,2,110,0,0,110,111,112,113,114,114,113,115,115,113,116,115,116,117,117,116,118,117,118,119,119,118,120,119,120,121,121,120,110,110,120,111,122,112,123,123,112,114,100,124,99,99,124,125,125,124,126,126,124,127,126,127,122,122,123,126,23,2,25,25,2,49,25,49,114,114,49,123,123,49,47,123,47,45,2,23,110,110,23,21,110,21,19,110,19,121,121,19,17,121,17,119,119,17,15,119,15,117,117,15,31,117,31,115,115,31,29,115,29,114,114,29,27,114,27,25,41,99,43,43,99,125,43,125,45,45,125,126,45,126,123,39,83,41,41,83,81,41,81,99,99,81,98,98,81,79,98,79,105,105,79,77,105,77,104,104,77,75,104,75,103,103,75,73,103,73,102,102,73,71,102,71,8,8,71,69,8,69,85,83,39,7,7,39,37,7,37,4,4,37,35,4,35,3,3,35,2,2,35,33,2,33,49,8,85,7,7,85,83,18,120,16,16,120,118,16,118,14,14,118,116,14,116,113,120,18,111,111,18,20,111,20,22,111,22,0,0,22,24,0,24,26,28,112,26,26,112,122,26,122,32,32,122,48,48,122,46,46,122,127,46,127,44,44,127,124,128,129,130,130,129,131,130,131,132,129,128,133,133,128,134,133,134,135,135,134,136,135,136,137,137,136,138,137,138,139,139,138,140,139,140,141,141,140,142,141,142,143,143,142,144,143,144,145,145,144,146,145,146,147,147,146,148,147,148,149,149,148,150,149,150,132,132,150,130,150,142,130,130,142,140,130,140,128,128,140,138,128,138,134,134,138,136,142,150,144,144,150,148,144,148,146,151,132,152,152,132,131,152,131,153,153,131,129,153,129,154,154,129,133,154,133,155,155,133,135,155,135,156,156,135,137,156,137,157,157,137,139,157,139,158,158,139,141,158,141,159,159,141,143,159,143,160,160,143,145,160,145,161,161,145,147,161,147,162,162,147,149,162,149,151,151,149,132,163,164,165,165,164,166,166,164,167,166,167,168,168,167,169,168,169,170,170,169,171,151,152,172,172,152,153,172,153,173,173,153,154,173,154,174,174,154,155,174,155,175,175,155,156,175,156,157,175,157,176,176,157,158,176,158,177,177,158,159,177,159,178,178,159,160,178,160,161,178,161,179,179,161,162,179,162,180,180,162,151,180,151,172,173,163,172,172,163,165,172,165,180,180,165,166,180,166,179,179,166,168,179,168,178,178,168,170,178,170,177,177,170,171,177,171,176,176,171,169,176,169,175,175,169,167,175,167,174,174,167,164,174,164,173,173,164,163]},lenker_a:{v:[46.107,22.46,45.195,46.107,22.96,45.195,46.249,22.46,45.428,46.249,22.96,45.428,46.509,22.46,45.515,46.509,22.96,45.515,46.763,22.46,45.415,46.763,22.96,45.415,46.894,22.46,45.175,46.894,22.96,45.175,46.84,22.46,44.907,46.84,22.96,44.907,46.626,22.46,44.736,46.626,22.96,44.736,46.352,22.46,44.743,46.352,22.96,44.743,46.147,22.46,44.924,46.147,22.96,44.924,49.222,22.46,41.284,49.222,22.96,41.284,49.365,22.46,41.518,49.365,22.96,41.518,49.625,22.46,41.605,49.625,22.96,41.605,49.879,22.46,41.505,49.879,22.96,41.505,50.01,22.46,41.264,50.01,22.96,41.264,49.956,22.46,40.996,49.956,22.96,40.996,49.742,22.46,40.826,49.742,22.96,40.826,49.468,22.46,40.832,49.468,22.96,40.832,49.263,22.46,41.014,49.263,22.96,41.014,45.912,22.96,44.648,49.028,22.96,40.737,45.912,22.46,44.648,49.028,22.46,40.737,47.085,22.96,45.583,46.699,22.96,45.838,47.085,22.46,45.583,46.699,22.46,45.838,46.235,22.96,45.818,46.235,22.46,45.818,45.873,22.96,45.529,45.873,22.46,45.529,45.749,22.96,45.082,45.749,22.46,45.082,50.201,22.96,41.672,50.201,22.46,41.672,49.415,22.96,40.482,49.415,22.46,40.482,49.878,22.96,40.502,49.878,22.46,40.502,50.24,22.96,40.791,50.24,22.46,40.791,50.364,22.96,41.238,50.364,22.46,41.238],i:[0,1,2,2,1,3,2,3,4,4,3,5,4,5,6,6,5,7,6,7,8,8,7,9,8,9,10,10,9,11,10,11,12,12,11,13,12,13,14,14,13,15,14,15,16,16,15,17,16,17,0,0,17,1,18,19,20,20,19,21,20,21,22,22,21,23,22,23,24,24,23,25,24,25,26,26,25,27,26,27,28,28,27,29,28,29,30,30,29,31,30,31,32,32,31,33,32,33,34,34,33,35,34,35,18,18,35,19,36,37,38,38,37,39,40,41,42,42,41,43,43,41,44,43,44,45,45,44,46,45,46,47,47,46,48,47,48,49,49,48,38,38,48,36,50,40,51,51,40,42,37,52,39,39,52,53,53,52,54,53,54,55,55,54,56,55,56,57,57,56,58,57,58,59,59,58,51,51,58,50,53,34,39,39,34,14,39,14,38,38,14,16,38,16,49,49,16,47,47,16,0,47,0,2,34,53,32,32,53,55,32,55,30,30,55,57,30,57,28,28,57,26,26,57,59,26,59,24,24,59,51,24,51,8,8,51,42,8,42,6,6,42,43,6,43,45,47,2,45,45,2,4,45,4,6,22,10,20,20,10,12,20,12,18,18,12,14,18,14,34,10,22,8,8,22,24,58,25,50,50,25,9,50,9,40,40,9,7,40,7,41,41,7,44,44,7,5,44,5,3,25,58,27,27,58,56,27,56,29,29,56,54,29,54,31,31,54,33,33,54,52,33,52,35,35,52,37,35,37,15,15,37,36,15,36,17,17,36,48,17,48,46,44,3,46,46,3,1,46,1,17,19,13,21,21,13,11,21,11,23,23,11,9,23,9,25,13,19,15,15,19,35]},lenker_b:{v:[46.107,22.96,53.625,46.107,22.46,53.625,46.25,22.96,53.392,46.25,22.46,53.392,46.51,22.96,53.305,46.51,22.46,53.305,46.764,22.96,53.406,46.764,22.46,53.406,46.894,22.96,53.647,46.894,22.46,53.647,46.839,22.96,53.915,46.839,22.46,53.915,46.625,22.96,54.085,46.625,22.46,54.085,46.351,22.96,54.077,46.351,22.46,54.077,46.147,22.96,53.895,46.147,22.46,53.895,49.211,22.96,57.544,49.211,22.46,57.544,49.355,22.96,57.311,49.355,22.46,57.311,49.614,22.96,57.225,49.614,22.46,57.225,49.869,22.96,57.326,49.869,22.46,57.326,49.999,22.96,57.567,49.999,22.46,57.567,49.944,22.96,57.835,49.944,22.46,57.835,49.729,22.96,58.005,49.729,22.46,58.005,49.456,22.96,57.997,49.456,22.46,57.997,49.251,22.96,57.815,49.251,22.46,57.815,45.911,22.46,54.171,49.015,22.46,58.091,45.911,22.96,54.171,49.015,22.96,58.091,47.087,22.46,53.24,46.701,22.46,52.983,47.087,22.96,53.24,46.701,22.96,52.983,46.238,22.46,53.002,46.238,22.96,53.002,45.874,22.46,53.29,45.874,22.96,53.29,45.749,22.46,53.736,45.749,22.96,53.736,50.191,22.46,57.159,50.191,22.96,57.159,49.401,22.46,58.347,49.401,22.96,58.347,49.864,22.46,58.328,49.864,22.96,58.328,50.227,22.46,58.04,50.227,22.96,58.04,50.352,22.46,57.594,50.352,22.96,57.594],i:[0,1,2,2,1,3,2,3,4,4,3,5,4,5,6,6,5,7,6,7,8,8,7,9,8,9,10,10,9,11,10,11,12,12,11,13,12,13,14,14,13,15,14,15,16,16,15,17,16,17,0,0,17,1,18,19,20,20,19,21,20,21,22,22,21,23,22,23,24,24,23,25,24,25,26,26,25,27,26,27,28,28,27,29,28,29,30,30,29,31,30,31,32,32,31,33,32,33,34,34,33,35,34,35,18,18,35,19,36,37,38,38,37,39,40,41,42,42,41,43,43,41,44,43,44,45,45,44,46,45,46,47,47,46,48,47,48,49,49,48,38,38,48,36,50,40,51,51,40,42,37,52,39,39,52,53,53,52,54,53,54,55,55,54,56,55,56,57,57,56,58,57,58,59,59,58,51,51,58,50,53,34,39,39,34,14,39,14,38,38,14,16,38,16,49,49,16,47,47,16,0,47,0,2,34,53,32,32,53,55,32,55,30,30,55,57,30,57,28,28,57,26,26,57,59,26,59,24,24,59,51,24,51,8,8,51,42,8,42,6,6,42,43,6,43,45,47,2,45,45,2,4,45,4,6,22,10,20,20,10,12,20,12,18,18,12,14,18,14,34,10,22,8,8,22,24,58,25,50,50,25,9,50,9,40,40,9,7,40,7,41,41,7,44,44,7,5,44,5,3,25,58,27,27,58,56,27,56,29,29,56,54,29,54,31,31,54,33,33,54,52,33,52,35,35,52,37,35,37,15,15,37,36,15,36,17,17,36,48,17,48,46,44,3,46,46,3,1,46,1,17,19,13,21,21,13,11,21,11,23,23,11,9,23,9,25,13,19,15,15,19,35]},koppel_a:{v:[44.113,25.21,46.69,44.113,24.71,46.69,44,25.21,46.441,44,24.71,46.441,44.073,25.21,46.177,44.073,24.71,46.177,44.299,25.21,46.023,44.299,24.71,46.023,44.572,25.21,46.05,44.572,24.71,46.05,44.763,25.21,46.245,44.763,24.71,46.245,44.784,25.21,46.518,44.784,24.71,46.518,44.625,25.21,46.74,44.625,24.71,46.74,44.36,25.21,46.808,44.36,24.71,46.808,46.107,25.21,46.537,46.107,24.71,46.537,45.994,25.21,46.288,45.994,24.71,46.288,46.068,25.21,46.024,46.068,24.71,46.024,46.293,25.21,45.87,46.293,24.71,45.87,46.566,25.21,45.897,46.566,24.71,45.897,46.757,25.21,46.092,46.757,24.71,46.092,46.778,25.21,46.365,46.778,24.71,46.365,46.619,25.21,46.587,46.619,24.71,46.587,46.354,25.21,46.655,46.354,24.71,46.655,44.452,24.71,47.108,46.446,24.71,46.955,44.452,25.21,47.108,46.446,25.21,46.955,44.345,24.71,45.712,44.003,24.71,45.833,44.345,25.21,45.712,44.003,25.21,45.833,43.767,24.71,46.108,43.767,25.21,46.108,43.701,24.71,46.464,43.701,25.21,46.464,43.821,24.71,46.806,43.821,25.21,46.806,44.096,24.71,47.041,44.096,25.21,47.041,46.339,24.71,45.559,46.339,25.21,45.559,46.788,24.71,46.835,46.788,25.21,46.835,47.024,24.71,46.56,47.024,25.21,46.56,47.091,24.71,46.204,47.091,25.21,46.204,46.97,24.71,45.862,46.97,25.21,45.862,46.695,24.71,45.626,46.695,25.21,45.626],i:[0,1,2,2,1,3,2,3,4,4,3,5,4,5,6,6,5,7,6,7,8,8,7,9,8,9,10,10,9,11,10,11,12,12,11,13,12,13,14,14,13,15,14,15,16,16,15,17,16,17,0,0,17,1,18,19,20,20,19,21,20,21,22,22,21,23,22,23,24,24,23,25,24,25,26,26,25,27,26,27,28,28,27,29,28,29,30,30,29,31,30,31,32,32,31,33,32,33,34,34,33,35,34,35,18,18,35,19,36,37,38,38,37,39,40,41,42,42,41,43,43,41,44,43,44,45,45,44,46,45,46,47,47,46,48,47,48,49,49,48,50,49,50,51,51,50,38,38,50,36,52,40,53,53,40,42,37,54,39,39,54,55,55,54,56,55,56,57,57,56,58,57,58,59,59,58,60,59,60,61,61,60,62,61,62,63,63,62,53,53,62,52,55,34,39,39,34,18,39,18,14,14,18,12,12,18,20,12,20,10,10,20,22,10,22,8,8,22,53,8,53,42,34,55,32,32,55,57,32,57,30,30,57,59,30,59,28,28,59,61,28,61,26,26,61,63,26,63,24,24,63,53,24,53,22,8,42,6,6,42,43,6,43,45,6,45,4,4,45,47,4,47,2,2,47,0,0,47,49,0,49,16,16,49,51,16,51,38,16,38,14,14,38,39,62,25,52,52,25,23,52,23,9,9,23,11,11,23,21,11,21,13,13,21,19,13,19,15,15,19,37,15,37,36,25,62,27,27,62,60,27,60,29,29,60,58,29,58,31,31,58,56,31,56,33,33,56,54,33,54,35,35,54,37,35,37,19,15,36,17,17,36,50,17,50,48,17,48,1,1,48,46,1,46,3,3,46,5,5,46,44,5,44,7,7,44,41,7,41,40,7,40,9,9,40,52]},koppel_b:{v:[44.072,25.21,52.641,44.072,24.71,52.641,44,25.21,52.377,44,24.71,52.377,44.115,25.21,52.128,44.115,24.71,52.128,44.363,25.21,52.012,44.363,24.71,52.012,44.627,25.21,52.082,44.627,24.71,52.082,44.785,25.21,52.306,44.785,24.71,52.306,44.762,25.21,52.578,44.762,24.71,52.578,44.569,25.21,52.772,44.569,24.71,52.772,44.296,25.21,52.797,44.296,24.71,52.797,46.065,25.21,52.809,46.065,24.71,52.809,45.993,25.21,52.545,45.993,24.71,52.545,46.108,25.21,52.297,46.108,24.71,52.297,46.356,25.21,52.18,46.356,24.71,52.18,46.62,25.21,52.25,46.62,24.71,52.25,46.778,25.21,52.474,46.778,24.71,52.474,46.755,25.21,52.747,46.755,24.71,52.747,46.562,25.21,52.941,46.562,24.71,52.941,46.289,25.21,52.965,46.289,24.71,52.965,44.34,24.71,53.108,46.333,24.71,53.276,44.34,25.21,53.108,46.333,25.21,53.276,44.458,24.71,51.713,44.101,24.71,51.777,44.458,25.21,51.713,44.101,25.21,51.777,43.824,24.71,52.01,43.824,25.21,52.01,43.701,24.71,52.351,43.701,25.21,52.351,43.765,24.71,52.708,43.765,25.21,52.708,43.999,24.71,52.985,43.999,25.21,52.985,46.451,24.71,51.881,46.451,25.21,51.881,46.689,24.71,53.212,46.689,25.21,53.212,46.966,24.71,52.979,46.966,25.21,52.979,47.089,24.71,52.638,47.089,25.21,52.638,47.025,24.71,52.281,47.025,25.21,52.281,46.791,24.71,52.004,46.791,25.21,52.004],i:[32,33,34,34,33,35,34,35,18,18,35,19,36,37,38,38,37,39,40,41,42,42,41,43,43,41,44,43,44,45,45,44,46,45,46,47,47,46,48,47,48,49,49,48,50,49,50,51,51,50,38,38,50,36,52,40,53,53,40,42,37,54,39,39,54,55,55,54,56,55,56,57,57,56,58,57,58,59,59,58,60,59,60,61,61,60,62,61,62,63,63,62,53,53,62,52,55,34,39,39,34,18,39,18,14,14,18,12,12,18,20,12,20,10,10,20,22,10,22,8,8,22,53,8,53,42,34,55,32,32,55,57,32,57,30,30,57,59,30,59,28,28,59,61,28,61,26,26,61,63,26,63,24,24,63,53,24,53,22,8,42,6,6,42,43,6,43,45,6,45,4,4,45,47,4,47,2,2,47,0,0,47,49,0,49,16,16,49,51,16,51,38,16,38,14,14,38,39,62,25,52,52,25,23,52,23,9,9,23,11,11,23,21,11,21,13,13,21,19,13,19,15,15,19,37,15,37,36,25,62,27,27,62,60,27,60,29,29,60,58,29,58,31,31,58,56,31,56,33,33,56,54,33,54,35,35,54,37,35,37,19,15,36,17,17,36,50,17,50,48,17,48,1,1,48,46,1,46,3,3,46,5,5,46,44,5,44,7,7,44,41,7,41,40,7,40,9,9,40,52,0,1,2,2,1,3,2,3,4,4,3,5,4,5,6,6,5,7,6,7,8,8,7,9,8,9,10,10,9,11,10,11,12,12,11,13,12,13,14,14,13,15,14,15,16,16,15,17,16,17,0,0,17,1,18,19,20,20,19,21,20,21,22,22,21,23,22,23,24,24,23,25,24,25,26,26,25,27,26,27,28,28,27,29,28,29,30,30,29,31,30,31,32,32,31,33]},backe_a:{v:[50.309,26.21,38.384,50.309,23.71,38.384,50.904,26.21,43.779,50.904,23.71,43.779,48.964,26.21,38.62,48.793,26.21,38.034,48.863,26.21,38.501,48.725,26.21,38.429,50.012,26.21,41.161,49.965,26.21,41.012,49.865,26.21,40.893,50.245,26.21,43.852,49.927,26.21,41.455,49.999,26.21,41.316,49.807,26.21,41.555,50.085,26.21,43.843,49.936,26.21,43.785,49.813,26.21,43.683,49.729,26.21,43.548,47.875,26.21,39.122,49.264,26.21,41.397,49.364,26.21,41.517,49.503,26.21,41.589,47.819,26.21,38.911,48.215,26.21,38.857,48.263,26.21,39.006,48.363,26.21,39.125,47.822,26.21,38.692,47.885,26.21,38.482,48.229,26.21,38.702,48.002,26.21,38.297,48.164,26.21,38.151,48.36,26.21,38.054,48.42,26.21,38.463,48.301,26.21,38.563,48.569,26.21,38.416,48.575,26.21,38.014,49.217,26.21,41.249,48.501,26.21,39.197,49.23,26.21,41.093,48.657,26.21,39.211,49.302,26.21,40.955,48.806,26.21,39.164,49.422,26.21,40.854,48.925,26.21,39.063,49.571,26.21,40.807,48.997,26.21,38.925,49.726,26.21,40.821,49.011,26.21,38.769,49.658,26.21,41.602,48.793,23.71,38.034,48.964,23.71,38.62,49.011,23.71,38.769,49.726,23.71,40.821,48.997,23.71,38.925,49.571,23.71,40.807,49.422,23.71,40.854,48.925,23.71,39.063,49.302,23.71,40.955,48.806,23.71,39.164,49.23,23.71,41.093,48.657,23.71,39.211,48.501,23.71,39.197,48.575,23.71,38.014,48.725,23.71,38.429,48.863,23.71,38.501,48.569,23.71,38.416,48.36,23.71,38.054,48.42,23.71,38.463,48.301,23.71,38.563,48.164,23.71,38.151,48.229,23.71,38.702,48.002,23.71,38.297,48.215,23.71,38.857,47.885,23.71,38.482,47.822,23.71,38.692,47.819,23.71,38.911,47.875,23.71,39.122,48.263,23.71,39.006,48.363,23.71,39.125,49.217,23.71,41.249,49.264,23.71,41.397,49.729,23.71,43.548,49.364,23.71,41.517,49.503,23.71,41.589,49.658,23.71,41.602,49.807,23.71,41.555,49.936,23.71,43.785,50.085,23.71,43.843,49.813,23.71,43.683,50.245,23.71,43.852,49.927,23.71,41.455,49.999,23.71,41.316,50.012,23.71,41.161,49.965,23.71,41.012,49.865,23.71,40.893,48.793,22.96,38.034,61.667,22.96,41.01,61.667,26.96,41.01,48.793,26.96,38.034,48.575,26.96,38.014,48.36,26.96,38.054,48.164,26.96,38.151,48.002,26.96,38.297,47.885,26.96,38.482,47.822,26.96,38.692,47.819,26.96,38.911,47.875,26.96,39.122,49.729,26.96,43.548,49.813,26.96,43.683,49.936,26.96,43.785,50.085,26.96,43.843,50.245,26.96,43.852,49.264,26.96,41.397,49.217,26.96,41.249,49.23,26.96,41.093,49.302,26.96,40.955,49.422,26.96,40.854,49.571,26.96,40.807,49.726,26.96,40.821,49.865,26.96,40.893,49.965,26.96,41.012,50.012,26.96,41.161,49.999,26.96,41.316,49.927,26.96,41.455,49.807,26.96,41.555,49.658,26.96,41.602,49.503,26.96,41.589,49.364,26.96,41.517,48.263,26.96,39.006,48.215,26.96,38.857,48.229,26.96,38.702,48.301,26.96,38.563,48.42,26.96,38.463,48.569,26.96,38.416,48.725,26.96,38.429,48.863,26.96,38.501,48.964,26.96,38.62,49.011,26.96,38.769,48.997,26.96,38.925,48.925,26.96,39.063,48.806,26.96,39.164,48.657,26.96,39.211,48.501,26.96,39.197,48.363,26.96,39.125,49.264,22.96,41.397,49.217,22.96,41.249,49.23,22.96,41.093,49.302,22.96,40.955,49.422,22.96,40.854,49.571,22.96,40.807,49.726,22.96,40.821,49.865,22.96,40.893,49.965,22.96,41.012,50.012,22.96,41.161,49.999,22.96,41.316,49.927,22.96,41.455,49.807,22.96,41.555,49.658,22.96,41.602,49.503,22.96,41.589,49.364,22.96,41.517,48.263,22.96,39.006,48.215,22.96,38.857,48.229,22.96,38.702,48.301,22.96,38.563,48.42,22.96,38.463,48.569,22.96,38.416,48.725,22.96,38.429,48.863,22.96,38.501,48.964,22.96,38.62,49.011,22.96,38.769,48.997,22.96,38.925,48.925,22.96,39.063,48.806,22.96,39.164,48.657,22.96,39.211,48.501,22.96,39.197,48.363,22.96,39.125,50.245,22.96,43.852,50.085,22.96,43.843,49.936,22.96,43.785,49.813,22.96,43.683,49.729,22.96,43.548,47.875,22.96,39.122,47.819,22.96,38.911,47.822,22.96,38.692,47.885,22.96,38.482,48.002,22.96,38.297,48.164,22.96,38.151,48.36,22.96,38.054,48.575,22.96,38.014,61.901,26.96,41.136,61.901,22.96,41.136,61.831,26.96,41.08,61.831,22.96,41.08,61.752,22.96,41.038,61.752,26.96,41.038,62.464,22.96,41.678,62.464,26.96,41.678,62.172,26.96,42.535,62.172,22.96,42.535,62.327,26.96,42.492,62.327,22.96,42.492,62.461,22.96,42.402,62.461,26.96,42.402,62.558,22.96,42.274,62.558,26.96,42.274,62.61,22.96,42.121,62.61,26.96,42.121,62.611,22.96,41.96,62.611,26.96,41.96,62.561,22.96,41.807,62.561,26.96,41.807,60.264,22.96,42.746,60.264,26.96,42.746,54.14,22.96,43.422,54.463,22.96,43.053,54.14,26.96,43.422,54.463,26.96,43.053,54.826,22.96,42.723,54.826,26.96,42.723,55.224,22.96,42.437,55.224,26.96,42.437,55.653,22.96,42.198,55.653,26.96,42.198,56.105,22.96,42.009,56.105,26.96,42.009,56.576,22.96,41.873,56.576,26.96,41.873,57.06,22.96,41.792,57.06,26.96,41.792,57.549,22.96,41.766,57.549,26.96,41.766,58.039,22.96,41.796,58.039,26.96,41.796,58.522,22.96,41.881,58.522,26.96,41.881,58.992,22.96,42.021,58.992,26.96,42.021,59.443,22.96,42.214,59.443,26.96,42.214,59.869,22.96,42.456,59.869,26.96,42.456,49.833,22.16,40.646,49.869,22.26,40.553,50.141,22.16,40.917,50.229,22.26,40.869,50.203,22.16,41.323,50.301,22.26,41.343,49.989,22.16,41.673,50.051,22.26,41.752,49.6,22.16,41.805,49.598,22.26,41.905,49.218,22.16,41.655,49.152,22.26,41.73,49.021,22.16,41.295,48.922,22.26,41.31,49.102,22.16,40.892,49.017,22.26,40.84,49.423,22.16,40.636,49.391,22.26,40.541,50.301,22.46,41.343,50.229,22.46,40.869,49.869,22.46,40.553,49.391,22.46,40.541,49.017,22.46,40.84,48.922,22.46,41.31,49.152,22.46,41.73,49.598,22.46,41.905,50.051,22.46,41.752,49.966,27.26,41.013,49.76,27.26,40.832,50.007,27.26,41.284,49.864,27.26,41.517,49.487,27.26,40.826,49.605,27.26,41.605,49.273,27.26,40.997,49.35,27.26,41.505,49.219,27.26,41.265,49.76,22.46,40.832,49.966,22.46,41.013,50.007,22.46,41.284,49.487,22.46,40.826,49.273,22.46,40.997,49.219,22.46,41.265,49.35,22.46,41.505,49.605,22.46,41.605,49.864,22.46,41.517,49.064,22.66,38.345,49.17,22.76,38.311,49.259,22.66,38.744,49.359,22.76,38.734,49.263,22.76,39.187,48.768,22.76,38.079,48.658,22.66,38.165,48.307,22.76,38.128,48.23,22.66,38.288,47.963,22.76,38.439,47.982,22.66,38.657,47.867,22.76,38.892,48.029,22.66,39.099,48.056,22.76,39.316,48.349,22.66,39.407,48.458,22.76,39.547,48.793,22.66,39.438,48.919,22.76,39.498,49.152,22.66,39.176,49.263,22.96,39.187,49.359,22.96,38.734,49.17,22.96,38.311,48.768,22.96,38.079,48.307,22.96,38.128,47.963,22.96,38.439,47.867,22.96,38.892,48.056,22.96,39.316,48.458,22.96,39.547,48.919,22.96,39.498,49.011,27.26,38.771,48.891,27.26,38.525,48.945,27.26,39.036,48.724,27.26,39.198,48.64,27.26,38.414,48.451,27.26,39.179,48.378,27.26,38.49,48.254,27.26,38.989,48.225,27.26,38.717,48.891,22.96,38.525,49.011,22.96,38.771,48.945,22.96,39.036,48.64,22.96,38.414,48.378,22.96,38.49,48.225,22.96,38.717,48.254,22.96,38.989,48.451,22.96,39.179,48.724,22.96,39.198,49.231,26.94,41.034,49.249,26.96,41.042,49.197,26.94,41.249,49.217,26.96,41.247,49.275,26.94,41.452,49.291,26.96,41.44,49.444,26.94,41.589,49.452,26.96,41.57,49.659,26.94,41.622,49.657,26.96,41.602,49.862,26.94,41.544,49.85,26.96,41.528,49.998,26.94,41.375,49.98,26.96,41.367,50.032,26.94,41.16,50.012,26.96,41.162,49.954,26.94,40.957,49.938,26.96,40.969,49.785,26.94,40.821,49.777,26.96,40.839,49.57,26.94,40.787,49.572,26.96,40.807,49.367,26.94,40.865,49.379,26.96,40.881,49.291,27.22,41.44,49.217,27.22,41.247,49.249,27.22,41.042,49.379,27.22,40.881,49.572,27.22,40.807,49.777,27.22,40.839,49.938,27.22,40.969,50.012,27.22,41.162,49.98,27.22,41.367,49.85,27.22,41.528,49.657,27.22,41.602,49.452,27.22,41.57,49.354,26.94,41.792,49.993,26.94,41.724,48.976,26.94,41.273,49.236,26.94,40.686,49.875,26.94,40.618,50.253,26.94,41.137,49.231,27.24,41.034,49.197,27.24,41.249,49.275,27.24,41.452,49.444,27.24,41.589,49.659,27.24,41.622,49.862,27.24,41.544,49.998,27.24,41.375,50.032,27.24,41.16,49.954,27.24,40.957,49.785,27.24,40.821,49.57,27.24,40.787,49.367,27.24,40.865,49.354,27.24,41.792,48.976,27.24,41.273,49.993,27.24,41.724,50.253,27.24,41.137,49.875,27.24,40.618,49.236,27.24,40.686,49.26,27.19,40.633,49.211,26.977,40.651,49.211,27.204,40.651,49.179,26.99,40.692,49.179,27.19,40.692,49.26,26.99,40.633,49.841,26.99,40.571,49.892,26.977,40.579,49.841,27.19,40.571,49.892,27.204,40.579,48.942,27.19,41.226,48.934,26.977,41.277,48.934,27.204,41.277,48.952,26.99,41.325,48.952,27.19,41.325,48.942,26.99,41.226,49.297,26.99,41.798,49.297,27.19,41.798,49.337,26.977,41.83,49.337,27.204,41.83,49.388,26.99,41.838,49.388,27.19,41.838,49.969,27.19,41.777,50.017,27.204,41.758,49.969,26.99,41.777,49.932,27.19,40.612,49.932,26.99,40.612,50.277,27.19,41.084,50.277,26.99,41.084,50.295,27.204,41.132,50.287,27.19,41.183,50.295,26.977,41.132,50.287,26.99,41.183,50.05,26.99,41.718,50.017,26.977,41.758,50.05,27.19,41.718,48.229,26.94,38.643,48.247,26.96,38.651,48.195,26.94,38.858,48.215,26.96,38.855,48.274,26.94,39.06,48.29,26.96,39.049,48.443,26.94,39.197,48.451,26.96,39.179,48.657,26.94,39.231,48.655,26.96,39.211,48.86,26.94,39.153,48.849,26.96,39.136,48.997,26.94,38.983,48.979,26.96,38.975,49.031,26.94,38.769,49.011,26.96,38.771,48.953,26.94,38.566,48.936,26.96,38.578,48.783,26.94,38.429,48.775,26.96,38.448,48.569,26.94,38.395,48.571,26.96,38.415,48.366,26.94,38.474,48.378,26.96,38.49,48.29,27.22,39.049,48.215,27.22,38.855,48.247,27.22,38.651,48.378,27.22,38.49,48.571,27.22,38.415,48.775,27.22,38.448,48.936,27.22,38.578,49.011,27.22,38.771,48.979,27.22,38.975,48.849,27.22,39.136,48.655,27.22,39.211,48.451,27.22,39.179,48.353,26.94,39.4,48.991,26.94,39.332,47.974,26.94,38.881,48.235,26.94,38.294,48.874,26.94,38.226,49.252,26.94,38.745,48.229,27.24,38.643,48.195,27.24,38.858,48.274,27.24,39.06,48.443,27.24,39.197,48.657,27.24,39.231,48.86,27.24,39.153,48.997,27.24,38.983,49.031,27.24,38.769,48.953,27.24,38.566,48.783,27.24,38.429,48.569,27.24,38.395,48.366,27.24,38.474,48.353,27.24,39.4,47.974,27.24,38.881,48.991,27.24,39.332,49.252,27.24,38.745,48.874,27.24,38.226,48.235,27.24,38.294,48.258,27.19,38.241,48.21,26.977,38.26,48.21,27.204,38.26,48.177,26.99,38.3,48.177,27.19,38.3,48.258,26.99,38.241,48.84,26.99,38.179,48.891,26.977,38.187,48.84,27.19,38.179,48.891,27.204,38.187,47.94,27.19,38.834,47.932,26.977,38.886,47.932,27.204,38.886,47.951,26.99,38.934,47.951,27.19,38.934,47.94,26.99,38.834,48.295,26.99,39.406,48.295,27.19,39.406,48.335,26.977,39.439,48.335,27.204,39.439,48.387,26.99,39.447,48.387,27.19,39.447,48.968,27.19,39.385,49.016,27.204,39.366,48.968,26.99,39.385,48.931,27.19,38.22,48.931,26.99,38.22,49.275,27.19,38.692,49.275,26.99,38.692,49.294,27.204,38.741,49.286,27.19,38.792,49.294,26.977,38.741,49.286,26.99,38.792,49.049,26.99,39.326,49.016,26.977,39.366,49.049,27.19,39.326],i:[0,1,2,2,1,3,0,4,5,5,4,6,5,6,7,2,8,0,0,8,9,0,9,10,11,12,2,2,12,13,2,13,8,12,11,14,14,11,15,14,15,16,17,18,16,16,18,14,19,20,18,18,20,21,18,21,22,23,24,19,19,24,25,19,25,26,23,27,24,24,27,28,24,28,29,29,28,30,29,30,31,32,33,31,31,33,34,31,34,29,33,32,35,35,32,36,35,36,7,7,36,5,19,26,37,37,26,38,37,38,39,39,38,40,39,40,41,41,40,42,41,42,43,43,42,44,43,44,45,45,44,46,45,46,47,47,46,48,47,48,0,0,48,4,37,20,19,22,49,18,18,49,14,10,47,0,50,51,1,1,51,52,1,52,53,53,52,54,53,54,55,55,54,56,56,54,57,56,57,58,58,57,59,58,59,60,60,59,61,60,61,62,63,64,50,50,64,65,50,65,51,64,63,66,66,63,67,66,67,68,68,67,69,69,67,70,69,70,71,71,70,72,71,72,73,73,72,74,73,74,75,75,76,73,73,76,77,73,77,78,78,77,79,79,77,80,79,80,62,62,80,60,80,77,81,81,77,82,81,82,83,83,82,84,84,82,85,85,82,86,86,82,87,86,87,88,82,89,87,88,90,86,86,90,91,91,90,92,92,90,3,92,3,93,93,3,1,93,1,94,94,1,95,95,1,53,50,1,96,96,1,97,97,1,0,97,0,98,98,0,99,99,0,5,5,36,99,99,36,100,100,36,32,100,32,101,101,32,31,101,31,102,102,31,30,102,30,103,103,30,28,103,28,104,104,28,27,104,27,105,105,27,23,105,23,106,106,23,19,106,19,107,19,18,107,107,18,108,108,18,109,109,18,17,109,17,16,109,16,110,110,16,15,110,15,111,111,15,11,111,11,112,113,20,114,114,20,37,114,37,115,115,37,39,115,39,116,116,39,41,116,41,117,117,41,43,117,43,118,118,43,45,118,45,119,119,45,47,119,47,120,120,47,10,120,10,121,121,10,9,121,9,122,122,9,8,122,8,123,123,8,13,123,13,124,124,13,12,124,12,125,125,12,14,125,14,126,126,14,49,126,49,127,127,49,22,127,22,128,128,22,21,128,21,113,113,21,20,129,25,130,130,25,24,130,24,131,131,24,29,131,29,132,132,29,34,132,34,133,133,34,33,133,33,134,134,33,35,134,35,135,135,35,7,135,7,136,136,7,6,136,6,137,137,6,4,137,4,138,138,4,48,138,48,139,139,48,46,139,46,140,140,46,44,140,44,141,141,44,42,141,42,142,142,42,40,142,40,143,143,40,38,143,38,144,144,38,26,144,26,129,129,26,25,81,145,80,80,145,146,80,146,60,60,146,147,60,147,58,58,147,148,58,148,56,56,148,149,56,149,55,55,149,150,55,150,53,53,150,151,53,151,95,95,151,152,95,152,94,94,152,153,94,153,93,93,153,154,93,154,92,92,154,155,92,155,91,91,155,156,91,156,86,86,156,157,86,157,85,85,157,158,85,158,84,84,158,159,84,159,83,83,159,160,83,160,81,81,160,145,78,161,73,73,161,162,73,162,71,71,162,163,71,163,69,69,163,164,69,164,68,68,164,165,68,165,66,66,165,166,66,166,64,64,166,167,64,167,65,65,167,168,65,168,51,51,168,169,51,169,52,52,169,170,52,170,54,54,170,171,54,171,57,57,171,172,57,172,59,59,172,173,59,173,61,61,173,174,61,174,62,62,174,175,62,175,79,79,175,176,79,176,78,78,176,161,90,88,177,177,88,178,178,88,87,178,87,179,179,87,89,179,89,180,180,89,181,181,89,82,82,77,181,181,77,182,77,76,182,182,76,183,183,76,75,183,75,184,184,75,74,184,74,185,185,74,72,185,72,186,186,72,70,186,70,187,187,70,67,187,67,188,188,67,63,188,63,189,189,63,50,189,50,96,190,191,192,192,191,193,192,193,194,97,98,194,194,98,195,194,195,192,196,191,197,197,191,190,198,199,200,200,199,201,200,201,202,200,202,203,203,202,204,203,204,205,205,204,206,205,206,207,207,206,208,207,208,209,209,208,210,209,210,211,211,210,196,211,196,197,212,199,213,213,199,198,214,215,216,216,215,217,217,215,218,217,218,219,219,218,220,219,220,221,221,220,222,221,222,223,223,222,224,223,224,225,225,224,226,225,226,227,227,226,228,227,228,229,229,228,230,229,230,231,231,230,232,231,232,233,233,232,234,233,234,235,235,234,236,235,236,237,237,236,238,237,238,239,239,238,240,239,240,241,241,240,213,213,240,212,90,177,3,3,177,214,3,214,2,2,214,216,2,216,112,112,11,2,216,217,112,112,217,108,112,108,109,217,219,108,108,219,125,108,125,126,219,221,125,125,221,124,124,221,223,124,223,123,123,223,225,123,225,122,122,225,121,121,225,227,121,227,120,120,227,229,120,229,139,139,229,138,138,229,98,138,98,137,137,98,99,137,99,136,136,99,135,135,99,134,134,99,100,134,100,101,229,231,98,98,231,233,98,233,235,235,237,98,98,237,190,98,190,192,237,239,190,190,239,197,197,239,241,197,241,211,211,241,209,209,241,207,207,241,213,207,213,198,200,203,198,198,203,205,198,205,207,192,195,98,101,102,134,134,102,103,134,103,133,133,103,104,133,104,132,132,104,105,132,105,131,131,105,106,131,106,130,130,106,129,129,106,107,129,107,144,144,107,143,143,107,117,143,117,142,142,117,118,142,118,141,141,118,119,141,119,140,140,119,120,140,120,139,108,113,107,107,113,114,107,114,115,109,110,112,112,110,111,115,116,107,107,116,117,126,127,108,108,127,128,108,128,113,214,177,215,215,177,181,215,181,218,218,181,157,218,157,220,220,157,156,220,156,222,222,156,155,222,155,224,224,155,154,224,154,153,178,179,177,177,179,180,177,180,181,182,145,181,181,145,160,181,160,159,183,161,182,182,161,176,182,176,175,184,163,183,183,163,162,183,162,161,163,184,164,164,184,185,164,185,165,165,185,186,165,186,166,166,186,187,166,187,188,188,189,166,166,189,96,166,96,167,167,96,168,168,96,169,169,96,97,169,97,170,170,97,228,170,228,171,171,228,152,171,152,172,172,152,151,172,151,173,173,151,150,173,150,174,174,150,149,174,149,175,175,149,182,194,193,97,97,193,191,97,191,236,236,191,238,238,191,196,238,196,240,240,196,210,240,210,208,208,206,240,240,206,212,212,206,199,199,206,204,199,204,202,202,201,199,236,234,97,97,234,232,97,232,230,230,228,97,228,226,152,152,226,153,153,226,224,147,146,182,182,146,145,159,158,181,181,158,157,149,148,182,182,148,147,242,243,244,244,243,245,244,245,246,246,245,247,246,247,248,248,247,249,248,249,250,250,249,251,250,251,252,252,251,253,252,253,254,254,253,255,254,255,256,256,255,257,256,257,258,258,257,259,258,259,242,242,259,243,246,252,244,244,252,254,244,254,242,242,254,256,242,256,258,248,250,246,246,250,252,260,245,261,261,245,243,261,243,262,262,243,259,262,259,263,263,259,257,263,257,264,264,257,255,264,255,265,265,255,253,265,253,266,266,253,251,266,251,267,267,251,249,267,249,268,268,249,247,268,247,260,260,247,245,269,270,271,271,270,272,272,270,273,272,273,274,274,273,275,274,275,276,276,275,277,262,278,261,261,278,279,261,279,280,278,262,281,281,262,263,281,263,264,281,264,282,282,264,265,282,265,283,283,265,266,283,266,284,284,266,285,285,266,267,285,267,286,286,267,268,286,268,260,286,260,280,280,260,261,278,269,279,279,269,271,279,271,280,280,271,272,280,272,286,286,272,274,286,274,285,285,274,276,285,276,284,284,276,277,284,277,283,283,277,275,283,275,282,282,275,273,282,273,281,281,273,270,281,270,278,278,270,269,287,288,289,289,288,290,289,290,291,288,287,292,292,287,293,292,293,294,294,293,295,294,295,296,296,295,297,296,297,298,298,297,299,298,299,300,300,299,301,300,301,302,302,301,303,302,303,304,304,303,305,304,305,291,291,305,289,305,299,289,289,299,297,289,297,287,287,297,295,287,295,293,303,301,305,305,301,299,306,291,307,307,291,290,307,290,308,308,290,288,308,288,309,309,288,292,309,292,310,310,292,294,310,294,311,311,294,296,311,296,312,312,296,298,312,298,313,313,298,300,313,300,314,314,300,302,314,302,315,315,302,304,315,304,306,306,304,291,316,317,318,318,317,319,319,317,320,319,320,321,321,320,322,321,322,323,323,322,324,308,325,307,307,325,326,307,326,327,325,308,328,328,308,309,328,309,310,328,310,329,329,310,311,329,311,330,330,311,312,330,312,331,331,312,313,331,313,332,332,313,314,332,314,333,333,314,315,333,315,306,333,306,327,327,306,307,325,316,326,326,316,318,326,318,327,327,318,319,327,319,333,333,319,321,333,321,332,332,321,323,332,323,331,331,323,324,331,324,330,330,324,322,330,322,329,329,322,320,329,320,328,328,320,317,328,317,325,325,317,316,411,412,413,413,412,414,413,414,415,411,410,412,406,408,389,389,408,411,389,411,388,388,411,413,413,415,388,388,415,416,388,416,390,390,416,417,414,418,415,415,418,416,419,401,403,403,401,400,403,400,402,419,420,401,419,421,420,420,421,422,403,392,419,419,392,391,419,391,421,421,391,423,424,425,423,423,425,422,423,422,421,424,426,425,401,420,374,374,420,422,374,422,375,375,422,425,425,426,375,375,426,427,375,427,371,371,427,428,416,428,417,417,428,427,417,427,429,416,418,428,423,391,424,424,391,390,424,390,429,429,390,417,412,370,414,414,370,371,414,371,418,418,371,428,397,409,398,398,409,404,396,398,393,393,398,404,393,404,389,389,404,406,424,429,426,426,429,427,334,335,336,336,335,337,336,337,338,338,337,339,338,339,340,340,339,341,340,341,342,342,341,343,342,343,344,344,343,345,344,345,346,346,345,347,346,347,348,348,347,349,348,349,350,350,349,351,350,351,352,352,351,353,352,353,354,354,353,355,354,355,356,356,355,357,356,357,334,334,357,335,358,339,359,359,339,337,359,337,360,360,337,335,360,335,361,361,335,357,361,357,362,362,357,355,362,355,363,363,355,353,363,353,364,364,353,351,364,351,365,365,351,349,365,349,366,366,349,347,366,347,367,367,347,345,367,345,368,368,345,343,368,343,369,369,343,341,369,341,358,358,341,339,370,342,371,371,342,344,371,344,346,372,338,370,370,338,340,370,340,342,373,334,372,372,334,336,372,336,338,374,354,373,373,354,356,373,356,334,375,350,374,374,350,352,374,352,354,371,346,375,375,346,348,375,348,350,360,376,359,359,376,377,359,377,358,358,377,378,358,378,369,369,378,379,369,379,368,368,379,380,368,380,367,367,380,381,367,381,366,366,381,382,366,382,365,365,382,383,365,383,364,364,383,384,364,384,363,363,384,385,363,385,362,362,385,386,362,386,361,361,386,387,361,387,360,360,387,376,388,378,389,389,378,377,389,377,376,390,380,388,388,380,379,388,379,378,391,382,390,390,382,381,390,381,380,392,384,391,391,384,383,391,383,382,393,386,392,392,386,385,392,385,384,389,376,393,393,376,387,393,387,386,394,395,396,396,395,397,396,397,398,394,399,395,395,399,373,373,399,400,373,400,374,374,400,401,394,402,399,399,402,400,396,393,394,394,393,392,394,392,402,402,392,403,404,405,406,406,405,407,406,407,408,404,409,405,407,410,408,408,410,411,405,372,407,407,372,370,407,370,410,410,370,412,395,373,397,397,373,372,397,372,409,409,372,405,430,431,432,432,431,433,432,433,434,434,433,435,434,435,436,436,435,437,436,437,438,438,437,439,438,439,440,440,439,441,440,441,442,442,441,443,442,443,444,444,443,445,444,445,446,446,445,447,446,447,448,448,447,449,448,449,450,450,449,451,450,451,452,452,451,453,452,453,430,430,453,431,454,435,455,455,435,433,455,433,456,456,433,431,456,431,457,457,431,453,457,453,458,458,453,451,458,451,459,459,451,449,459,449,460,460,449,447,460,447,461,461,447,445,461,445,462,462,445,443,462,443,463,463,443,441,463,441,464,464,441,439,464,439,465,465,439,437,465,437,454,454,437,435,466,438,467,467,438,440,467,440,442,468,434,466,466,434,436,466,436,438,469,430,468,468,430,432,468,432,434,470,450,469,469,450,452,469,452,430,471,446,470,470,446,448,470,448,450,467,442,471,471,442,444,471,444,446,456,472,455,455,472,473,455,473,454,454,473,474,454,474,465,465,474,475,465,475,464,464,475,476,464,476,463,463,476,477,463,477,462,462,477,478,462,478,461,461,478,479,461,479,460,460,479,480,460,480,459,459,480,481,459,481,458,458,481,482,458,482,457,457,482,483,457,483,456,456,483,472,484,474,485,485,474,473,485,473,472,486,476,484,484,476,475,484,475,474,487,478,486,486,478,477,486,477,476,488,480,487,487,480,479,487,479,478,489,482,488,488,482,481,488,481,480,485,472,489,489,472,483,489,483,482,490,491,492,492,491,493,492,493,494,490,495,491,491,495,469,469,495,496,469,496,470,470,496,497,490,498,495,495,498,496,492,489,490,490,489,488,490,488,498,498,488,499,500,501,502,502,501,503,502,503,504,500,505,501,503,506,504,504,506,507,501,468,503,503,468,466,503,466,506,506,466,508,491,469,493,493,469,468,493,468,505,505,468,501,507,508,509,509,508,510,509,510,511,507,506,508,502,504,485,485,504,507,485,507,484,484,507,509,509,511,484,484,511,512,484,512,486,486,512,513,510,514,511,511,514,512,515,497,499,499,497,496,499,496,498,515,516,497,515,517,516,516,517,518,499,488,515,515,488,487,515,487,517,517,487,519,520,521,519,519,521,518,519,518,517,520,522,521,497,516,470,470,516,518,470,518,471,471,518,521,521,522,471,471,522,523,471,523,467,467,523,524,512,524,513,513,524,523,513,523,525,512,514,524,519,487,520,520,487,486,520,486,525,525,486,513,508,466,510,510,466,467,510,467,514,514,467,524,493,505,494,494,505,500,492,494,489,489,494,500,489,500,485,485,500,502,520,525,522,522,525,523]},backe_b:{v:[50.313,23.71,60.442,50.313,26.21,60.442,50.878,23.71,55.044,50.878,26.21,55.044,48.966,23.71,60.213,48.799,23.71,60.8,48.867,23.71,60.333,48.729,23.71,60.406,50.001,23.71,57.667,49.955,23.71,57.816,49.855,23.71,57.936,50.218,23.71,54.975,49.914,23.71,57.373,49.986,23.71,57.511,49.794,23.71,57.273,50.059,23.71,54.984,49.91,23.71,55.042,49.788,23.71,55.145,49.704,23.71,55.281,47.875,23.71,59.717,49.251,23.71,57.434,49.351,23.71,57.314,49.489,23.71,57.241,47.82,23.71,59.929,48.217,23.71,59.98,48.263,23.71,59.831,48.363,23.71,59.711,47.825,23.71,60.148,47.888,23.71,60.357,48.231,23.71,60.136,48.006,23.71,60.541,48.17,23.71,60.687,48.366,23.71,60.782,48.424,23.71,60.374,48.304,23.71,60.274,48.573,23.71,60.42,48.582,23.71,60.821,49.205,23.71,57.583,48.501,23.71,59.639,49.219,23.71,57.739,48.657,23.71,59.624,49.292,23.71,57.877,48.806,23.71,59.67,49.412,23.71,57.977,48.926,23.71,59.77,49.561,23.71,58.023,48.998,23.71,59.908,49.717,23.71,58.008,49.013,23.71,60.064,49.645,23.71,57.227,48.799,26.21,60.8,48.966,26.21,60.213,49.013,26.21,60.064,49.717,26.21,58.008,48.998,26.21,59.908,49.561,26.21,58.023,49.412,26.21,57.977,48.926,26.21,59.77,49.292,26.21,57.877,48.806,26.21,59.67,49.219,26.21,57.739,48.657,26.21,59.624,48.501,26.21,59.639,48.582,26.21,60.821,48.729,26.21,60.406,48.867,26.21,60.333,48.573,26.21,60.42,48.366,26.21,60.782,48.424,26.21,60.374,48.304,26.21,60.274,48.17,26.21,60.687,48.231,26.21,60.136,48.006,26.21,60.541,48.217,26.21,59.98,47.888,26.21,60.357,47.825,26.21,60.148,47.82,26.21,59.929,47.875,26.21,59.717,48.263,26.21,59.831,48.363,26.21,59.711,49.205,26.21,57.583,49.251,26.21,57.434,49.704,26.21,55.281,49.351,26.21,57.314,49.489,26.21,57.241,49.645,26.21,57.227,49.794,26.21,57.273,49.91,26.21,55.042,50.059,26.21,54.984,49.788,26.21,55.145,50.218,26.21,54.975,49.914,26.21,57.373,49.986,26.21,57.511,50.001,26.21,57.667,49.955,26.21,57.816,49.855,26.21,57.936,48.799,26.96,60.8,61.656,26.96,57.753,61.656,22.96,57.753,48.799,22.96,60.8,48.582,22.96,60.821,48.366,22.96,60.782,48.17,22.96,60.687,48.006,22.96,60.541,47.888,22.96,60.357,47.825,22.96,60.148,47.82,22.96,59.929,47.875,22.96,59.717,49.704,22.96,55.281,49.788,22.96,55.145,49.91,22.96,55.042,50.059,22.96,54.984,50.218,22.96,54.975,49.251,22.96,57.434,49.205,22.96,57.583,49.219,22.96,57.739,49.292,22.96,57.877,49.412,22.96,57.977,49.561,22.96,58.023,49.717,22.96,58.008,49.855,22.96,57.936,49.955,22.96,57.816,50.001,22.96,57.667,49.986,22.96,57.511,49.914,22.96,57.373,49.794,22.96,57.273,49.645,22.96,57.227,49.489,22.96,57.241,49.351,22.96,57.314,48.263,22.96,59.831,48.217,22.96,59.98,48.231,22.96,60.136,48.304,22.96,60.274,48.424,22.96,60.374,48.573,22.96,60.42,48.729,22.96,60.406,48.867,22.96,60.333,48.966,22.96,60.213,49.013,22.96,60.064,48.998,22.96,59.908,48.926,22.96,59.77,48.806,22.96,59.67,48.657,22.96,59.624,48.501,22.96,59.639,48.363,22.96,59.711,49.251,26.96,57.434,49.205,26.96,57.583,49.219,26.96,57.739,49.292,26.96,57.877,49.412,26.96,57.977,49.561,26.96,58.023,49.717,26.96,58.008,49.855,26.96,57.936,49.955,26.96,57.816,50.001,26.96,57.667,49.986,26.96,57.511,49.914,26.96,57.373,49.794,26.96,57.273,49.645,26.96,57.227,49.489,26.96,57.241,49.351,26.96,57.314,48.263,26.96,59.831,48.217,26.96,59.98,48.231,26.96,60.136,48.304,26.96,60.274,48.424,26.96,60.374,48.573,26.96,60.42,48.729,26.96,60.406,48.867,26.96,60.333,48.966,26.96,60.213,49.013,26.96,60.064,48.998,26.96,59.908,48.926,26.96,59.77,48.806,26.96,59.67,48.657,26.96,59.624,48.501,26.96,59.639,48.363,26.96,59.711,50.218,26.96,54.975,50.059,26.96,54.984,49.91,26.96,55.042,49.788,26.96,55.145,49.704,26.96,55.281,47.875,26.96,59.717,47.82,26.96,59.929,47.825,26.96,60.148,47.888,26.96,60.357,48.006,26.96,60.541,48.17,26.96,60.687,48.366,26.96,60.782,48.582,26.96,60.821,61.89,22.96,57.625,61.89,26.96,57.625,61.82,22.96,57.681,61.82,26.96,57.681,61.742,26.96,57.725,61.742,22.96,57.725,62.45,26.96,57.08,62.45,22.96,57.08,62.153,22.96,56.225,62.153,26.96,56.225,62.308,22.96,56.267,62.308,26.96,56.267,62.442,26.96,56.357,62.442,22.96,56.357,62.541,26.96,56.484,62.541,22.96,56.484,62.594,26.96,56.636,62.594,22.96,56.636,62.595,26.96,56.797,62.595,22.96,56.797,62.546,26.96,56.951,62.546,22.96,56.951,60.244,26.96,56.025,60.244,22.96,56.025,54.116,26.96,55.383,54.442,26.96,55.75,54.116,22.96,55.383,54.442,22.96,55.75,54.806,26.96,56.078,54.806,22.96,56.078,55.206,26.96,56.362,55.206,22.96,56.362,55.635,26.96,56.598,55.635,22.96,56.598,56.089,26.96,56.784,56.089,22.96,56.784,56.561,26.96,56.918,56.561,22.96,56.918,57.045,26.96,56.997,57.045,22.96,56.997,57.535,26.96,57.02,57.535,22.96,57.02,58.024,26.96,56.987,58.024,22.96,56.987,58.506,26.96,56.899,58.506,22.96,56.899,58.975,26.96,56.756,58.975,22.96,56.756,59.425,26.96,56.561,59.425,22.96,56.561,59.85,26.96,56.316,59.85,22.96,56.316,50.106,22.16,57.298,50.19,22.26,57.244,50.198,22.16,57.698,50.298,22.26,57.71,50.012,22.16,58.064,50.08,22.26,58.137,49.634,22.16,58.224,49.64,22.26,58.324,49.242,22.16,58.104,49.182,22.26,58.184,49.018,22.16,57.76,48.921,22.26,57.782,49.068,22.16,57.353,48.979,22.26,57.307,49.368,22.16,57.073,49.329,22.26,56.981,49.778,22.16,57.051,49.807,22.26,56.955,50.08,22.46,58.137,50.298,22.46,57.71,50.19,22.46,57.244,49.807,22.46,56.955,49.329,22.46,56.981,48.979,22.46,57.307,48.921,22.46,57.782,49.182,22.46,58.184,49.64,22.46,58.324,50,27.26,57.674,49.938,27.26,57.407,49.876,27.26,57.917,49.624,27.26,58.024,49.72,27.26,57.242,49.362,27.26,57.944,49.447,27.26,57.257,49.213,27.26,57.715,49.246,27.26,57.443,49.938,22.46,57.407,50,22.46,57.674,49.876,22.46,57.917,49.72,22.46,57.242,49.447,22.46,57.257,49.246,22.46,57.443,49.213,22.46,57.715,49.362,22.46,57.944,49.624,22.46,58.024,49.151,22.66,59.655,49.262,22.76,59.643,49.262,22.66,60.086,49.361,22.76,60.096,49.175,22.76,60.52,48.915,22.76,59.335,48.79,22.66,59.396,48.454,22.76,59.289,48.347,22.66,59.43,48.054,22.76,59.524,48.029,22.66,59.741,47.868,22.76,59.948,47.985,22.66,60.183,47.968,22.76,60.401,48.236,22.66,60.55,48.314,22.76,60.709,48.664,22.66,60.67,48.775,22.76,60.755,49.069,22.66,60.487,49.175,22.96,60.52,49.361,22.96,60.096,49.262,22.96,59.643,48.915,22.96,59.335,48.454,22.96,59.289,48.054,22.96,59.524,47.868,22.96,59.948,47.968,22.96,60.401,48.314,22.96,60.709,48.775,22.96,60.755,49.013,27.26,60.061,48.945,27.26,59.796,48.895,27.26,60.308,48.645,27.26,60.421,48.723,27.26,59.637,48.382,27.26,60.347,48.45,27.26,59.658,48.227,27.26,60.121,48.254,27.26,59.849,48.945,22.96,59.796,49.013,22.96,60.061,48.895,22.96,60.308,48.723,22.96,59.637,48.45,22.96,59.658,48.254,22.96,59.849,48.227,22.96,60.121,48.382,22.96,60.347,48.645,22.96,60.421,49.262,26.94,57.38,49.278,26.96,57.392,49.185,26.94,57.584,49.205,26.96,57.586,49.22,26.94,57.798,49.239,26.96,57.79,49.358,26.94,57.966,49.37,26.96,57.95,49.562,26.94,58.043,49.564,26.96,58.023,49.776,26.94,58.007,49.768,26.96,57.989,49.944,26.94,57.87,49.928,26.96,57.858,50.021,26.94,57.666,50.001,26.96,57.664,49.985,26.94,57.452,49.967,26.96,57.46,49.848,26.94,57.284,49.836,26.96,57.3,49.644,26.94,57.207,49.642,26.96,57.227,49.43,26.94,57.242,49.438,26.96,57.261,49.239,27.22,57.79,49.205,27.22,57.586,49.278,27.22,57.392,49.438,27.22,57.261,49.642,27.22,57.227,49.836,27.22,57.3,49.967,27.22,57.46,50.001,27.22,57.664,49.928,27.22,57.858,49.768,27.22,57.989,49.564,27.22,58.023,49.37,27.22,57.95,49.229,26.94,58.147,49.868,26.94,58.21,48.964,26.94,57.562,49.338,26.94,57.04,49.977,26.94,57.103,50.242,26.94,57.688,49.262,27.24,57.38,49.185,27.24,57.584,49.22,27.24,57.798,49.358,27.24,57.966,49.562,27.24,58.043,49.776,27.24,58.007,49.944,27.24,57.87,50.021,27.24,57.666,49.985,27.24,57.452,49.848,27.24,57.284,49.644,27.24,57.207,49.43,27.24,57.242,49.229,27.24,58.147,48.964,27.24,57.562,49.868,27.24,58.21,50.242,27.24,57.688,49.977,27.24,57.103,49.338,27.24,57.04,49.372,27.19,56.993,49.32,26.977,57.001,49.32,27.204,57.001,49.28,26.99,57.034,49.28,27.19,57.034,49.372,26.99,56.993,49.953,26.99,57.05,50.002,26.977,57.069,49.953,27.19,57.05,50.002,27.204,57.069,48.94,27.19,57.509,48.922,26.977,57.558,48.922,27.204,57.558,48.93,26.99,57.609,48.93,27.19,57.609,48.94,26.99,57.509,49.171,26.99,58.141,49.171,27.19,58.141,49.204,26.977,58.181,49.204,27.204,58.181,49.253,26.99,58.2,49.253,27.19,58.2,49.834,27.19,58.257,49.885,27.204,58.248,49.834,26.99,58.257,50.035,27.19,57.109,50.035,26.99,57.109,50.276,27.19,57.641,50.276,26.99,57.641,50.284,27.204,57.692,50.266,27.19,57.741,50.284,26.977,57.692,50.266,26.99,57.741,49.925,26.99,58.216,49.885,26.977,58.248,49.925,27.19,58.216,48.273,26.94,59.777,48.29,26.96,59.789,48.197,26.94,59.981,48.217,26.96,59.983,48.232,26.94,60.195,48.25,26.96,60.187,48.37,26.94,60.363,48.382,26.96,60.347,48.574,26.94,60.44,48.576,26.96,60.42,48.788,26.94,60.405,48.78,26.96,60.386,48.956,26.94,60.267,48.94,26.96,60.255,49.033,26.94,60.063,49.013,26.96,60.061,48.997,26.94,59.849,48.979,26.96,59.857,48.86,26.94,59.681,48.848,26.96,59.697,48.656,26.94,59.604,48.654,26.96,59.624,48.442,26.94,59.639,48.45,26.96,59.658,48.25,27.22,60.187,48.217,27.22,59.983,48.29,27.22,59.789,48.45,27.22,59.658,48.654,27.22,59.624,48.848,27.22,59.697,48.979,27.22,59.857,49.013,27.22,60.061,48.94,27.22,60.255,48.78,27.22,60.386,48.576,27.22,60.42,48.382,27.22,60.347,48.241,26.94,60.544,48.88,26.94,60.607,47.976,26.94,59.959,48.35,26.94,59.437,48.989,26.94,59.5,49.254,26.94,60.085,48.273,27.24,59.777,48.197,27.24,59.981,48.232,27.24,60.195,48.37,27.24,60.363,48.574,27.24,60.44,48.788,27.24,60.405,48.956,27.24,60.267,49.033,27.24,60.063,48.997,27.24,59.849,48.86,27.24,59.681,48.656,27.24,59.604,48.442,27.24,59.639,48.241,27.24,60.544,47.976,27.24,59.959,48.88,27.24,60.607,49.254,27.24,60.085,48.989,27.24,59.5,48.35,27.24,59.437,48.383,27.19,59.39,48.332,26.977,59.398,48.332,27.204,59.398,48.292,26.99,59.431,48.292,27.19,59.431,48.383,26.99,59.39,48.965,26.99,59.447,49.014,26.977,59.466,48.965,27.19,59.447,49.014,27.204,59.466,47.952,27.19,59.906,47.934,26.977,59.955,47.934,27.204,59.955,47.942,26.99,60.006,47.942,27.19,60.006,47.952,26.99,59.906,48.183,26.99,60.538,48.183,27.19,60.538,48.216,26.977,60.578,48.216,27.204,60.578,48.264,26.99,60.597,48.264,27.19,60.597,48.846,27.19,60.654,48.897,27.204,60.646,48.846,26.99,60.654,49.046,27.19,59.506,49.046,26.99,59.506,49.288,27.19,60.038,49.288,26.99,60.038,49.296,27.204,60.089,49.278,27.19,60.138,49.296,26.977,60.089,49.278,26.99,60.138,48.937,26.99,60.613,48.897,26.977,60.646,48.937,27.19,60.613],i:[0,1,2,2,1,3,0,4,5,5,4,6,5,6,7,2,8,0,0,8,9,0,9,10,11,12,2,2,12,13,2,13,8,12,11,14,14,11,15,14,15,16,17,18,16,16,18,14,19,20,18,18,20,21,18,21,22,23,24,19,19,24,25,19,25,26,23,27,24,24,27,28,24,28,29,29,28,30,29,30,31,32,33,31,31,33,34,31,34,29,33,32,35,35,32,36,35,36,7,7,36,5,19,26,37,37,26,38,37,38,39,39,38,40,39,40,41,41,40,42,41,42,43,43,42,44,43,44,45,45,44,46,45,46,47,47,46,48,47,48,0,0,48,4,37,20,19,22,49,18,18,49,14,10,47,0,50,51,1,1,51,52,1,52,53,53,52,54,53,54,55,55,54,56,56,54,57,56,57,58,58,57,59,58,59,60,60,59,61,60,61,62,63,64,50,50,64,65,50,65,51,64,63,66,66,63,67,66,67,68,68,67,69,69,67,70,69,70,71,71,70,72,71,72,73,73,72,74,73,74,75,75,76,73,73,76,77,73,77,78,78,77,79,79,77,80,79,80,62,62,80,60,80,77,81,81,77,82,81,82,83,83,82,84,84,82,85,85,82,86,86,82,87,86,87,88,82,89,87,88,90,86,86,90,91,91,90,92,92,90,3,92,3,93,93,3,1,93,1,94,94,1,95,95,1,53,50,1,96,96,1,97,97,1,0,97,0,98,98,0,99,99,0,5,5,36,99,99,36,100,100,36,32,100,32,101,101,32,31,101,31,102,102,31,30,102,30,103,103,30,28,103,28,104,104,28,27,104,27,105,105,27,23,105,23,106,106,23,19,106,19,107,19,18,107,107,18,108,108,18,109,109,18,17,109,17,16,109,16,110,110,16,15,110,15,111,111,15,11,111,11,112,113,20,114,114,20,37,114,37,115,115,37,39,115,39,116,116,39,41,116,41,117,117,41,43,117,43,118,118,43,45,118,45,119,119,45,47,119,47,120,120,47,10,120,10,121,121,10,9,121,9,122,122,9,8,122,8,123,123,8,13,123,13,124,124,13,12,124,12,125,125,12,14,125,14,126,126,14,49,126,49,127,127,49,22,127,22,128,128,22,21,128,21,113,113,21,20,129,25,130,130,25,24,130,24,131,131,24,29,131,29,132,132,29,34,132,34,133,133,34,33,133,33,134,134,33,35,134,35,135,135,35,7,135,7,136,136,7,6,136,6,137,137,6,4,137,4,138,138,4,48,138,48,139,139,48,46,139,46,140,140,46,44,140,44,141,141,44,42,141,42,142,142,42,40,142,40,143,143,40,38,143,38,144,144,38,26,144,26,129,129,26,25,81,145,80,80,145,146,80,146,60,60,146,147,60,147,58,58,147,148,58,148,56,56,148,149,56,149,55,55,149,150,55,150,53,53,150,151,53,151,95,95,151,152,95,152,94,94,152,153,94,153,93,93,153,154,93,154,92,92,154,155,92,155,91,91,155,156,91,156,86,86,156,157,86,157,85,85,157,158,85,158,84,84,158,159,84,159,83,83,159,160,83,160,81,81,160,145,78,161,73,73,161,162,73,162,71,71,162,163,71,163,69,69,163,164,69,164,68,68,164,165,68,165,66,66,165,166,66,166,64,64,166,167,64,167,65,65,167,168,65,168,51,51,168,169,51,169,52,52,169,170,52,170,54,54,170,171,54,171,57,57,171,172,57,172,59,59,172,173,59,173,61,61,173,174,61,174,62,62,174,175,62,175,79,79,175,176,79,176,78,78,176,161,90,88,177,177,88,178,178,88,87,178,87,179,179,87,89,179,89,180,180,89,181,181,89,82,82,77,181,181,77,182,77,76,182,182,76,183,183,76,75,183,75,184,184,75,74,184,74,185,185,74,72,185,72,186,186,72,70,186,70,187,187,70,67,187,67,188,188,67,63,188,63,189,189,63,50,189,50,96,190,191,192,192,191,193,192,193,194,97,98,194,194,98,195,194,195,192,196,191,197,197,191,190,198,199,200,200,199,201,200,201,202,200,202,203,203,202,204,203,204,205,205,204,206,205,206,207,207,206,208,207,208,209,209,208,210,209,210,211,211,210,196,211,196,197,212,199,213,213,199,198,214,215,216,216,215,217,217,215,218,217,218,219,219,218,220,219,220,221,221,220,222,221,222,223,223,222,224,223,224,225,225,224,226,225,226,227,227,226,228,227,228,229,229,228,230,229,230,231,231,230,232,231,232,233,233,232,234,233,234,235,235,234,236,235,236,237,237,236,238,237,238,239,239,238,240,239,240,241,241,240,213,213,240,212,90,177,3,3,177,214,3,214,2,2,214,216,2,216,112,112,11,2,216,217,112,112,217,108,112,108,109,217,219,108,108,219,125,108,125,126,219,221,125,125,221,124,124,221,223,124,223,123,123,223,225,123,225,122,122,225,121,121,225,227,121,227,120,120,227,229,120,229,139,139,229,138,138,229,98,138,98,137,137,98,99,137,99,136,136,99,135,135,99,134,134,99,100,134,100,101,229,231,98,98,231,233,98,233,235,235,237,98,98,237,190,98,190,192,237,239,190,190,239,197,197,239,241,197,241,211,211,241,209,209,241,207,207,241,213,207,213,198,200,203,198,198,203,205,198,205,207,192,195,98,101,102,134,134,102,103,134,103,133,133,103,104,133,104,132,132,104,105,132,105,131,131,105,106,131,106,130,130,106,129,129,106,107,129,107,144,144,107,143,143,107,117,143,117,142,142,117,118,142,118,141,141,118,119,141,119,140,140,119,120,140,120,139,108,113,107,107,113,114,107,114,115,109,110,112,112,110,111,115,116,107,107,116,117,126,127,108,108,127,128,108,128,113,214,177,215,215,177,181,215,181,218,218,181,157,218,157,220,220,157,156,220,156,222,222,156,155,222,155,224,224,155,154,224,154,153,178,179,177,177,179,180,177,180,181,182,145,181,181,145,160,181,160,159,183,161,182,182,161,176,182,176,175,184,163,183,183,163,162,183,162,161,163,184,164,164,184,185,164,185,165,165,185,186,165,186,166,166,186,187,166,187,188,188,189,166,166,189,96,166,96,167,167,96,168,168,96,169,169,96,97,169,97,170,170,97,228,170,228,171,171,228,152,171,152,172,172,152,151,172,151,173,173,151,150,173,150,174,174,150,149,174,149,175,175,149,182,194,193,97,97,193,191,97,191,236,236,191,238,238,191,196,238,196,240,240,196,210,240,210,208,208,206,240,240,206,212,212,206,199,199,206,204,199,204,202,202,201,199,236,234,97,97,234,232,97,232,230,230,228,97,228,226,152,152,226,153,153,226,224,147,146,182,182,146,145,159,158,181,181,158,157,149,148,182,182,148,147,242,243,244,244,243,245,244,245,246,246,245,247,246,247,248,248,247,249,248,249,250,250,249,251,250,251,252,252,251,253,252,253,254,254,253,255,254,255,256,256,255,257,256,257,258,258,257,259,258,259,242,242,259,243,246,252,244,244,252,254,244,254,242,242,254,256,242,256,258,248,250,246,246,250,252,260,245,261,261,245,243,261,243,262,262,243,259,262,259,263,263,259,257,263,257,264,264,257,255,264,255,265,265,255,253,265,253,266,266,253,251,266,251,267,267,251,249,267,249,268,268,249,247,268,247,260,260,247,245,269,270,271,271,270,272,272,270,273,272,273,274,274,273,275,274,275,276,276,275,277,262,278,261,261,278,279,261,279,280,278,262,281,281,262,263,281,263,264,281,264,282,282,264,265,282,265,283,283,265,266,283,266,284,284,266,285,285,266,267,285,267,286,286,267,268,286,268,260,286,260,280,280,260,261,278,269,279,279,269,271,279,271,280,280,271,272,280,272,286,286,272,274,286,274,285,285,274,276,285,276,284,284,276,277,284,277,283,283,277,275,283,275,282,282,275,273,282,273,281,281,273,270,281,270,278,278,270,269,287,288,289,289,288,290,289,290,291,288,287,292,292,287,293,292,293,294,294,293,295,294,295,296,296,295,297,296,297,298,298,297,299,298,299,300,300,299,301,300,301,302,302,301,303,302,303,304,304,303,305,304,305,291,291,305,289,305,299,289,289,299,297,289,297,287,287,297,295,287,295,293,303,301,305,305,301,299,306,291,307,307,291,290,307,290,308,308,290,288,308,288,309,309,288,292,309,292,310,310,292,294,310,294,311,311,294,296,311,296,312,312,296,298,312,298,313,313,298,300,313,300,314,314,300,302,314,302,315,315,302,304,315,304,306,306,304,291,316,317,318,318,317,319,319,317,320,319,320,321,321,320,322,321,322,323,323,322,324,308,325,307,307,325,326,307,326,327,325,308,328,328,308,309,328,309,310,328,310,329,329,310,311,329,311,330,330,311,312,330,312,331,331,312,313,331,313,332,332,313,314,332,314,333,333,314,315,333,315,306,333,306,327,327,306,307,325,316,326,326,316,318,326,318,327,327,318,319,327,319,333,333,319,321,333,321,332,332,321,323,332,323,331,331,323,324,331,324,330,330,324,322,330,322,329,329,322,320,329,320,328,328,320,317,328,317,325,325,317,316,334,335,336,336,335,337,336,337,338,338,337,339,338,339,340,340,339,341,340,341,342,342,341,343,342,343,344,344,343,345,344,345,346,346,345,347,346,347,348,348,347,349,348,349,350,350,349,351,350,351,352,352,351,353,352,353,354,354,353,355,354,355,356,356,355,357,356,357,334,334,357,335,358,339,359,359,339,337,359,337,360,360,337,335,360,335,361,361,335,357,361,357,362,362,357,355,362,355,363,363,355,353,363,353,364,364,353,351,364,351,365,365,351,349,365,349,366,366,349,347,366,347,367,367,347,345,367,345,368,368,345,343,368,343,369,369,343,341,369,341,358,358,341,339,370,342,371,371,342,344,371,344,346,372,338,370,370,338,340,370,340,342,373,334,372,372,334,336,372,336,338,374,354,373,373,354,356,373,356,334,375,350,374,374,350,352,374,352,354,371,346,375,375,346,348,375,348,350,360,376,359,359,376,377,359,377,358,358,377,378,358,378,369,369,378,379,369,379,368,368,379,380,368,380,367,367,380,381,367,381,366,366,381,382,366,382,365,365,382,383,365,383,364,364,383,384,364,384,363,363,384,385,363,385,362,362,385,386,362,386,361,361,386,387,361,387,360,360,387,376,388,378,389,389,378,377,389,377,376,390,380,388,388,380,379,388,379,378,391,382,390,390,382,381,390,381,380,392,384,391,391,384,383,391,383,382,393,386,392,392,386,385,392,385,384,389,376,393,393,376,387,393,387,386,394,395,396,396,395,397,396,397,398,394,399,395,395,399,373,373,399,400,373,400,374,374,400,401,394,402,399,399,402,400,396,393,394,394,393,392,394,392,402,402,392,403,404,405,406,406,405,407,406,407,408,404,409,405,407,410,408,408,410,411,405,372,407,407,372,370,407,370,410,410,370,412,395,373,397,397,373,372,397,372,409,409,372,405,411,412,413,413,412,414,413,414,415,411,410,412,406,408,389,389,408,411,389,411,388,388,411,413,413,415,388,388,415,416,388,416,390,390,416,417,414,418,415,415,418,416,419,401,403,403,401,400,403,400,402,419,420,401,419,421,420,420,421,422,403,392,419,419,392,391,419,391,421,421,391,423,424,425,423,423,425,422,423,422,421,424,426,425,401,420,374,374,420,422,374,422,375,375,422,425,425,426,375,375,426,427,375,427,371,371,427,428,416,428,417,417,428,427,417,427,429,416,418,428,423,391,424,424,391,390,424,390,429,429,390,417,412,370,414,414,370,371,414,371,418,418,371,428,397,409,398,398,409,404,396,398,393,393,398,404,393,404,389,389,404,406,424,429,426,426,429,427,465,475,464,464,475,476,464,476,463,463,476,477,463,477,462,462,477,478,462,478,461,461,478,479,461,479,460,460,479,480,460,480,459,459,480,481,459,481,458,458,481,482,458,482,457,457,482,483,457,483,456,456,483,472,484,474,485,485,474,473,485,473,472,486,476,484,484,476,475,484,475,474,487,478,486,486,478,477,486,477,476,488,480,487,487,480,479,487,479,478,489,482,488,488,482,481,488,481,480,485,472,489,489,472,483,489,483,482,490,491,492,492,491,493,492,493,494,490,495,491,491,495,469,469,495,496,469,496,470,470,496,497,490,498,495,495,498,496,492,489,490,490,489,488,490,488,498,498,488,499,500,501,502,502,501,503,502,503,504,500,505,501,503,506,504,504,506,507,501,468,503,503,468,466,503,466,506,506,466,508,491,469,493,493,469,468,493,468,505,505,468,501,507,508,509,509,508,510,509,510,511,507,506,508,502,504,485,485,504,507,485,507,484,484,507,509,509,511,484,484,511,512,484,512,486,486,512,513,510,514,511,511,514,512,515,497,499,499,497,496,499,496,498,515,516,497,515,517,516,516,517,518,499,488,515,515,488,487,515,487,517,517,487,519,520,521,519,519,521,518,519,518,517,520,522,521,497,516,470,470,516,518,470,518,471,471,518,521,521,522,471,471,522,523,471,523,467,467,523,524,512,524,513,513,524,523,513,523,525,512,514,524,519,487,520,520,487,486,520,486,525,525,486,513,508,466,510,510,466,467,510,467,514,514,467,524,493,505,494,494,505,500,492,494,489,489,494,500,489,500,485,485,500,502,520,525,522,522,525,523,430,431,432,432,431,433,432,433,434,434,433,435,434,435,436,436,435,437,436,437,438,438,437,439,438,439,440,440,439,441,440,441,442,442,441,443,442,443,444,444,443,445,444,445,446,446,445,447,446,447,448,448,447,449,448,449,450,450,449,451,450,451,452,452,451,453,452,453,430,430,453,431,454,435,455,455,435,433,455,433,456,456,433,431,456,431,457,457,431,453,457,453,458,458,453,451,458,451,459,459,451,449,459,449,460,460,449,447,460,447,461,461,447,445,461,445,462,462,445,443,462,443,463,463,443,441,463,441,464,464,441,439,464,439,465,465,439,437,465,437,454,454,437,435,466,438,467,467,438,440,467,440,442,468,434,466,466,434,436,466,436,438,469,430,468,468,430,432,468,432,434,470,450,469,469,450,452,469,452,430,471,446,470,470,446,448,470,448,450,467,442,471,471,442,444,471,444,446,456,472,455,455,472,473,455,473,454,454,473,474,454,474,465,465,474,475]}}};var f6={roboter6:{name:"6-Achs-Industrieroboter",takt:4.2},linear:{name:"6-Achs-Roboter auf Linearachse",takt:5.4},delta:{name:"Delta-Roboter",takt:.7},portal:{name:"Linearportal",takt:3.6}};function M4(i){let t=f6[i.modul],e=Math.max(10,Number(i.speed)||50)/100,n=t.takt*Math.pow(1/e,.8)+(Number(i.hub)||.3)*.8;return Number(i.dreh)&&(n+=.3),n=Math.max(.4,n),{takt:n,stunde:3600/n}}var Ln=(i,t=0)=>i.toLocaleString("de-DE",{maximumFractionDigits:t,minimumFractionDigits:t}),Ci=be.clamp,d6=i=>i*i*(3-2*i),bn=(i,t,e)=>d6(Ci((i-t)/(e-t),0,1)),$r=i=>{let t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)},Ct={stahl:new zt({color:12173770,metalness:.8,roughness:.35}),alu:new zt({color:13883614,metalness:.6,roughness:.4}),dunkel:new zt({color:2896440,metalness:.2,roughness:.7}),gurt:new zt({color:3488578,roughness:.85}),modul:new zt({color:15922422,roughness:.6}),rolle:new zt({color:13226200,metalness:.9,roughness:.25}),holz:new zt({color:13149038,roughness:.85}),klt:new zt({color:5205903,roughness:.6}),presse:new zt({color:4877194,metalness:.3,roughness:.55}),roboter:new zt({color:15856372,roughness:.45}),gelenk:new zt({color:25002,metalness:.3,roughness:.45}),zaun:new zt({color:15905328,roughness:.5}),gitter:new zt({color:9081756,transparent:!0,opacity:.18,side:He,depthWrite:!1}),papier:new zt({color:15326403,roughness:.9}),schale:new zt({color:3817800,roughness:.5}),sensor:new zt({color:2041904,roughness:.4}),led:new zt({color:16742938,emissive:16734720,emissiveIntensity:.6})},kt=(i,t,e,n,s=0,r=0,o=0)=>{let a=new Qt(new Pe(i,t,e),n);return a.position.set(s,r,o),a.castShadow=a.receiveShadow=!0,a},an=(i,t,e,n=24)=>{let s=new Qt(new Us(i,i,t,n),e);return s.castShadow=s.receiveShadow=!0,s};function t2(i,t){let e=an(i,1,t,12);return e.userData.rod=!0,e}var P4=new T(0,1,0);function b4(i,t,e){let n=new T().subVectors(e,t);i.position.copy(t).addScaledVector(n,.5),i.scale.set(1,n.length(),1),i.quaternion.setFromUnitVectors(P4,n.normalize())}function S4(i,t,e){let n=document.createElement("canvas");n.width=64,n.height=64;let s=n.getContext("2d");s.fillStyle=i,s.fillRect(0,0,64,64),s.fillStyle=t;for(let o=0;o<e;o++)s.fillRect(o*64/e,0,64/e*.18,64);let r=new Rr(n);return r.wrapS=r.wrapT=vr,r.colorSpace=Re,r}var e2={eigen:{name:"Ihr Teil aus dem Konfigurator",branche:""},reifen:{name:"Pkw-Reifen",branche:"Automobil",size:[632,205,632],innen:406,info:"Gummi, formstabil"},blech:{name:"Blechteil",branche:"Automobil",size:[600,40,400],info:"glatt, evtl. \xF6lig"},broetchen:{name:"Br\xF6tchen / Backware",branche:"Lebensmittel",size:[100,55,70],info:"weich, empfindlich"},karton:{name:"Karton / Verpackung",branche:"beide",size:[400,250,300],info:"glatt, formstabil"},schale:{name:"Schale / Becher",branche:"Lebensmittel",size:[180,50,130],innen:124,info:"Kunststoff, leicht"}};function p6(i,t){if(i==="reifen"){let o=[],a=[[203,-77.9],[233,-98.39999999999999],[276,-102.5],[308,-86.1],[316,-41],[316,41],[308,86.1],[276,102.5],[233,98.39999999999999],[203,77.9]];for(let[c,l]of a)o.push(new ct(c,l+205/2));return o.push(o[0].clone()),{geo:new na(o,64),mat:new zt({color:1908514,roughness:.85})}}if(i==="blech"){let n=new Yi([[-300,0],[-300,40],[-220,40],[-180,3],[180,3],[220,40],[300,40],[300,0],[220,37],[180,0]].map(([r,o])=>new ct(r,o))),s=new Ns(n,{depth:400,bevelEnabled:!1});return s.translate(0,0,-200),{geo:s,mat:new zt({color:11187132,metalness:.85,roughness:.3})}}if(i==="broetchen"){let n=new ia(1,28,16);n.scale(50,30,35),n.translate(0,18,0);let s=n.attributes.position;for(let r=0;r<s.count;r++)s.getY(r)<4&&s.setY(r,4+(s.getY(r)-4)*.2);return n.translate(0,-3,0),n.computeVertexNormals(),{geo:n,mat:new zt({color:13208124,roughness:.8})}}return i==="karton"?{geo:ns([new Pe(400,250,300).translate(0,125,0),new Pe(400,2,60).translate(0,251,0)].map(s=>s.toNonIndexed()),!0),mats:[new zt({color:12159573,roughness:.9}),new zt({color:14270607,roughness:.6})]}:i==="schale"?{geo:ns([[180,3,130,0,1.5,0],[180,50,3,0,25,63.5],[180,50,3,0,25,-63.5],[3,50,130,88.5,25,0],[3,50,130,-88.5,25,0]].map(([c,l,u,h,f,d])=>new Pe(c,l,u).translate(h,f,d))),mat:new zt({color:15922679,roughness:.3,transparent:!0,opacity:.88})}:{geo:t.part().geo,mat:new zt({color:14263361,metalness:.2,roughness:.55})}}var Jr=["gurtband","modulband","rollenbahn"],Ua={gurtband:{name:"Gurtf\xF6rderband",info:"Allround, Kartons, Teile"},modulband:{name:"Modulband (wei\xDF)",info:"Lebensmittel, hygienisch"},rollenbahn:{name:"Rollenbahn",info:"Reifen, KLT, Kisten"},palette:{name:"Palette (Depalettieren)",info:"Gestapelte Ware, Reifen"},klt:{name:"Kiste / KLT",info:"Griff in die Kiste"},presse:{name:"Maschine: Presse",info:"Blechteile, Automobil"}},Na={gurtband:{name:"Gurtf\xF6rderband",info:"Abtransport"},modulband:{name:"Modulband (wei\xDF)",info:"Lebensmittel, hygienisch"},rollenbahn:{name:"Rollenbahn",info:"Reifen, KLT, Kisten"},palette:{name:"Palettierung mit Lagenbild",info:"Reifen, Kartons"},schalenband:{name:"Band mit Schalen",info:"Lebensmittel"},karton:{name:"Karton / Verpackung",info:"Endverpackung"},klt:{name:"KLT auf Rollenbahn",info:"Kleinteile, Blechteile"}},Zr={roboter6:{name:"6-Achs-Industrieroboter",info:"Schwere Teile, Palettieren"},linear:{name:"Roboter auf Linearachse",info:"7. Achse f\xFCr lange Wege"},delta:{name:"Delta-Roboter",info:"Sehr schnell, leichte Teile"},portal:{name:"Linearportal",info:"Maschinenentnahme, gro\xDFe Wege"}};function i2(i,t,e,n,s={}){let r=new re,o=i==="rollenbahn"?700:i==="modulband"?820:800,a=n<0?-t+150:-150,c=n<0?150:t-150,l=c-a,u=(a+c)/2,h=e,f=null;if(i==="rollenbahn")for(let d=a+40;d<c;d+=90){let g=an(28,h,Ct.rolle,16);g.rotation.x=Math.PI/2,g.position.set(d,o-28,0),r.add(g)}else{f=i==="modulband"?S4("#f4f6f8","#d9dee3",6):S4("#3a4047","#2c3137",3),f.repeat.set(l/300,1);let d=kt(l,12,h,new zt({map:f,roughness:i==="modulband"?.6:.85}),u,o-6,0);r.add(d),r.add(kt(l,60,h-20,Ct.dunkel,u,o-45,0))}for(let d of[-1,1])r.add(kt(l,70,30,Ct.alu,u,o-25,d*(h/2+15)));for(let d=a+100;d<c;d+=Math.max(600,l/3))for(let g of[-1,1])r.add(kt(40,o-60,40,Ct.alu,d,(o-60)/2,g*(h/2+10)));return r.add(kt(40,o-60,40,Ct.alu,c-60,(o-60)/2,h/2+10),kt(40,o-60,40,Ct.alu,c-60,(o-60)/2,-h/2-10)),{group:r,top:o,tex:f,half:150,flow:!0,len:l,dir:n,x0:a,x1:c}}function L4(){let i=new re;for(let t of[-350,0,350])i.add(kt(1200,22,100,Ct.holz,0,133,t));for(let t of[-550,0,550])for(let e of[-350,0,350])i.add(kt(145,78,100,Ct.holz,t,83,e));for(let t of[-550,0,550])i.add(kt(100,22,800,Ct.holz,t,33,0));for(let t of[-500,-250,0,250,500])i.add(kt(100,22,800,Ct.holz,t,11,0));return i}function I4(i,t){let[e,n]=(i||"1x1").split("x").map(Number),s=t[0]+30,r=t[2]+30,o=[];for(let a=0;a<e;a++)for(let c=0;c<n;c++)o.push([(a-(e-1)/2)*s,(c-(n-1)/2)*r]);return{pts:o,w:e*s,d:n*r}}function E4(i,t,e){let n=t.size;if(Jr.includes(i))return i2(i,2400,Math.max(420,n[2]+160),-1);if(i==="palette"){let h=L4(),f=I4(n[0]>500?"2x1":n[0]>300?"2x2":"3x2",n);return{group:h,top:144,half:650,flow:!1,stack:{pat:f,lagen:3,zwischen:e.lage==="lagen"}}}if(i==="klt"){let h=new re,f=Math.max(600,n[0]*2+80),d=Math.max(400,n[2]*2+80),g=280;h.add(kt(f+120,600,d+120,Ct.alu,0,300,0));for(let[_,m,p,y]of[[f,8,0,d/2],[f,8,0,-d/2],[8,d,f/2,0],[8,d,-f/2,0]])h.add(kt(_,g,m,Ct.klt,p,600+g/2,y));return h.add(kt(f,8,d,Ct.klt,0,604,0)),{group:h,top:608,half:f/2+60,flow:!1,bin:{W:f,D:d}}}let s=new re,r=Math.max(1100,n[0]+500),o=Math.max(800,n[2]+300),a=Math.max(500,n[0]+160),c=Math.max(500,n[2]+160),l=-(a/2+120+(r+300)/2);s.add(kt(r+300,900,o,Ct.presse,l,450,0));for(let h of[-1,1])s.add(kt(260,1500,o,Ct.presse,l+h*(r/2+20),1650,0));s.add(kt(r+300,500,o,Ct.presse,l,2600,0));let u=kt(r-60,300,o-80,Ct.stahl,l,1900,0);return s.add(u,kt(r-100,60,o-120,Ct.dunkel,l,930,0)),s.add(kt(a,60,c,Ct.stahl,0,930,0),kt(a-60,900,c-60,Ct.alu,0,450,0)),{group:s,top:960,half:a/2+60,flow:!1,ram:u}}function w4(i,t,e,n=0){let s=Number(n)%180===90?[t.size[2],t.size[1],t.size[0]]:t.size;if(Jr.includes(i))return i2(i,2400,Math.max(420,s[2]+160),1);let r=I4(e.lagenbild,s);if(r.d+=20,r.w+=20,i==="palette")return{group:L4(),top:144,half:Math.max(650,r.w/2+50),flow:!1,stack:{pat:r,lagen:Number(e.lagen)||1,zwischen:e.zwischen==="ja"}};if(i==="schalenband"){let u=i2("modulband",2400,Math.max(420,r.d+120),1);return u.trays={pat:r,w:r.w+40,d:r.d+40},u}if(i==="karton"){let u=new re,h=r.w+40,f=r.d+40,d=Math.max(120,s[1]*(Number(e.lagen)||1)+40);u.add(kt(h+300,700,f+300,Ct.alu,0,350,0));let g=new zt({color:12159573,roughness:.9});for(let[_,m,p,y]of[[h,6,0,f/2],[h,6,0,-f/2],[6,f,h/2,0],[6,f,-h/2,0]])u.add(kt(_,d,m,g,p,700+d/2,y));u.add(kt(h,6,f,g,0,703,0));for(let _ of[-1,1]){let m=kt(h,4,f*.45,g,0,700+d,_*(f/2+f*.2));m.rotation.x=_*.5,u.add(m)}return{group:u,top:706,half:h/2+200,flow:!1,stack:{pat:r,lagen:Number(e.lagen)||1,zwischen:e.zwischen==="ja"}}}let o=new re,a=r.w+60,c=r.d+60,l=Math.max(200,s[1]*(Number(e.lagen)||1)+60);for(let u=-a/2-150;u<a/2+150;u+=90){let h=an(28,c+120,Ct.rolle,16);h.rotation.x=Math.PI/2,h.position.set(u,572,0),o.add(h)}for(let u of[-1,1])o.add(kt(a+300,70,30,Ct.alu,0,575,u*(c/2+75)),kt(40,540,40,Ct.alu,-a/2-100,270,u*(c/2+75)),kt(40,540,40,Ct.alu,a/2+100,270,u*(c/2+75)));for(let[u,h,f,d]of[[a,8,0,c/2],[a,8,0,-c/2],[8,c,a/2,0],[8,c,-a/2,0]])o.add(kt(u,l,h,Ct.klt,f,600+l/2,d));return o.add(kt(a,8,c,Ct.klt,0,604,0)),{group:o,top:608,half:a/2+200,flow:!1,stack:{pat:r,lagen:Number(e.lagen)||1,zwischen:e.zwischen==="ja"}}}function s2(i=0){let t={ped:i,base:300,hs:520,L2:1e3,L3:1050,f:180,r:120,mat:Ct.roboter,joint:Ct.dunkel},e=new re;t.ped&&e.add(kt(420,t.ped,420,Ct.alu,0,t.ped/2,0));let n=t.ped,s=an(t.r*1.6,t.base,t.mat,32);s.position.y=n+t.base/2,e.add(s);let r=new re;r.position.y=n+t.base,e.add(r);let o=an(t.r*1.3,t.hs-40,t.mat,32);o.position.y=(t.hs-40)/2,r.add(o);let a=new re;a.position.y=t.hs,r.add(a);let c=an(t.r*1.05,t.r*2.4,t.joint,28);c.rotation.x=Math.PI/2,a.add(c);let l=kt(t.r*1.3,t.L2,t.r*1.1,t.mat,0,t.L2/2,0);a.add(l);let u=new re;u.position.y=t.L2,a.add(u);let h=an(t.r*.9,t.r*2.1,t.joint,28);h.rotation.x=Math.PI/2,u.add(h);let f=an(t.r*.62,t.L3,t.mat,24);f.position.y=t.L3/2,u.add(f);let d=new re;d.position.y=t.L3,u.add(d);let g=an(t.r*.55,t.r*1.4,t.joint,24);g.rotation.x=Math.PI/2,d.add(g);let _=an(t.r*.45,t.f,t.mat,24);_.position.y=t.f/2,d.add(_);let m=an(t.r*.5,12,Ct.stahl,24);m.position.y=t.f,d.add(m);let p=new T,y=new ct;return{group:e,cfg:t,tip:x=>(m.getWorldPosition(x),x.y-=6,x),reach(x){let v=new T(x.x,x.y+t.f,x.z),E=e.position,w=v.x-E.x,b=v.z-E.z,I=Math.atan2(-b,w);p.set(0,n+t.base+t.hs,0),y.set(Math.hypot(w,b),v.y-E.y-p.y);let M=Math.min(y.length(),t.L2+t.L3-1),S=Math.atan2(y.y,y.x)+Math.acos(Ci((t.L2*t.L2+M*M-t.L3*t.L3)/(2*t.L2*M),-1,1)),D=t.L2*Math.cos(S),N=t.L2*Math.sin(S),V=Math.atan2(y.y-N,y.x-D);r.rotation.y=I,a.rotation.z=S-Math.PI/2,u.rotation.z=V-S,d.rotation.z=-Math.PI/2-V}}}function T4(i,t){let e=new re,n=t-i+1200,s=(i+t)/2;e.add(kt(n,160,500,Ct.alu,s,80,0));for(let a of[-1,1])e.add(kt(n,40,60,Ct.stahl,s,180,a*180));for(let a=i-500;a<=t+500;a+=900)e.add(kt(120,30,560,Ct.dunkel,a,15,0));let r=s2(260),o=kt(620,60,620,Ct.gelenk,0,230,0);return r.group.add(o),r.group.children[0].material=Ct.presse,e.add(r.group),{group:e,reach(a){r.group.position.x=Ci(a.x,i,t),r.reach(a)},tip:r.tip}}function A4(i,t,e,n){let s=new re,r=2100,o=Math.max(1600,n-e+1e3);for(let x of[-1,1])for(let v of[-1,1])s.add(kt(70,r+80,70,Ct.alu,i+x*o/2,(r+80)/2,t+v*700));for(let x of[-1,1])s.add(kt(o+70,70,70,Ct.alu,i,r+80,t+x*700));for(let x of[-1,1])s.add(kt(70,70,1400,Ct.alu,i+x*o/2,r+80,t));s.add(kt(o,40,260,Ct.alu,i,r+80,t));let a=an(260,140,Ct.roboter,36);a.position.set(i,r,t),s.add(a);let c=210,l=420,u=950,h=70,f=[0,1,2].map(x=>{let v=Math.PI/2+x*2*Math.PI/3,E=new T(Math.cos(v),0,Math.sin(v)),w=an(70,160,Ct.gelenk,20);w.rotation.z=Math.PI/2,w.rotation.y=-v,w.position.set(i+E.x*c,r-40,t+E.z*c),s.add(w);let b=t2(32,Ct.roboter),I=t2(10,Ct.stahl),M=t2(10,Ct.stahl);return s.add(b,I,M),{u:E,v:new T(-E.z,0,E.x),up:b,lo1:I,lo2:M,B:new T(i+E.x*c,r-40,t+E.z*c)}}),d=an(95,40,Ct.stahl,24);s.add(d);let g=new T,_=new T,m=new T,p=new T,y=new T;return{group:s,tip:x=>x.set(d.position.x,d.position.y-20,d.position.z),reach(x){d.position.set(x.x,x.y+20,x.z);for(let v of f){_.set(x.x,x.y+40,x.z).addScaledVector(v.u,h),m.subVectors(_,v.B);let E=m.dot(v.u),w=m.y,b=(l*l+m.lengthSq()-u*u)/(2*l),I=Math.hypot(E,w),M=Math.atan2(w,E),S=Math.acos(Ci(b/I,-1,1)),D=null;for(let N of[-M+S,-M-S]){let V=v.B.clone().addScaledVector(v.u,l*Math.cos(N)).add(new T(0,-l*Math.sin(N),0));(!D||V.dot(v.u)>D.dot(v.u))&&(D=V)}g.copy(D),b4(v.up,v.B,g);for(let[N,V]of[[v.lo1,1],[v.lo2,-1]])b4(N,p.copy(g).addScaledVector(v.v,V*40),y.copy(_).addScaledVector(v.v,V*40))}}}}function R4(i,t,e,n,s){let r=new re,o=n-e+1400,a=900;for(let h of[-1,1])for(let f of[-1,1])r.add(kt(140,s,140,Ct.presse,i+h*o/2,s/2,t+f*a));for(let h of[-1,1])r.add(kt(o+140,160,180,Ct.alu,i,s+80,t+h*a));let c=kt(220,200,a*2+200,Ct.gelenk,0,s+240,t);r.add(c);let l=kt(320,280,320,Ct.alu,0,s+240,0);r.add(l);let u=kt(160,2400,160,Ct.stahl,0,0,0);return r.add(u),{group:r,tip:h=>h.set(u.position.x,u.position.y-1200,u.position.z),reach(h){c.position.x=h.x,l.position.set(h.x,s+240,h.z),u.position.set(h.x,h.y+1200,h.z)}}}function m6(i,t,e,n,s){let o=(a,c,l,u)=>{let h=new re;h.add(kt(a,40,40,Ct.zaun,0,1800,0),kt(a,40,40,Ct.zaun,0,120,0));let f=new Qt(new Fn(a,1680),Ct.gitter);f.position.y=960,h.add(f),h.position.set(c,0,l),h.rotation.y=u,i.add(h)};for(let a=-t/2;a<=t/2+1;a+=t/Math.ceil(t/1500))i.add(kt(50,1800,50,Ct.zaun,n+a,1800/2,s-e));o(t,n,s-e,0),o(e*1.2,n-t/2,s-e*.4,Math.PI/2),o(e*1.2,n+t/2,s-e*.4,Math.PI/2)}var D4={k:"band",label:"Bandgeschwindigkeit",opts:[["langsam","langsam"],["mittel","mittel"],["schnell","schnell"]],def:"mittel"},Ba=[{k:"lage",label:"Lage des Produkts",opts:[["ausgerichtet","ausgerichtet"],["chaotisch","chaotisch (mit Kamera)"]],def:"ausgerichtet"},{...D4,when:i=>Jr.includes(i)}],n2=[{k:"speed",label:"Geschwindigkeit",range:[10,100,5],unit:"%",def:70},{k:"hub",label:"Hubh\xF6he",range:[.1,1,.05],unit:"m",def:.3,dec:2},{k:"dreh",label:"Drehung des Produkts",opts:[["0","keine"],["90","90\xB0"],["180","180\xB0"]],def:"0"},{k:"zaun",label:"Schutzzaun",opts:[["ja","ein"],["nein","aus"]],def:"ja",when:i=>i!=="delta"}],Oa=[{k:"lagenbild",label:"Lagenbild",opts:[["1x1","1 \xD7 1"],["2x1","2 \xD7 1"],["2x2","2 \xD7 2"],["3x2","3 \xD7 2"]],def:"2x2",when:i=>!Jr.includes(i)},{k:"lagen",label:"Anzahl Lagen",range:[1,5,1],unit:"",def:2,when:i=>i==="palette"||i==="karton"||i==="klt"},{k:"zwischen",label:"Zwischenlage",opts:[["ja","ja"],["nein","nein"]],def:"nein",when:i=>i==="palette"||i==="karton"||i==="klt"},{...D4,when:i=>Jr.includes(i)||i==="schalenband"}],ir=i=>Object.fromEntries(i.map(t=>[t.k,t.def])),C4={eigen:{name:"Ihr Teil: F\xF6rderband \u2192 Roboter \u2192 KLT",produkt:"eigen",s1:{modul:"gurtband"},s2:{modul:"roboter6",speed:70},s3:{modul:"klt",lagenbild:"2x1",lagen:2}},reifenPal:{name:"Automobil: Reifen palettieren",produkt:"reifen",s1:{modul:"rollenbahn"},s2:{modul:"roboter6",speed:70},s3:{modul:"palette",lagenbild:"2x1",lagen:3}},presse:{name:"Automobil: Presse entnehmen",produkt:"blech",s1:{modul:"presse"},s2:{modul:"portal",speed:80},s3:{modul:"klt",lagenbild:"1x1",lagen:4,zwischen:"ja"}},reifenDepal:{name:"Automobil: Reifen depalettieren",produkt:"reifen",s1:{modul:"palette"},s2:{modul:"roboter6",speed:70},s3:{modul:"rollenbahn"}},backwaren:{name:"Lebensmittel: Backwaren in Schalen",produkt:"broetchen",s1:{modul:"modulband",lage:"chaotisch"},s2:{modul:"delta",speed:90,zaun:"nein"},s3:{modul:"schalenband",lagenbild:"2x2"}},kartons:{name:"Lebensmittel: Kartons palettieren",produkt:"karton",s1:{modul:"gurtband"},s2:{modul:"linear",speed:60,dreh:"90"},s3:{modul:"palette",lagenbild:"2x2",lagen:3}}};function U4(i){let t=document.querySelector("[data-simulator]");if(!t)return;let e=F=>t.querySelector(F),n=e(".sim"),s=e(".sim__view"),r=!1,o={vorlage:"reifenPal",produkt:{typ:"reifen",groesse:100},s1:null,s2:null,s3:null},a="produkt";function c(F){if(o.vorlage=F,F==="leer")o.produkt={typ:"eigen",groesse:100},o.s1=o.s2=o.s3=null,a="produkt";else{let z=C4[F];o.produkt={typ:z.produkt,groesse:100},o.s1={...ir(Ba),...z.s1},o.s2={...ir(n2),...z.s2},o.s3={...ir(Oa),...z.s3},a="slot1"}}function l(){let F=o.produkt.typ,z=(o.produkt.groesse||100)/100;if(F==="eigen"){let K=i.part(),mt=K?[K.size.x,K.size.y,K.size.z]:[100,100,100];return{typ:F,name:K?K.label.replace(/^Grundform: /,""):"Ihr Teil",size:mt.map(k=>k*z),griff:(K?K.grip:100)*z,innen:K&&K.inside?K.grip*z:null,f:z}}let tt=e2[F];return{typ:F,name:tt.name,size:tt.size.map(K=>K*z),griff:tt.size[2]*z,innen:tt.innen?tt.innen*z:null,f:z}}let u=s.querySelector("canvas"),h,f,d,g,_;function m(){h=new Si({canvas:u,antialias:!0}),h.setPixelRatio(Math.min(window.devicePixelRatio,2)),h.toneMapping=Fs,h.shadowMap.enabled=!0,h.shadowMap.type=Br,f=new ri,f.background=new $t(15198958),f.fog=new Ko(15198958,9e3,2e4),f.environment=new bi(h).fromScene(new Vs(h),.04).texture,f.environmentIntensity=.7,d=new Ie(35,1,50,6e4),g=new ks(d,u),g.enableDamping=!0,g.maxPolarAngle=Math.PI*.49;let F=new ji(16777215,1.5);F.position.set(-2500,6e3,3500),F.castShadow=!0,F.shadow.mapSize.set(2048,2048),Object.assign(F.shadow.camera,{left:-5e3,right:5e3,top:5e3,bottom:-5e3,near:500,far:15e3}),F.shadow.bias=-3e-4,F.shadow.normalBias=8,f.add(F,new Ki(16777215,13620442,.6));let z=new Qt(new Fn(4e4,4e4),new zt({color:14672872,roughness:.95}));z.rotation.x=-Math.PI/2,z.receiveShadow=!0;let tt=new Os(4e4,80,13028821,13883871);tt.position.y=1,f.add(z,tt),d.position.set(-1800,3600,6400),g.target.set(0,700,300),new ResizeObserver(y).observe(s),y(),u.addEventListener("pointerdown",K=>{p=[K.clientX,K.clientY]}),u.addEventListener("pointerup",K=>{p&&Math.hypot(K.clientX-p[0],K.clientY-p[1])<5&&v(K)})}let p=null;function y(){let F=s.clientWidth,z=s.clientHeight;h.setSize(F,z,!1),d.aspect=F/z,d.updateProjectionMatrix()}let x=new ca;function v(F){let z=u.getBoundingClientRect();x.setFromCamera(new ct((F.clientX-z.left)/z.width*2-1,-(F.clientY-z.top)/z.height*2+1),d);let tt=x.intersectObjects(_?_.children:[],!0)[0],K=tt&&tt.object;for(;K&&!K.userData.slot;)K=K.parent;K&&(a=K.userData.slot,Q())}let E=null;function w(){let F=i.active();if(E&&E.id===F.id)return E;let z=20,tt=[],K=[];F.root.traverse(R=>K.push(R));for(let R=0;R<=z;R++)F.set(R/z),F.root.updateMatrixWorld(!0),tt.push(K.map(G=>G.matrix.clone()));F.set(0),F.paint("");let mt=F.root.clone(!0),k=[];mt.traverse(R=>k.push(R)),k.forEach((R,G)=>{G>0&&(R.matrixAutoUpdate=!1),R.castShadow=!0}),mt.position.set(0,0,0),mt.rotation.set(0,0,0),mt.visible=!0,i.restore();let dt=new re;return dt.add(mt),E={id:F.id,code:F.code,range:F.range,reach:F.reach,length:F.length,holder:dt,set(R){let G=tt[Math.round(Ci(R,0,1)*z)];k.forEach((W,Z)=>{Z>0&&(W.matrix.copy(G[Z]),W.matrixWorldNeedsUpdate=!0)})}},E.set(0),E}let b=null;function I(){if(!h)return;_&&(E&&_.remove(E.holder),f.remove(_),_.traverse(wt=>{wt.geometry&&!wt.userData.keepGeo&&wt.geometry.dispose()})),_=new re,f.add(_),b=null;let F=l(),z=o.s1&&o.s2&&o.s3;e("#sim-empty").hidden=!!z;let tt=w(),K=o.s2?o.s2.modul:"roboter6",mt={roboter6:650,linear:1500,delta:120,portal:500}[K],k=K==="roboter6"||K==="linear"?1100:0,dt=o.s1?E4(o.s1.modul,F,o.s1):null,R=o.s3?w4(o.s3.modul,F,o.s3,o.s2?o.s2.dreh:0):null,G=-(mt+(dt?dt.half:300)),W=mt+(R?R.half:300),Z=(wt,jt,ae,te,fe,Ze)=>{let Ge=new Qt(new Fn(jt,ae),new zt({color:te,transparent:!0,opacity:.55,roughness:1}));if(Ge.rotation.x=-Math.PI/2,Ge.position.set(wt,3,k),Ge.receiveShadow=!0,Ge.userData.slot=fe,_.add(Ge),!Ze)return;let Je=document.createElement("canvas");Je.width=512,Je.height=96;let Ne=Je.getContext("2d");Ne.fillStyle="#ffffff",Ne.font="600 44px system-ui, sans-serif",Ne.fillText(Ze,24,64);let Vn=new Rr(Je);Vn.colorSpace=Re;let We=new Qt(new Fn(1e3,190),new Mi({map:Vn,transparent:!0}));We.rotation.x=-Math.PI/2,We.position.set(wt-jt/2+520,5,k+ae/2-120),We.userData.slot=fe,_.add(We)},_t=dt&&dt.flow?2700:dt?dt.half*2+200:1400,At=R&&R.flow?2700:R?R.half*2+200:1400;if(Z(G-(dt&&dt.flow?1050:0),_t,1900,3112897,"slot1","1  Ankunft"),Z(W+(R&&R.flow?1050:0),At,1900,3054939,"slot3","3  Weitertransport"),Z(0,Math.max(1200,mt*2+400),K==="roboter6"?2400:1900,14711583,"slot2",""),dt&&(dt.group.position.set(G,0,k),dt.group.userData.slot="slot1",_.add(dt.group)),R&&(R.group.position.set(W,0,k),R.group.userData.slot="slot3",_.add(R.group)),dt&&o.s1){let wt=o.s1.lage==="chaotisch"?"kamera3d":"lichtschranke";if(wt==="lichtschranke")for(let jt of[-1,1]){let ae=kt(40,160,40,Ct.sensor,G-260,dt.top+80,k+jt*(F.size[2]/2+150));ae.userData.slot="slot1",_.add(ae)}else{let jt=dt.top+F.size[1]*3+900;_.add(kt(60,jt,60,Ct.alu,G-450,jt/2,k-700),kt(60,60,760,Ct.alu,G-450,jt,k-340));let ae=kt(180,120,140,Ct.sensor,G-450,jt-80,k);ae.userData.slot="slot1",_.add(ae);let te=kt(120,12,100,Ct.led,G-450,jt-146,k);_.add(te),wt==="kamera3d"&&_.add(kt(70,70,70,Ct.led,G-450,jt-60,k+110))}}let Ut=null;if(o.s2){let wt=o.s2.modul;wt==="roboter6"?Ut=s2():wt==="linear"?Ut=T4(G+400,W-400):wt==="delta"?Ut=A4(0,k,G,W):Ut=R4(0,k,G,W,2400),Ut.group.userData.slot="slot2",_.add(Ut.group),o.s2.zaun==="ja"&&wt!=="delta"&&m6(_,W-G+(wt==="portal"?2e3:1400),wt==="portal"?1200:900,0,wt==="portal"?k:0)}_.add(tt.holder),tt.holder.visible=!!Ut;let Ht=p6(F.typ,i),xt=Ht.mats||Ht.mat,B=()=>{let wt=new Qt(Ht.geo,xt);return wt.scale.setScalar(F.f),wt.castShadow=wt.receiveShadow=!0,wt.userData.keepGeo=F.typ==="eigen",wt.userData.slot="produkt",_.add(wt),wt},pt=[],yt=wt=>{for(;pt.length<=wt;)pt.push(B());return pt[wt]},Ft=R&&R.trays?[0,1].map(()=>{let wt=Tt(W,R.top,k,R.trays);return _.add(wt),wt}):[],It=R&&R.stack&&R.stack.zwischen?Array.from({length:R.stack.lagen-1},(wt,jt)=>{let ae=kt(R.stack.pat.w,4,R.stack.pat.d,Ct.papier,W,R.top+(jt+1)*(F.size[1]+6)-3,k);return _.add(ae),ae}):[];if(b={P:F,src:dt,tgt:R,device:Ut,g:tt,pickX:G,placeX:W,zLine:k,take:yt,pool:pt,trays:Ft,sheets:It},dt&&R&&Ut){let wt=dt.top+F.size[1]+60,jt=R.top+F.size[1]+60,ae=Number(o.s2.hub)*1e3,te=[new T(G-(dt.flow?1800:0),wt,k),new T(G,wt,k),new T(G,wt+ae,k),new T(W,jt+ae,k),new T(W,jt,k),new T(W+(R.flow||R.trays?1800:0),jt,k)],fe=new Ar(new xe().setFromPoints(te),new ra({color:25002,dashSize:60,gapSize:50}));fe.computeLineDistances(),_.add(fe)}let Jt=[o.produkt.typ,o.s1&&o.s1.modul,o.s2&&o.s2.modul,o.s3&&o.s3.modul].join();Jt!==M&&(M=Jt,S()),N=performance.now(),St(0),Gt()}let M="";function S(){let F=new se;if(_.children.forEach(mt=>{mt.isMesh&&mt.geometry.type==="PlaneGeometry"||F.expandByObject(mt)}),F.isEmpty())return;let z=F.getCenter(new T),tt=F.getSize(new T),K=Math.max(tt.x,tt.z*1.3,tt.y*1.6)*.52/Math.tan(be.degToRad(d.fov/2))/Math.max(1,d.aspect*.75);g.target.set(z.x,Math.min(z.y,900),z.z),d.position.set(z.x-K*.28,Math.min(z.y,900)+K*.55,z.z+K*.85),g.update()}let D=!1,N=0,V=0,L=new T,O=new T,$=new T,st=new T,it=new T,et=new T,lt=new T,ht=()=>Ci(Ot?Ot.takt:3,2.2,7);function Mt(F,z,tt){let{src:K,P:mt,pickX:k,zLine:dt}=b,R=o.s1.lage==="chaotisch",G=R?($r(F+z)-.5)*1.2:0,W=R?($r(F+z+7)-.5)*.3*mt.size[2]:0;if(K.flow){let Z=Math.max(mt.size[0],mt.size[2])+200;return z*Z-Z*tt>K.len-mt.size[0]/2-150?null:{p:new T(k-z*Z+Z*tt,K.top,dt+W),yaw:G}}if(K.stack){let Z=K.stack.pat.pts.length,_t=Z*K.stack.lagen,At=_t-1-(F%_t+z);if(At<0)return null;let Ut=Math.floor(At/Z),[Ht,xt]=K.stack.pat.pts[At%Z];return{p:new T(k+Ht,K.top+Ut*(mt.size[1]+(K.stack.zwischen?4:0)),dt+xt),yaw:0}}if(K.bin){let _t=5-(F%6+z);if(_t<0)return null;let At=($r(_t*3+1)-.5)*(K.bin.W-b.P.size[0]-40),Ut=($r(_t*5+2)-.5)*(K.bin.D-b.P.size[2]-40);return{p:new T(k+(z===0?0:At),K.top+_t*b.P.size[1]*.35,dt+(z===0?0:Ut)),yaw:($r(_t)-.5)*1.5}}return z===0?{p:new T(k,K.top,dt),yaw:0}:null}function j(F){let{tgt:z,P:tt,placeX:K,zLine:mt}=b;if(z.stack){let k=z.stack.pat.pts.length,dt=k*z.stack.lagen,R=F%dt,G=Math.floor(R/k),[W,Z]=z.stack.pat.pts[R%k];return{p:new T(K+W,z.top+G*(tt.size[1]+(z.stack.zwischen?6:0))+(z.stack.zwischen&&G>0,0),mt+Z),i:R,total:dt,layer:G}}if(z.trays){let k=z.trays.pat.pts.length,dt=F%k,[R,G]=z.trays.pat.pts[dt];return{p:new T(K+R,z.top+8,mt+G),i:dt,total:k}}return{p:new T(K,z.top,mt),i:0,total:1}}let at=F=>({langsam:.6,mittel:1,schnell:1.6})[F]||1;function St(F){if(!b)return;let{src:z,tgt:tt,device:K,g:mt,P:k}=b;if(!z||!tt||!K){if(b.pool.forEach(H=>{H.visible=!1}),z){let H=Mt(0,0,0);if(H){let X=b.take(0);X.visible=!0,X.position.copy(H.p)}}return}let dt=ht(),R=Math.floor(F/dt),G=F/dt-R,W=Number(o.s2.hub)*1e3,Z=mt.range,_t=!(Z.aussen&&k.griff>=Z.aussen[0]&&k.griff<=Z.aussen[1])&&Z.innen&&k.innen&&k.innen>=Z.innen[0]&&k.innen<=Z.innen[1],At=_t?k.innen:k.griff,Ut=_t?Z.innen:Z.aussen,Ht=Ci((Ut[1]-At)/Math.max(1,Ut[1]-Ut[0]),0,1),xt=Math.min(k.size[1]*.6,mt.reach*.8);st.set(0,k.size[1]-xt,0);let B=k.typ==="eigen"&&i.part()?i.part().pose:null;B&&(st.set(B.x,B.y,B.z).multiplyScalar(k.f),_t=B.inside,B.state==="gegriffen"?Ht=B.t:_t&&Z.innen&&(Ht=Ci((Z.innen[1]-k.griff)/Math.max(1,Z.innen[1]-Z.innen[0]),0,1)));let pt=(H,X)=>X.copy(st).applyAxisAngle(P4,H),yt=bn(G,0,.14),Ft=bn(G,.14,.24),It=bn(G,.24,.38),Jt=bn(G,.38,.62),wt=bn(G,.62,.75),jt=bn(G,.76,.84),ae=bn(G,.84,.9),te=bn(G,.9,1),fe=Mt(R,0,0)||{p:new T(b.pickX,z.top,b.zLine),yaw:0},Ze=j(R),Ge=be.degToRad(Number(o.s2.dreh)||0),Je=pt(fe.yaw,it).add(fe.p),Ne=pt(Ge,et).add(Ze.p),Vn=Math.max(Je.y,Ne.y)+W,We,Gn,Wn,Xn;if(G<.38)We=Je.x,Wn=Je.z,Gn=be.lerp(Je.y+W,Je.y,yt)+(Vn-Je.y)*It,Xn=fe.yaw;else if(G<.62)We=be.lerp(Je.x,Ne.x,Jt),Wn=be.lerp(Je.z,Ne.z,Jt),Gn=Vn+Math.sin(Jt*Math.PI)*80,Xn=be.lerp(fe.yaw,Ge,Jt);else if(G<.9)We=Ne.x,Wn=Ne.z,Gn=be.lerp(Vn,Ne.y,wt)+W*ae,Xn=Ge;else{let H=Mt(R+1,0,0)||fe,X=pt(H.yaw,lt).add(H.p);We=be.lerp(Ne.x,X.x,te),Wn=be.lerp(Ne.z,X.z,te),Gn=be.lerp(Ne.y+W,X.y+W,te)+Math.sin(te*Math.PI)*80,Xn=be.lerp(Ge,H.yaw,te)}mt.set(_t?1-(1-Ht)*Ft*(1-jt):Ht*Ft*(1-jt)),O.set(We,Gn+mt.length,Wn),K.reach(O),K.tip(L),L.y-=mt.length,We=L.x,Gn=L.y,Wn=L.z,mt.holder.position.copy(L),mt.holder.rotation.y=Xn;let li=0,Wa=G>=.24&&G<.8,P=G>=.8,Y=o.s1.bewegung==="stopgo"?bn(G,.4,.75):bn(G,.3,1);for(let H=G>=.24?1:0;H<6;H++){let X=Mt(R,H,z.flow?Y:0);if(!X)break;let vt=b.take(li++);vt.visible=!0,vt.position.copy(X.p),vt.rotation.set(0,X.yaw,0)}if(Wa){let H=b.take(li++);H.visible=!0,H.position.copy(L).sub(pt(Xn,lt)),H.rotation.set(0,Xn,0)}let J=at(o.s3.band)*260;if(tt.flow)for(let H=P?0:1;H<8;H++){let X=(P?(G-.8)*dt:(G+.2)*dt)+(H-(P?0:1))*dt,vt=b.placeX+X*J;if(vt>b.placeX+tt.len-200)break;let Rt=b.take(li++);Rt.visible=!0,Rt.position.set(vt,tt.top,b.zLine),Rt.rotation.set(0,Ge,0)}else{let H=j(R),X=P?H.i:H.i-1;for(let vt=0;vt<=X;vt++){let Rt=j(R-H.i+vt),Nt=b.take(li++);Nt.visible=!0,Nt.position.copy(Rt.p),Nt.rotation.set(0,Ge,0)}if(tt.trays&&H.i===0&&R>0){let vt=tt.trays.pat.pts.length,Rt=(G+.2)*dt*J;for(let Nt=0;Nt<vt;Nt++){let Wt=j(R-vt+Nt),qt=b.take(li++);qt.visible=!0,qt.position.copy(Wt.p),qt.position.x+=Rt,qt.rotation.set(0,Ge,0)}}}for(let H=li;H<b.pool.length;H++)b.pool[H].visible=!1;if(b.trays.length){let H=j(R),X=H.i===0&&R>0?(G+.2)*dt*J:null;b.trays[1].visible=X!=null,X!=null&&(b.trays[1].position.x=b.placeX+X)}if(b.sheets.length){let H=j(R),X=Math.floor((P?H.i+1:H.i)/tt.stack.pat.pts.length);b.sheets.forEach((vt,Rt)=>{vt.visible=Rt+1<=X})}z.ram&&(z.ram.position.y=1900-bn(G,.45,.6)*(940-k.size[1]-160)+bn(G,.62,.8)*(940-k.size[1]-160)),z.tex&&(z.tex.offset.x=-(F*at(o.s1.band)*.5)%1),tt.tex&&(tt.tex.offset.x=-(F*at(o.s3.band)*.5)%1)}let Pt=new Map;function Tt(F,z,tt,K){let mt=K.w+"x"+K.d;if(!Pt.has(mt)){let G=K.w,W=K.d;Pt.set(mt,ns([[G,3,W,0,3/2,0],[G,40,3,0,40/2,W/2],[G,40,3,0,40/2,-W/2],[3,40,W,G/2,40/2,0],[3,40,W,-G/2,40/2,0]].map(([Z,_t,At,Ut,Ht,xt])=>new Pe(Z,_t,At).translate(Ut,Ht,xt))))}let k=new Qt(Pt.get(mt),Ct.schale);return k.position.set(F,z,tt),k.castShadow=k.receiveShadow=!0,k.userData.keepGeo=!0,k}let Ot=null;function Gt(){let F=o.s1&&o.s2&&o.s3;if(e("#sim-run").disabled=!F,!F){Ot=null,e("#sim-takt").textContent=e("#sim-stunde").textContent="\u2013";return}let z=Ot=M4(o.s2);e("#sim-takt").textContent=`${Ln(z.takt,1)} s`,e("#sim-stunde").textContent=Ln(Math.round(z.stunde/10)*10),Lt(l(),z)}function Lt(F,z){let tt=(mt,k,dt)=>mt?`${dt[mt.modul].name} (`+k.filter(R=>!R.when||R.when(mt.modul,mt)).map(R=>`${R.label}: ${Vt(R,mt[R.k])}`).join(", ")+")":"\u2013",K=["Guten Tag,","","\xFCber den Greifer-Simulator habe ich folgende Anlage zusammengestellt:","",`Greifer: ${i.active().code}`,`Produkt: ${F.name}, ca. ${Ln(F.size[0])} \xD7 ${Ln(F.size[1])} \xD7 ${Ln(F.size[2])} mm`,`1 Ankunft: ${tt(o.s1,Ba,Ua)}`,`2 Hebevorgang: ${tt(o.s2,n2,Zr)}`,`3 Weitertransport: ${tt(o.s3,Oa,Na)}`,"",`Simulation: Taktzeit ca. ${Ln(z.takt,1)} s, ca. ${Ln(z.stunde)} Teile pro Stunde.`,"",`Link zur Anlage: ${U()}`,"","Bitte senden Sie mir ein Angebot."].join(`
`);e("#sim-anfrage").href=`mailto:${t.dataset.mail}?subject=${encodeURIComponent("Anfrage \xFCber den Greifer-Simulator")}&body=${encodeURIComponent(K)}`}let Vt=(F,z)=>F.opts?(F.opts.find(tt=>tt[0]===String(z))||["",z])[1]:`${Ln(Number(z),F.dec||0)}${F.unit?" "+F.unit:""}`;function U(){let F={g:i.active().id,...o};return location.href.split("#")[0]+"#sim="+btoa(unescape(encodeURIComponent(JSON.stringify(F))))}let gt=e("#sim-vorlage");gt.innerHTML=Object.entries(C4).map(([F,z])=>`<option value="${F}">${z.name}</option>`).join("")+'<option value="leer">Leer starten</option>',gt.addEventListener("change",()=>{c(gt.value),A(),I(),Q()});function Q(){let F=l(),z=(W,Z,_t,At,Ut)=>`<button type="button" class="sim__card${a===W?" is-active":""}${At?"":" is-empty"}" data-slot="${W}">
      <span class="sim__num">${Z}</span><span><span class="sim__ct">${_t}</span><strong>${At||"Modul w\xE4hlen"}</strong><small>${Ut||""}</small></span></button>`;e("#sim-slots").innerHTML=z("produkt","\u25C6","Produkt",F.name,`${Ln(F.size[0])} \xD7 ${Ln(F.size[1])} \xD7 ${Ln(F.size[2])} mm`)+z("slot1","1","Ankunft",o.s1&&Ua[o.s1.modul].name,o.s1&&Ua[o.s1.modul].info)+z("slot2","2","Hebevorgang",o.s2&&Zr[o.s2.modul].name,o.s2&&`${i.active().code} am ${Zr[o.s2.modul].name}`)+z("slot3","3","Weitertransport",o.s3&&Na[o.s3.modul].name,o.s3&&Na[o.s3.modul].info),e("#sim-slots").querySelectorAll("[data-slot]").forEach(W=>W.addEventListener("click",()=>{a=W.dataset.slot,Q()})),e("#sim-greifer").textContent=`${i.active().code} (aus dem Konfigurator)`;let tt=o.vorlage?D?3:o.s1&&o.s2&&o.s3?2:1:0;e("#sim-steps").querySelectorAll("li").forEach((W,Z)=>{W.className=Z<tt?"is-done":Z===tt?"is-current":""});let K=e("#sim-params");if(a==="produkt"){K.innerHTML=`<h3>Produkt</h3>
        <div class="field"><label for="sim-p-typ">Produktart</label><select id="sim-p-typ">${Object.entries(e2).map(([Z,_t])=>`<option value="${Z}"${Z===o.produkt.typ?" selected":""}>${_t.name}${_t.branche?" \xB7 "+_t.branche:""}</option>`).join("")}</select></div>
        <div class="field"><label for="sim-p-gr">Gr\xF6\xDFe <output>${o.produkt.groesse} %</output></label><input id="sim-p-gr" type="range" min="50" max="200" step="5" value="${o.produkt.groesse}"></div>
        <p class="muted sim__small">${F.typ==="eigen"?"Die Ma\xDFe kommen aus dem Konfigurator oben.":e2[F.typ].info}</p>`,K.querySelector("#sim-p-typ").addEventListener("change",Z=>{o.produkt={typ:Z.target.value,groesse:100},I(),Q()});let W=K.querySelector("#sim-p-gr");W.addEventListener("input",()=>{W.previousElementSibling.querySelector("output").textContent=W.value+" %"}),W.addEventListener("change",()=>{o.produkt.groesse=Number(W.value),I(),Q()});return}let mt=a==="slot1"?Ua:a==="slot2"?Zr:Na,k=a==="slot1"?Ba:a==="slot2"?n2:Oa,dt=a==="slot1"?"s1":a==="slot2"?"s2":"s3",R=o[dt],G={slot1:"1 \xB7 Ankunft",slot2:"2 \xB7 Hebevorgang",slot3:"3 \xB7 Weitertransport"}[a];K.innerHTML=`<h3>${G}</h3><div class="sim__tiles">${Object.entries(mt).map(([W,Z])=>`<button type="button" class="sim__tile${R&&R.modul===W?" is-active":""}" data-modul="${W}"><img alt="" data-thumb="${a}:${W}"><strong>${Z.name}</strong><small>${Z.info}</small></button>`).join("")}</div>`+(R?`<div class="sim__fields">${k.filter(W=>!W.when||W.when(R.modul,R)).map(W=>W.opts?`<div class="field"><label for="sim-f-${W.k}">${W.label}</label><select id="sim-f-${W.k}" data-k="${W.k}">${W.opts.map(([Z,_t])=>`<option value="${Z}"${String(R[W.k])===Z?" selected":""}>${_t}</option>`).join("")}</select></div>`:`<div class="field"><label for="sim-f-${W.k}">${W.label} <output>${Vt(W,R[W.k])}</output></label><input id="sim-f-${W.k}" data-k="${W.k}" type="range" min="${W.range[0]}" max="${W.range[1]}" step="${W.range[2]}" value="${R[W.k]}"></div>`).join("")}</div>`:""),K.querySelectorAll("[data-modul]").forEach(W=>W.addEventListener("click",()=>{let Z=W.dataset.modul;o[dt]={...ir(k),...o[dt]||{},modul:Z},dt==="s2"&&(o.s2.zaun=Z==="delta"?"nein":"ja"),A(),I(),Q()})),K.querySelectorAll("[data-k]").forEach(W=>{let Z=k.find(_t=>_t.k===W.dataset.k);W.addEventListener("input",()=>{Z.range&&(W.previousElementSibling.querySelector("output").textContent=Vt(Z,W.value))}),W.addEventListener("change",()=>{R[Z.k]=Z.range?Number(W.value):W.value,I(),Q()})}),Dt(K)}let ft=new Map,nt=null;function Dt(F){F.querySelectorAll("[data-thumb]").forEach(z=>{let tt=z.dataset.thumb;if(!ft.has(tt))try{ft.set(tt,Et(tt))}catch{ft.set(tt,"")}ft.get(tt)&&(z.src=ft.get(tt))})}function Et(F){let[z,tt]=F.split(":");nt||(nt=new Si({antialias:!0,preserveDrawingBuffer:!0}),nt.setSize(200,130),nt.toneMapping=Fs);let K=new ri;K.background=new $t(15659508),K.add(new Ki(16777215,12568269,1.2));let mt=new ji(16777215,1.4);mt.position.set(-2,4,3),K.add(mt);let k={size:[300,200,300]},dt;z==="slot1"?dt=E4(tt,k,ir(Ba)).group:z==="slot3"?dt=w4(tt,k,ir(Oa)).group:dt=tt==="roboter6"?(()=>{let At=s2();return At.reach(new T(900,900,0)),At.group})():tt==="linear"?(()=>{let At=T4(-900,900);return At.reach(new T(300,900,1e3)),At.group})():tt==="delta"?(()=>{let At=A4(0,0,-400,400);return At.reach(new T(0,1200,0)),At.group})():(()=>{let At=R4(0,0,-600,600,2e3);return At.reach(new T(200,900,0)),At.group})(),K.add(dt);let R=new se().setFromObject(dt),G=R.getCenter(new T),W=R.getSize(new T).length(),Z=new Ie(30,200/130,10,1e5);Z.position.set(G.x-W*.9,G.y+W*.55,G.z+W*1.25),Z.lookAt(G),nt.render(K,Z);let _t=nt.domElement.toDataURL("image/png");return K.traverse(At=>{At.geometry&&At.geometry.dispose()}),_t}let C=e("#sim-run");function A(){D=!1,C.textContent="Simulation starten"}C.addEventListener("click",()=>{D=!D,C.textContent=D?"Simulation anhalten":"Simulation fortsetzen",D&&(N=performance.now()-V*1e3),Q()}),e("#sim-teilen").addEventListener("click",async()=>{let F=U();try{await navigator.clipboard.writeText(F),e("#sim-teilen").textContent="Link kopiert"}catch{window.prompt("Link zur Anlage:",F)}history.replaceState(null,"",F),setTimeout(()=>{e("#sim-teilen").textContent="Anlage teilen"},2500)});let q=!1;new IntersectionObserver(F=>{q=F[0].isIntersecting}).observe(s);function ut(){requestAnimationFrame(ut),!(!q||n.hidden)&&(E&&E.id!==i.active().id&&i.active().ready&&(E=null,I(),Q()),D&&(V=(performance.now()-N)/1e3),St(V),g.update(),h.render(f,d))}async function ot(F){if(r||(r=!0,m(),ut()),F){F.g&&F.g!==i.active().id&&await i.select(F.g);for(let z of["vorlage","produkt","s1","s2","s3"])z in F&&(o[z]=F[z]);o.s2&&!Zr[o.s2.modul]&&(o.s2.modul="linear"),gt.value=o.vorlage}else c(gt.value);E=null,I(),Q(),D=!0,C.textContent="Simulation anhalten",N=performance.now(),V=0}i.onPart(()=>{r&&(o.produkt.typ!=="eigen"&&(o.produkt={typ:"eigen",groesse:100}),I(),Q())});let rt=null;if(location.hash.startsWith("#sim="))try{rt=JSON.parse(decodeURIComponent(escape(atob(location.hash.slice(5)))))}catch{}if(rt)ot(rt).then(()=>t.scrollIntoView());else{let F=new IntersectionObserver(z=>{z[0].isIntersecting&&(F.disconnect(),ot())},{rootMargin:"600px 0px"});F.observe(t)}window.__sim={open:ot,S:o,frame:F=>{V=F,D=!1},eval:()=>Ot,A:()=>b,gap:()=>{let F=new T;b.device.tip(F);let z=new se().setFromObject(b.g.holder);return{top:z.max.y-F.y,dx:Math.hypot((z.min.x+z.max.x)/2-F.x,(z.min.z+z.max.z)/2-F.z),want:F.toArray().map(Math.round)}},build:()=>{I(),Q()}}}var Nn=document.querySelector("[data-konfigurator]"),to=Nn.dataset.base||"",Bt=i=>Nn.querySelector(i),g6=100*1024*1024,x6=25*1024*1024,F4=[],z4=null,ce=(i,t=0)=>i.toLocaleString("de-DE",{maximumFractionDigits:t,minimumFractionDigits:t}),o2=Bt(".kfg__view"),k4=o2.querySelector("canvas"),Ii=new Si({canvas:k4,antialias:!0,alpha:!0});Ii.setPixelRatio(Math.min(window.devicePixelRatio,2));Ii.toneMapping=Fs;Ii.shadowMap.enabled=!0;Ii.shadowMap.type=Br;var ci=new ri;ci.environment=new bi(Ii).fromScene(new Vs(Ii),.04).texture;var Li=new Ie(35,1,1,1e5),Fa=new ks(Li,k4);Fa.enableDamping=!0;var ai=new ji(16777215,1.3);ai.castShadow=!0;ai.shadow.mapSize.set(2048,2048);ai.shadow.bias=-4e-4;ci.add(ai,ai.target,new Ki(16777215,12897492,.55));var Ha=new Qt(new Fn(1,1),new sa({opacity:.16}));Ha.rotation.x=-Math.PI/2;Ha.receiveShadow=!0;var H4=new Os(1,20,12831700,14673130);ci.add(Ha,H4);var sr=Ql.pivots,V4=be.degToRad(57);var _6=14.8,y6=32,a2=10,G4={gehaeuse:new zt({color:2830392,metalness:.65,roughness:.4}),backe:new zt({color:9345188,metalness:.9,roughness:.34}),kurbel:new zt({color:25002,metalness:.55,roughness:.32}),lenker:new zt({color:11121599,metalness:.95,roughness:.25}),koppel:new zt({color:11121599,metalness:.95,roughness:.25}),schieber:new zt({color:12041927,metalness:1,roughness:.18})},v6=new zt({color:3054939,metalness:.6,roughness:.35}),M6=new zt({color:13121325,metalness:.5,roughness:.4}),eo=new re,l2=new re;l2.rotation.z=-Math.PI/2;var u2=new re;u2.position.set(-62.6,-24.75,-49.425);l2.add(u2);eo.add(l2);ci.add(eo);var cn={};for(let[i,t]of Object.entries(Ql.groups)){let e=new xe;e.setAttribute("position",new le(t.v,3)),e.setIndex(t.i),e=Or(e,be.degToRad(35)),e.boundsTree=new Ri(e);let n=new Qt(e,G4[i.split("_")[0]]);n.castShadow=n.receiveShadow=!0,n.matrixAutoUpdate=!1,cn[i]=n,u2.add(n)}var N4=(i,t,e)=>{let n=i[0]-t[0],s=i[1]-t[1];return[t[0]+n*Math.cos(e)-s*Math.sin(e),t[1]+n*Math.sin(e)+s*Math.cos(e)]};function W4(i,t,e=[0,0]){let n=Math.cos(t),s=Math.sin(t);return new Xt().set(n,0,-s,i[0]-(n*i[0]-s*i[1])+e[0],0,1,0,0,s,0,n,i[1]-(s*i[0]+n*i[1])+e[1],0,0,0,1)}function B4(i,t,e,n){let s=Math.atan2(n[1]-e[1],n[0]-e[0])-Math.atan2(t[1]-i[1],t[0]-i[0]);return W4(i,s,[e[0]-i[0],e[1]-i[1]])}function za(i){let t=0;for(let e of["a","b"]){let n=(e==="a"?1:-1)*i,s=sr["P1"+e],r=sr["P2"+e],o=sr["C"+e],a=sr["J1"+e],c=sr["J2"+e],l=sr["S"+e],u=N4(a,s,n),h=N4(o,s,n);cn["kurbel_"+e].matrix.copy(W4(s,n));let f=[u[0]-a[0],u[1]-a[1]];cn["backe_"+e].matrix.makeTranslation(f[0],0,f[1]),cn["lenker_"+e].matrix.copy(B4(r,c,r,[c[0]+f[0],c[1]+f[1]]));let d=Math.hypot(o[0]-l[0],o[1]-l[1]),g=[h[0]-Math.sqrt(Math.max(0,d*d-(h[1]-l[1])**2)),l[1]];cn["koppel_"+e].matrix.copy(B4(l,o,g,h)),t=g[0]-l[0]}cn.schieber.matrix.makeTranslation(t,0,0),cn.gehaeuse.matrix.identity(),eo.updateMatrixWorld(!0)}var nn=null,Dn=null,In={x:0,y:0,z:0},dn=null,jr=null,no=new se,b6=new zt({color:14263361,metalness:.2,roughness:.55});function S6(){if(Dn==="form")return{f:1,auto:!0,label:"mm"};let i=Bt("#kfg-einheit").value;if(i!=="auto")return{f:{mm:1,cm:10,m:1e3}[i],auto:!1};if(Dn!=="stl")return{f:1,auto:!0,label:"mm"};let t=new T;return nn.boundingBox.getSize(t),Math.max(t.x,t.y,t.z)<2?{f:1e3,auto:!0,label:"m"}:{f:1,auto:!0,label:"mm"}}function Ui(i){if(!nn)return;let{f:t,auto:e,label:n}=S6();Bt("#kfg-einheit-info").textContent=e?Dn==="step"||Dn==="muster"?"aus der STEP-Datei \xFCbernommen (mm)":Dn==="form"?"Grundform in mm":`erkannt: ${n}`:"";let s=nn.clone();if(s.scale(t,t,t),s.computeBoundingBox(),i){let o=new T;s.boundingBox.getSize(o),In={x:0,y:o.z>o.x?1:0,z:0}}s.applyMatrix4(new Xt().makeRotationX(In.x*Math.PI/2)),s.applyMatrix4(new Xt().makeRotationZ(In.z*Math.PI/2)),s.applyMatrix4(new Xt().makeRotationY(In.y*Math.PI/2)),s.computeBoundingBox();let r=new T;s.boundingBox.getCenter(r),s.translate(-r.x,-s.boundingBox.min.y,-r.z),s.computeBoundingBox(),s.attributes.position.count<12e5?Or(s,Math.PI/6):s.computeVertexNormals(),dn&&(ci.remove(dn),dn.geometry.dispose()),dn=new Qt(s,b6),dn.castShadow=dn.receiveShadow=!0,ci.add(dn),jr=new Ri(s),no.copy(s.boundingBox),kn=E6(),Hn==="innen"&&!kn&&or("aussen"),Bt("#kfg-griff-innen").disabled=!kn||!ie.range.innen,Y4(),f2(),Va(),Un()}var Hn="aussen",kn=null;function E6(){let i=new T;no.getSize(i);let t=new ni;for(let e of[.6,.45,.75,.3]){let n=new T(0,i.y*e,0);if(t.set(n,new T(0,1,0)),jr.raycastFirst(t,He))continue;t.set(n,new T(0,0,1));let s=jr.raycastFirst(t,He);t.set(n,new T(0,0,-1));let r=jr.raycastFirst(t,He);if(s&&r)return s.distance+r.distance}return null}var w6=(()=>{eo.scale.setScalar(a2);let i=n=>{za(n);let s=new se().setFromObject(cn.backe_a),r=new se().setFromObject(cn.backe_b);return{gap:r.min.z-s.max.z,outer:r.max.z-s.min.z}},t=i(0),e=i(V4);return za(0),{aussen:[Math.max(0,e.gap),t.gap],innen:[e.outer,t.outer]}})(),ss={capit:{id:"capit",code:"Capit",name:"Gelenk-Parallelgreifer",note:"Testmodell in Originalgr\xF6\xDFe (ca. 320 mm lang)",root:eo,meshes:Object.values(cn),contact:[cn.backe_a,cn.backe_b],ready:!0,set:i=>za(V4*i),range:w6,reach:_6*a2,length:y6*a2,word:"Beide Backen liegen",paint:i=>{for(let t of[cn.backe_a,cn.backe_b])t.material=i==="gegriffen"?v6:i==="kollision"?M6:G4.backe}},tentra:{id:"tentra",code:"Tentra T3",name:"Tentakelgreifer, 3 Finger",note:"Testmodell in Originalgr\xF6\xDFe (\xD8 104 mm, 166 mm hoch)",ready:!1,range:{aussen:[16,78],innen:null},reach:100,length:166,word:"Die Finger liegen",load:()=>A6()},pinza:{id:"pinza",code:"Pinza adattiva",name:"Adaptiver 2-Finger-Parallelgreifer",note:"Testmodell in Originalgr\xF6\xDFe (ca. 180 mm hoch, Hub bis 85 mm)",ready:!1,range:{aussen:[0,85],innen:[60,140]},reach:74,length:180,word:"Beide Finger liegen",load:()=>R6()}},ie=ss.capit,is={dunkel:new zt({color:2041904,metalness:.5,roughness:.45}),platte:new zt({color:9345186,metalness:.7,roughness:.35}),finger:new zt({color:13127706,metalness:.15,roughness:.5}),polster:new zt({color:1014392,metalness:.1,roughness:.7}),stahl:new zt({color:12041927,metalness:1,roughness:.22}),gelb:new zt({color:14262330,metalness:.6,roughness:.35})},X4=new zt({color:3054939,metalness:.1,roughness:.6}),q4=new zt({color:13121325,metalness:.1,roughness:.6}),T6=i=>/Vertebra/.test(i)?is.finger:/Contact_pad/.test(i)?is.polster:/Upper_plate/.test(i)?is.platte:/screw|nut|standoff/i.test(i)?is.stahl:/spool|actuator/i.test(i)?is.gelb:is.dunkel;async function A6(){let i=await(await fetch(to+"data/3d/tentra-t3.json")).json(),t=ss.tentra,e=new re,n=new re;n.position.y=117.8,e.add(n);let s=[],r=[],o=[],a=[];for(let d of i.parts){let g=new xe;g.setAttribute("position",new le(d.p,3)),g.setIndex(d.i),g=Or(g,be.degToRad(35)),g.boundsTree=new Ri(g);let _=new Qt(g,T6(d.name));if(_.castShadow=_.receiveShadow=!0,_.matrixAutoUpdate=!1,n.add(_),s.push(_),a.push(_),/Contact_pad/.test(d.name)&&r.push(_),d.bewegung){let m=d.bewegung;o.push({mesh:_,parent:m.parent,pivot:new T(...m.pivot),q:new sn(...m.q),rest:new T(...m.rest)})}}let c=new sn,l=new Xt,u=new Xt,h=new Xt;t.set=d=>{for(let g of o)c.identity().slerp(g.q,d),h.makeTranslation(g.pivot.x+g.rest.x*d,g.pivot.y+g.rest.y*d,g.pivot.z+g.rest.z*d).multiply(l.makeRotationFromQuaternion(c)).multiply(u.makeTranslation(-g.pivot.x,-g.pivot.y,-g.pivot.z)),g.parent>=0?g.mesh.matrix.multiplyMatrices(a[g.parent].matrix,h):g.mesh.matrix.copy(h);e.updateMatrixWorld(!0)},t.paint=d=>{for(let g of r)g.material=d==="gegriffen"?X4:d==="kollision"?q4:is.polster},t.root=e,t.meshes=s,t.contact=o.map(d=>d.mesh);let f=d=>{t.set(d);let g=1/0,_=new T;for(let m of r){let p=m.geometry.attributes.position;for(let y=0;y<p.count;y++)_.fromBufferAttribute(p,y).applyMatrix4(m.matrixWorld),g=Math.min(g,Math.hypot(_.x,_.z))}return g};t.range={aussen:[2*f(1),2*f(0)],innen:null},t.set(0),t.ready=!0}async function R6(){let i=await(await fetch(to+"data/3d/pinza-adattiva.json")).json(),t=ss.pinza,e=new re,n=new re,s=new re;s.rotation.set(0,Math.PI/2,Math.PI),n.position.y=149,n.add(s),e.add(n);let r={gehaeuse:new zt({color:2304303,metalness:.4,roughness:.5}),hebel:new zt({color:11055290,metalness:.85,roughness:.3}),finger:new zt({color:5989228,metalness:.6,roughness:.4})},o={};for(let[m,p]of Object.entries(i.groups)){let y=new xe;y.setAttribute("position",new le(p.v,3)),y.setIndex(p.i),y=Or(y,be.degToRad(35)),y.boundsTree=new Ri(y);let x=new Qt(y,r[m.split("_")[0]]);x.castShadow=x.receiveShadow=!0,x.matrixAutoUpdate=!1,s.add(x),o[m]=x}let a=i.pivots,c=be.degToRad(-20),l=be.degToRad(26),u=(m,p,y)=>new Xt().makeTranslation(m,p,0).multiply(new Xt().makeRotationZ(y)).multiply(new Xt().makeTranslation(-m,-p,0));t.set=m=>{let p=c+(l-c)*m;for(let[y,x]of[["_r",1],["_l",-1]]){let v=x*p,E=[x*a.A[0],a.A[1]],w=[x*a.B[0],a.B[1]],b=[x*a.A2[0]-E[0],a.A2[1]-E[1]];o["hebel_a"+y].matrix.copy(u(E[0],E[1],v)),o["hebel_b"+y].matrix.copy(u(w[0],w[1],v));let I=b[0]*Math.cos(v)-b[1]*Math.sin(v)-b[0],M=b[0]*Math.sin(v)+b[1]*Math.cos(v)-b[1];o["finger"+y].matrix.makeTranslation(I,M,0)}o.gehaeuse.matrix.identity(),e.updateMatrixWorld(!0)};let h=[o.finger_r,o.finger_l],f=r.finger;t.paint=m=>{for(let p of h)p.material=m==="gegriffen"?X4:m==="kollision"?q4:f},t.root=e,t.meshes=Object.values(o),t.contact=h;let d=m=>{t.set(m);let p=new se().setFromObject(o.finger_r),y=new se().setFromObject(o.finger_l),[x,v]=p.min.z<y.min.z?[p,y]:[y,p];return{gap:v.min.z-x.max.z,outer:v.max.z-x.min.z}},g=d(0),_=d(1);t.range={aussen:[Math.max(0,_.gap),g.gap],innen:[_.outer,g.outer]},t.set(0),t.ready=!0}async function h2(i){let t=ss[i];if(!t.ready){Bt("#kfg-status").className="kfg__status is-info",Bt("#kfg-status").textContent=`${t.code} wird geladen \u2026`;try{await t.load()}catch{Bt("#kfg-status").textContent=`${t.code} konnte nicht geladen werden.`;return}}ie.root&&ci.remove(ie.root),ie=t,ci.add(ie.root),ie.root.visible=!0,Bt("#kfg-badge").textContent=`Greifer ${ie.code} (Testmodell) in Originalgr\xF6\xDFe`,!!!ie.range.innen&&Hn==="innen"&&(Hn="aussen"),or(Hn)}function Y4(){let i=new T;no.getSize(i);let t=ie.length,e=Math.max(i.x,i.z,i.y+t*.75);Ha.scale.set(e*8,e*8,1),H4.scale.setScalar(e*4),ai.position.set(-e*1.5,e*3,e*1.2),Object.assign(ai.shadow.camera,{left:-e*2,right:e*2,top:e*2,bottom:-e*2,near:e*.1,far:e*10}),ai.shadow.normalBias=e*.006,ai.shadow.camera.updateProjectionMatrix(),Fa.target.set(0,i.y*.5+t*.3,0),Li.position.set(e*1.15,e*.8,e*1.45),Li.near=e/200,Li.far=e*100,Li.updateProjectionMatrix(),Fa.update()}function C6(i){let t=i.attributes.position,e=i.index,n=new T,s=new T,r=new T,o=0,a=e?e.count:t.count;for(let c=0;c<a;c+=3){let l=e?e.getX(c):c,u=e?e.getX(c+1):c+1,h=e?e.getX(c+2):c+2;n.fromBufferAttribute(t,l),s.fromBufferAttribute(t,u),r.fromBufferAttribute(t,h),o+=n.dot(s.cross(r))/6}return Math.abs(o)}var pn=null;function f2(){let i=new T;no.getSize(i);let t=i.x*i.y*i.z,e=C6(dn.geometry);e>0&&e<=t*1.01||(e=t*.5);let n=Number(Bt("#kfg-material").value),s=e*1e-9*n;pn={s:i,vol:e,mass:s,grip:Hn==="innen"&&kn?kn:i.z,soft:Bt("#kfg-material").selectedOptions[0].dataset.weich==="1"},Bt("#kfg-masse").textContent=`${ce(i.x)} \xD7 ${ce(i.y)} \xD7 ${ce(i.z)} mm (L \xD7 H \xD7 Greifbreite)`+(kn?` \xB7 Innenma\xDF ${ce(kn)} mm`:""),Bt("#kfg-gewicht").textContent=s<1?`ca. ${ce(s*1e3)} g`:`ca. ${ce(s,1)} kg`,F4.forEach(r=>r())}function Va(){if(!pn)return;let i=n=>`au\xDFen ${ce(n.range.aussen[0])}\u2013${ce(n.range.aussen[1])} mm`+(n.range.innen?` \xB7 innen ${ce(n.range.innen[0])}\u2013${ce(n.range.innen[1])} mm`:" \xB7 kein Innengreifen"),t=ie.id+Object.values(ss).map(n=>n.ready).join();Bt("#kfg-vorschlag").dataset.sig!==t&&(Bt("#kfg-vorschlag").dataset.sig=t,Bt("#kfg-vorschlag").innerHTML=Object.values(ss).map(n=>`<button type="button" class="kfg__card${n===ie?" is-active":""}" data-greifer="${n.id}" aria-pressed="${n===ie}">
      <span class="kfg__rank">${n===ie?"Im Test":"Zum Testen anklicken"}</span>
      <strong>${n.code}</strong> <span class="kfg__fam">${n.name}</span>
      <span class="kfg__why">Greifweite ${i(n)}</span>
      <span class="kfg__note">${n.note}</span>
    </button>`).join(""),Bt("#kfg-vorschlag").querySelectorAll("[data-greifer]").forEach(n=>n.addEventListener("click",()=>n.dataset.greifer!==ie.id&&h2(n.dataset.greifer))));let e=["Guten Tag,","","\xFCber den Greifer-Konfigurator m\xF6chte ich folgendes Teil anfragen:",`Teil: ${rs}`,`Abmessungen: ${ce(pn.s.x)} \xD7 ${ce(pn.s.y)} \xD7 ${ce(pn.s.z)} mm (L \xD7 H \xD7 Greifbreite)`,`Werkstoff: ${Bt("#kfg-material").selectedOptions[0].textContent}`,`Gewicht (gesch\xE4tzt): ${ce(pn.mass,2)} kg`,"","(Falls vorhanden, bitte die STEP-Datei an diese E-Mail anh\xE4ngen.)"].join(`
`);Bt("#kfg-anfrage").href="mailto:info@gmg-system.com?subject="+encodeURIComponent("Greiferanfrage \xFCber den Konfigurator")+"&body="+encodeURIComponent(e)}var P6=new Xt,$4=i=>jr.intersectsGeometry(i.geometry,P6.copy(i.matrixWorld)),O4=()=>ie.contact.some($4),L6=()=>ie.meshes.some($4);function Un(){if(!dn)return;let i=new T;no.getSize(i);let t=Hn==="innen",e=ie.reach,n=Bt("#kfg-hoehe").value/100,s=i.y+e*.25,r=Math.max(i.y*.04,i.y-e*.9);ie.root.position.y=s+(r-s)*n;let o=i.x/2+e,a=i.z/2+e;ie.root.position.x=Bt("#kfg-x").value/100*o,ie.root.position.z=Bt("#kfg-z").value/100*a,ie.root.updateMatrixWorld(!0);let c=Bt("#kfg-zu").value/100,l=t?1:0,u=t?1-c:c;ie.set(l);let h,f=u;if(L6())h="kollision",f=l;else if(ie.set(u),O4()){let p=l,y=u;for(let x=0;x<14;x++){let v=(p+y)/2;ie.set(v),O4()?y=v:p=v}f=p,h="gegriffen"}else h=c>=.99?"leer":"offen";ie.set(f),z4={x:ie.root.position.x,y:ie.root.position.y,z:ie.root.position.z,t:f,state:h,inside:t};let d=i.y-ie.root.position.y;ie.paint(h);let g=t?`an den Innenw\xE4nden (Innenma\xDF ${ce(pn.grip)} mm)`:`am Teil (Greifbreite ${ce(pn.grip)} mm)`,_={kollision:["bad",t?"Kollision: Der geschlossene Greifer passt so nicht in den Hohlraum. H\xF6her fahren.":"Kollision: Der Greifer st\xF6\xDFt beim Absenken auf das Teil. Weiter \xF6ffnen oder h\xF6her fahren."],gegriffen:d>=Math.min(e*.35,i.y*.5)?["ok",`${t?"Innen gegriffen":"Gegriffen"}: ${ie.word} ${g} an.`]:["warn","Gegriffen, aber nur an der Kante. F\xFCr sicheren Halt den Greifer tiefer fahren."],leer:["warn",d<=0?"Der Greifer ist \xFCber dem Teil und greift ins Leere. Mit \u201EH\xF6he\u201C absenken.":t?"Greifer ganz ge\xF6ffnet, ohne die Innenw\xE4nde zu ber\xFChren.":"Greifer geschlossen, ohne das Teil zu ber\xFChren."],offen:["info",t?"Greifer in den Hohlraum absenken und mit \u201EGreifer \xF6ffnen\u201C spreizen.":"Mit \u201EGreifer schlie\xDFen\u201C zufahren und pr\xFCfen, wie das Teil gegriffen wird."]}[h],m=Bt("#kfg-status");m.className="kfg__status is-"+_[0],m.textContent=_[1]}function or(i){Hn=i,Nn.querySelectorAll("[data-griff]").forEach(t=>t.setAttribute("aria-pressed",t.dataset.griff===i?"true":"false")),Bt("#kfg-zu-label").textContent=i==="innen"?"Greifer \xF6ffnen (innen spreizen)":"Greifer schlie\xDFen",Bt("#kfg-zu").value=0,Bt("#kfg-griff-innen").disabled=!kn||!ie.range.innen,dn&&(Y4(),f2(),Va(),Un())}var rr=Bt(".kfg__progress");function Pi(i,t){rr.hidden=!1;let e=Math.max(0,Math.min(100,i));rr.querySelector(".kfg__ring-bar").style.strokeDashoffset=String(100-e),rr.querySelector(".kfg__ring-pct").textContent=Math.round(e)+" %",t&&(rr.querySelector(".kfg__ring-label").textContent=t)}var I6=()=>new Promise(i=>requestAnimationFrame(()=>setTimeout(i,0)));function D6(i,t){return new Promise((e,n)=>{let s=new FileReader;s.onprogress=r=>r.lengthComputable&&t(r.loaded/r.total),s.onload=()=>e(s.result),s.onerror=()=>n(new Error("Datei konnte nicht gelesen werden.")),s.readAsArrayBuffer(i)})}function U6(i){return ns(i.map(t=>{let e=new xe;return e.setAttribute("position",new le(t.attributes.position.array,3)),t.index&&e.setIndex(Array.from(t.index.array)),e.index?e.toNonIndexed():e}))}function N6(i,t){return new Promise((e,n)=>{let s=new Worker(to+"assets/vendor/occt/gmg-step-worker.js"),r=2500+i.byteLength/1048576*900,o=performance.now(),a=setInterval(()=>t(1-Math.exp(-(performance.now()-o)/r)),120),c=()=>{clearInterval(a),s.terminate()};s.onerror=()=>{c(),n(new Error("STEP-Leser konnte nicht gestartet werden."))},s.onmessage=l=>{c();let u=l.data;if(!u||!u.success||!u.meshes.length){n(new Error("Die STEP-Datei enth\xE4lt keine lesbaren K\xF6rper."));return}t(1),e(U6(u.meshes))},s.postMessage({buffer:new Uint8Array(i),params:{linearUnit:"millimeter",linearDeflectionType:"bounding_box_ratio",linearDeflection:.002,angularDeflection:.4}})})}function B6(i,t){return new Promise((e,n)=>{let s=new Worker(to+"assets/vendor/gmg-stl-worker.js");s.onerror=()=>{s.terminate(),n(new Error("STL-Leser konnte nicht gestartet werden."))},s.onmessage=r=>{if(r.data.progress!=null){t(r.data.progress);return}if(s.terminate(),r.data.error){n(new Error(r.data.error));return}let o=new xe;o.setAttribute("position",new we(r.data.positions,3)),e(o)},s.postMessage(i,[i])})}async function Z4(i){let t=i.name.split(".").pop().toLowerCase(),e=Bt("#kfg-datei");if(!["step","stp","stl"].includes(t)){e.textContent="Bitte eine STEP- (.step, .stp) oder STL-Datei w\xE4hlen.";return}if(i.size>g6){e.textContent=`Die Datei ist ${ce(i.size/1048576,1)} MB gro\xDF \u2013 erlaubt sind bis 100 MB.`;return}e.textContent=`${i.name} wird gelesen \u2026`+(i.size>x6?" Gro\xDFe Datei, das kann bis zu einer Minute dauern.":""),Nn.classList.add("is-loading"),Pi(0,"Datei wird gelesen");try{let n=await D6(i,s=>Pi(s*25));Dn=t==="stl"?"stl":"step",Pi(25,"Geometrie wird berechnet"),nn=Dn==="stl"?await B6(n,s=>Pi(25+s*65)):await N6(n,s=>Pi(25+s*65)),nn.index&&(nn=nn.toNonIndexed()),nn.attributes.normal&&nn.deleteAttribute("normal"),nn.computeBoundingBox(),Pi(92,"Darstellung wird aufgebaut"),await I6(),e.textContent=`${i.name} (${ce(i.size/1048576,1)} MB) \u2013 wird nur in Ihrem Browser verarbeitet.`,rs=i.name,Kr={geo:nn,kind:Dn,label:rs},Ga("datei"),Ui(!0),Pi(100,"Fertig"),await new Promise(s=>setTimeout(s,450))}catch(n){e.textContent="Die Datei konnte nicht gelesen werden: "+n.message}finally{Nn.classList.remove("is-loading"),rr.hidden=!0}}var ka={zylinder:{name:"Zylinder",fields:[["d","Durchmesser",80],["l","L\xE4nge",260]],geo:i=>new Us(i.d/2,i.d/2,i.l,96).rotateZ(Math.PI/2),label:i=>`Zylinder \xD8 ${ce(i.d)} \xD7 ${ce(i.l)} mm`},quader:{name:"Quader",fields:[["l","L\xE4nge",200],["b","Breite",90],["h","H\xF6he",120]],geo:i=>new Pe(i.l,i.h,i.b),label:i=>`Quader ${ce(i.l)} \xD7 ${ce(i.b)} \xD7 ${ce(i.h)} mm`},rohr:{name:"Rohr / Ring",fields:[["d","Au\xDFen-\xD8",100],["i","Innen-\xD8",60],["l","L\xE4nge",50]],geo:i=>{let t=new Yi;t.absarc(0,0,i.d/2,0,Math.PI*2,!1);let e=new Ds;return e.absarc(0,0,Math.min(i.i,i.d-1)/2,0,Math.PI*2,!0),t.holes.push(e),new Ns(t,{depth:i.l,curveSegments:96,bevelEnabled:!1}).rotateX(Math.PI/2)},label:i=>`Rohr \xD8 ${ce(i.d)} / ${ce(i.i)} \xD7 ${ce(i.l)} mm`},kasten:{name:"Kasten offen",fields:[["l","L\xE4nge",300],["b","Breite",200],["h","H\xF6he",150],["t","Wandst\xE4rke",10]],geo:i=>{let t=Math.min(i.t,i.l/2-1,i.b/2-1,i.h-1),e=i.h-t,n=(s,r,o,a)=>s.translate(r,o,a);return ns([n(new Pe(i.l,t,i.b),0,t/2,0),n(new Pe(i.l,e,t),0,t+e/2,i.b/2-t/2),n(new Pe(i.l,e,t),0,t+e/2,-i.b/2+t/2),n(new Pe(t,e,i.b-2*t),i.l/2-t/2,t+e/2,0),n(new Pe(t,e,i.b-2*t),-i.l/2+t/2,t+e/2,0)])},label:i=>`Kasten offen ${ce(i.l)} \xD7 ${ce(i.b)} \xD7 ${ce(i.h)} mm, Wand ${ce(i.t)} mm`}},Di="zylinder";function O6(){let i=ka[Di];Bt("#kfg-form-felder").innerHTML=i.fields.map(([t,e,n])=>`
    <div class="field"><label for="kfg-f-${t}">${e} (mm)</label>
    <input id="kfg-f-${t}" data-k="${t}" type="number" min="1" max="10000" step="1" value="${n}" inputmode="decimal"></div>`).join(""),Bt("#kfg-form-felder").querySelectorAll("input").forEach(t=>{t.addEventListener("input",()=>c2(!1,!1)),t.addEventListener("change",()=>c2(!1,!0))})}function F6(i){let t=[];if(Di==="rohr"&&i.i>i.d-2&&(i.i=Math.max(1,i.d-2),t.push(`Innen-\xD8 muss kleiner als Au\xDFen-\xD8 sein \u2013 auf ${ce(i.i)} mm begrenzt.`)),Di==="kasten"){let e=Math.max(1,Math.min((i.l-2)/2,(i.b-2)/2,i.h-1));i.t>e&&(i.t=Math.floor(e),t.push(`Wandst\xE4rke passt nicht in L\xE4nge, Breite und H\xF6he \u2013 auf ${ce(i.t)} mm begrenzt.`))}return t}function z6(i){let t=[...Bt("#kfg-form-felder").querySelectorAll("input")],e={};for(let s of t)e[s.dataset.k]=Math.min(1e4,Math.max(1,Number(s.value)||1));let n=F6(e);if(Di==="rohr"&&(Bt("#kfg-f-i").max=Math.max(1,e.d-2)),Di==="kasten"&&(Bt("#kfg-f-t").max=e.t),i)for(let s of t)Number(s.value)!==e[s.dataset.k]&&(s.value=e[s.dataset.k]);return Bt("#kfg-form-hinweis").textContent=n.join(" "),e}function c2(i,t=!0){let e=z6(t);Dn="form";let n=ka[Di].geo(e);nn=n.index?n.toNonIndexed():n,nn.computeBoundingBox(),rs="Grundform: "+ka[Di].label(e),Ui(i)}var Kr=null,rs="";function Ga(i){Nn.querySelectorAll("[data-src]").forEach(t=>t.setAttribute("aria-pressed",t.dataset.src===i?"true":"false")),Bt("#kfg-quelle-datei").hidden=i!=="datei",Bt("#kfg-quelle-form").hidden=!ka[i]}var J4={felge:{file:"felge.json",label:"Beispielteil: Felge \xD8 400 \xD7 204 mm (STEP)",material:"2700"}};async function k6(i){let t=J4[i];Ga(i),Nn.classList.add("is-loading"),Pi(10,"Beispielteil wird geladen");try{if(!t.geo){let e=await(await fetch(to+"data/3d/beispiele/"+t.file)).json(),n=new xe;n.setAttribute("position",new le(e.v,3)),n.setIndex(e.i),t.geo=n.toNonIndexed(),t.geo.computeBoundingBox()}nn=t.geo,Dn="muster",rs=t.label,Bt("#kfg-material").value=t.material,In={x:0,y:0,z:0},Ui(!1),or(kn&&ie.range.innen?"innen":"aussen")}finally{Nn.classList.remove("is-loading"),rr.hidden=!0}}function H6(i){if(J4[i]){k6(i);return}if(i!=="datei"){d2(i);return}Ga("datei"),Kr&&(nn=Kr.geo,Dn=Kr.kind,rs=Kr.label,Ui(!0))}function d2(i){Ga(i),Di=i,Hn=i==="kasten"?"innen":"aussen",O6(),c2(!0),or(kn?Hn:"aussen")}var r2=Bt("#kfg-file");r2.addEventListener("change",()=>r2.files[0]&&Z4(r2.files[0]));var Qr=Bt(".kfg__drop");["dragenter","dragover"].forEach(i=>Qr.addEventListener(i,t=>{t.preventDefault(),Qr.classList.add("is-over")}));["dragleave","drop"].forEach(i=>Qr.addEventListener(i,t=>{t.preventDefault(),Qr.classList.remove("is-over")}));Qr.addEventListener("drop",i=>i.dataTransfer.files[0]&&Z4(i.dataTransfer.files[0]));Nn.querySelectorAll("[data-src]").forEach(i=>i.addEventListener("click",()=>H6(i.dataset.src)));Bt("#kfg-zentrieren").addEventListener("click",()=>{Bt("#kfg-x").value=0,Bt("#kfg-z").value=0,Un()});Bt("#kfg-einheit").addEventListener("change",()=>Ui(!1));Bt("#kfg-material").addEventListener("change",()=>{f2(),Va()});Bt("#kfg-hoehe").addEventListener("input",Un);Bt("#kfg-zu").addEventListener("input",Un);Bt("#kfg-x").addEventListener("input",Un);Bt("#kfg-z").addEventListener("input",Un);Nn.querySelectorAll("[data-griff]").forEach(i=>i.addEventListener("click",()=>or(i.dataset.griff)));Bt("#kfg-dreh-y").addEventListener("click",()=>{In.y=(In.y+1)%4,Ui(!1)});Bt("#kfg-dreh-x").addEventListener("click",()=>{In.x=(In.x+1)%4,Ui(!1)});Bt("#kfg-dreh-z").addEventListener("click",()=>{In.z=(In.z+1)%4,Ui(!1)});function K4(){let i=o2.clientWidth,t=o2.clientHeight;Ii.setSize(i,t,!1),Li.aspect=i/t,Li.updateProjectionMatrix()}window.addEventListener("resize",K4);K4();za(0);d2("zylinder");Nn.classList.add("is-ready");(function i(){requestAnimationFrame(i),Fa.update(),Ii.render(ci,Li)})();U4({active:()=>ie,grippers:()=>ss,select:async i=>{await h2(i),Va()},restore:()=>{ie.set(0),dn&&Un()},part:()=>dn&&pn?{geo:dn.geometry,size:pn.s.clone(),mass:pn.mass,soft:pn.soft,label:rs,grip:pn.grip,inside:Hn==="innen",pose:z4}:null,onPart:i=>F4.push(i)});window.__kfg={sample:d2,update:Un,setMode:or,selectGripper:h2,gripper:()=>ie.id,move:(i,t)=>{Bt("#kfg-x").value=i,Bt("#kfg-z").value=t,Un()},set:(i,t)=>{Bt("#kfg-hoehe").value=i,Bt("#kfg-zu").value=t,Un()},status:()=>Bt("#kfg-status").textContent};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
