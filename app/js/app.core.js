/**
 * Created by Nicklas.Vind on 20-11-2015.
 */
var APP = APP || {};
APP.Models = APP.Models || {};
APP.Views = APP.Views || {};
APP.Controllers = APP.Controllers || {};
(function ($,module, window) {
    var _models = module.Models;
    var _Views = module.Views;
    module.Models.Skill = function skill(skillType, skillCaption, skillLevel, skillImage) {
        this.type = skillType;
        this.level = skillLevel;
        this.image = skillImage;
        this.caption= skillCaption;

        var defaults = {
            type:this.type || 'default',
            src: this.image|| 'default.jpg',
            caption:this.caption || 'default image',
            viewed: false,
            level:0 || this.level
        };
        this.default = defaults;
        this.changeImage = function (image) {
            this.image = image;
        };
        return this;
    };
    module.Views.BuildSkillView = function (skillModel, ctrl) {
        var base = $('#skill-gallery'),
            skillEl = $('<div class="skill-element" style="float:left"></div>'),
            skillImage = $('<img class="skill-image" width="150" height="150" src=""/>');
        skillEl.on('click', function (event) {
            ctrl.handleEvent('click', skillModel);
        });
        var render = function () {
            skillImage.attr('src',skillModel.default.src);
            skillEl.html(skillModel.default.type + ' skill level : '+skillModel.default.level);
            skillEl.prepend(skillImage);
            base.append(skillEl);
        };
        return function () {
            render();
        };
    };
    module.Controllers.SkillController = function () {
        this.handleEvent = function (event, model) {
            if(event === 'click'){
                console.log(model.caption);
            }
        };
        return this;
    };
    module.CORE = (function () {
        var initialize = function () {
            var skillModel = new _models.Skill('JS','Javascript', 5, 'http://addyosmani.com/resources/essentialjsdesignpatterns/cover/cover.jpg');
            var skillModel2 = new _models.Skill('PHP','PHP - Open source and Backend code', 2, 'http://addyosmani.com/resources/essentialjsdesignpatterns/cover/cover.jpg');
            var skillController = new module.Controllers.SkillController();
            var newView = new _Views.BuildSkillView(skillModel,skillController);
            var newView2 = new _Views.BuildSkillView(skillModel2, skillController);
            newView();
            newView2();

        };
        return {
            init:initialize
        }
    });
})(jQuery,APP, window);