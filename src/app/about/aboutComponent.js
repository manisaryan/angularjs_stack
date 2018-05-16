"use strict"

angular.module('about')
.component('aboutComponent', {
  templateUrl:'./../../../templates/about.html',  
})
    .component('permissionTab', {
    controller: function MyTabsController() {
        var panes = this.panes = [
            {
                role: 'test1',
                selected:true,
                permission: [
                    {
                        actionKey: 'ax',
                        actions: [
                            { key: 'r1', value: true },
                            { key: 'r2', value: false },
                            {key: 'r3', value: true},
                            {key: 'r4', value: false},
                            {key: 'r5', value: true}
                        ]
                    },
                    {
                        actionKey: 'bx',
                        actions: [
                            { key: 'r1', value: false },
                            { key: 'r2', value: false },
                            {key: 'r3', value: false},
                            {key: 'r4', value: false},
                            {key: 'r5', value: false}
                        ]
                    },
                    {
                        actionKey: 'cx',
                        actions: [
                            { key: 'r1', value: false },
                            { key: 'r2', value: false },
                            {key: 'r3', value: false},
                            {key: 'r4', value: false},
                            {key: 'r5', value: false}
                        ]
                    }
                ]
            },
            {
                role: 'test2',
                permission: [
                {
                    actionKey: 'ax',
                    actions: [
                        { key: 'r1', value: false },
                        { key: 'r2', value: false },
                        {key: 'r3', value: false},
                        {key: 'r4', value: false},
                        {key: 'r5', value: false}
                    ]
                },
                {
                    actionKey: 'bx',
                    actions: [
                        { key: 'r1', value: false },
                        { key: 'r2', value: false },
                        {key: 'r3', value: false},
                        {key: 'r4', value: false},
                        {key: 'r5', value: false}
                    ]
                },
                {
                    actionKey: 'cx',
                    actions: [
                        { key: 'r1', value: false },
                        { key: 'r2', value: false },
                        {key: 'r3', value: false},
                        {key: 'r4', value: false},
                        {key: 'r5', value: false}
                    ]
                }
                ]
            },
            {
                role: 'test3',
                permission: [
                {
                    actionKey: 'ax',
                    actions: [
                        { key: 'r1', value: false },
                        { key: 'r2', value: false },
                        {key: 'r3', value: false},
                        {key: 'r4', value: false},
                        {key: 'r5', value: false}
                    ]
                },
                {
                    actionKey: 'bx',
                    actions: [
                        { key: 'r1', value: false },
                        { key: 'r2', value: false },
                        {key: 'r3', value: false},
                        {key: 'r4', value: false},
                        {key: 'r5', value: false}
                    ]
                },
                {
                    actionKey: 'cx',
                    actions: [
                        { key: 'r1', value: false },
                        { key: 'r2', value: false },
                        {key: 'r3', value: false},
                        {key: 'r4', value: false},
                        {key: 'r5', value: false}
                    ]
                }
                ]
            }
        ];
        this.print = function () { console.log(this.panes) };
        this.select = function (pane) {
            console.log(pane)
            angular.forEach(panes, function (pane) {
                pane.selected = false;
            });
            pane.selected = true;
        };
        this.addPane = function (pane) {
            if (panes.length === 0) {
                this.select(pane);
            }
            panes.push(pane);
        };
    },
    template: `<div>
                    <button ng-click="$ctrl.print()">PRINT ME</button>
                    <div class="tabs-left">
                        <ul class="nav nav-tabs" >
                            <li ng-repeat="pane in $ctrl.panes" ng-class="{active:pane.selected}" >
                                <a href="" ng-click="$ctrl.select(pane)">
                                    <div class="tabs-left">{{pane.role}}</div>
                                   
                                </a>   
                            </li>
                            
                        </ul>
                        <div class="tab-content" style="
                        top: 53px;
                        position: absolute;
                        left: 134px;
                        border: solid 1px black;
                    ">
                        <permission-pane role='pane.role' permission='pane.permission' selected='pane.selected' ng-repeat="pane in $ctrl.panes""></permission-pane>
                        </div>
                    </div>
                </div>`
    }).component('permissionPane', {
        bindings: {role: '<', permission: '=', selected:'='},
      controller: function () {
          
      },
      template: `
      <div ng-show="$ctrl.selected" class="tab-pane">
      <div class="row list-group">
      <div class="item  col-xs-2 col-lg-2 grid-group-item">Action</div>
        <div class="item  col-xs-2 col-lg-2 grid-group-item" ng-repeat=" actionlbl in  $ctrl.permission[0].actions">{{actionlbl.key}}</div>

      </div>
        <div class="row list-group" ng-repeat="perm in $ctrl.permission track by $index">
            <div class="item  col-xs-2 col-lg-2 grid-group-item">{{perm.actionKey}}</div>
            <permrow actions="perm.actions"></permrow>
        </div>
      `
    }).component('permrow', {
        bindings: { actions: '=' },
        controller: function () { },
        template: ` 
        <div class="item  col-xs-2 col-lg-2 grid-group-item" ng-repeat="action in $ctrl.actions">
            <input type="checkbox" ng-model="action.value" />  
        </div>
        `
    })
