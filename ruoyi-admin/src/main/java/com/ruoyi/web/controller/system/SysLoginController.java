package com.ruoyi.web.controller.system;

import com.ruoyi.common.core.controller.BaseController;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.common.utils.ServletUtils;
import com.ruoyi.common.utils.StringUtils;
import com.ruoyi.framework.shiro.util.CustToken;
import com.ruoyi.system.service.IWechatApiService;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;

/**
 * 登录验证
 * 
 * @author ruoyi
 */
@Controller
public class SysLoginController extends BaseController
{
    @Autowired
    private IWechatApiService wechatApiService;

    @GetMapping("/login")
    public String login(HttpServletRequest request, HttpServletResponse response, Map<String,String> map)
    {
        String loginType= request.getParameter("loginType");
        if(StringUtils.isNotEmpty(loginType) && request.getParameter("loginType").equals("wechat")){
            String code= request.getParameter("code");
            //String state = request.getParameter("state");
            String username=wechatApiService.GetLoginNameWithWechatCode(code);
            //如果没有获取到登录名，说明验证失败，跳转登录页
            if(StringUtils.isEmpty(username)){
               return "login";
            }

            String password="";
            map.put("loginType","wechat");
            map.put("username",username);
            map.put("password",password);
            return "loginwechat";


        }

        // 如果是Ajax请求，返回Json字符串。
        if (ServletUtils.isAjaxRequest(request))
        {
            return ServletUtils.renderString(response, "{\"code\":\"1\",\"msg\":\"未登录或登录超时。请重新登录\"}");
        }
        return "login";
    }

    @PostMapping("/login")
    @ResponseBody
    public AjaxResult ajaxLogin(String username, String password, Boolean rememberMe,String loginType)
    {
       // UsernamePasswordToken token = new UsernamePasswordToken(username, password, rememberMe);
        CustToken token=new CustToken(username,password,rememberMe,loginType);
        Subject subject = SecurityUtils.getSubject();
        try
        {
            subject.login(token);
            return success();
        }
        catch (AuthenticationException e)
        {
            String msg = "用户或密码错误";
            if (StringUtils.isNotEmpty(e.getMessage()))
            {
                msg = e.getMessage();
            }
            return error(msg);
        }
    }

    @GetMapping("/unauth")
    public String unauth()
    {
        return "error/unauth";
    }
}
