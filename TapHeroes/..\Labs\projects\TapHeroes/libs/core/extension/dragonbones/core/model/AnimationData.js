/**
 * Copyright (c) 2014,Egret-Labs.org
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Egret-Labs.org nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var dragonBones;
(function (dragonBones) {
    var AnimationData = (function (_super) {
        __extends(AnimationData, _super);
        function AnimationData() {
            _super.call(this);
            this.frameRate = 0;
            this.playTimes = 0;
            this.lastFrameDuration = 0;
            this.fadeTime = 0;
            this.playTimes = 0;
            this.autoTween = true;
            this.tweenEasing = NaN;
            this.hideTimelineNameMap = [];
            this._timelineList = [];
        }
        Object.defineProperty(AnimationData.prototype, "timelineList", {
            get: function () {
                return this._timelineList;
            },
            enumerable: true,
            configurable: true
        });
        AnimationData.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
            this.hideTimelineNameMap = null;
            for (var key in this._timelineList) {
                var timeline = this._timelineList[key];
                timeline.dispose();
            }
            this._timelineList = null;
        };
        AnimationData.prototype.getTimeline = function (timelineName) {
            var i = this._timelineList.length;
            while (i--) {
                if (this._timelineList[i].name == timelineName) {
                    return this._timelineList[i];
                }
            }
            return null;
        };
        AnimationData.prototype.addTimeline = function (timeline) {
            if (!timeline) {
                throw new Error();
            }
            if (this._timelineList.indexOf(timeline) < 0) {
                this._timelineList[this._timelineList.length] = timeline;
            }
        };
        return AnimationData;
    })(dragonBones.Timeline);
    dragonBones.AnimationData = AnimationData;
    AnimationData.prototype.__class__ = "dragonBones.AnimationData";
})(dragonBones || (dragonBones = {}));
