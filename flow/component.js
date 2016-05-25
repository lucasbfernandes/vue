import type { Config } from '../src/core/config'
import type VNode from '../src/core/vdom/vnode'
import type Watcher from '../src/core/observer/watcher'

declare interface Component {
  // constructor information
  static cid: number;
  static options: Object;
  // extend
  static extend: (options: Object) => Function;
  // assets
  static directive: (id: string, def?: Function | Object) => Function | Object | void;
  static component: (id: string, def?: Class<Component> | Object) => Class<Component>;
  static transition: (id: string, def?: Object) => Object | void;
  static filter: (id: string, def?: Function) => Function | void;

  // public properties
  $el: Element | void;
  $data: Object;
  $options: ComponentOptions;
  $parent: Component | void;
  $root: Component;
  $children: Array<Component>;
  $refs: { [key: string]: Component | Element | Array<Component | Element> | void };
  $slots: { [key: string]: Array<VNode> };
  $isServer: boolean;

  // public methods
  $mount: (el?: Element | string) => Component;
  $forceUpdate: () => void;
  $destroy: () => void;
  $watch: (expOrFn: string | Function, cb: Function, options?: Object) => Function;
  $on: (event: string, fn: Function) => Component;
  $once: (event: string, fn: Function) => Component;
  $off: (event?: string, fn?: Function) => Component;
  $emit: (event: string, ...args: Array<any>) => Component;
  $nextTick: (fn: Function) => void;
  $createElement: (
    tag?: string | Component,
    data?: Object,
    children?: VNodeChildren,
    namespace?: string
  ) => VNode;

  // private properties
  _uid: number;
  _isVue: true;
  _renderProxy: Component;
  _watcher: Watcher;
  _watchers: Array<Watcher>;
  _data: Object;
  _events: Object;
  _isMounted: boolean;
  _isDestroyed: boolean;
  _isBeingDestroyed: boolean;
  _vnode: ?VNode;
  _staticTrees: ?Array<VNode>;

  // private methods
  // lifecycle
  _init: Function;
  _mount: () => Component;
  _update: (vnode: VNode) => void;
  _updateFromParent: (
    propsData: ?Object,
    listeners: ?{ [key: string]: Function | Array<Function> },
    parentVnode: VNode,
    renderChildren: ?VNodeChildren
  ) => void;
  // rendering
  _render: () => VNode;
  __patch__: (a: Element | VNode | void, b: VNode) => Element;
  // renderElementWithChildren
  _h: (
    vnode?: VNode,
    children?: VNodeChildren
  ) => VNode | void;
  // renderElement
  _e: (
    tag?: string | Component | Object,
    data?: Object,
    namespace?: string
  ) => VNode | void;
  // renderText
  _t: (
    str?: string
  ) => string;
  // renderStaticTree
  _m: (
    index?: number
  ) => Object | void;
  // toString
  _s: (value: any) => string;
  // resolveFilter
  _f: (id: string) => Function;
  // renderList
  _l: (
    val: any,
    render: Function
  ) => ?Array<VNode>;
  // registerRef
  _r: (
    key: string,
    ref: Component | Element,
    vFor: boolean,
    isRemoval: boolean
  ) => void;
  // apply v-bind object
  _b: (vnode: VNodeWithData, value: any) => void;

  // allow dynamic method registration
  [key: string]: any
}