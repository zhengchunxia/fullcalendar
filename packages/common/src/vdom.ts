
/// <reference types="@fullcalendar/core-vdom" />

if (typeof FullCalendarVDom === 'undefined') {
  throw new Error(
    'Please import the top-level fullcalendar lib before attempting to import a plugin.'
  )
}

export import Ref = FullCalendarVDom.Ref
export import RefObject = FullCalendarVDom.RefObject
export import ComponentType = FullCalendarVDom.ComponentType
export import VNode = FullCalendarVDom.VNode
export import Context = FullCalendarVDom.Context
export import Component = FullCalendarVDom.Component
export import ComponentChild = FullCalendarVDom.ComponentChild
export import ComponentChildren = FullCalendarVDom.ComponentChildren
export import createElement = FullCalendarVDom.createElement
export import render = FullCalendarVDom.render
export import createRef = FullCalendarVDom.createRef
export import Fragment = FullCalendarVDom.Fragment
export import createContext = FullCalendarVDom.createContext
export import VUIEvent = FullCalendarVDom.VUIEvent
