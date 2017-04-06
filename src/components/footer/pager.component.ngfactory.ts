/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './pager.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/core/src/linker/view_container';
import * as import10 from '../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import11 from '@angular/core/src/linker/template_ref';
import * as import12 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import13 from '@angular/common/src/directives/ng_for';
export class Wrapper_DataTablePagerComponent {
  /*private*/ _eventHandler:Function;
  context:import0.DataTablePagerComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  subscription0:any;
  constructor() {
    this._changed = false;
    this.context = new import0.DataTablePagerComponent();
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
    this._expr_5 = import1.UNINITIALIZED;
    this._expr_6 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
  }
  check_pagerLeftArrowIcon(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.pagerLeftArrowIcon = currValue;
      this._expr_0 = currValue;
    }
  }
  check_pagerRightArrowIcon(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.pagerRightArrowIcon = currValue;
      this._expr_1 = currValue;
    }
  }
  check_pagerPreviousIcon(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.pagerPreviousIcon = currValue;
      this._expr_2 = currValue;
    }
  }
  check_pagerNextIcon(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.pagerNextIcon = currValue;
      this._expr_3 = currValue;
    }
  }
  check_size(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_4,currValue))) {
      this._changed = true;
      this.context.size = currValue;
      this._expr_4 = currValue;
    }
  }
  check_count(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_5,currValue))) {
      this._changed = true;
      this.context.count = currValue;
      this._expr_5 = currValue;
    }
  }
  check_page(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_6,currValue))) {
      this._changed = true;
      this.context.page = currValue;
      this._expr_6 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.change.subscribe(_eventHandler.bind(view,'change'))); }
  }
}
var renderType_DataTablePagerComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_DataTablePagerComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.DataTablePagerComponent>;
  _DataTablePagerComponent_0_3:Wrapper_DataTablePagerComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_DataTablePagerComponent_Host0,renderType_DataTablePagerComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'datatable-pager',new import3.InlineArray2(2,'class','datatable-pager'),rootSelector,(null as any));
    this.compView_0 = new View_DataTablePagerComponent0(this.viewUtils,this,0,this._el_0);
    this._DataTablePagerComponent_0_3 = new Wrapper_DataTablePagerComponent();
    this.compView_0.create(this._DataTablePagerComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._DataTablePagerComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.DataTablePagerComponent) && (0 === requestNodeIndex))) { return this._DataTablePagerComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._DataTablePagerComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._DataTablePagerComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const DataTablePagerComponentNgFactory:import8.ComponentFactory<import0.DataTablePagerComponent> = new import8.ComponentFactory<import0.DataTablePagerComponent>('datatable-pager',View_DataTablePagerComponent_Host0,import0.DataTablePagerComponent);
const styles_DataTablePagerComponent:any[] = ([] as any[]);
class View_DataTablePagerComponent1 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import9.ViewContainer) {
    super(View_DataTablePagerComponent1,renderType_DataTablePagerComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_5 = import1.UNINITIALIZED;
    this._expr_6 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'li',new import3.InlineArray2(2,'class','pages'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'a',new import3.InlineArray2(2,'href','javascript:void(0)'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_2,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_2));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4
    ]
    ),[disposable_0]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_5:any = (this.context.$implicit.number === this.parentView.context.page);
    if (import3.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementClass(this._el_0,'active',currVal_5);
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = import3.inlineInterpolate(1,'\n          ',this.context.$implicit.text,'\n        ');
    if (import3.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setText(this._text_3,currVal_6);
      this._expr_6 = currVal_6;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_2(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.parentView.context.selectPage(this.context.$implicit.number)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
var renderType_DataTablePagerComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_DataTablePagerComponent,{});
export class View_DataTablePagerComponent0 extends import2.AppView<import0.DataTablePagerComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _text_9:any;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _el_13:any;
  _text_14:any;
  _el_15:any;
  _text_16:any;
  _text_17:any;
  _text_18:any;
  _anchor_19:any;
  /*private*/ _vc_19:import9.ViewContainer;
  _TemplateRef_19_5:any;
  _NgFor_19_6:import10.Wrapper_NgFor;
  _text_20:any;
  _el_21:any;
  _text_22:any;
  _el_23:any;
  _text_24:any;
  _el_25:any;
  _text_26:any;
  _text_27:any;
  _text_28:any;
  _el_29:any;
  _text_30:any;
  _el_31:any;
  _text_32:any;
  _el_33:any;
  _text_34:any;
  _text_35:any;
  _text_36:any;
  _text_37:any;
  /*private*/ _expr_41:any;
  /*private*/ _expr_42:any;
  /*private*/ _expr_43:any;
  /*private*/ _expr_44:any;
  /*private*/ _expr_45:any;
  /*private*/ _expr_46:any;
  /*private*/ _expr_47:any;
  /*private*/ _expr_48:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_DataTablePagerComponent0,renderType_DataTablePagerComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckOnce);
    this._expr_41 = import1.UNINITIALIZED;
    this._expr_42 = import1.UNINITIALIZED;
    this._expr_43 = import1.UNINITIALIZED;
    this._expr_44 = import1.UNINITIALIZED;
    this._expr_45 = import1.UNINITIALIZED;
    this._expr_46 = import1.UNINITIALIZED;
    this._expr_47 = import1.UNINITIALIZED;
    this._expr_48 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'ul',new import3.InlineArray2(2,'class','pager'),(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,this._el_1,'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_3,'a',new import3.InlineArray2(2,'href','javascript:void(0)'),(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'\n          ',(null as any));
    this._el_7 = import3.createRenderElement(this.renderer,this._el_5,'i',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_8 = this.renderer.createText(this._el_5,'\n        ',(null as any));
    this._text_9 = this.renderer.createText(this._el_3,'\n      ',(null as any));
    this._text_10 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_11 = import3.createRenderElement(this.renderer,this._el_1,'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_12 = this.renderer.createText(this._el_11,'\n        ',(null as any));
    this._el_13 = import3.createRenderElement(this.renderer,this._el_11,'a',new import3.InlineArray2(2,'href','javascript:void(0)'),(null as any));
    this._text_14 = this.renderer.createText(this._el_13,'\n          ',(null as any));
    this._el_15 = import3.createRenderElement(this.renderer,this._el_13,'i',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_16 = this.renderer.createText(this._el_13,'\n        ',(null as any));
    this._text_17 = this.renderer.createText(this._el_11,'\n      ',(null as any));
    this._text_18 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._anchor_19 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._vc_19 = new import9.ViewContainer(19,1,this,this._anchor_19);
    this._TemplateRef_19_5 = new import11.TemplateRef_(this,19,this._anchor_19);
    this._NgFor_19_6 = new import10.Wrapper_NgFor(this._vc_19.vcRef,this._TemplateRef_19_5,this.parentView.injectorGet(import12.IterableDiffers,this.parentIndex),this.ref);
    this._text_20 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_21 = import3.createRenderElement(this.renderer,this._el_1,'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_22 = this.renderer.createText(this._el_21,'\n        ',(null as any));
    this._el_23 = import3.createRenderElement(this.renderer,this._el_21,'a',new import3.InlineArray2(2,'href','javascript:void(0)'),(null as any));
    this._text_24 = this.renderer.createText(this._el_23,'\n          ',(null as any));
    this._el_25 = import3.createRenderElement(this.renderer,this._el_23,'i',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_26 = this.renderer.createText(this._el_23,'\n        ',(null as any));
    this._text_27 = this.renderer.createText(this._el_21,'\n      ',(null as any));
    this._text_28 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_29 = import3.createRenderElement(this.renderer,this._el_1,'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_30 = this.renderer.createText(this._el_29,'\n        ',(null as any));
    this._el_31 = import3.createRenderElement(this.renderer,this._el_29,'a',new import3.InlineArray2(2,'href','javascript:void(0)'),(null as any));
    this._text_32 = this.renderer.createText(this._el_31,'\n          ',(null as any));
    this._el_33 = import3.createRenderElement(this.renderer,this._el_31,'i',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_34 = this.renderer.createText(this._el_31,'\n        ',(null as any));
    this._text_35 = this.renderer.createText(this._el_29,'\n      ',(null as any));
    this._text_36 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._text_37 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_5,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_5));
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_13,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_13));
    var disposable_2:Function = import3.subscribeToRenderElement(this,this._el_23,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_23));
    var disposable_3:Function = import3.subscribeToRenderElement(this,this._el_31,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_31));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._text_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._el_15,
      this._text_16,
      this._text_17,
      this._text_18,
      this._anchor_19,
      this._text_20,
      this._el_21,
      this._text_22,
      this._el_23,
      this._text_24,
      this._el_25,
      this._text_26,
      this._text_27,
      this._text_28,
      this._el_29,
      this._text_30,
      this._el_31,
      this._text_32,
      this._el_33,
      this._text_34,
      this._text_35,
      this._text_36,
      this._text_37
    ]
    ),[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import11.TemplateRef) && (19 === requestNodeIndex))) { return this._TemplateRef_19_5; }
    if (((token === import13.NgFor) && (19 === requestNodeIndex))) { return this._NgFor_19_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_19_0_0:any = this.context.pages;
    this._NgFor_19_6.check_ngForOf(currVal_19_0_0,throwOnChange,false);
    this._NgFor_19_6.ngDoCheck(this,this._anchor_19,throwOnChange);
    this._vc_19.detectChangesInNestedViews(throwOnChange);
    const currVal_41:boolean = !this.context.canPrevious();
    if (import3.checkBinding(throwOnChange,this._expr_41,currVal_41)) {
      this.renderer.setElementClass(this._el_3,'disabled',currVal_41);
      this._expr_41 = currVal_41;
    }
    const currVal_42:any = import3.inlineInterpolate(1,'',this.context.pagerPreviousIcon,'');
    if (import3.checkBinding(throwOnChange,this._expr_42,currVal_42)) {
      this.renderer.setElementProperty(this._el_7,'className',currVal_42);
      this._expr_42 = currVal_42;
    }
    const currVal_43:boolean = !this.context.canPrevious();
    if (import3.checkBinding(throwOnChange,this._expr_43,currVal_43)) {
      this.renderer.setElementClass(this._el_11,'disabled',currVal_43);
      this._expr_43 = currVal_43;
    }
    const currVal_44:any = import3.inlineInterpolate(1,'',this.context.pagerLeftArrowIcon,'');
    if (import3.checkBinding(throwOnChange,this._expr_44,currVal_44)) {
      this.renderer.setElementProperty(this._el_15,'className',currVal_44);
      this._expr_44 = currVal_44;
    }
    const currVal_45:boolean = !this.context.canNext();
    if (import3.checkBinding(throwOnChange,this._expr_45,currVal_45)) {
      this.renderer.setElementClass(this._el_21,'disabled',currVal_45);
      this._expr_45 = currVal_45;
    }
    const currVal_46:any = import3.inlineInterpolate(1,'',this.context.pagerRightArrowIcon,'');
    if (import3.checkBinding(throwOnChange,this._expr_46,currVal_46)) {
      this.renderer.setElementProperty(this._el_25,'className',currVal_46);
      this._expr_46 = currVal_46;
    }
    const currVal_47:boolean = !this.context.canNext();
    if (import3.checkBinding(throwOnChange,this._expr_47,currVal_47)) {
      this.renderer.setElementClass(this._el_29,'disabled',currVal_47);
      this._expr_47 = currVal_47;
    }
    const currVal_48:any = import3.inlineInterpolate(1,'',this.context.pagerNextIcon,'');
    if (import3.checkBinding(throwOnChange,this._expr_48,currVal_48)) {
      this.renderer.setElementProperty(this._el_33,'className',currVal_48);
      this._expr_48 = currVal_48;
    }
  }
  destroyInternal():void {
    this._vc_19.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 19)) { return new View_DataTablePagerComponent1(this.viewUtils,this,19,this._anchor_19,this._vc_19); }
    return (null as any);
  }
  handleEvent_5(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.selectPage(1)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_13(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.prevPage()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_23(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.nextPage()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_31(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.selectPage(this.context.totalPages)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}