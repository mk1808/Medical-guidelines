package pl.iimo.med_guidelines.config;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import pl.iimo.med_guidelines.config.filters.SpaFallbackFilter;

@Configuration
public class WebConfig {

    @Bean
    public FilterRegistrationBean<SpaFallbackFilter> spaFallbackFilter() {
        FilterRegistrationBean<SpaFallbackFilter> registration = new FilterRegistrationBean<>();
        registration.setFilter(new SpaFallbackFilter());
        registration.addUrlPatterns("/*");
        registration.setName("spaFallbackFilter");
        registration.setOrder(Integer.MAX_VALUE - 10); 
        return registration;
    }
}